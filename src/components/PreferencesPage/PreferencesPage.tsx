import { useUser } from "@auth0/nextjs-auth0/client";
import Loading from "@/components/Loading";
import React from "react";
import Nav from "../HomePage/Nav";
import SidePanel from "./SidePanel";
import Container from "./Container";
import ContentContainer from "../unused/ContentContainer";
import * as Space from "react-spaces";
import Section from "./Section";

const PreferencesPage = () => {
  const mainContainerStyles =
    "w-screen h-screen flex flex-col space-y-6 justify-left";

  const mainContentStyles =
    "w-full h-full flex flex-col bg-slate-200 dark:bg-slate-900 justify-left";
  return (
    <div className={mainContainerStyles}>
      <div className={mainContentStyles}>
        <Nav></Nav>
        <div className="w-max text-4xl lg:text-6xl text-amber-600">
          <p className="m-3 lg:m-5">PREFERENCES</p>
        </div>
        <Container>
          <Space.Fixed height="100%">
            <Space.Left size="20%">
              <SidePanel></SidePanel>
            </Space.Left>
            <Space.Fill className="pl-2 lg:pl-5 scroll-smooth" scrollable={true}>
                <Section id="weather" title="weather">This is weather</Section>
                <Section id="news" title="news">This is weather</Section>
                <Section id="socials" title="socials">This is weather</Section>
            </Space.Fill>
          </Space.Fixed>
        </Container>
      </div>
    </div>
  );
};

export default PreferencesPage;