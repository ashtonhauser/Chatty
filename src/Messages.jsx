import React, {Component} from 'react';

class MessageUser extends Component {
  render() {
    return (
      <div className="message">
        <span className="message-username">{this.props.username}: </span>
        <span className="message-content">{this.props.content}</span>
      </div>
    )
  }
}

/* class MessageSystem extends Component {
  render() {
    return (
      <div className="message system">
        Anonymous1 changed their name to nomnom.
      </div>
    )
  }
} */

export {
  MessageUser
};