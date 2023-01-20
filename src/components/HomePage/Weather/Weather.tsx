import WeatherImage from "./WeatherImage";
import TemperatureDetails from "./TemperatureDetails";
import AQI from "./AQI";
import React, { useState, useEffect } from "react";

const Weather = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   setLat(position.coords.latitude);
    //   setLong(position.coords.longitude);
    // });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long]);

  return (
    <div className="p-10 flex flex-row space-x-5">
      <WeatherImage />
      <TemperatureDetails />
      <AQI />
    </div>
  );
};

export default Weather;
