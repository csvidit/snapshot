import { UserProfile, useUser } from "@auth0/nextjs-auth0/client";
import Loading from "@/components/Loading";
import React from "react";
import Nav from "../HomePage/Nav";
import SidePanel from "./SidePanel";
import Container from "./Container";
import ContentContainer from "../unused/ContentContainer";
import * as Space from "react-spaces";
import Section from "./Section";
import { mainContainerStylesLeft, mainContentStylesLeft } from "../MainStyles";
import Input from "./Input";

const PreferencesPage = (props: {user: UserProfile}) => {
  return (
    <div className={mainContainerStylesLeft}>
      <div className={mainContentStylesLeft}>
        <Nav user={props.user}></Nav>
        <div className="w-3/4"></div>
        <Container>
        <div className="text-2xl lg:text-4xl text-amber-600 font-extralight">
          <p className="mt-3 mb-3 lg:mt-5 lg:mb-5">Preferences</p>
        </div>
          <Space.Fixed height="80%">
            <Space.Left size="20%">
              <SidePanel></SidePanel>
            </Space.Left>
            <Space.Fill className="pl-2 lg:pl-5 scroll-smooth" scrollable={true}>
                <Section id="weather" title="weather">The location is currently set to<Input placeholder="Kolkata"/></Section>
                <Section id="news" title="news">The preferred news outlet is currently set to<Input placeholder="BBC News"/></Section>
                <Section id="socials" title="socials"></Section>
            </Space.Fill>
          </Space.Fixed>
        </Container>
      </div>
    </div>
  );
};

export default PreferencesPage;
