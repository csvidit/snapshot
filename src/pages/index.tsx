import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Title from "@/components/LandingPage/Title";
import Subtitle from "@/components/LandingPage/Subtitle";
import MoreInfo from "@/components/LandingPage/MoreInfo";
import IllustrationAlpha from "@/components/LandingPage/IllustrationAlpha";
import { animate, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const mainContainerStyles =
  "w-screen h-screen flex flex-col space-y-6 justify-center " + styles.sg;

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
        duration: 1,
      },
    },

    hidden: {
      opacity: 0,
      translateY: 80,
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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainerStyles}>
        <motion.div
          className={mainContentStyles}
          // style={{ opacity: 0, translateY: 800, scrollBehavior: "smooth"}}
          // animate={{ opacity: 1, translateY: 0 }}
          // transition={{
          //   type: "spring",
          //   staggerChildren: 1.5,
          //   when: "beforeChildren",
          //   duration: 1,
          // }}
          variants={opacityVariants}
          animate="visible"
          initial="hidden"
          // variants={list}
          // initial="hidden"
          // animate="visible"
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
            <Title>SNAPSHOT</Title>
          </motion.div>
          <motion.div
            className="self-center"
            variants={opacityVariants}
            animate="visible"
            initial="hidden"
          >
            <Subtitle>Your daily briefing</Subtitle>
          </motion.div>
          <motion.div className="self-center mt-10">
            <MoreInfo link="true" href="https://github.com/csvidit/snapshot">
              From the world of Vidit Khandelwal
            </MoreInfo>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
