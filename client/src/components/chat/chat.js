import React, { Component } from 'react';
import ChatMessage from '../livechat/ChatMessage';
import Signup from '../livechat/Signup';
import ChatApp from '../livechat/ChatApp';
import { default as Chatkit } from '@pusher/chatkit-server';

const chatkit = new Chatkit({
    instanceLocator: "v1:us1:3cf04e03-208a-4882-a440-bd452360e0cc",
    key: "161f2ecb-65c9-46a9-ae3a-4e13d4671241:vm0d41rYs0osr6kIuAyBjYAgLXW20nJOQxoEjyCpfeg="
})

class ChatDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUsername: '',
            currentId: '',
            currentView: 'signup'
        }
        this.changeView = this.changeView.bind(this);
        this.createUser = this.createUser.bind(this);
    }
    createUser(username) {
        chatkit.createUser({
            id: username,
            name: username,
        })
        .then((currentUser) => {
            this.setState({
                currentUsername: username,
                currentId: username,
                currentView: 'chatApp'
            })
        }).catch((err) => {
                 if(err.status === 400) {
                this.setState({
                    currentUsername: username,
                    currentId: username,
                    currentView: 'chatApp'
                })
            } else {
                console.log(err.status);
            }
        });
    }
    changeView(view) {
        this.setState({
            currentView: view
        })
    }
    render() {
        let view = '';

        if (this.state.currentView === "ChatMessage") {
          view = <ChatMessage changeView={this.changeView} />
        } else if (this.state.currentView === "signup") {
          view = <Signup onSubmit={this.createUser} />
        } else if (this.state.currentView === "chatApp") {
          view = <ChatApp currentId={this.state.currentId} />
        }
        return (
            <div className="container">
                 {view}
            </div>
                
        );
    }
}




export default ChatDisplay;