import React from 'react';
import {useSelector} from "react-redux";

//Styles
import styles from "./WeatherInfo.module.css";

//COMPONENTS
import Navbar from "./Navbar";
import CurrentWeather from "./CurrentWeather";

//IMAGES
import spinner from "../assets/images/1496.gif"
import FutureWeather from "./FutureWeather";

const WeatherInfo = () => {
    const weatherState = useSelector(state => state.weatherState);
    const {data, loading, error} = weatherState;
    const days = data.list;

    return (
        <div className={styles.container}>
            <Navbar/>
            {
                data.cod == 200 &&
                (
                    <>
                        <CurrentWeather/>
                        <ul className={styles.daysContainer}>
                            {
                                days.map( (day, index) => {
                                    if (index > 0) {
                                        return ( <FutureWeather key={index} data={day}/>)
                                    }
                                })
                            }
                        </ul>
                    </>
                )
            }
            {
                data.length === 0 && <div className={styles.messageContainer}>
                    {
                        error && <h2>{error}</h2>
                    }
                    {
                        loading && <img src={spinner} alt="loading" />
                    }
                </div>
            }
        </div>
    );
};

export default WeatherInfo;