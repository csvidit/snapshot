import React from "react";
import styles from "../LandingPage/LandingPage.module.css";
import Title from "../LandingPage/Title";
import { motion } from "framer-motion";
import Button from "../LandingPage/Button";
import Link from "next/link";

const HomePage = (props: any) => {
  const mainContainerStyles =
    "w-screen h-screen flex flex-col space-y-6 justify-left " + styles.sg;

  const mainContentStyles =
    "w-full h-full flex flex-col bg-stone-200 dark:bg-stone-900 justify-left";

  return (
    <div className={mainContainerStyles}>
      <div className={mainContentStyles}>
        <nav className="p-3 lg:p-5 flex flex-row justify-between border-b-2 border-b-stone-500 font-semibold text-xl">
          <h1 className="text-amber-600 ">your snapshot</h1>
          <Link className="text-stone-500 hover:text-sky-500" href="/api/auth/logout">logout</Link>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
