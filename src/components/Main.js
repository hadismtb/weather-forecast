import React, {useEffect, useState} from 'react';
import styles from "./Main.module.css";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchLocation} from "../redux/currentLocation/currentLocationAction";

const Main = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.locationState);
    const {loading, city, country, error} = state;
    const [cityName, setCityName] = useState("");

    useEffect(() => {
        dispatch(fetchLocation())
    }, [])


    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>forecast</h1>
                <div className={styles.locationContainer}>
                    <span><i className="fas fa-map-marker-alt"></i></span>
                    <div className={styles.cityName}>
                        <p>Current Location</p>
                        <p>{
                            loading ?
                                "loading..." :
                                !error && !loading ?
                                    `${city}, ${country}` :
                                    city
                        }</p>
                    </div>
                </div>
            </header>
            <div className={styles.searchBox}>
                <h2>The Only Weather Forecast You Need</h2>
                <div className={styles.horizontalRow}></div>
                <form>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            placeholder="Enter location"
                            value={cityName}
                            onChange={e => setCityName(e.target.value)}
                        />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </div>
                    <span className={styles.liveLocation}>
                            <i className="fas fa-location-arrow"></i>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Main;