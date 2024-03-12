import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.contactsList}>
      <Contact contacts={contacts} deleteContact={deleteContact} />
    </ul>
  );
};

export default ContactList;
