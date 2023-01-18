import React from "react";
import styles from "../LandingPage/LandingPage.module.css";
import Title from "../LandingPage/Title";
import { motion } from "framer-motion";
import Button from "../LandingPage/Button";
import Link from "next/link";
import Nav from "./Nav";

const HomePage = (props: any) => {
  const mainContainerStyles =
    "w-screen h-screen flex flex-col space-y-6 justify-left " + styles.sg;

  const mainContentStyles =
    "w-full h-full flex flex-col bg-stone-200 dark:bg-stone-900 justify-left";

  return (
    <div className={mainContainerStyles}>
      <div className={mainContentStyles}>
        <Nav></Nav>
        <div className="flex flex-col lg:flex-row">

        </div>
      </div>
    </div>
  );
};

export default HomePage;
