import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import allMsgs from '../data/messages.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMsgs: allMsgs,
      nameValue: '',
      messageValue: ''
    };
  }

  handleChangeName = (event) => {
    this.setState({ nameValue: event.target.value });
  }

  submitMessage = (event) => {
    if (event.key === 'Enter') {
      if (!this.state.nameValue) {
        this.state.nameValue = "Anonymous";
      }
      this.state.allMsgs.push({
        id: this.state.allMsgs.length + 1,
        username: this.state.nameValue,
        content: this.state.messageValue
      })
      this.setState({ messageValue: "" });
    }
  }

  messageChange = (event) => {
    this.setState({ messageValue: event.target.value })
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
    }, 3000);
  }

  render() {
    console.log(this.state.allMsgs);
    return (<div className="app-container">
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
      <main className="message-list">
        <MessageList messages={this.state.allMsgs} />
      </main>
      <ChatBar
        nameValue={this.state.nameValue}
        messageValue={this.state.messageValue}
        submitMessage={this.submitMessage}
        handleChangeName={this.handleChangeName}
        messageChange={this.messageChange}
      />
    </div>);
  }
}

export default App;
