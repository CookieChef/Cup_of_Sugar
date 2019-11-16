import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, TextArea} from "../Form/index";

//const db = require("./keys").mongoURI;


// import { listEvents } from './index';

class Event extends Component {
   
    state = {
        name: "",
        photo: "",
        place: "",
        synopsis: ""
    }
        
    
    

        handleFormSubmit = event => {
            event.preventDefault();
            console.log("ok");

            const newEvent = {
                name: this.state.name,
                photo: this.state.photo,
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
                <h3><u>Post an Item for Sale</u></h3>
                <h4>Earn some extra cash by selling your gently used items</h4>
                <form>
                    <Input name="name" value={this.state.name} placeholder="Item Name (required)" onChange= {this.handleInputChange}/>
                    <Input name="photo" value={this.state.name} placeholder="Photo (optional)" onChange= {this.handleInputChange}/>
                    <Input name="place" value={this.state.place} placeholder="Price (required)" onChange= {this.handleInputChange}/>
                    <TextArea name="synopsis" value={this.state.synopsis} placeholder="Description (optional)" onChange= {this.handleInputChange}/>
                    <button className="button-lg" onClick={this.handleFormSubmit}>
                        Post
                    </button>
                </form>
                
                    <h3>Items for Sale:</h3>


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