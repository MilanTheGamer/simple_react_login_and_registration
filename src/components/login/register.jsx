import React, {Component} from "react";

import loginImg from "../login/login.svg";
import "./style.scss";

class Register extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
                <div className="base-container" ref={this.props.containerReference}>
                    <div className="header">Register</div>
                    <div className="content">
                        <div className="image">
                            <img src={loginImg}></img>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="Username"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="Email"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="Password"></input>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="button" className="btn" >Register</button>
                    </div>
                </div>
            );
    };
        
};
 
export default Register;

    