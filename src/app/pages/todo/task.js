import React, {Component} from "react";
import render from "react-dom";
import PropTypes from 'prop-types';


export class Task extends Component {

    render() {
        return (
            <div >
                {this.props.taskNote}
                <button onClick={this.props.editTask} className="btn btn-xs btn-info">Edit task</button>
                <button onClick={this.props.deleteTask} className="btn btn-xs btn-danger">Remove task</button>
            </div>
        );
    }
}

Task.propType = {
    taskId: PropTypes.number,
    taskNote : PropTypes.string,
    deleteTask: PropTypes.func,
    editTask: PropTypes.func
}




