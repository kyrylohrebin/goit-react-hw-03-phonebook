import styles from './ContactList.module.css';

const ContactItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={styles.item}>
      <span className={styles.span}>{name}:</span>
      <span className={styles.span}>{number}</span>
      <button className={styles.button} onClick={() => onRemove(id)}>
        X
      </button>
    </li>
  );
};

const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default ContactList;
