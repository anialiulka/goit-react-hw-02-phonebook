import css from './Contacts.module.css';

export const Contacts = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <li className={css.listItem} id={contact.id}>
            {contact.name}
          </li>
        );
      })}
    </ul>
  );
};
