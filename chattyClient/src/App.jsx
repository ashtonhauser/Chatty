import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import MessageUser from './Messages.jsx'
const uuid = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMsgs: [],
      nameValue: '',
      messageValue: '',
      updatedNameValue: '',
      updatedMessageValue: ''
    };
  }

  submitMessage = (event) => {
    if (event.key === 'Enter') {
      if (!this.state.nameValue) {
        this.state.nameValue = "Anonymous";
      }
      if (!this.state.messageValue) {
        alert('Message Field Cannot be Left Blank!');
      } else {
        if (this.ws.readyState === 1) {
          this.ws.send(JSON.stringify({
            id: uuid,
            username: this.state.nameValue,
            content: this.state.messageValue
          }));

        };
        //display message
        this.setState({
          updatedNameValue: this.state.nameValue,
          updatedMessageValue: this.state.messageValue
        })
        this.setState({ messageValue: "" });
      }
    }
  }

  nameChange = (event) => {
    this.setState({ nameValue: event.target.value})
  }

  messageChange = (event) => {
    this.setState({ messageValue: event.target.value })
  }

  componentDidMount() {
    this.ws = new WebSocket('ws://localhost:5000');
    this.ws.onmessage = (event) => {
      const messageData = JSON.parse(event.data);
      this.setState({ allMsgs: this.state.allMsgs.concat(messageData) });
  }

    console.log("componentDidMount <App />");
  }

  render() {
    return (<div className="app-container">
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
      <main className="message-container">
        <MessageList
          username={this.state.updatedNameValue}
          content={this.state.updatedMessageValue}
        />
      </main>
      <ChatBar
        nameValue={this.state.nameValue}
        messageValue={this.state.messageValue}
        submitMessage={this.submitMessage}
        nameChange={this.nameChange}
        messageChange={this.messageChange}
      />
    </div>);
  }
}

export default App;
