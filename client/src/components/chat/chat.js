import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import Chatkit from '@pusher/chatkit-client';
import MessageList from './messageList';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'


//const jwt = require('jsonwebtoken');

class Chat extends Component {
   
    constructor () {
        super()
        this.state = {
            messages: []
        }
    }

    componentDidMount() {

        const chatManager = new ChatManager ({
            instanceLocator: 'v1:us1:3cf04e03-208a-4882-a440-bd452360e0cc',
            userId: "Sara",
            tokenProvider: new Chatkit.TokenProvider ({
                
            url:'jsonwebtoken'
            }),
        });
    chatManager
        .connect ()
        .then(SET_CURRENT_USER => {
            return SET_CURRENT_USER.subscribeToRoom ({
                roomId: '2a28ca3d-2a2a-447c-adfb-ca75e8af3a5e',
                messageLimit: 100,
                hooks: {
                    onNewMessage: message => {
                        this.setState({
                            messages: [...this.state.messages, message]
                        })
                    }
                }
            })
        })
        .then(currentRoom => {})
        .catch(error => console.log(error))
            
        }
        
    render() {


        return (
            <div>
                {/* <UsernameForm/> */}
                <h1>Chat</h1>
                <MessageList messages={this.state.messages}/>
            </div>
        );
    }
}

Chat.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Chat);

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';




// class Chat extends Component {


//     render () {
//         const { user } = this.props.auth;
//         return <div>
//             <p> your user name is:{user.name} </p>
//         </div>
//     }
// }
//     Chat.propTypes = {
//         logoutUser: PropTypes.func.isRequired,
//         auth: PropTypes.object.isRequired
// }

// export default Chat;