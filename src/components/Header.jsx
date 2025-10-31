import React from "react";
import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.container}>
            <h1>Contact App</h1>
            <p>
                Coded by{" "}
                <a href="https://github.com/koosha-barooni/">Koosha Barooni</a>{" "}
                | Front-End Developer
            </p>
        </div>
    );
}

export default Header;
