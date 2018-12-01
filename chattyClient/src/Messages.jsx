import React, {Component} from 'react';

function MessageUser(props) {
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

 function MessageSystem(props) {
   if (props.oldUsername && props.newUsername) {
     return (
       <div className="message system">
         <span>**** {props.oldUsername} changed their name to {props.newUsername} ****</span>
       </div>
     )
   } else {
     return null;
   }
}

export {
  MessageUser,
  MessageSystem
};
