import React from "react";
import { render } from "react-dom";
import { Home } from "./component/Home";
import { Header } from "./component/Header";

class App extends React.Component {
    render() {
        var user = {
            name: "vineet",
            age: 24,
            city: "Delhi",
            hobbies: ["Playing Cricket", "Listening Songs", "Reading"]
        };
        var isUserShow = true;
        return ( <div>
            <Header/>
            <Home user={user} isUserShow={isUserShow}/>
            </div>
        );
    }
}

render( < App/> , window.document.getElementById("app"));