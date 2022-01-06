import React from "react";

import ApiGitHubProvider from "../contexts/ApiGitHubContext";

import useFetch from "../hooks/useFetch";

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
  const { data, error } = useFetch("https://api.github.com/users/adairjuneoaf/repos");

  if (error) {
    return <div>Erro ao carregar dados.</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
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
            <div className="cardsProjects">
              {data
                .map((data: any) => {
                  return (
                    <CardProject
                      key={data.id}
                      id={data.id}
                      description={data.description}
                      html_url={data.url}
                      name={data.name}
                      language={data.language}
                    ></CardProject>
                  );
                })
                .reverse()}
            </div>
          </div>
        </Content>
      </ApiGitHubProvider>
      <FooterPage />
    </Container>
  );
}
