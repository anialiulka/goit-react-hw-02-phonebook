import { Component } from 'react';
import css from './Input.module.css';

export class Input extends Component {
  state = {
    name: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact({ name: this.state.name });
  };

  render() {
    return (
      <form action="" className={css.form} onSubmit={this.handleSubmit}>
        <label htmlFor="name" className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>
        <button type="submit" className={css.button}>
          Add to contacts
        </button>
      </form>
    );
  }
}
