import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { logoutUser } from '../../actions/authActions';

import Mansion from "./mansion.png";
import LogOutIcon from "./logout.png";

class Navbar extends Component {
    // onLogoutClick = e => {
    //     e.preventDefault();
    //     this.props.logoutUser();  
    // }
    

    render() {
        
        return (
            <div className="navbar-fixed">
                <div className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/viewpage">
                        <img src={Mansion} width="30" height="30" className="d-inline-block align-top" alt="" />
                        Navbarstuff
                    </a>
                    <a className="navbar-brand" href="/">
                        <img src={LogOutIcon} width="30" height="30" className="d-inline-block align-top" alt="" onClick={this.onLogoutClick}/>
                        Logout
                    </a>
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