import React, { Component } from 'react';
import FilterContact from './FilterContacts/FilterContacts';
import FormicContact from './FormContact/FormicContact';
import ContactsList from './ContactList/ContactsList';
import { PhoneBookDiv, PhoneBookH1, PhoneBookH2 } from './App.styled'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid'
import initialContacts from './Data/Contact.json'
import Notification from './Notification/Notification'

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: ''
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };

  componentDidUpdate(prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.state.contacts.find(contact => contact.name === name)) {
      toast.error(`Sorry, ${name} is already in contacts.`);
      return;
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
    toast.success('Contact successfully added!');
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
    toast.info('Contact was deleted');
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

        {visibleContacts.length === 0 && <Notification message="There is no Contacts" />}
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          transition={Zoom}
          draggable
          Transition="zoom" />
      </PhoneBookDiv>
    )
  };
};
