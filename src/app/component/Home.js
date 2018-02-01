import React from "react"; 
import { render } from "react-dom";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props){
        super();
        this.state = {
            user: props.user
        };
    }
    onClickOlder(){
        console.log(this.state.user);
        this.setState({
            user: {
                name: this.state.user.name,
                city: this.state.user.city,
                age: this.state.user.age + 3,
                hobbies: this.state.user.hobbies
            }
        })
        console.log(this.state.user);
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
                        <h2>User Info</h2>
                        <div>
                        <label>Name:</label>
                        <span>{this.state.user.name}</span>
                        </div>
                        <br></br>
                        <div>
                        <label>Age:</label>
                        <span>{this.state.user.age}</span>
                        <button onClick={() => this.onClickOlder()} className="btn btn-primary">make me older</button>
                        </div>
                        <br></br>
                        <div>
                        <label>City:</label>
                        <span>{this.state.user.city}</span>
                        </div>
                        <br></br>
                        <div>
                        <label>Hobies:</label>
                        <ol>{this.state.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}</ol>
                        </div>
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
    user: PropTypes.object
};