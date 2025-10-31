import React from "react";
import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";

function ContactsList({ allContacts, deleteHandler }) {
    return (
        <div className={styles.container}>
            <h3>Contacts List</h3>
            {allContacts.length ? (
                <ul className={styles.allContacts}>
                    {allContacts.map((contact) => (
                        <ContactItem
                            key={contact.id}
                            data={contact}
                            deleteHandler={deleteHandler}
                        />
                    ))}
                </ul>
            ) : (
                <p className={styles.message}>No Contacts Yet!</p>
            )}
        </div>
    );
}

export default ContactsList;
