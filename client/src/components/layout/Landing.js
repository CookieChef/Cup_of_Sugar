import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import community from "./community.jpg";
import friendship from "./friendship.jpg";
import togetherness from "./togetherness.jpg";
// import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [{community}, {friendship}, {togetherness}];

class Landing extends Component {
    render() {
        return (
            <div className="container valign-wrapper" style={{ height: "75vh" }}>
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            Welcome to Cup o' Sugar!
                        </h4>

                        <br />
                        <div className="col s6">
                            <Link to="/register" className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                            }}>
                                Register
                            </Link>
                        </div>
                        <div className="col s6">
                            <Link to="/login" className="btn btn-large btn-flat waves-effect white black-text" style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                            }}>
                                Login
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col s12 center-align">
                    
                    </div>

                </div>

            </div>
        );
    }
}


export default Landing;