import { FaUserNinja } from "react-icons/fa6";
import { BiSolidPhone } from "react-icons/bi";
import styles from "./Contact.module.css";

const Contact = ({ contacts, deleteContact }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <li
        key={id}
        className={styles.userItem}
        onClick={(evt) => deleteContact(id, evt)}
      >
        <div>
          <div className={styles.nameContainer}>
            <FaUserNinja />
            <p>{name}</p>
          </div>
          <div className={styles.phoneContainer}>
            <BiSolidPhone />
            <p>{number}</p>
          </div>
        </div>

        <button type="button" className={styles.deleteButton}>
          Delete
        </button>
      </li>
    );
  });
};

export default Contact;
