import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { logoutUser } from '../../actions/authActions';

import LogOutIcon from "./logout.png";
import sugar from "./sugar.png";
import fb from "./fb.png";
import twitter from "./twitter.png";
import instagram from "./instagram.jpg";


class Navbar extends Component {
    // onLogoutClick = e => {
    //     e.preventDefault();
    //     this.props.logoutUser();  
    // }

    showCalendar = e => {
        e.preventDefaault();
        return ('/calendar')
    }
    render() {

        return (
            <div class="container-fluid" id="container1">
                <div className="navbar">
                    <div className="navbar navbar-light bg-light">
                        {/* <div class="container" id= "container1"> */}
                        <div className="row">
                            {/* Cup o' Sugar Icon */}
                            <div className="col">
                                    <img src={sugar} id="sugar-bowl" width="200" height="200" className="d-inline-block align-top" alt="" />
                                <h3><u>Cup o' Sugar</u></h3>
                            </div>

                            {/* Quote */}
                            <div className="col" id="col-quote">
                                <br></br>
                                <p>"There is no power for greater change than a community discovering what it cares about" - Margaret J. Wheatley</p>

                                <h4 id="phone">800.784.5276</h4>

                                <h4>contact@cup'osugar.com</h4>

                            </div>

                            {/* Sign Up for Newsletter */}
                            <div className="col">
                                <form id="signup">
                                    <p>Subscribe to Our Newsletter</p>
                                    <label>
                                        Latest information delivered monthly
          <input type="text" />
                                    </label>
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>

                            {/* Follow Us Social Media Sites */}
                            <div className="col" id="colFollow"> <h1><u>Follow Us</u></h1>
                                <a className="navbar-brand" href="https://www.facebook.com/groups/orlandocommunitynetwork/?epa=SEARCH_BOX" target="_blank">
                                    <img src={fb} width="30" height="30" className="d-inline-block align-top" alt="" />
                                </a>
                                <a className="navbar-brand" href="https://twitter.com/citybeautiful" target="_blank">
                                    <img src={twitter} width="30" height="30" className="d-inline-block align-top" alt="" />
                                </a>
                                <a className="navbar-brand" href="https://www.instagram.com/explore/tags/orlandocommunity/" target="_blank">
                                    <img src={instagram} width="30" height="30" className="d-inline-block align-top" alt="" />
                                </a>

                                <br></br>
                                <br></br>

                                <a className="navbar-brand" href="/">
                                    <img src={LogOutIcon} width="30" height="30" className="d-inline-block align-top" alt="" onClick={this.onLogoutClick} />
                                    Logout
                    </a>
                            </div>
                        </div>
                        {/* Copyright div below */}
                        <div className="row">
                            <div className="col" id="copyright">
                                <p>Copyright &copy; 2019 All rights Reserved</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

export default Navbar;