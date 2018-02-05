import {React} from "react";
import {render} from "react-dom";

export class Blog extends React.Component {
    render() {
        return (
< div id = "fh5co-main-services-section" > <div className="container">
    <div className="row">
        <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
            <h2>Our Services</h2>
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
                <div className="col-md-12 services-inner">
                    <span>
                        <i className="sl-icon-graph"></i>
                    </span>
                    <div className="desc">
                        <h3>Finance Dashboard</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                            right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                </div>
                <div className="col-md-12 services-inner">
                    <span>
                        <i className="sl-icon-heart"></i>
                    </span>
                    <div className="desc">
                        <h3>Made with Love</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                            right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                </div>
                <div className="col-md-12 services-inner">
                    <span>
                        <i className="sl-icon-key"></i>
                    </span>
                    <div className="desc">
                        <h3>Help &amp; Support</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                            right at the coast of the Semantics, a large language ocean.</p>
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
</div> </div>
        );
    }
}