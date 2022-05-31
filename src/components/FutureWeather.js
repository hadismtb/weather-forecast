import React from 'react';
import moment from "moment";

//STYLES
import styles from "./FutureWeather.module.css";

const FutureWeather = ({data}) => {
    const {temp} = data.main;
    const {main:status, icon} = data.weather[0];
    const date = data.dt_txt;

    return (
        <div className={styles.container}>
            <h4 className={styles.temp}>{Math.round(temp)} &deg;<span>C</span></h4>
            <div className={styles.status}>
                <h4>{status}</h4>
                <img src={` http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
            </div>
            <p className={styles.date}>{moment(date).format("ddd hh:mm")}</p>
        </div>
    );
};

export default FutureWeather;