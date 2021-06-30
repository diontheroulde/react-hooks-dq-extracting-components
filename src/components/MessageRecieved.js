import React from "react"

function MessageRecieved(props) {
    return (
        <li className="message received">
              <div className="icon">{props.name[0]}</div>
              <span className="content">{props.content}</span>
        </li>
    )
}

export default MessageRecieved
