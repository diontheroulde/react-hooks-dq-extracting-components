import React from "react"

import { contacts } from "../data"

import Contacts from "./Contacts"

function ContactList() {
    return (
        <nav>
        <h2>Contacts</h2>
        <ul className="contacts">
          {contacts.map(contact => {
            return <Contacts id = {contact.id} name = {contact.name} />
          })}
        </ul>
      </nav>
    )
}

export default ContactList