import React from "react";
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <img
                src="https://img.pngio.com/funko-everyone-is-a-fan-of-something-funko-funko-logo-png-380_360.png"
                alt=""/>
        </header>
    );
};

export default Header
