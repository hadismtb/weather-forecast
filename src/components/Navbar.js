import React from 'react';

//STYLES
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <ul className={styles.container}>
            <li>Weather</li>
            <li>Alerts</li>
            <li>Map</li>
            <li>Satellite</li>
            <li>News</li>
        </ul>
    );
};

export default Navbar;