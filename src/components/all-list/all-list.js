import React from "react";
import Action from "../action/action";
import './all-list.css';

export default class AllList extends React.Component {
  state = {
    tasks: this.props.tasks
  }

  UNSAFE_componentWillReceiveProps = (props) => this.setState({ tasks: props.tasks })

  render() {
    return (
      <div>
        {this.state.tasks.map(task =>
          <Action
            key={task.id}
            id={task.id}
            task={task} />
        )}
      </div>
    )
  }
}


