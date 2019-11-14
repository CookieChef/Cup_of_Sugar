import React, { Component } from 'react';

class MessageList extends Component {


    render() {
        return (
            <div className="container">
                
                <ul>{this.props.messages.map((message, index) => (
                    <li key={index}>
                        <div>
                            <span>{message.senderId}</span>
                            <p>{message.text}</p>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        )
    }
}
export default MessageList