import React from "react";
import { render } from "react-dom";
import { Home } from "./pages/home/index.jsx";
import { Header } from "./component/layout/header/index";
import { Footer } from "./component/layout/footer/index";
import { Root } from "./component/layout/root";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

class App extends React.Component {
    render(){
        return(
            <Root>
                <Home></Home>
            </Root>
        );
    }
}

render( <App /> , window.document.getElementById("app"));