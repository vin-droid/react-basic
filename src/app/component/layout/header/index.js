import React from "react";
import {render} from "react-dom";
export const Header = (props) => {
    return(
        <header id="fh5co-header" role="banner">
		<div className="container">
			<div className="header-inner">
				<h1><i className="sl-icon-energy"></i><a href="index.html">Lesser</a></h1>
				<nav role="navigation">
					<ul>
						<li><a className="active" href="index.html">Home</a></li>
						<li><a href="blog.html">Blog</a></li>
						<li><a href="portfolio.html">Portfolio</a></li>
						<li><a href="services.html">Services</a></li>
						<li><a href="about.html">About</a></li>
						<li><a href="contact.html">Contact</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
    );
};
