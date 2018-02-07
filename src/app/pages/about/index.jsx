import React from "react";
import {render} from "react-dom";

export class About extends React.Component{
    render(){
        return (
            <div id="fh5co-about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                            <h2>About</h2>
                            <p>
                                <span>Created with
                                <i className="sl-icon-heart"></i>
                                    by the fine folks at
                                <a href="http://freehtml5.co">FreeHTML5.co</a>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="about-inner">
                                        <img className="img-responsive" src="UI/images/image_1.jpg" alt="About" />
                                        <h3>History</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                                            right at the coast of the Semantics, a large language ocean. Far far away,
                                            behind the word mountains, far from the countries Vokalia and Consonantia, there
                                            live the blind texts. Separated they live in Bookmarksgrove right at the coast
                                            of the Semantics, a large language ocean. Far far away, behind the word
                                            mountains, far from the countries Vokalia and Consonantia, there live the blind
                                            texts. Separated they live in Bookmarksgrove right at the coast of the
                                            Semantics, a large language ocean.
                                        </p>
                                        <blockquote>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                                Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                                                right at the coast of the Semantics, a large language ocean.
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <aside className="sidebar">
                                <div className="row">
                                    <div className="col-md-12 side">
                                        <h3>Categories</h3>
                                        <ul>
                                            <li>
                                                <i className="icon-check"></i>
                                                <a href="#">Web Design</a>
                                            </li>
                                            <li>
                                                <i className="icon-check"></i>
                                                <a href="#">Branding &amp; Identity</a>
                                            </li>
                                            <li>
                                                <i className="icon-check"></i>
                                                <a href="#">Free HTML5</a>
                                            </li>
                                            <li>
                                                <i className="icon-check"></i>
                                                <a href="#">HandCrafted Templates</a>
                                            </li>
                                            <li>
                                                <i className="icon-check"></i>
                                                <a href="#">Free Bootstrap Template</a>
                                            </li>
                                            <li>
                                                <i className="icon-check"></i>
                                                <a href="#">Free HTML5 Template</a>
                                            </li>
                                            <li>
                                                <i className="icon-check"></i>
                                                <a href="#">Free HTML5 &amp; CSS3 Template</a>
                                            </li>
                                            <li>
                                                <i className="icon-check"></i>
                                                <a href="#">HandCrafted Templates</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-12 side">
                                        <h3>Paragraph</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
