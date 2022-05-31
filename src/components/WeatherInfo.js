import React from 'react';
import {useSelector, useDispatch} from "react-redux";

//Styles
import styles from "./WeatherInfo.module.css";

//COMPONENTS
import Navbar from "./Navbar";
import CurrentWeather from "./CurrentWeather";

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
            {
                error && <h2>{error}</h2>
            }
            {
                loading && <h2>NO DATA</h2>
            }
        </div>
    );
};

export default WeatherInfo;