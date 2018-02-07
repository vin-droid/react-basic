import React, { Component } from "react";
import { render } from "react-dom";
import { Home } from "./pages/home/index.jsx";
import { Root } from "./component/layout/root";
import { Blog } from "./pages/blog/index.jsx";
import { About } from "./pages/about/index.jsx";
import { Contact } from "./pages/contact/index.jsx";
import { Portfolio } from "./pages/portfolio/index.jsx";
import { Services } from "./pages/services/index.jsx";
import { Match } from 'react-router'; 
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { IndexRoute, browserHistory, Switch, Redirect } from 'react-router';

class App extends Component {
    render(){
        return(
            <Router>
                <Root>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to='/home' />} />
                        <Route path="/blog" component={Blog}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/portfolio" component={Portfolio}/>
                        <Route path="/about" component={About}/>
                        <Route path="/services" component={Services}/>
                        <Route path="/home" component={Home} />
                    </Switch>
                </Root>
            </Router>
        );
    }
}

render( <App /> , window.document.getElementById("app"));