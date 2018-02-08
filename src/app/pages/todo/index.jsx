import React, {Component} from "react";
import render from "react-dom";
import { Task } from "./task";

export class TodoApp extends Component {
    constructor(props){
        super();
        this.state = {
            taskNote: "",
            tasks: [],
            buttonText: "Add Task"
        }
    }

    updateTaskNote(event){
        this.setState({
            taskNote: event.target.value
        });
    }
    onKeyPressHandler(event){
        if(event.key == "Enter"){
        //    updateTaskNote(event); 
        console.log("submit key pressed");
        }
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
        tasks.push(this.state.taskNote);
        this.setState({
            taskNote: "",
            buttonText: "Add Task"
        });
        this.textInput.focus();
        console.log("New Task Successfully added.") ;
    }

    editTask(taskId){
        let tasks = this.state.tasks;
        let task = tasks.splice(taskId, 1);
        this.setState({
            tasks: tasks,
            taskNote: task,
            buttonText: "Update Task"
        });
        this.textInput.focus();
        console.log("Task Successfully updated.") ;
    }
    
    render(){
        let tasks = this.state.tasks.map((value, key) =>{
            return <Task key={key} taskNote={value}
                deleteTask={ () => this.deleteTask(key)} editTask={ () => this.editTask(key)}
            />
        } )

        return(
            <div id = "fh5co-contact-section" > 
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                            <h2>Todo Application</h2>
                            {tasks}
                           <input type="text"
                           ref={((input) => { this.textInput = input})}
                           value={this.state.taskNote}
                           onChange={event => this.updateTaskNote(event)}
                           onKeyPress={(event) => this.onKeyPressHandler(event)}
                           />
                           <button onClick={() => this.addTask(this) } className="btn btn-sm btn-primary"> {this.state.buttonText} </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}