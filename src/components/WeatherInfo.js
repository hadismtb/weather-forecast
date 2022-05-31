import React from 'react';
import {useSelector, useDispatch} from "react-redux";

//Styles
import styles from "./WeatherInfo.module.css";

//COMPONENTS
import Navbar from "./Navbar";
import CurrentWeather from "./CurrentWeather";

//IMAGES
import spinner from "../assets/images/1496.gif"

const WeatherInfo = () => {
    const weatherState = useSelector(state => state.weatherState);
    const {data, loading, error} = weatherState;

    return (
        <div className={styles.container}>
            <Navbar/>
            {
                data.length > 0 && !loading &&
                    <CurrentWeather/>
            }
            <div className={styles.messageContainer}>
                {
                    error && <h2>{error}</h2>
                }
                {
                    loading && <img src={spinner} alt="loading" />
                }
            </div>
        </div>
    );
};

export default WeatherInfo;