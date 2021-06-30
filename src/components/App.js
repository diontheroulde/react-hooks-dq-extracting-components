import React from "react";

import { messages, contacts } from "../data";

import ContactList from "./ContactList.js"
import MessageList from "./MessageList"

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <ContactList />
      <MessageList />
      
    </div>
  );
}

export default App;
