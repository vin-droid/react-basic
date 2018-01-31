import React from "react"; 
import { render } from "react-dom";
export class Header extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="nav-header">
                        <a href="#" className="navbar-brand">Name</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active">Home</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </nav>
        );
    }
}