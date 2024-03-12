import { FaUserNinja } from "react-icons/fa6";
import { BiSolidPhone } from "react-icons/bi";
import styles from "./Contact.module.css";

export default function Contacts({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
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
      ))}
    </ul>
  );
}
