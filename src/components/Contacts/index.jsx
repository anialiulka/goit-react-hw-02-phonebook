import css from './Contacts.module.css';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <li className={css.listItem} key={contact.id}>
            {contact.name} : {contact.number}
            <button
              className={css.button}
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
