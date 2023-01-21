import React, { Component } from 'react';
import FormicContact from './FormContact/FormicContact';
import ContactsList from './ContactList/ContactsList';
// import { nanoid } from 'nanoid'

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: ''
  }

  // addContact = e => { 
  //   // const contact = this.state;
  //   // console.log(contact);
  //   this.setState(({ contacts }) => ({
  //     contacts: [contact, ...contacts]
  //   }))
  // };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmit = data => {
    console.log(data)
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>

        <FormicContact onSubmit={this.formSubmit} />
        <ContactsList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        />

      </div>
    )
  };
};
