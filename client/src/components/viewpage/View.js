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
                    <div className="col">
                        <h1>
                            you are in the page!!
                        </h1>
                       
                    </div>
                    <div className="col">
                        <p>
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
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