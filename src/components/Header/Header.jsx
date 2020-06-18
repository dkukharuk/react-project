import React from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img
                src="https://img.pngio.com/funko-everyone-is-a-fan-of-something-funko-funko-logo-png-380_360.png"
                alt=""/>
            <div className={styles.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header
