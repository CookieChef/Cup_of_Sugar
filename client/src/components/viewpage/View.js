import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
//import  Calendar  from '../calendar/calendar';



class ViewDisplay extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {


        return (

            <div className="container valign-wrapper" style={{ height: "75vh" }}>
                <div className="row">
                    <div className="col-fluid">
                        <h1>
                            you are in the page!!
                        </h1>

                    </div>
                    <div className="col-fluid">
                        <p>
                            “Mounting evidence suggests that there are social, health, and economic consequences to isolated and sedentary lifestyles. Unfortunately, the physical and social construct of the urban environment promotes isolation. Higher rates of television viewing, increased computer usage, concern about crime, little contact with neighbors and geographic isolation have created communities that are not interconnected. This isolation may result in a lack of social networks and diminished social capital, which can contribute to obesity, cardiovascular disease, mental health problems, and increased rates of mortality.”
    
                        <br></br>
                        <br></br>
                            Shobha Srinivasan, PhD, Liam R. O’Fallon, MA, and Allen Dearry, PhD
                        <br></br>
                        <br></br>
                            -American Public Health Association
                        </p>

                    </div>
                </div>
            </div>
        );
    }
}

ViewDisplay.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(ViewDisplay);