import HomePage from "@/components/HomePage/HomePage";
import LandingPage from "@/components/LandingPage/LandingPage";
import Loading from "@/components/Loading";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import PreferencesPage from "@/components/PreferencesPage/PreferencesPage";

export default function Preferences() {

  const { user, error, isLoading } = useUser();

  if (isLoading) return <Loading>Loading</Loading>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PreferencesPage></PreferencesPage>
      </>
    );
  }
}

export const getServerSideProps = withPageAuthRequired();
