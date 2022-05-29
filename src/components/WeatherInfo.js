import React from 'react';
import Navbar from "./Navbar";

//Styles
import styles from "./WeatherInfo.module.css";

const WeatherInfo = () => {
    return (
        <div className={styles.container}>
            <Navbar/>
        </div>
    );
};

export default WeatherInfo;