import React from "react";

import { Container } from "../styles/pages/Home";

import DataProfile from "../components/DataProfile";
import ExperienceProfile from "../components/ExperienceProfile";
import Profile from "../components/Profile";
import TechnologiesProfile from "../components/TechnologiesProfile";

export default function Home() {
  return (
    <Container>
      <Profile />
      <DataProfile />
      <TechnologiesProfile />
      <ExperienceProfile />
    </Container>
  );
}
