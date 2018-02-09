import React, {Component} from "react";
import render from "react-dom";
import PropTypes from 'prop-types';


export class Task extends Component {

    render() {
        return (
            <li id={this.props.key}>
               <span> {this.props.taskNote}</span>
                <button onClick={this.props.editTask} className="btn btn-xs btn-info">Edit task</button>
                <button onClick={this.props.deleteTask} className="btn btn-xs btn-danger">Remove task</button>
            </li>
        );
    }
}

Task.propType = {
    enableEditTask: PropTypes.bool,
    taskNote : PropTypes.string,
    deleteTask: PropTypes.func,
    editTask: PropTypes.func
}




