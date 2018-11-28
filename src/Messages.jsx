import React, {Component} from 'react';

class MessageUser extends Component {
  render() {
    return (
      <div className="message">
        <span className="message-username">Holo: </span>
        <span className="message-content">I wont be impressed with technology until I can download food.</span>
      </div>
    )
  }
}

class MessageSystem extends Component {
  render() {
    return (
      <div className="message system">
        Anonymous1 changed their name to nomnom.
      </div>
    )
  }
}

export {
  MessageSystem,
  MessageUser
};
