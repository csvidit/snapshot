import { UserProfile, useUser } from "@auth0/nextjs-auth0/client";
import Loading from "@/components/Loading";
import React from "react";
import Nav from "../HomePage/Nav";
import SidePanel from "./SidePanel";
import ItemsContainer from "./ItemsContainer";
import * as Space from "react-spaces";
import Section from "./Section";;
import Input from "./Input";
import { Dropdown } from "flowbite-react";
import PreferencesPageContainer from "./PreferencesPageContainer";
import PreferencesPageContent from "./PreferencesPageContent";

const PreferencesPage = (props: { user: UserProfile }) => {
  return (
    <PreferencesPageContainer>
      <PreferencesPageContent>
        <Nav user={props.user}></Nav>
        <div className="w-3/4"></div>
        <ItemsContainer>
          <div className="text-2xl lg:text-4xl text-amber-600 font-extralight">
            <p className="mt-3 mb-3 lg:mt-5 lg:mb-5">Preferences</p>
          </div>
          <Space.Fixed height="80%">
            <Space.Left size="20%">
              <SidePanel></SidePanel>
            </Space.Left>
            <Space.Fill
              className="pl-2 lg:pl-5 scroll-smooth"
              scrollable={true}
            >
              <Section id="weather" title="weather">
                The location is currently set to
                <Input placeholder="Kolkata" />
              </Section>
              <Section id="news" title="news">
                The preferred news outlet is currently set to
                <Dropdown label="Dropdown button" dismissOnClick={false}>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
              </Section>
              <Section id="socials" title="socials">
                <h1></h1>
              </Section>
            </Space.Fill>
          </Space.Fixed>
        </ItemsContainer>
      </PreferencesPageContent>
    </PreferencesPageContainer>
  );
};

export default PreferencesPage;
