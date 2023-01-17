import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Title from "@/components/LandingPage/Title";
import Subtitle from "@/components/LandingPage/Subtitle";
import MoreInfo from "@/components/LandingPage/MoreInfo";

const inter = Inter({ subsets: ["latin"] });

const mainContainerStyles =
  "w-screen h-screen flex flex-col space-y-6 justify-center "+styles.sg;

const mainContentStyles =
  "w-full h-full flex flex-col justify-center";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainerStyles}>
        <div className={mainContentStyles}>
          <Title>SNAPSHOT</Title>
          <Subtitle>Your daily briefing</Subtitle>
          <MoreInfo link="true" href="https://github.com/csvidit/snapshot">From the world of Vidit Khandelwal</MoreInfo>
        </div>
      </div>
    </>
  );
}
