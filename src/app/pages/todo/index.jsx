import React, {Component} from "react";
import render from "react-dom";
import { Task } from "./task";
import UniqueId from "react-html-id";

export class TodoApp extends Component {
    constructor(props){
        super();
        UniqueId.enableUniqueIds(this);
        this.state = {
            tasks: [
                {
                    id: this.nextUniqueId(),
                    taskNote: "Task1"
                },
                {
                    id: this.nextUniqueId(),
                    taskNote: "Task2"
                },
                {
                    id: this.nextUniqueId(),
                    taskNote: "Task3"
                },
                {
                    id: this.nextUniqueId(),
                    taskNote: "Task4"
                }
            ]
        }
    }

    addTaskToList(task){
        let tasks = this.state.tasks;
        tasks.push(task);
        this.setState({
            tasks: tasks
        });
        this.textInput.value = "";
        this.textInput.focus();
    }

    updateTaskList(task){
        debugger;
        let tasks = Object.assign({}, this.state.tasks);
        let index = this.state.tasks.findIndex((t) => {
                return t.id === task.id
            })
            debugger;
        tasks[index] = task;
        this.setState({
            tasks: tasks
        });
        debugger;
        console.log("Task Successfully updated.");
    }

    createTask(e){
        e.preventDefault();
        let task = {
            id: this.nextUniqueId(),
            taskNote:  this.textInput.value
        }
        this.addTaskToList(task)
    }

    deleteTask(taskId) {
        let tasks = this.state.tasks;
        tasks.splice(taskId, 1);
        this.setState({tasks: tasks});
        console.log("Task Successfully deleted.");
    }

    render(){
        let tasks = this.state.tasks.map((task, index) => {
            return <Task    key={task.id} 
                            taskId={task.id} 
                            taskNote={task.taskNote}
                            deleteTask={() => this.deleteTask(task.id)}
            />
        } );

        return(
            <div id = "fh5co-contact-section" > 
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                            <h2>Todo Application</h2>
                            <form onSubmit={(e) => this.createTask(e)}>
                            <input type="text"
                                ref={((input) => { this.textInput = input})}                            />
                            <button type="submit" className="btn btn-sm btn-primary"> Create Task </button>
                            </form>
                            <table>
                                <tbody>
                                {tasks}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}