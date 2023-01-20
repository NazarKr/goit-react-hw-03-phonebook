import React, { Component } from 'react';
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
    name: '',
    number: ''
  }

  addContact = e => {
    e.preventDefault();
    // const contact = this.state;
    // console.log(e.target.elements.name.value);
    // console.log(e.target.elements.number.value);
    // console.log(contact);

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts]
    }))
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  
  render() {
    const { contacts } = this.state;

    return (
    <div>
      React homework template
      <h1>Phonebook</h1>

      <form autoComplete="off">
        <label htmlFor="name">
          Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
<br/>
          <label htmlFor="number">
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
<br/>
          <button
            type="submit"
            onSubmit={this.addContact}
          >Add contact</button>
      </form>

        <ContactsList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        />

      </div>
    )
  };
};
