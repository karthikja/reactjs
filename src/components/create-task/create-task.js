import React from "react";
import './create-task.css';

export default class CreateTask extends React.Component {
  render = () => {
    let handleAddButton = this.props.handleAddButton
    return (
      <div className="addDiv" style={{ display: this.props.addButtonDisplay }}>
        <button className="addButton" onClick={() => handleAddButton(true)}> +</button>
        <span>Add New Task</span>
      </div>
    )
  }
}


