import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Title from "@/components/LandingPage/Title";
import Subtitle from "@/components/LandingPage/Subtitle";
import MoreInfo from "@/components/LandingPage/MoreInfo";
import IllustrationAlpha from "@/components/LandingPage/IllustrationAlpha";
import { motion } from "framer-motion";
import Button from "@/components/LandingPage/Button";

const inter = Inter({ subsets: ["latin"] });

const mainContainerStyles =
  "w-screen h-screen flex flex-col space-y-6 justify-center bg-stone-200 dark:bg-stone-900 " +
  styles.sg;

const mainContentStyles = "w-full h-full flex flex-col justify-center";

export default function Home() {
  const opacityVariants = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "spring",
        when: "beforeChildren",
        staggerChildren: 5,
        duration: 0.75,
      },
    },

    hidden: {
      opacity: 0,
      translateY: 60,
    },
  };

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 30,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  return (
    <>
      <Head>
        <title>Snapshot - Vidit Khandelwal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainerStyles}>
        <motion.div
          className={mainContentStyles}
          variants={opacityVariants}
          animate="visible"
          initial="hidden"
        >
          <motion.div
            className="self-center"
            variants={opacityVariants}
            animate="visible"
            initial="hidden"
          >
            <IllustrationAlpha></IllustrationAlpha>
          </motion.div>
          <motion.div
            className="self-center"
            variants={opacityVariants}
            animate="visible"
            initial="hidden"
          >
            <Title>snapshot</Title>
          </motion.div>
          <motion.div
            className="self-center"
            variants={opacityVariants}
            animate="visible"
            initial="hidden"
          >
            <Subtitle>your daily briefing</Subtitle>
          </motion.div>
          <motion.div className="self-center mt-10">
            <MoreInfo link="true" href="https://github.com/csvidit/snapshot">
              From the world of Vidit Khandelwal
            </MoreInfo>
          </motion.div>
          <motion.div className="self-center mt-10">
            <Button href="/home">Login</Button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
