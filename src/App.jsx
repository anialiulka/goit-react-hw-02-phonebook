import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Input } from './components/Input';
import { Title } from './Title';
import { Contacts } from './components/Contacts';
import { Filter } from './components/FIlter';

import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    const nameRepeated = this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (nameRepeated) {
      return alert(`${nameRepeated.name} is already in your contacts`);
    }
    const newContact = {
      ...data,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    return this.setState({ contacts: updatedContacts });
  };

  render() {
    return (
      <div className={css.container}>
        <Title>Phonebook</Title>
        <Input addContact={this.addContact} />
        <Title>Contacts</Title>
        <Filter handleChange={this.handleChange} filter={this.state.filter} />
        <Contacts
          contacts={this.getFilteredContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
