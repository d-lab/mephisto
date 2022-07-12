#!/usr/bin/env python3

# Copyright (c) Facebook, Inc. and its affiliates.
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.


from typing import List
from rich import print
from mephisto.operations.registry import get_valid_provider_types
from mephisto.utils.rich import console, create_table
import rich_click as click  # type: ignore
import os
from rich_click import RichCommand, RichGroup
from rich.markdown import Markdown


# @click.group(cls=DefaultGroup, default="web", default_if_no_args=True)
@click.group(cls=RichGroup)
def cli():
    """[deep_sky_blue4]Bring your research ideas to life
    with powerful crowdsourcing tooling[/]
    """


click.rich_click.USE_RICH_MARKUP = True
click.rich_click.ERRORS_SUGGESTION = (
    "\nTry running the '--help' flag for more information."
)
click.rich_click.ERRORS_EPILOGUE = (
    "To find out more, visit https://mephisto.ai/docs/guides/quickstart/\n"
)


@cli.command("web")
def web():
    """Launch a local webserver with the Mephisto UI"""
    from mephisto.client.full.server import app

    app.run(debug=False)


@cli.command("config")
@click.argument("identifier", type=(str), default=None, required=False)
@click.argument("value", type=(str), default=None, required=False)
def config(identifier, value):
    from mephisto.operations.config_handler import (
        get_config_arg,
        add_config_arg,
        get_raw_config,
        DEFAULT_CONFIG_FILE,
    )

    if identifier is None and value is None:
        # If no args, show full config:
        click.echo(f"{DEFAULT_CONFIG_FILE}:\n")
        click.echo(get_raw_config())
        return

    if "." not in identifier:
        raise click.BadParameter(
            f"Identifier must be of format: <section>.<key>\nYou passed in: {identifier}"
        )
    [section, key] = identifier.split(".")

    if value is None:
        # Read mode:
        click.echo(get_config_arg(section, key))
    else:
        # Write mode:
        add_config_arg(section, key, value)
        click.echo(f"{identifier} succesfully updated to: {value}")


@cli.command("review")
@click.argument(
    "review_app_dir",
    type=click.Path(exists=True),
    default=os.path.join(os.path.dirname(__file__), "review/default-ui"),
)
@click.option("-p", "--port", type=(int), default=5000)
@click.option("-o", "--output", type=(str), default="")
@click.option("-a", "--assets", "assets_dir", type=(str), default=None)
@click.option("--stdout", "output_method", flag_value="stdout")
@click.option("--file", "output_method", flag_value="file", default=True)
@click.option("--csv-headers/--no-csv-headers", default=False)
@click.option("--json/--csv", default=False)
@click.option("--db", "database_task_name", type=(str), default=None)
@click.option("--all/--one-by-one", "all_data", default=False)
@click.option("-d", "--debug", type=(bool), default=False)
def review(
    review_app_dir,
    port,
    output,
    output_method,
    csv_headers,
    json,
    database_task_name,
    all_data,
    debug,
    assets_dir,
):
    """Launch a local review UI server. Reads in rows froms stdin and outputs to either a file or stdout."""
    from mephisto.client.review.review_server import run

    if output == "" and output_method == "file":
        raise click.UsageError(
            "You must specify an output file via --output=<filename>, unless the --stdout flag is set."
        )
    if database_task_name is not None:
        from mephisto.abstractions.databases.local_database import LocalMephistoDB
        from mephisto.tools.data_browser import DataBrowser as MephistoDataBrowser

        db = LocalMephistoDB()
        mephisto_data_browser = MephistoDataBrowser(db=db)
        name_list = mephisto_data_browser.get_task_name_list()
        if database_task_name not in name_list:
            raise click.BadParameter(
                f'The task name "{database_task_name}" did not exist in MephistoDB.\n\nPerhaps you meant one of these? {", ".join(name_list)}\n\nFlag usage: mephisto review --db [task_name]\n'
            )

    run(
        review_app_dir,
        port,
        output,
        csv_headers,
        json,
        database_task_name,
        all_data,
        debug,
        assets_dir,
    )


@cli.command("check")
def check():
    """Checks that mephisto is setup correctly"""
    from mephisto.abstractions.databases.local_database import LocalMephistoDB
    from mephisto.utils.testing import get_mock_requester

    try:
        db = LocalMephistoDB()
        get_mock_requester(db)
    except Exception as e:
        click.echo("Something went wrong.")
        click.echo(e)
        return
    click.echo("Mephisto seems to be set up correctly.")


@cli.command("requesters")
def list_requesters():
    """Lists all registered requesters"""
    from mephisto.abstractions.databases.local_database import LocalMephistoDB

    db = LocalMephistoDB()
    requesters = db.find_requesters()
    dict_requesters = [r.to_dict() for r in requesters]
    requester_keys = list(dict_requesters[0].keys())
    requester_table = create_table(requester_keys, "\n\n Requesters")
    for requester in dict_requesters:
        requester_vals = list(requester.values())
        requester_vals = [str(x) for x in requester_vals]
        requester_table.add_row(*requester_vals)
    console.print(requester_table)


@cli.command("register", context_settings={"ignore_unknown_options": True})
@click.argument("args", nargs=-1)
def register_provider(args):
    """Register a requester with a crowd provider"""
    if len(args) == 0:
        print(
            "\n[red]Usage: mephisto register <provider_type> arg1=value arg2=value[/red]"
        )
        print("\n[b]Valid Providers[/b]")
        provider_text = """"""
        for provider in get_valid_provider_types():
            provider_text += "\n* " + provider
        provider_text_markdown = Markdown(provider_text)
        console.print(provider_text_markdown)
        print("")
        return

    from mephisto.abstractions.databases.local_database import LocalMephistoDB
    from mephisto.operations.registry import get_crowd_provider_from_type
    from mephisto.operations.hydra_config import (
        parse_arg_dict,
        get_extra_argument_dicts,
    )

    provider_type, requester_args = args[0], args[1:]
    args_dict = dict(arg.split("=", 1) for arg in requester_args)

    crowd_provider = get_crowd_provider_from_type(provider_type)
    RequesterClass = crowd_provider.RequesterClass

    if len(requester_args) == 0:
        params = get_extra_argument_dicts(RequesterClass)
        for param in params:
            click.echo("\n" + param["desc"])

            first_arg_key = list(param["args"].keys())[0]
            requester_headers = list(param["args"][first_arg_key].keys())
            requester_table = create_table(requester_headers, "\n[b]Arguments[/b]")
            for arg in param["args"]:
                arg_values = list(param["args"][arg].values())
                arg_values = [str(x) for x in arg_values]
                requester_table.add_row(*arg_values)
            console.print(requester_table)
        return

    try:
        parsed_options = parse_arg_dict(RequesterClass, args_dict)
    except Exception as e:
        click.echo(str(e))

    if parsed_options.name is None:
        click.echo("No name was specified for the requester.")

    db = LocalMephistoDB()
    requesters = db.find_requesters(requester_name=parsed_options.name)
    if len(requesters) == 0:
        requester = RequesterClass.new(db, parsed_options.name)
    else:
        requester = requesters[0]
    try:
        requester.register(parsed_options)
        print("[green]Registered successfully.[/green]")
    except Exception as e:
        click.echo(str(e))


@cli.command("wut", cls=RichCommand, context_settings={"ignore_unknown_options": True})
@click.argument("args", nargs=-1)
def get_help_arguments(args):
    """Display information about hydra config properties"""

    from mephisto.operations.registry import (
        get_blueprint_from_type,
        get_crowd_provider_from_type,
        get_architect_from_type,
        get_valid_blueprint_types,
        get_valid_provider_types,
        get_valid_architect_types,
    )

    if len(args) == 0:
        print(
            "\n[red]Usage: mephisto wut <abstraction>[=<type>] [...specific args to check][/red]"
        )
        abstractions_table = create_table(
            ["Abstraction", "Description"], "\n\n[b]Abstractions[/b]"
        )
        abstractions_table.add_row(
            "blueprint",
            f"The blueprint determines the task content. \nValid blueprints types are [b]{get_valid_blueprint_types()}[/b]",
        )
        abstractions_table.add_row(
            "architect",
            f"The architect determines the server where a task is hosted. \nValid architects types are [b]{get_valid_architect_types()}[/b]",
        )
        abstractions_table.add_row(
            "requester",
            f"The requester is an account for a crowd provider. \nValid requester types types are [b]{get_valid_provider_types()}[/b]. \n"
            "\nUse `mephisto requesters` to see registered requesters, and `mephisto register <requester type>` to register.",
        )
        abstractions_table.add_row(
            "provider",
            f"The crowd provider determines the source of the crowd workers. \nValid provider types are [b]{get_valid_provider_types()}[/b]",
        )
        console.print(abstractions_table)
        return

    VALID_ABSTRACTIONS = ["blueprint", "architect", "requester", "provider", "task"]

    from mephisto.operations.hydra_config import (
        get_extra_argument_dicts,
        get_task_state_dicts,
    )
    from textwrap import wrap

    VALID_ABSTRACTIONS = ["blueprint", "architect", "requester", "provider", "task"]

    abstraction_equal_split = args[0].split("=", 1)
    abstraction = abstraction_equal_split[0]

    def print_out_valid_options(markdown_text: str, valid_options: List[str]) -> None:
        for valid_option in valid_options:
            markdown_text += "\n* " + valid_option
        console.print(Markdown(markdown_text))
        click.echo("")

    if abstraction not in VALID_ABSTRACTIONS:
        print(
            f"[red]Given abstraction {abstraction} not in valid abstractions {VALID_ABSTRACTIONS}][/red]"
        )
        return

    if abstraction == "task":
        from mephisto.data_model.task_run import TaskRun

        target_class = TaskRun
    else:
        if len(abstraction_equal_split) == 1:
            # querying about the general abstraction
            if abstraction == "blueprint":
                click.echo("The blueprint determines the task content.\n")
                valid_blueprints_text = """**Valid blueprints are:**"""
                print_out_valid_options(
                    valid_blueprints_text, get_valid_blueprint_types()
                )
                return
            elif abstraction == "architect":
                click.echo(
                    "The architect determines the server where a task is hosted.\n"
                )
                valid_architect_text = """**Valid architects are:**"""
                print_out_valid_options(
                    valid_architect_text, get_valid_architect_types()
                )
                return
            elif abstraction == "requester":
                click.echo(
                    f"The requester is an account for a crowd provider. \n"
                    "Use `mephisto requesters` to see registered requesters, and `mephisto register <requester type>` to register.\n"
                )
                valid_requester_text = """**Valid requesters are:**"""
                print_out_valid_options(
                    valid_requester_text, get_valid_provider_types()
                )
                return
            elif abstraction == "provider":
                # TODO: Use markdown list here
                click.echo(
                    "The crowd provider determines the source of the crowd workers.\n"
                )
                valid_provider_text = """**Valid providers are:**"""
                print_out_valid_options(valid_provider_text, get_valid_provider_types())
                return

        # There's a specific abstraction to check
        abstract_value = abstraction_equal_split[1]
        target_class = None
        valid = None
        if abstraction == "blueprint":
            try:
                target_class = get_blueprint_from_type(abstract_value)
            except:
                valid = get_valid_blueprint_types()
        elif abstraction == "architect":
            try:
                target_class = get_architect_from_type(abstract_value)
            except:
                valid = get_valid_architect_types()
        elif abstraction == "provider":
            try:
                target_class = get_crowd_provider_from_type(abstract_value)
            except:
                valid = get_valid_provider_types()
        elif abstraction == "requester":
            try:
                target_class = get_crowd_provider_from_type(
                    abstract_value
                ).RequesterClass
            except:
                valid = get_valid_provider_types()
        if valid is not None:
            print(f"\n[b]The valid types for {abstraction} are:[/b]")
            valid_options_text = """"""
            print_out_valid_options(valid_options_text, valid)
            print(f"[red]'{abstract_value}' not found[/red]\n")
            return

    arg_dict = get_extra_argument_dicts(target_class)[0]
    click.echo(arg_dict["desc"])
    checking_args = arg_dict["args"]
    if len(args) > 1:
        checking_args = {k: v for k, v in checking_args.items() if k in args[1:]}
    first_arg = list(checking_args.keys())[0]
    first_arg_keys = list(checking_args[first_arg].keys())
    args_table = create_table(first_arg_keys, "\n[b]Blueprint Arguments[/b]")
    for arg in checking_args:
        arg_keys = checking_args[arg].keys()
        if "required" in arg_keys and checking_args[arg]["required"] == True:
            checking_args[arg]["required"] = "[b]{requiredVal}[/b]".format(
                requiredVal=checking_args[arg]["required"]
            )
        arg_values = list(checking_args[arg].values())
        arg_values = [str(x) for x in arg_values]
        args_table.add_row(*arg_values)
    console.print(args_table)
    if abstraction == "blueprint":
        click.echo(
            f"\n\nAdditional SharedTaskState args from {target_class.SharedStateClass.__name__}, which may be configured in your run script"
        )
        state_args = get_task_state_dicts(target_class)[0]["args"]
        if len(args) > 1:
            state_args = {k: v for k, v in state_args.items() if k in args[1:]}
        first_state_arg = list(state_args.keys())[0]
        first_arg_keys = list(state_args[first_state_arg].keys())

        state_args_table = create_table(
            first_arg_keys, "\n[b]Additional Shared TaskState args[/b]"
        )
        for arg in state_args:
            arg_values = list(state_args[arg].values())
            arg_values = [str(x) for x in arg_values]
            state_args_table.add_row(*arg_values)
        console.print(state_args_table)


@cli.command("metrics", context_settings={"ignore_unknown_options": True})
@click.argument("args", nargs=-1)
def metrics_cli(args):
    from mephisto.utils.metrics import (
        launch_servers_and_wait,
        metrics_are_installed,
        run_install_script,
        METRICS_DIR,
        shutdown_prometheus_server,
        shutdown_grafana_server,
    )

    if len(args) == 0 or args[0] not in ["install", "view", "cleanup"]:
        click.echo(
            "Usage: mephisto metrics <install|view|cleanup>\n"
            f"install: Installs Prometheus and Grafana to {METRICS_DIR}\n"
            f"view: Launches a Prometheus and Grafana server, and shuts down on exit\n"
            f"cleanup: Shuts down Prometheus and Grafana resources that may have persisted"
        )
        return
    command = args[0]
    if command == "install":
        if metrics_are_installed():
            click.echo(f"Metrics are already installed! See {METRICS_DIR}")
            return
        run_install_script()
    elif command == "view":
        if not metrics_are_installed():
            click.echo(
                f"Metrics aren't installed! Use `mephisto metrics install` first."
            )
            return
        click.echo(f"Servers launching - use ctrl-C to shutdown")
        launch_servers_and_wait()
    else:  # command == 'cleanup':
        if not metrics_are_installed():
            click.echo(
                f"Metrics aren't installed! Use `mephisto metrics install` first."
            )
            return
        click.echo(f"Cleaning up existing servers if they exist")
        shutdown_prometheus_server()
        shutdown_grafana_server()


if __name__ == "__main__":
    cli()
