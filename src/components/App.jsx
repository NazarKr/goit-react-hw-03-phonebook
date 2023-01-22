import React, { Component } from 'react';
import FilterContact from './FilterContacts/FilterContacts';
import FormicContact from './FormContact/FormicContact';
import ContactsList from './ContactList/ContactsList';
import { PhoneBookDiv, PhoneBookH1, PhoneBookH2 } from './App.styled'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const contactNames = this.getContactNames();

    // this.setState(({ contacts }) => ({
    //   contacts: [contact, ...contacts],
    // }))

    this.setState(({ contacts }) => {
      if (!contactNames.includes(contact.name)) {
        return {
          contacts: [contact, ...contacts],
        };
      } else {
        alert(`${contact.name} has already added in contacts`);
        return { contacts: [...contacts] };
      }
     });
  };

  getContactNames = () => {
    const { contacts } = this.state;
    return contacts.map(contact => contact.name);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <PhoneBookDiv>
        <PhoneBookH1>Phonebook</PhoneBookH1>
        <FormicContact onSubmit={this.addContact} />

        <PhoneBookH2>Contacts</PhoneBookH2>
        <FilterContact value={filter} onChange={this.changeFilter} />

        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />

      </PhoneBookDiv>
    )
  };
};

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
}