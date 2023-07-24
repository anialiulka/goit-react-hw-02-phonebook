import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Input } from './Input';
import { Title } from './Title';
import { Contacts } from './Contacts';

import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <div className={css.container}>
        <Title>Phonebook</Title>
        <Input addContact={this.addContact} />
        <Title>Contacts</Title>
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
