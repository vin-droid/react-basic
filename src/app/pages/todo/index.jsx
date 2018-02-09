import React, {Component} from "react";
import render from "react-dom";
import { Task } from "./task";
import UniqueId from "react-html-id";

export class TodoApp extends Component {
    constructor(props){
        super();
        UniqueId.enableUniqueIds(this);
        this.state = {
            tasks: [],
            taskNote: "",
            buttonText: "Add Task",
            enableEditTask: false
        }
    }

    updateTaskNote(event){
        this.setState({
            taskNote: event.target.value
        });
    }
    deleteTask(taskId){
        debugger;
        let tasks = this.state.tasks;
        tasks.splice(taskId, 1);
        this.setState({
            tasks: tasks
        });
        console.log("Task Successfully deleted.") ;
    }

    addTask(){
        if (this.state.taskNote === "") { return }
        let tasks = this.state.tasks;
        let task = {
            id: this.nextUniqueId(),
            taskNote: this.state.taskNote
        }
        tasks.push(task);
        this.setState({
            buttonText: "Add Task",
            taskNote: "",
        });
        this.textInput.focus();
        console.log(this.state.tasks);
        console.log("New Task Successfully added.") ;
    }

    editTask(taskId){
        let tasks = this.state.tasks;
        let task = tasks.splice(taskId, 1);
        this.setState({
            tasks: tasks,
            taskNote: task.taskNote,
            enableEditTask: true,
            buttonText: "Update Task"
        });
        this.textInput.focus();
        console.log("Task Successfully updated.") ;
    }
    
    updateTask(e, taskId) {
        let tasks = Object.assign({}, this.state.tasks);
        let index = this.state.tasks.findIndex((task) => {
            return task.id === taskId
        })
        let task = tasks[index]
        task.taskNote = this.state.taskNote;
        tasks[index] = task;

        this.setState({
            tasks: tasks,
            buttonText: "Update Task"
        });
        this.textInput.focus();
        console.log("Task Successfully updated.");
    }
    render(){
        let tasks = this.state.tasks.map((task, index) => {
            return <Task key={index} taskNote={task.taskNote}
                deleteTask={() => this.deleteTask(this, index)} editTask={() => this.editTask(index)} enableEditTask = {this.enableEditTask}
            />
        } );

        return(
            <div id = "fh5co-contact-section" > 
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                            <h2>Todo Application</h2>
                            <ul className="fh5co-social">
                            {tasks}
                            </ul>
                           <input type="text"
                            ref={((input) => { this.textInput = input})}
                            value={this.state.taskNote}
                            onChange={event => this.updateTaskNote(event)}
                           />
                           <button onClick={() => { this.state.enableEditTask ? this.updateTask(this) : this.addTask() }} className="btn btn-sm btn-primary"> {this.state.buttonText} </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}