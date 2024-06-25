import Head from "next/head";
import { Inter } from "@next/font/google";
import LandingPage from "@/components/LandingPage/LandingPage";
import { useUser } from "@auth0/nextjs-auth0/client";
import HomePage from "@/components/HomePage/HomePage";
import Loading from "@/components/Loading";

const mainContainerStyles =
  "w-screen h-screen flex flex-col space-y-6 justify-center"

const mainContentStyles = "w-full h-full flex flex-col bg-slate-200 dark:bg-slate-900 justify-center";

export default function Home() {

  const { user, error, isLoading } = useUser();

  if (isLoading) return (<Loading>Loading</Loading>);
  if (error) return <div>{error.message}</div>;

  if(user)
  {
    return (
      <>
        <Head>
          <title>Snapshot</title>
          <meta name="description" content="Your daily briefing." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HomePage user={user}/>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Snapshot</title>
        <meta name="description" content="Your daily briefing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage/>
    </>
  );
}