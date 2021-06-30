import React from "react"

function MessageSent(props) {
    return (
        <li className="message sent">
            <div className="icon">{props.name[0]}</div>
            <span className="content">{props.content}</span>
        </li>
    )
}

export default MessageSent