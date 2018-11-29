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
        onChange={this.props.handleChangeName}
        value={this.props.nameValue}
        className="chatbar-username"
        placeholder="Your Name (Optional)" />

        <input
        onChange={this.props.messageChange}
        value={this.props.messageValue}
        onKeyDown={this.props.submitMessage}
        className="chatbar-message"
        placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}

export default ChatBar;
