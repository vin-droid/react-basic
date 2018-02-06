import React from "react";
import {render} from "react-dom";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
export const Header = (props) => {
    return(
        <header id="fh5co-header" role="banner">
		<div className="container">
			<div className="header-inner">
				<h1><i className="sl-icon-energy"></i><a href="index.html">Lesser</a></h1>
				<nav role="navigation">
					<Router>
					<ul>
						<li><Link className="active"  to="/">Home</Link></li>
						<li><Link  to="/blog">Blog</Link></li>
						<li><Link  to="/portfolio">Portfolio</Link></li>
						<li><Link  to="/services">Services</Link></li>
						<li><Link  to="/about">About</Link></li>
						<li><Link  to="/contact">Contact</Link></li>
					</ul>
					</Router>
				</nav>
			</div>
		</div>
	</header>
    );
};
