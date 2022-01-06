import React from "react";

import ApiGitHubProvider from "../contexts/ApiGitHubContext";

import useFetch from "../hooks/useFetch";

import { Container, Content } from "../styles/pages/Home";

import TechnologiesProfile from "../components/TechnologiesProfile";
import ExperienceProfile from "../components/ExperienceProfile";
import EducationHistory from "../components/EducationHistory";
import HeaderProjects from "../components/HeaderProjects";
import SpinnerLoading from "../components/SpinnerLoading";
import DataProfile from "../components/DataProfile";
import CardProject from "../components/CardProject";
import FooterPage from "../components/FooterPage";
import Profile from "../components/Profile";

interface CardProjectProps {
  id: number;
  description: string;
  html_url: string;
  name: string;
  language: string;
  topics: Array<string>;
}

const Home: React.FC = () => {
  const { data, error } = useFetch("https://api.github.com/users/adairjuneoaf/repos");

  if (error) {
    return <div>Erro ao carregar dados.</div>;
  }

  if (!data) {
    return <SpinnerLoading />;
  }

  return (
    <Container>
      <ApiGitHubProvider>
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
            <div className="cardsProjects">{data.map((data: CardProjectProps) => <CardProject key={data.id} {...data} />).reverse()}</div>
          </div>
        </Content>
      </ApiGitHubProvider>
      <FooterPage />
    </Container>
  );
};

export default Home;
