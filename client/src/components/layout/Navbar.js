import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { logoutUser } from '../../actions/authActions';

import Mansion from "./mansion.png";
import LogOutIcon from "./logout.png";
import calendarIcon from "./calendar.png";

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
            <div class="container-fluid" id= "container1">
                <div className="navbar">
                <div className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/viewpage">
                        <img src={Mansion} width="30" height="30" className="d-inline-block align-top" alt="" />
                        Home
                    </a>
                    <a className="navbar-brand" href="/calendar">
                        <img src={calendarIcon} width="30" height="30" className="d-inline-block align-top" alt="" onClick={this.showCalendar}/>
                        Calendar
                    </a>
                    <a className="navbar-brand" href="/">
                        <img src={LogOutIcon} width="30" height="30" className="d-inline-block align-top" alt="" onClick={this.onLogoutClick}/>
                        Logout
                    </a>
                    
                    <h4>Cup o' Sugar</h4>

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