import React from 'react';
import { useSelector } from "react-redux";
import moment from "moment";

const CurrentWeather = () => {
    const weatherState = useSelector(state => state.weatherState);

    const { data } = weatherState;
    const todayData = data.list[0];
    const {temp_min, temp_max, humidity} = todayData.main;

    return (
        <div>
            <h3>Today</h3>
            <div>
                <div>
                    <h4>{Math.round(todayData.main.temp)}&deg;C</h4>
                    <div>
                        <h4>{todayData.weather[0].main}</h4>
                        <img src={` http://openweathermap.org/img/wn/${todayData.weather[0].icon}@2x.png`} alt=""/>
                    </div>
                    <p>{moment().format(`dddd ${new Date().getDate()}, MMM YYYY`)}</p>
                </div>
                <div>
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