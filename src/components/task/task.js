import React from "react";
import CreateTask from "../create-task/create-task";
import AllList from "../all-list/all-list";
import TodoList from "../todo-list/todo-list";


export default class Task extends React.Component {
  state = {
    tasks: [],
    flag: false,
    addButtonDisplay: 'block'
  }

  UNSAFE_componentWillReceiveProps = (props) => this.setState({ tasks: props.tasks })

  handleTask = (task) => {
    let tasks = this.state.tasks
    let flag = false
    let addButtonDisplay = 'block'
    tasks.push(task)
    this.setState({
      tasks: tasks,
      flag: flag,
      addButtonDisplay: addButtonDisplay
    })
  }

  handleAddButton = (flag) => {
    let addButtonDisplay = 'none'
    this.setState({
      flag: flag,
      addButtonDisplay: addButtonDisplay
    })
  }
  render = () => (
    <div>
      <AllList tasks={this.state.tasks} />
      <CreateTask addButtonDisplay={this.state.addButtonDisplay} handleAddButton={this.handleAddButton} />
      {this.state.flag === true && <TodoList handleTask={this.handleTask} />}
    </div>
  )
}
