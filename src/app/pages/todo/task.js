import React, {Component} from "react";
import render from "react-dom";
import PropTypes from 'prop-types';


export class Task extends Component {
    constructor(props){
        super();
        this.state = {
            enableEditTask: false,
            taskNote: props.taskNote,
            id: props.taskId
        }
    }

    editTask(e){
       this.setState({
           enableEditTask: true
       });
    }

    updateTask(e){
        this.setState({
           enableEditTask: false,
           taskNote: this.refs.taskInput.value
       });
      console.log("Task Successfully updated.");  
    }

    cancel() {
        this.setState({
           enableEditTask: false
       });
        console.log("Task Successfully canceled.");
    }

    render() {
        let data = ""
        if (this.state.enableEditTask) {
            data =  <input defaultValue={this.state.taskNote } ref="taskInput"/>
        } else {
            data =  <span>{this.state.taskNote}</span> 
        }
        return (
            <tr>
                <td id={this.state.id}>
                <span>{data}</span>
                </td>
                <td>
                    <button onClick={ (event) => {this.state.enableEditTask ?  this.updateTask(event) : this.editTask(event)}} className="btn btn-xs btn-info"> {this.state.enableEditTask ? "Update" : "Edit"} task</button>
                </td>
                <td>
                    <button onClick={ () => {this.state.enableEditTask ? this.cancel() :  this.props.deleteTask(this.state.id) }} className="btn btn-xs btn-danger">{this.state.enableEditTask ? "Cancel" : "Delete"}</button>
                </td>
            </tr>
        );
    }
}

Task.propType = {
    taskId: PropTypes.number,
    deleteTask: PropTypes.func
}




