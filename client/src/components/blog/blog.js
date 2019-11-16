import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, TextArea} from "../Form/index";

//const db = require("./keys").mongoURI;


// import { listEvents } from './index';

class Event extends Component {
   
    state = {
        name: "",
        place: "",
        synopsis: ""
    }
        
    
    

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

        handleInputChange = event => {
            this.setState ({
                [event.target.name]:
                event.target.value
            });
        }
        
    render() {
    
        return (
            <div className="container">
                <h3><u>How's your day going today?</u></h3>
                <h4>Need to vent or clear your mind? Share your thoughts here</h4>
                <form>
                    <Input name="name" value={this.state.name} placeholder="Title (required)" onChange= {this.handleInputChange}/>
                    <Input name="place" value={this.state.place} placeholder="Date (required)" onChange= {this.handleInputChange}/>
                    <TextArea name="synopsis" value={this.state.synopsis} placeholder="Tell us all about it! (optional)" onChange= {this.handleInputChange}/>
                    <button className="button-lg" onClick={this.handleFormSubmit}>
                        Publish
                    </button>
                </form>
                
                    <h3>Your Posts:</h3>


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