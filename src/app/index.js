import React from "react";
import { render } from "react-dom";
import { Home } from "./pages/home/index.jsx";
import { Header } from "./component/layout/header/index";
import { Footer } from "./component/layout/footer/index";
import { Root } from "./component/layout/root";
import { Blog } from "./pages/blog/index.jsx";
import { About } from "./pages/about/index.jsx";
import { Contact } from "./pages/contact/index.jsx";
import { Portfolio } from "./pages/portfolio/index.jsx";
import { Services } from "./pages/services/index.jsx";
import { BrowserRouter } from "react-router-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

class App extends React.Component {
    render(){
        return(
       
            <Router history={hashHistory}>
                <Route path="/" component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path="blog" component={Blog}>
                    </Route>
                    <Route path="contact" component={Contact}>
                    </Route>
                    <Route path="portfolio" component={Portfolio}>
                    </Route>
                    <Route path="about" component={About}>
                    </Route>
                    <Route path="services" component={Services}>
                    </Route>
                    <Route path="home" component={Home}>
                    </Route>

                </Route>
            </Router>
        );
    }
}

render( <App /> , window.document.getElementById("app"));