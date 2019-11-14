import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import MessageList from './MessageList';
import Input from './Input';

class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            currentRoom: { users: [] },
            messages: [],
            users: []
        }
        this.addMessage = this.addMessage.bind(this);
    }

    componentDidMount() {
        const chatManager = new ChatManager({
            instanceLocator: "v1:us1:3cf04e03-208a-4882-a440-bd452360e0cc",
            userId: this.props.currentId,
            tokenProvider: new TokenProvider({
                url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3cf04e03-208a-4882-a440-bd452360e0cc/token"
            })
        })
        chatManager
        .connect()
        .then(currentUser => {
            this.setState({ currentUser: currentUser })
            return currentUser.subscribeToRoom({
                roomId: "2a28ca3d-2a2a-447c-adfb-ca75e8af3a5e",
                messageLimit: 100,
                hooks: {
                    onMessage: message => {
                        this.setState({
                            messages: [...this.state.messages, message],
                        })
                    },
                }
            })
        })
        .then(currentRoom => {
            this.setState({
                currentRoom,
                users: currentRoom.userIds
            })
        })
        .catch(error => console.log(error))
    }
    addMessage(text) {
        this.state.currentUser.sendMessage({
            text,
            roomId: this.state.currentRoom.id
        })
        .catch(error => console.error('error', error));
    }

    render() {
        return (
            <div>
                <h2 className="header">Let's Talk</h2>
                <MessageList messages={this.state.messages} />
                <Input className="input-field" onSubmit={this.addMessage} />
            </div>
        )
    }
}

export default ChatApp;