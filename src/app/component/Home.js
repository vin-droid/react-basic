import React from "react"; 
import { render } from "react-dom";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props){
        super();
        this.state = {
            user: props.user,
            homeLink: props.initialLink

        };
    }
    onClickOlder(){
        console.log(this.state.user);
        this.setState({
            user: {
                
                age: this.state.user.age < 90 ?  this.state.user.age + 3  :  this.state.user.age 
            }
        });
    }
    onClickYounger(){
        console.log(this.state.user);
        this.setState({
            user: {
                age: this.state.user.age > 10 ?  this.state.user.age - 3  :  this.state.user.age    
            }
        });
    }
    onHomeLinkChange(){
        debugger;
        this.props.onLinkChange(this.state.homeLink);
    }
    inputHandler(event){
        this.setState({
            homeLink: event.target.value
        });
    }
    render(){
        return(
            <div className="container" style={{marginTop: 50 + 'px'}}>
                <h2></h2> Home component
                <div className="row">
                    <div className="col-md-4">
                        <p>A fixed navigation bar stays visible in a fixed position (top or bottom) independent of the page scroll.</p>
                        <p>A fixed navigation bar stays visible in a fixed position (top or bottom) independent of the page scroll.</p>    
                    </div>
                    <div className="col-md-4"> 
                        <p>A fixed navigation bar stays visible in a fixed position (top or bottom) independent of the page scroll.</p>
                        <p>A fixed navigation bar stays visible in a fixed position (top or bottom) independent of the page scroll.</p>
                    </div>
                    <div className="col-md-4"> 
                        <p>A fixed navigation bar stays visible in a fixed position (top or bottom) independent of the page scroll.</p>
                        <p>A fixed navigation bar stays visible in a fixed position (top or bottom) independent of the page scroll.</p> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <button onClick={() => this.onHomeLinkChange()}>changeLink</button>
                        <h2>User Info</h2>
                        <div>
                        <label>Name:</label>
                        <span>{this.props.user.name}</span>
                        </div>
                        <br></br>
                        <div>
                        <label>Age:</label>
                        <span>{this.state.user.age}</span>
                        <button onClick={() => this.onClickOlder()} className="btn btn-primary">make me older</button>
                        <button onClick={() => this.onClickYounger()} className="btn btn-primary">make me younger</button>
                        </div>
                        <br></br>
                        <div>
                        <label>City:</label>
                        <span>{this.props.user.city}</span>
                        </div>
                        <br></br>
                        <div>
                        <label>Hobies:</label>
                        <ol>{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}</ol>
                        </div>
                        <input value={this.state.homeLink} onChange={(event) => this.inputHandler(event)}></input>

                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    city: PropTypes.string,
    user: PropTypes.object,
    onLinkChange: PropTypes.func,
    initialLink: PropTypes.string
};