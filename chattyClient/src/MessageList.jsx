import React, {Component} from 'react';
import {MessageUser, MessageSystem} from './Messages.jsx';

class MessageList extends Component {
  render() {
    return(
          <MessageUser
          username={this.props.username}
          content={this.props.content} />
    )
  }
}

export default MessageList;
