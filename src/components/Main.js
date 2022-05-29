import React from 'react';
import styles from "./Main.module.css"

const Main = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>forecast</h1>
                <div className={styles.locationContainer}>
                    <span><i className="fas fa-map-marker-alt"></i></span>
                    <div className={styles.cityName}>
                        <p>Current Location</p>
                        <p>Tehran, Iran</p>
                    </div>
                </div>
            </header>
            <div className={styles.searchBox}>
                <h2>The Only Weather Forecast You Need</h2>
                <div className={styles.horizontalRow}></div>
                <form>
                    <div className={styles.inputContainer}>
                        <input type="text" placeholder="Enter location"/>
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