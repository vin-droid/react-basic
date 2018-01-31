import React from "react"; 
import { render } from "react-dom";

export class Home extends React.Component {

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
            </div>
        );
    }
}