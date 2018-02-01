import React from "react";
import { render } from "react-dom";
import { Home } from "./component/Home";
import { Header } from "./component/Header";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            homeLink: "Home"
        };
    }

    onLinkChange (newName){
        this.setState({
            homeLink: newName
        });
    }

    render() {
        var user = {
            name: "vineet",
            age: 24,
            city: "Delhi",
            hobbies: ["Playing Cricket", "Listening Songs", "Reading"]
        };
        var isUserShow = true;
        return ( <div>
            <Header homeLink={this.state.homeLink}/>
            <Home user={user} isUserShow={isUserShow} changeLink={this.onLinkChange.bind(this)}/>
            </div>
        );
    }
}

render( < App/> , window.document.getElementById("app"));