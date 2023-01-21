import WeatherImage from "./WeatherImage";
import TemperatureDetails from "./TemperatureDetails";
import AQI from "./AQI";
import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherLoading from "./WeatherLoading";

const Weather = () => {
  // const OWM_ApiUrl_TEST = "http://api.openweathermap.org/geo/1.0/direct?q=Kolkata,IND&limit=1&appid=cf2bb18d7e98e65278f4c2cae17ee895"
  const OWM_ApiUrl_TEST =
    "https://api.openweathermap.org/data/2.5/weather?lat=22.5726723&lon=88.3638815&units=metric&appid=" +
    process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  // const OWM_ApiUrl_AQI = "http://api.openweathermap.org/data/2.5/air_pollution?lat=22.5726723&lon=88.3638815&appid="+process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  const [data, setData] = useState([]);

  const fetchData = () => {
    return axios
      .get(OWM_ApiUrl_TEST)
      .then((response) => response)
      .then((response) => setData(response.data));
  };

  useEffect(() => {
    // const fetchData = () => {
    //   return axios
    //     .get(OWM_ApiUrl_TEST)
    //     .then((response) => response)
    //     .then((response) => setData(response.data));
    // };
    fetchData();
    console.log(data);
  }, []);

  if (data) {
    // let vals = []
    // data.main.map((val, index) => {
    //   vals[index] = val;
    // })
    return (
      <div className="flex flex-col lg:flex-row col-span-2 justify-between space-between">
        {/* <div>{data["coord"]["lon"]}</div> */}
        {/* <div>{data?.main?.temp}</div> */}
        {/* <div>{vals[0]}</div>
        <div>{vals[1]}</div>
        <div>{vals[2]}</div>
        <div>{vals[3]}</div> */}
        <TemperatureDetails currTemp={data?.main?.temp} minTemp={data?.main?.temp_min} maxTemp={data?.main?.temp_max} />
        {/* <TemperatureDetails /> */}
        <AQI />
      </div>
    );
  } else {
    return <WeatherLoading></WeatherLoading>;
  }
};

export default Weather;
