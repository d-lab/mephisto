/*
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Bowser from 'bowser';
import {
  BaseFrontend,
  StaticFrontend,
  setCustomComponents,
} from './components/core_components.jsx';
import BuiltCustomComponents from 'custom_built_frontend';
import CustomComponents from './components/custom.jsx';
import SocketHandler from './components/socket_handler.jsx';
import {
  MTurkSubmitForm,
  allDoneCallback,
} from './components/mturk_submit_form.jsx';
import 'fetch';
import $ from 'jquery';

var UseCustomComponents = {};
if (Object.keys(BuiltCustomComponents).length) {
  UseCustomComponents = BuiltCustomComponents;
} else if (Object.keys(CustomComponents).length) {
  UseCustomComponents = CustomComponents;
}

setCustomComponents(UseCustomComponents);

/* global
  getWorkerName, getAssignmentId, getWorkerRegistrationInfo,
  getAgentRegistration, handleSubmitToProvider
*/

/* ================= Utility functions ================= */

// Determine if the browser is a mobile phone
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

// Sends a request to get the hit_config
function getTaskConfig(callback_function) {
  $.ajax({
    url: '/get_task_config',
    timeout: 3000, // in milliseconds
  }).then(function(data) {
    if (callback_function) {
      callback_function(data);
    }
  });
}

// Sees if the current browser supports WebSockets, using *bowser*
const browser = Bowser.getParser(window.navigator.userAgent);
function doesSupportWebsockets() {
  return browser.satisfies({
    "internet explorer": ">=10",
    chrome: ">=16",
    firefox: ">=11",
    opera: ">=12.1",
    safari: '>=7',
    'android browser': '>=3'
  });
}

function postData(url = '', data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
}

function postProviderRequest(endpoint, data, callback_function) {
  var url = new URL(window.location.origin + endpoint);
  postData(url, {provider_data: data})
    .then(res => res.json())
    .then(function(data) {
      if (callback_function) {
        callback_function(data);
      }
    });
}

function requestAgent(mephisto_worker_id, callback_function) {
  postProviderRequest('/request_agent', getAgentRegistration(mephisto_worker_id), callback_function);
}

function registerWorker(callback_function) {
  postProviderRequest('/register_worker', getWorkerRegistrationInfo(), callback_function);
}

// Sends a request to get the initial task data
function getInitTaskData(mephisto_worker_id, agent_id, callback_function) {
  postProviderRequest(
    '/initial_task_data',
    {'mephisto_worker_id': mephisto_worker_id, 'agent_id': agent_id},
    callback_function,
  );
}

function postCompleteTask(agent_id, complete_data, callback_function) {
  postProviderRequest(
    '/submit_task',
    {'USED_AGENT_ID': agent_id, 'final_data': complete_data},
    callback_function,
  )
}


/* ================= Agent State Constants ================= */

// TODO move to shared file
const STATUS_NONE = 'none';
const STATUS_ONBOARDING = 'onboarding';
const STATUS_WAITING = 'waiting';
const STATUS_IN_TASK = 'in task';
const STATUS_DONE = 'done';
const STATUS_DISCONNECT = 'disconnect';
const STATUS_PARTNER_DISCONNECT = 'partner disconnect';
const STATUS_STATIC = 'static';
const STATUS_EXPIRED = 'expired';
const STATUS_RETURNED = 'returned';
const STATUS_MEPHISTO_DISCONNECT = 'mephisto disconnect';

/* ================= Application Components ================= */

/* global
  FRAME_HEIGHT, HIT_ID, ASSIGNMENT_ID, WORKER_ID, TEMPLATE_TYPE, BLOCK_MOBILE,
  DISPLAY_FEEDBACK, IS_COVER_PAGE
*/

// props: mephisto_worker_id, agent_id, task_config, onboarding = False
class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    
    // TODO move constants to props rather than state
    this.state = {
      initialization_status: 'initializing',
      socket_status: null,  // TODO improve this functionality for disconnects
      agent_state: STATUS_NONE,
      done_text: null,
      chat_state: 'idle', // idle, text_input, inactive, done
      task_done: false,
      messages: [],
      task_data: {},
      volume: 1, // min volume is 0, max is 1, TODO pull from local-storage?
    };
  }

  handleAgentStatusChange(agent_status, done_text) {
    if (agent_status != this.state.agent_status) {
      // Handle required state changes on a case-by-case basis.
      if ([STATUS_DONE, STATUS_PARTNER_DISCONNECT].includes(agent_status)) {
        this.setState({ task_done: true, chat_state: 'done' });
      } else if ([STATUS_DISCONNECT, STATUS_RETURNED, STATUS_EXPIRED,
                  STATUS_MEPHISTO_DISCONNECT].includes(agent_status)) {
        this.setState({ chat_state: 'inactive' });
      } else if (agent_status == STATUS_WAITING) {
        this.setState({ messages: [], chat_state: 'waiting' });
      }
      this.setState({ agent_status: agent_status, done_text: done_text});
    }
  }

  playNotifSound() {
    let audio = new Audio('./notif.mp3');
    audio.volume = this.state.volume;
    audio.play();
  }

  handleIncomingTaskData(task_data) {
    this.setState({task_data: task_data});
  }

  componentDidMount() {
    getInitTaskData(this.props.mephisto_worker_id, this.props.agent_id, data => this.handleIncomingTaskData(data));
  }

  onMessageSend(text, data, callback, is_system) {
    if (text === '') {
      return;
    }
    this.socket_handler.handleQueueMessage(text, data, callback, is_system);
  }

  render() {
    let socket_handler = null;
    socket_handler = (
      <SocketHandler
        onNewMessage={new_message => {
          this.state.messages.push(new_message);
          this.setState({ messages: this.state.messages });
        }}
        onNewTaskData={new_task_data =>
          this.setState({
            task_data: Object.assign(this.state.task_data, new_task_data),
          })
        }
        onRequestMessage={() => this.setState({ chat_state: 'text_input' })}
        onForceDone={() => postCompleteTask(
          this.props.agent_id, 
          this.state.messages,
          () => handleSubmitToProvider({}),
        )}
        onSuccessfulSend={() =>
          this.setState({
            chat_state: 'waiting',
            messages: this.state.messages,
          })
        }
        onAgentStatusChange={
          (agent_status, done_text) => this.handleAgentStatusChange(agent_status, done_text)
        }
        onConfirmInit={() => this.setState({ initialization_status: 'done' })}
        onFailInit={() => this.setState({ initialization_status: 'failed' })}
        onStatusChange={status => this.setState({ socket_status: status })}
        agent_id={this.props.agent_id}
        initialization_status={this.state.initialization_status}
        agent_state={this.state.agent_state}
        messages={this.state.messages}
        task_done={this.state.task_done}
        ref={m => {this.socket_handler = m}}
        playNotifSound={() => this.playNotifSound()}
      />
    );
    return (
      <div>
        <BaseFrontend
          task_done={this.state.task_done}
          done_text={this.state.done_text}
          chat_state={this.state.chat_state}
          onMessageSend={(m, d, c, s) => this.onMessageSend(m, d, c, s)}
          socket_status={this.state.socket_status}
          messages={this.state.messages}
          agent_id={this.state.agent_id}
          task_description={this.state.task_description}
          initialization_status={this.state.initialization_status}
          is_cover_page={this.state.is_cover_page}
          frame_height={this.state.frame_height}
          task_data={this.state.task_data}
          world_state={this.state.agent_state}
          v_id={this.state.agent_id}
          allDoneCallback={() => allDoneCallback(
            this.state.agent_id,
            this.state.assignment_id,
            this.state.worker_id,
            [],
          )}
          volume={this.state.volume}
          onVolumeChange={v => this.setState({ volume: v })}
          display_feedback={DISPLAY_FEEDBACK}
        />
        <MTurkSubmitForm
          assignment_id={this.state.assignment_id}
          hit_id={this.state.hit_id}
          worker_id={this.state.worker_id}
          mturk_submit_url={this.state.mturk_submit_url}
        />
        {socket_handler}
      </div>
    );
  }
}

/* task_config:
task_description:
frame_height:
has_preview:
block_mobile:
more eventually?
*/

class WorkerBlockedView  extends React.Component {
  // TODO actually have views for these block reasons
  render() {
    if (this.props.blocked_reason == 'no_mobile') {
      return <div>
          <h1>
            Sorry, this task cannot be completed on mobile devices.
            Please use a computer.
          </h1>
        </div>;
    } else if (this.props.blocked_reason == 'no_websockets') {

    } else {

    }
    return <div> {this.props.blocked_reason} </div> ;
  }
}

class TaskPreviewView extends React.Component {
  render() {
    return <div> {this.props.task_config.task_description} </div>;
  }
}

class MainApp extends React.Component {
  constructor(props) {
    super(props);

    let provider_worker_id = getWorkerName();
    let assignment_id = getAssignmentId();
    let is_preview = true;
    if (provider_worker_id !== null && assignment_id !== null) {
      is_preview = false;
    } 

    let blocked_reason = null;
    if (!doesSupportWebsockets()) {
      blocked_reason = 'no_websockets';
    }

    this.state = {
      provider_worker_id: provider_worker_id,
      mephisto_worker_id: null,
      agent_id: null,
      assignment_id: assignment_id,
      task_config: null,
      is_preview: is_preview,
      preview_html: null,
      blocked_reason: blocked_reason,
    };
  }

  handleIncomingPreviewHTML(html) {
    this.setState({preview_html: html});
  }

  afterAgentRegistration(agent_data_packet) {
    console.log(agent_data_packet);
    let agent_id = agent_data_packet.data.agent_id;
    this.setState({agent_id: agent_id});
    if (agent_id == 'onboarding') {
      // TODO handle the onboarding case
    } else if (agent_id == null) {
      // TODO  handle  the no  task case
      console.log('agent_id returned was null')
      this.setState({blocked_reason: 'null_agent_id'});
    }
  }

  afterWorkerRegistration(worker_data_packet) {
    let mephisto_worker_id = worker_data_packet.data.worker_id;
    this.setState({mephisto_worker_id: mephisto_worker_id});
    if (mephisto_worker_id !== null) {
      requestAgent(mephisto_worker_id, data => this.afterAgentRegistration(data))
    } else {
      // TODO handle banned/blocked worker ids
      this.setState({blocked_reason: 'null_worker_id'});
      console.log('worker_id returned was null')
    }
  }

  handleIncomingTaskConfig(task_config) {
    let provider_worker_id = this.state.provider_worker_id;
    let assignment_id = this.state.assignment_id;
    if (task_config.block_mobile && isMobile()) {
      this.setState({blocked_reason: "no_mobile"})
    } else if (assignment_id != null && provider_worker_id != null) {
      registerWorker(data => this.afterWorkerRegistration(data));
    } else if (task_config.has_preview) {
      requestTaskHMTL('preview.html', data => this.handleIncomingPreviewHTML(data));
    }
    this.setState({task_config: task_config})
  }

  componentDidMount() {
    getHitConfig(data => this.handleIncomingTaskConfig(data));
  }

  handleSubmit(event) {
    event.preventDefault();
    const form_data = new FormData(event.target);
    let obj_data = {}
    form_data.forEach((value, key) => {obj_data[key] = value});
    console.log(obj_data);
    postCompleteTask(this.state.agent_id, obj_data);
    handleSubmitToProvider(obj_data);
  }

  render() {
    if (this.state.blocked_reason !== null) {
      return <WorkerBlockedView task_config={this.state.task_config} blocked_reason={this.state.blocked_reason} />;
    } else if (this.state.is_preview) {
      if (this.state.task_config === null) {
        return <div>Loading...</div>;
      } else if (this.state.task_config.has_preview) {
        if (this.state.preview_html === null) {
          return <div>Loading...</div>;
        } else {
          return <div
            ref={elem => {this.raw_html_elem = elem}}
            dangerouslySetInnerHTML={{__html: this.state.preview_html}}
          />;
        }
      } else {
        return <TaskPreviewView task_config={this.state.task_config} />;
      }
    } else if (this.state.agent_id === null) {
      return <div>Loading...</div>;
    } else if (this.state.agent_id == 'onboarding') {
      // TODO handle the onboarding case
      return <div> Not yet Implemented </div>;
    } else {
      return <ChatApp 
        task_config={this.state.task_config} 
        agent_id={this.state.agent_id} 
        mephisto_worker_id={this.state.mephisto_worker_id}
      />;
    }
  }
} 

ReactDOM.render(<MainApp />, document.getElementById('app'));
