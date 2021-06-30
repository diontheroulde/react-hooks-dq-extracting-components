import React from "react"

import { messages } from "../data"

import MessageRecieved from "./MessageRecieved"
import MessageSent from "./MessageSent"
import MessageInput from "./MessageInput"

function MessageList() {
    return (
        <main>
        <h2>Messages</h2>
        <section className="messages">
          <ul>
            {messages.map(message => {
                return (
                    message.type === "sent" ? <MessageSent name = {message.name} content = {message.content} /> : <MessageRecieved name = {message.name} content = {message.content} />
                )
            })}
          </ul>
        </section>
        <MessageInput />
      </main>
    )
}

export default MessageList