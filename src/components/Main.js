import React, {useEffect, useState} from 'react';
import styles from "./Main.module.css";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchLocation} from "../redux/currentLocation/currentLocationAction";
import {fetchWeather} from "../redux/weatherData/weatherDataAction";

const Main = () => {
    const API_KEY = "65ab2c747b41b6ef08230971719b640f";
    const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast?";
    const [searched, setSearched] = useState(false);

    const dispatch = useDispatch();

    //GET CURRENT LOCATION WITH LOCATION STATE
    const state = useSelector(state => state.locationState);
    const {loading, city, country, error} = state;
    const [cityName, setCityName] = useState("");

    //GET CURRENT LOCATION BASED ON SEARCH
    const weatherState = useSelector(state => state.weatherState);
    const {data, error: weatherError, loading: weatherLoading} = weatherState;

    useEffect(() => {
        dispatch(fetchLocation());
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        const url = `${BASE_URL}q=${cityName}&appid=${API_KEY}&units=metric&cnt=5&exclude=hourly,minutely`;
        if (cityName.trim()) {
            dispatch(fetchWeather(url));
            setCityName("")
            setSearched(true);
        }
    }

    const handleClick = () => {
        navigator.geolocation.getCurrentPosition(function(position) {

            const {latitude, longitude} = position.coords;
            const url = `${BASE_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&cnt=5&exclude=hourly,minutely`;

            dispatch(fetchWeather(url));
        });
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>forecast</h1>
                <div className={styles.locationContainer}>
                    <span><i className="fas fa-map-marker-alt"></i></span>
                    <div className={styles.cityName}>
                        <p>Current Location</p>
                        <p>
                            {
                                searched ?
                                    weatherLoading ?
                                        "loading..." :
                                            !weatherError ? `${data.city.name + ", " + data.city.country}` :
                                                "Unknown" :
                                    ""
                            }
                            {!searched ?
                                loading ?
                                    "loading..." :
                                    !error && !loading ?
                                        `${city}, ${country}` :
                                        city :
                                ""
                        }</p>
                    </div>
                </div>
            </header>
            <div className={styles.searchBox}>
                <h2>The Only Weather Forecast You Need</h2>
                <div className={styles.horizontalRow}></div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            placeholder="Enter location"
                            value={cityName}
                            onChange={e => setCityName(e.target.value)}
                        />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </div>
                    <span
                        className={styles.liveLocation}
                        onClick={handleClick}
                    >
                            <i className="fas fa-location-arrow"></i>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Main;