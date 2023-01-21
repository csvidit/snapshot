import React, { useState, useEffect } from "react";
import styles from "../LandingPage/LandingPage.module.css";
import Title from "../LandingPage/Title";
import { motion } from "framer-motion";
import Button from "../LandingPage/Button";
import Link from "next/link";
import Nav from "./Nav";
import { mainContainerStylesLeft, mainContentStylesLeft } from "../MainStyles";
import Weather from "./Weather/Weather";
import AQI from "./Weather/AQI";
import WeatherImage from "./Weather/WeatherImage";
import TemperatureDetails from "./Weather/TemperatureDetails";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { XYFrame } from "semiotic";
import News from "./News/News";
import Socials from "./Socials/Socials";

const HomePage = (props: any) => {
  const data = [
    { name: "min", temp: "9" },
    { name: "max", temp: "25" },
    { name: "bla", temp: "30" },
    { name: "blu", temp: "21" },
  ];

  return (
    <div className={mainContainerStylesLeft}>
      <div className={mainContentStylesLeft}>
        <Nav></Nav>
        <div className="p-4 lg:p-12 grid grid-cols-1 lg:grid-cols-4 place-content-around">
          <WeatherImage></WeatherImage>
          <Weather/>
          <News></News>
          <Socials></Socials>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

//self-center place-content-between w-full h-full
