import React from "react";
import styles from "./footer.module.scss";

const Footer = (props, context) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.column}>
                © 2021 Book & Dream
            </div>
            <div className={styles.column}>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={styles.item}>Instgram</li>
                        <li className={styles.item}>Language</li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;
