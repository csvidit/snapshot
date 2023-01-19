import React from "react";
import styles from "../LandingPage/LandingPage.module.css";
import Title from "../LandingPage/Title";
import { motion } from "framer-motion";
import Button from "../LandingPage/Button";
import Link from "next/link";
import Nav from "./Nav";
import { mainContainerStylesLeft, mainContentStylesLeft } from "../MainStyles";
import Weather from "./Weather/Weather";

const HomePage = (props: any) => {
  return (
    <div className={mainContainerStylesLeft}>
      <div className={mainContentStylesLeft}>
        <Nav></Nav>
        <div className="flex flex-col lg:flex-row">
          <Weather></Weather>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
