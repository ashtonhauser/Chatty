import React, {Component} from 'react';
import {MessageUser, MessageSystem} from './Messages.jsx';

class MessageList extends Component {
  render() {
    return(
        <main className="messages-container">
        {this.props.messages.map((message) => {
          return <MessageUser key={message.id} username={message.username}
          content={message.content}/>
        })}
        </main>
    )
  }
}

export default MessageList;
