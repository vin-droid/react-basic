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
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {IndexRoute, browserHistory, Switch } from 'react-router';

class App extends React.Component {
    render(){
        return(
            <Router>
                <Root>
                    <Route exact path={"/"} component={Home}/>
                    <Switch>
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