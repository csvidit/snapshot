import WeatherImage from "./WeatherImage";
import TemperatureDetails from "./TemperatureDetails";
import AQI from "./AQI";
import React, { useState, useEffect, fetchData } from "react";
import axios from "axios";
import WeatherLoading from "./WeatherLoading";

const Weather = () => {

  // const OWM_ApiUrl_TEST = "http://api.openweathermap.org/geo/1.0/direct?q=Kolkata,IND&limit=1&appid=cf2bb18d7e98e65278f4c2cae17ee895"
  const OWM_ApiUrl_TEST = "https://api.openweathermap.org/data/2.5/weather?lat=22.5726723&lon=88.3638815&appid="+process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  // const OWM_ApiUrl_AQI = "http://api.openweathermap.org/data/2.5/air_pollution?lat=22.5726723&lon=88.3638815&appid="+process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  const [data, setData] = useState([]);
  // const [weather, setWeather] = useState([])
  // const [aqi, setAqi] = useState([])

  const fetchData = () =>
  {
    return axios.get(OWM_ApiUrl_TEST)
    .then((response) => response)
    .then((response) => setData(response.data));
  }

  useEffect(() => {
    fetchData();
    console.log(data);
  },[])

  if(data)
  {
    
    return (
      <div className="flex flex-col lg:flex-row col-span-2 justify-between space-between">
        <div>{JSON.stringify(data.main)}</div>
        {/* <TemperatureDetails currTemp={JSON.stringify(data.main.temp)} minTemp={JSON.stringify(data.main.temp_min)} maxTemp={JSON.stringify(data.main.temp_max)} /> */}
        <TemperatureDetails/>
        <AQI />
      </div>
    );
    
  }
  else
  {
    return <WeatherLoading></WeatherLoading>
  }

};

export default Weather;
