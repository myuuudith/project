import React, { Component } from "react";
// import { Card } from "react-bootstrap";
import Frontpage from "./Frontpage";

class Card extends Component {
    render(){
        return(
            <div className="container-fluid d-lex-justify content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Frontpage/>
                    </div>
                    <div className="col-md-4">
                    <Frontpage/>
                    </div>
                    
                    <div className="col-md-4">
                    <Frontpage/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;