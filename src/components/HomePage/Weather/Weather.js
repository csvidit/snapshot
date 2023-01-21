import WeatherImage from "./WeatherImage";
import TemperatureDetails from "./TemperatureDetails";
import AQI from "./AQI";
import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherLoading from "./WeatherLoading";

const Weather = () => {
  const OWM_ApiUrl_TEST =
    "https://api.openweathermap.org/data/2.5/weather?lat=22.5726723&lon=88.3638815&units=metric&appid=" +
    process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  const OWM_ApiUrl_AQI =
    "https://api.openweathermap.org/data/2.5/air_pollution?lat=22.5726723&lon=88.3638815&appid=" +
    process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  const [weather, setWeather] = useState([]);
  const [aqi, setAqi] = useState([]);

  const fetchTemp = () => {
    return axios
      .get(OWM_ApiUrl_TEST)
      .then((response) => response)
      .then((response) => setWeather(response.data));
  };

  const fetchAQI = () => {
    return axios
      .get(OWM_ApiUrl_AQI)
      .then((response) => response)
      .then((response) => setAqi(response.data));
  };

  useEffect(() => {
    fetchTemp();
    fetchAQI();
  }, []);

  if (weather && aqi) {
    return (
      <div className="flex flex-col lg:flex-row col-span-2 justify-between space-between">
        <TemperatureDetails
          currTemp={weather?.main?.temp}
          minTemp={weather?.main?.temp_min}
          maxTemp={weather?.main?.temp_max}
        />
        <AQI aqi={aqi?.list?.map((x) => x?.components?.n02)} />
      </div>
    );
  } else {
    return <WeatherLoading></WeatherLoading>;
  }
};

export default Weather;
