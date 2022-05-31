import React from 'react';
import { useSelector } from "react-redux";
import moment from "moment";

//STYLES
import styles from "./CurrentWeather.module.css";

const CurrentWeather = () => {
    const weatherState = useSelector(state => state.weatherState);

    const { data } = weatherState;
    const todayData = data.list[0];
    const {temp_min, temp_max, humidity} = todayData.main;

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Today</h3>
            <div className={styles.infoContainer}>
                <div className={styles.left}>
                    <h4 className={styles.temp}>{Math.round(todayData.main.temp)}&deg;<span>C</span></h4>
                    <div className={styles.status}>
                        <h4>{todayData.weather[0].main}</h4>
                        <img src={` http://openweathermap.org/img/wn/${todayData.weather[0].icon}@2x.png`} alt=""/>
                    </div>
                    <p className={styles.date}>{moment().format(`dddd ${new Date().getDate()}, MMM YYYY`)}</p>
                </div>
                <div className={styles.right}>
                    <p>Min-temp: <span>{Math.round(temp_min)}</span></p>
                    <p>Max-temp: <span>{Math.round(temp_max)}</span></p>
                    <p>Humidity: <span>{humidity}%</span></p>
                    <p>Wind: <span>{todayData.wind.speed}km/h</span></p>
                    <p>Clouds: <span>{todayData.clouds.all}</span></p>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;