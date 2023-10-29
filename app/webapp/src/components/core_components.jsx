/*
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  registerables
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-dragdata';
import zoom from 'chartjs-plugin-zoom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoom,
  ...registerables
);

const getData = (data, originalData) => {
  return {
    type: 'line',
    labels: Array.from(data.keys()),
    datasets: [
      {
        label: 'Updated',
        data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.3,
        pointHitRadius: 25,
        dragData: true,
      },
      {
        label: 'Original',
        data: originalData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.3,
        pointHitRadius: 25,
        dragData: false,
      },
    ]
  }
};


function OnboardingComponent({onSubmit}) {
  return (
      <div>
        <Directions>
          This component only renders if you have chosen to assign an onboarding
          qualification for your task. Click the button to move on to the main
          task.
        </Directions>
        <div
            style={{
              width: '100%',
              padding: '1.5rem 0',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
        >
          <button
              className="button is-success"
              style={{width: 'fit-content', marginBottom: '0.65rem'}}
              onClick={() => onSubmit({success: true})}
          >
            Move to Main Task
          </button>
          <button
              className="button is-danger"
              style={{width: 'fit-content'}}
              onClick={() => onSubmit({success: false})}
          >
            Get Blocked
          </button>
        </div>
      </div>
  );
}

function LoadingScreen() {
  return <Directions>Loading...</Directions>;
}

function Directions({children}) {
  return (
      <section className="hero is-light" data-cy="directions-container">
        <div className="hero-body">
          <div className="container">
            <p className="subtitle is-5">{children}</p>
          </div>
        </div>
      </section>
  );
}

function SimpleFrontend({taskData, isOnboarding, onSubmit, onError}) {
  const [answers, setAnswers] = React.useState([...taskData.data.value]);
  const [stagingAnswers, setStagingAnswers] = React.useState([...taskData.data.value]);

  const originalData = React.useRef([...taskData.data.value]);
  React.useEffect(() => {

  }, answers);

  const handleInputChange = (idx, event) => {
    stagingAnswers[idx] = event.target.value;
    if (!Number.isNaN(stagingAnswers[idx])) {
      answers[idx] = +stagingAnswers[idx];
      setAnswers([...answers]);
    } else {
      setStagingAnswers([...stagingAnswers]);
    }
  };

  const resetDataChange = (idx) => {
    answers[idx] = originalData.current[idx];
    stagingAnswers[idx] = originalData.current[idx];
    setAnswers([...answers]);
    setStagingAnswers([...stagingAnswers]);
  };

  const discardChanges = () => {
    Array.from(originalData.current.keys()).map((idx) => {
      answers[idx] = originalData.current[idx];
      stagingAnswers[idx] = originalData.current[idx];
    });
    setAnswers([...answers]);
    setStagingAnswers([...stagingAnswers]);
  };

  const modifiedData = React.useMemo(() => {
    return Array.from(originalData.current.keys()).filter((idx) => {
      if (originalData.current[idx] !== answers[idx]) {
        return true;
      }
      return false;
    });
  });

  const options = React.useMemo(() => {
    return {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Data',
        },
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true
            },
            mode: 'x',
          }
        },
        dragData: {
          showTooltip: true,
          round: 3,
          onDragStart: function(e, element) {
          },
          onDrag: function(e, datasetIndex, index, value) {
          },
          onDragEnd: function(e, datasetIndex, index, value) {
            answers[index] = value;
            stagingAnswers[index] = value;
            setStagingAnswers([...stagingAnswers]);
            setAnswers([...answers]);
          },
        }
      }
    };
  });

  return (
      <div style={{padding: '50px'}}>
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">This is sample task 123</h2>
          <div>
            <Line options={options} data={getData(answers, originalData.current)} />
            {
              modifiedData.length > 0 &&
              <table className="table w-full mt-3">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Original</th>
                    <th>Updated</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    modifiedData.map(idx => {
                      return <tr key={idx} className="hover">
                        <th className="align-middle">{idx + 1}</th>
                        <td className="align-middle">{originalData.current[idx]}</td>
                        <td className="align-middle">
                          <input type="text" className="input input-border input-sm w-full max-w-xs" value={stagingAnswers[idx]} 
                            onChange={(e) => {handleInputChange(idx, e)}} />
                        </td>
                        <td className="align-middle"><button className="btn btn-xs" onClick={() => {
                          resetDataChange(idx)
                        }}>Reset</button></td>
                      </tr>
                    })
                  }
                  
                </tbody>
              </table>
            }
          </div>
          <div className="flex gap-3 mt-5">
            <button className="btn btn-primary" onClick={() => {
              onSubmit(answers);
            }}>Submit</button>
            <button className="btn btn-outline" onClick={() => {
              discardChanges();
            }}>Discard Changes
            </button>
          </div>
        </div>
      </div>
  );
}

export {LoadingScreen, SimpleFrontend as BaseFrontend, OnboardingComponent};
