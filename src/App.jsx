import React, {Component} from 'react';
import {MessageList} from './MessageList.jsx';
import {ChatBar} from './ChatBar.jsx';
import allMsgs from '../data/messages.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="app-container">
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
      <MessageList messages={allMsgs} />
      <ChatBar currentUser="Bob123" />
    </div>);
  }
}

export default App;
