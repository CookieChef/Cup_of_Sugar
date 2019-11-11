import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, TextArea} from "../Form/index";

//const db = require("./keys").mongoURI;


// import { listEvents } from './index';

class Event extends Component {
        
        
    
    

        handleFormSubmit = event => {
            event.preventDefault();
            console.log("ok");

            const newEvent = {
                name: this.state.name,
                place:this.state.place,
                synopsis: this.state.synopsis
            };
            console.log(newEvent);

            // db.Event.create({
            //     name: req.body.name,
            //     place: req.body.place,
            //     synopsis: req.body.synopsis
            // })
            
        };
        
    render() {
    
        return (
            <div className="container">
                <form>
                    <Input name="name" placeholder="Name (required)"/>
                    <Input name="place" placeholder="Place (required)"/>
                    <TextArea name="synopsis" placeholder="Synopsis (optional)"/>
                    <button className="button-lg" onClick={this.handleFormSubmit}>
                        Submit
                    </button>
                </form>
                
                    <h6>Upcoming events:</h6>


            </div>
            
        );
    }
}

Event.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

// const mapStateToProps = state => ({ auth: state.auth });

export default Event;