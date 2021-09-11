import React from "react";
import styles from "./styles.scss";

const Footer = (props, context) => {
    return (
        <footer className={styles.footer}>
            <div>
                © 2021 Book & Dream
            </div>
            <div>
                <nav>
                    <ul>
                        <li>Instgram</li>
                        <li>Language</li>
                        <li>test</li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;
