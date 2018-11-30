import React, {Component} from 'react';

function MessageUser(props){
  if (props.username && props.content) {
    return (
      <div className="message">
        <span className="message-username">{props.username}: </span>
        <span className="message-content">{props.content}</span>
      </div>
    )
  } else {
    return null;
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
