import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterInput } from './FilterInput/FilterInput';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  getUserContact = contact => {
    const existingContact = this.state.contacts.find(
      user => user.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (existingContact) {
      alert('Contact with the same name already exists!');
      return;
    }

    const id = nanoid();
    contact.id = id;
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <ContactForm getUserContact={this.getUserContact} />
        <FilterInput value={filter} onChange={this.handleFilterChange} />
        <ContactList
          userContact={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
