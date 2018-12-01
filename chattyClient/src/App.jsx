import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import MessageUser from './Messages.jsx';
const uuid = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMsgs: [],
      allNotifs: [],
      nameValue: 'Anonymous',
      messageValue: '',
      updatedNameValue: '',
      updatedMessageValue: ''
    };
  }

  submitMessage = (event) => {
    const id = uuid();
    if (event.key === 'Enter') {
      if (!this.state.messageValue) {
        alert('Message Field Cannot be Left Blank!');
      } else {
        if (this.ws.readyState === 1) {
          this.ws.send(JSON.stringify(
            {
              type: 'postMessage',
              id: id,
              username: this.state.nameValue,
              content: this.state.messageValue
            }
        ));
        }
        this.setState({
          updatedNameValue: this.state.nameValue,
          updatedMessageValue: this.state.messageValue,
          allMsgs: this.state.allMsgs.concat({
            type: 'postMessage',
            id: id,
            username: this.state.nameValue,
            content: this.state.messageValue
          })
        });
        this.setState({messageValue: ""});
      }
    }
  }

  submitNameChange = (event) => {
    const id = uuid();
    if (event.key === 'Enter') {
      this.setState({
        updatedNameValue: this.state.nameValue,
        updatedMessageValue: this.state.messageValue
      })
      const oldUsername = this.state.updatedNameValue;
      if (this.ws.readyState === 1) {
        this.ws.send(JSON.stringify({
          type: 'postNoification',
          id: id,
          oldUsername: oldUsername,
          newUsername: this.state.nameValue
        }))
      }
      this.setState({

      })
    }
  }

  nameChange = (event) => {
    this.setState({nameValue: event.target.value})
  }

  messageChange = (event) => {
    this.setState({messageValue: event.target.value})
  }

  componentDidMount() {
    this.ws = new WebSocket('ws://localhost:5000');
    this.ws.onmessage = (event) => {
      const messageData = JSON.parse(event.data);
      if (messageData.type === 'incomingMessage') {
        this.setState({
          allMsgs: this.state.allMsgs.concat(messageData)
        });
      }
      if (messageData.type === 'incomingNotification') {
        this.setState({
          allNotifs: this.state.allNotifs.concat(messageData)
        });
      }
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
        messages={this.state.allMsgs}
        notifications={this.state.allNotifs}
        username={this.state.updatedNameValue}
        content={this.state.updatedMessageValue}/>
      </main>
      <ChatBar
      nameValue={this.state.nameValue}
      messageValue={this.state.messageValue}
      submitMessage={this.submitMessage}
      submitNameChange={this.submitNameChange}
      nameChange={this.nameChange}
      messageChange={this.messageChange}/>
    </div>);
  }
}

export default App;
