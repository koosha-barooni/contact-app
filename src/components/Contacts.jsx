import React, { useState } from "react";
import { v4 } from "uuid";

import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";
import styles from "../components/Contacts.module.css";

function Contacts() {
    const [allContacts, setAllContacts] = useState([]);
    //------------------- new Contact ----------------
    const [newContact, setNewContact] = useState({
        id: "",
        name: "",
        lastName: "",
        email: "",
        phone: "",
    });
    //------------------- alert -----------------
    const [alert, setAlert] = useState("");

    //------------ change Handler -----------------
    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setNewContact((newContact) => ({ ...newContact, [name]: value }));
    };
    //------------ add Handler ------------------
    const addHandler = () => {
        if (
            !newContact.name ||
            !newContact.lastName ||
            !newContact.email ||
            !newContact.phone
        ) {
            setAlert("Please Enter Valid data!");
            return;
        }
        setAlert("");
        const newContacts = { ...newContact, id: v4() };
        setAllContacts((allcontacts) => [...allcontacts, newContacts]);
        console.log(allContacts);
        setNewContact({ name: "", lastName: "", email: "", phone: "" });
    };
    //------------------- delete Handler ------------------------
    const deleteHandler = (id) => {
        const remindContacts = allContacts.filter(
            (contact) => contact.id !== id,
        );
        setAllContacts(remindContacts);
    };
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                {inputs.map((input, index) => (
                    <input
                        key={index}
                        type={input.type}
                        placeholder={input.placeholder}
                        name={input.name}
                        value={newContact[input.name]}
                        onChange={changeHandler}
                    />
                ))}
                <button onClick={addHandler}>Add Contact</button>
            </div>
            <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
            <ContactsList
                allContacts={allContacts}
                deleteHandler={deleteHandler}
            />
        </div>
    );
}

export default Contacts;
