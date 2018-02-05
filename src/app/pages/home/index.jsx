import React from "react"; 
import { render } from "react-dom";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props){
        super();
        this.state = {
        };
    }
    render(){
        return(
            <div>
            < div id = "fh5co-intro-section" > 
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <h2>Lesser is a creative agency that love to create functional website</h2>
                        </div>
                    </div>
                </div> 
            </div>
            <div id="fh5co-featured-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            < a href = "#" className = "featured-grid divStyle6" >
                                <div className = "desc" > 
                                    <h3>Work with love</h3> < span > Web Design </span>
                                </div > 
                            </a> 
                        </div>
                        <div className="col-md-6">
< a href = "#" className = "featured-grid featured-grid-2 divStyle2" >
                                < div className = "desc" > <h3>Music Lover</h3> < span > Application </span>
                                </div >
                            </a> 
                            <div className = "row" >
                                <div className="col-md-6">
                                    <a href="#" className="featured-grid featured-grid-2 divStyle3" >
                                    <div className="desc">
                                        <h3>Travel</h3>
                                        <span>Illustration</span>
                                    </div>
                                    </a>
                                </div> 
                                < div className = "col-md-6" > 
                                <a href="#" className="featured-grid featured-grid-2 divStyle8" >
                                    <div className="desc">
                                        <h3>Captured</h3>
                                        <span>Photo</span>
                                    </div>
                                </a>
                                </div>
                            </div > 
                        </div> 
                    </div>
                </div > 
            </div>
            <div id = "fh5co-services-section" > 
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                            <h2>Our Awesome Services</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                Consonantia, there live the blind texts.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 services-inner text-center">
                            <span>
                                <i className="sl-icon-graph"></i>
                            </span>
                            <h3>Finance Dashboard</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                                right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                        <div className="col-md-4 services-inner text-center">
                            <span>
                                <i className="sl-icon-heart"></i>
                            </span>
                            <h3>Made with Love</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                                right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                        <div className="col-md-4 services-inner text-center">
                            <span>
                                <i className="sl-icon-key"></i>
                            </span>
                            <h3>Help &amp; Support</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                                right at the coast of the Semantics, a large language ocean.</p>
                        </div>

                    </div>
                </div> 
            </div>
            <div id="fh5co-blog-section" className="fh5co-grey-bg-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                            <h2>Our Recent Blog</h2 > 
                            <p>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p> 
                        </div>
                    </div > 
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="blog-inner">
                            <a href="#">
                                <img className="img-responsive" src="UI/images/image_4.jpg" alt="Blog" />
                            </a>
                                <div className="desc">
                                    <h3>
                                        <a href="#">New iPhone 6 Released</a>
                                    </h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                                        right at the coast of the Semantics, a large language ocean.</p>
                                    <p>
                                        <a href="#" className="btn btn-primary btn-outline with-arrow">Read More
                                            <i className="icon-arrow-right"></i>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="blog-inner">
                                <a href="#">
                                    <img className="img-responsive" src="UI/images/image_5.jpg" alt="Blog"/>
                                </a>
                                <div className="desc">
                                        <h3>
                                            <a href="#">Start your day with a beautiful appearance</a>
                                        </h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                                            right at the coast of the Semantics, a large language ocean.</p>
                                        <p>
                                            <a href="#" className="btn btn-primary btn-outline with-arrow">Read More
                                                <i className="icon-arrow-right"></i>
                                            </a>
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="blog-inner">
                                <a href="#">
                                    <img className="img-responsive" src="UI/images/image_6.jpg" alt="Blog"/>
                                </a>
                                <div className="desc">
                                    <h3>
                                        <a href="#">Bookmarksgrove right</a>
                                    </h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                                        right at the coast of the Semantics, a large language ocean.</p>
                                    <p>
                                        <a href="#" className="btn btn-primary btn-outline with-arrow">Read More
                                            <i className="icon-arrow-right"></i>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="fh5co-client-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                            <h2>Our Happy Clients</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                Consonantia, there live the blind texts.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="testimony">
                                <span className="quote">
                                    <i className="icon-quote-right"></i>
                                </span>
                                <blockquote>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                                        right at the coast of the Semantics, a large language ocean.</p>
                                    <span>Athan Smith, via
                                        <a href="#" className="icon-twitter twitter-color"></a>
                                    </span>
                                </blockquote>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="testimony">
                                <span className="quote">
                                    <i className="icon-quote-right"></i>
                                </span>
                                <blockquote>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                                        right at the coast of the Semantics, a large language ocean.</p>
                                    <span>Athan Smith, via
                                    <a href="#" className="icon-google-plus googleplus-color"></a>
                                    </span>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}