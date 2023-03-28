import React, { useState, useEffect } from "react";
import styles from "../LandingPage/LandingPage.module.css";
import Title from "../LandingPage/Title";
import { motion } from "framer-motion";
import Button from "../LandingPage/Button";
import Link from "next/link";
import Nav from "./Nav";
import Weather from "./Weather/Weather";
import WeatherImage from "./Weather/WeatherImage";
import TemperatureDetails from "./Weather/WeatherDetails";
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
import TodaysImage from "./TodaysImage";
import HomePageContainer from "./HomePageContainer";
import HomePageContent from "./HomePageContent";
import HomePageGrid from "./HomePageGrid";

const HomePage = (props: any) => {
  const data = [
    { name: "min", temp: "9" },
    { name: "max", temp: "25" },
    { name: "bla", temp: "30" },
    { name: "blu", temp: "21" },
  ];

  console.log(props.user);

  return (
    <HomePageContainer>
      <HomePageContent>
        <Nav user={props.user}></Nav>
        <HomePageGrid>
          <TodaysImage/>
          <Weather/>
          <News></News>
          {/* <Socials></Socials> */}
        </HomePageGrid>
      </HomePageContent>
    </HomePageContainer>
  );
};

export default HomePage;

//self-center place-content-between w-full h-full
