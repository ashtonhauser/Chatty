import React, {Component} from 'react';
import {data} from '../data/messages.js'

class ChatBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <footer className="chatbar">
        <input
        onKeyDown={this.props.submitNameChange}
        onChange={this.props.nameChange}
        value={this.props.nameValue}
        className="chatbar-username"
        placeholder="Type name then enter" />

        <input
        onChange={this.props.messageChange}
        value={this.props.messageValue}
        onKeyDown={this.props.submitMessage}
        className="chatbar-message"
        placeholder="Type a message and hit enter" />
      </footer>
    )
  }
}

export default ChatBar;
