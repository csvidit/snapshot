import WeatherImage from "./WeatherImage";
import TemperatureDetails from "./TemperatureDetails";
import AQI from "./AQI";
import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherLoading from "./WeatherLoading";
import { AQIObject, WeatherObject } from "./WeatherInterfaces";

const Weather = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState<WeatherObject>();
  const [aqi, setAqi] = useState<AQIObject>();
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(showPosition);
  // } else {
  //   console.log("Geolocation is not supported by this browser.");
  // }

  // function showPosition(position) {
  //   console.log(
  //     "Latitude: " +
  //       position.coords.latitude +
  //       "<br>Longitude: " +
  //       position.coords.longitude
  //   );
  // }

  const OWM_ApiUrl_TEST =
    "https://api.openweathermap.org/data/2.5/weather?lat=22.5726723&lon=88.3638815&units=metric&appid=" +
    process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  const OWM_ApiUrl_AQI =
    "https://api.openweathermap.org/data/2.5/air_pollution?lat=22.5726723&lon=88.3638815&appid=" +
    process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          console.log(location);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
    fetchTemp();
    fetchAQI();
  }, []);

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
