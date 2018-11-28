import React, {Component} from 'react';
import {MessageUser, MessageSystem} from './Messages.jsx';

class MessageList extends Component {
  render() {
    return(
      <main className="message-list">
        <MessageUser />
        <MessageSystem />
      </main>
    )
  }
}

export {MessageList};
