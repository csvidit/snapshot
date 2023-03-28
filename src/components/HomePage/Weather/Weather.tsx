import WeatherImage from "./WeatherImage";
import AQI from "./AQI";
import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherLoading from "./WeatherLoading";
import { AQIObject, WeatherObject, Location } from "./WeatherInterfaces";
import WeatherDetails from "./WeatherDetails";

const Weather = () => {
  const [location, setLocation] = useState<Location>({latitude: 0, longitude: 0, city: "Null Island"});
  const [weather, setWeather] = useState<WeatherObject>();
  const [aqi, setAqi] = useState<AQIObject>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          axios.get("http://api.openweathermap.org/geo/1.0/reverse?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&limit=1&appid="+process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY)
          .then((response) => response)
          .then((response) => {
            setLocation({
              latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            city: response.data[0].name
            })
          })
          // setLocation({
          //   latitude: position.coords.latitude,
          //   longitude: position.coords.longitude,

          // });
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
      .then((response) => {console.log(response.data); setWeather(response.data)})

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
        <WeatherDetails
          temp={weather?.main?.temp}
          minTemp={weather?.main?.temp_min}
          maxTemp={weather?.main?.temp_max}
          windSpeed={weather?.wind?.speed}
          rain={weather?.rain?.["1h"]}
          city={location.city}
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
