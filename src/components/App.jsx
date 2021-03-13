import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import ContactForm from '../components/ContactForm';
import Filter from './Filter';
import ContactList from '../components/ContactList';

import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = newContact => {
    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContact = filter => {
    this.setState({ filter });
  };

  getContactsListToShow = () => {
    const { contacts, filter } = this.state;
    if (filter === '') {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toUpperCase().includes(filter.toUpperCase()),
      );
    }
  };

  checkUnique = name => {
    console.log('check unique');
    const { contacts } = this.state;
    if (
      contacts.find(
        contact => contact.name.toUpperCase() === name.toUpperCase(),
      )
    ) {
      alert(`${name} is already in contacts!`);
    } else {
      return true;
    }
  };

  render() {
    const contactsListToShow = this.getContactsListToShow();
    return (
      <div className={styles.app}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} onCheckUnique={this.checkUnique} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onSearch={this.filterContact}
          contactsListToShow={contactsListToShow}
        />
        <ContactList
          contacts={contactsListToShow}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
