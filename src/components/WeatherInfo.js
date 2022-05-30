import React from 'react';
import Navbar from "./Navbar";

//Styles
import styles from "./WeatherInfo.module.css";
import CurrentWeather from "./CurrentWeather";

const WeatherInfo = () => {
    return (
        <div className={styles.container}>
            <Navbar/>
            <CurrentWeather/>
        </div>
    );
};

export default WeatherInfo;