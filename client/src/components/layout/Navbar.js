import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { logoutUser } from '../../actions/authActions';

import Mansion from "./mansion.png";
import LogOutIcon from "./logout.png";
import calendarIcon from "./calendar.png";
import chatIcon from "./conversation.png";
import sugar from "./sugar.png";
import idea from "./idea.png";
import shopping from "./shopping-bag.png";
import blog from "./blog.png";
import sos from "./sos.png";

class Navbar extends Component {
    // onLogoutClick = e => {
    //     e.preventDefault();
    //     this.props.logoutUser();  
    // }
    
showCalendar = e => {
    e.preventDefaault();
    return ('/calendar')
}
showChat = e => {
    e.preventDefaault();
    return ('/chat')
}
    render() {
        
        return (
            <div class="container-fluid" id= "container1">
                <div className="navbar">
                <div className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/viewpage">
                        <img src={Mansion} width="40" height="40" className="d-inline-block align-top" alt="" />
                        Home
                    </a>

                    <a className="navbar-brand" href="/profile">
                        <img src={idea} width="40" height="40" className="d-inline-block align-top" alt="" onClick={this.onLogoutClick}/>
                        Profile
                    </a>

                    <a className="navbar-brand" href="/calendar">
                        <img src={calendarIcon} width="40" height="40" className="d-inline-block align-top" alt="" onClick={this.showCalendar}/>
                        Calendar
                    </a>

                    <a className="navbar-brand" href="/chat">
                        <img src={chatIcon} width="40" height="40" className="d-inline-block align-top" alt="" onClick={this.showChat}/>
                        Chat
                    </a>

                    

                    
                    <h1><u>Cup o' Sugar</u></h1>
                        <img src={sugar} width="80" height="80" className="d-inline-block align-top" alt=""/>

                    <a className="navbar-brand" href="/item">
                        <img src={shopping} width="40" height="40" className="d-inline-block align-top" alt="" onClick={this.onLogoutClick}/>
                        Sell Items
                    </a>

                    <a className="navbar-brand" href="/blog">
                        <img src={blog} width="40" height="40" className="d-inline-block align-top" alt="" onClick={this.onLogoutClick}/>
                        Blog
                    </a>

                    <a className="navbar-brand" href="/sos">
                        <img src={sos} width="40" height="40" className="d-inline-block align-top" alt="" onClick={this.onLogoutClick}/>
                        Help
                    </a>


                    <a className="navbar-brand" href="/">
                        <img src={LogOutIcon} width="40" height="40" className="d-inline-block align-top" alt="" onClick={this.onLogoutClick}/>
                        Logout
                    </a>



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