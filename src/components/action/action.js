import React    from "react";
import moment from 'moment';
import './action.css';


export default class Action extends React.Component {
  state = {
    id: this.props.id,
    title: this.props.task.title,
    dueDate: this.props.task.dueDate,
    dueTime: this.props.task.dueTime,
  }
  UNSAFE_componentWillReceiveProps = (props) => this.setState({
    id: props.task.id,
    text: props.task.title,
    dueDate: props.task.dueDate,
    dueTime: props.task.dueTime,
  })
  render() {
    return (
      <div className="action">
        <div className='title'>{this.state.title}</div>
        {moment(this.state.dueDate).format('ddd, MMM DD, YYYY. ')}
        {this.state.dueTime}
    </div >
)
}
}

