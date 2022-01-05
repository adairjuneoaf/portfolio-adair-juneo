import React from "react";

import { Container, Content } from "../styles/pages/Home";

import TechnologiesProfile from "../components/TechnologiesProfile";
import ExperienceProfile from "../components/ExperienceProfile";
import EducationHistory from "../components/EducationHistory";
import HeaderProjects from "../components/HeaderProjects";
import DataProfile from "../components/DataProfile";
import CardProject from "../components/CardProject";
import FooterPage from "../components/FooterPage";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <Container>
      <Content>
        <div className="profileInfos">
          <Profile />
          <DataProfile />
          <TechnologiesProfile />
          <ExperienceProfile />
          <EducationHistory />
        </div>
        <div className="profileProjects">
          <HeaderProjects />
          <div className="cardsProjects">
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
          </div>
        </div>
      </Content>
      <FooterPage />
    </Container>
  );
}
