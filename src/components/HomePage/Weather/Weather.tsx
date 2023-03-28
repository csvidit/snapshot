import WeatherImage from "./WeatherImage";
import TemperatureDetails from "./TemperatureDetails";
import AQI from "./AQI";
import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherLoading from "./WeatherLoading";
import { AQIObject, WeatherObject, Location } from "./WeatherInterfaces";

const Weather = () => {
  const [location, setLocation] = useState<Location>({latitude: 0, longitude: 0});
  const [weather, setWeather] = useState<WeatherObject>();
  const [aqi, setAqi] = useState<AQIObject>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          location.latitude +
          "&lon=" +
          location.longitude +
          "&units=metric&appid=" +
          process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
      )
      .then((response) => response)
      .then((response) => setWeather(response.data));

    axios
      .get(
        "https://api.openweathermap.org/data/2.5/air_pollution?lat=" +
          location.latitude +
          "&lon=" +
          location.longitude +
          "&appid=" +
          process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
      )
      .then((response) => response)
      .then((response) => setAqi(response.data));
  }, [location.latitude]);

  if (weather && aqi) {
    return (
      <div className="flex flex-col lg:flex-row col-span-2 justify-between space-between">
        <TemperatureDetails
          temp={weather?.main?.temp}
          minTemp={weather?.main?.temp_min}
          maxTemp={weather?.main?.temp_max}
          windSpeed={weather?.wind?.speed}
        />
        {aqi?.list?.map((x) => {
          return <AQI key={x?.main?.aqi} aqi={x?.main?.aqi}></AQI>;
        })}
      </div>
    );
  } else {
    return <WeatherLoading></WeatherLoading>;
  }
};

export default Weather;
