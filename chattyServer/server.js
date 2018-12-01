const express = require('express');
const WebSocket = require('ws');
const SocketServer = WebSocket.Server;

// Set the port to 3001
const PORT = 5000;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'socketserver', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('open', () => console.log('Websocket Open'));
  ws.on('message', function(data) {
    const parsedData = JSON.parse(data);
    if (parsedData.type = 'postMessage') {
      parsedData.type = 'incomingMessage';
      const stringifiedMessageData = JSON.stringify(parsedData);
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(stringifiedMessageData);
        }
      });
    }
    if (parsedData.type = 'postNotification') {
      parsedData.type = 'incomingNotification'
      const stringifiedNotificationData = JSON.stringify(parsedData)
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(stringifiedNotificationData);
        }
      })
    }
  })

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});
