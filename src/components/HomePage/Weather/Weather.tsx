import React from "react";
import WeatherImage from "./WeatherImage";
import TemperatureDetails from "./TemperatureDetails";
import AQI from "./AQI";

const Weather = () =>
{
    
    return(
    <div className="p-10 flex flex-row space-x-5">
        <WeatherImage/>
        <TemperatureDetails/>
        <AQI/>
    </div>)
}

export default Weather;