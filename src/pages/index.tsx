import React from "react";
import { GetStaticProps, NextPage } from "next";

import HeaderLatestPublications from "../components/HeaderLatestPublications";
import CardPublication from "../components/CardPublication";
import HeaderProjects from "../components/HeaderProjects";
import SpinnerLoading from "../components/SpinnerLoading";
import CardProject from "../components/CardProject";

interface CardProjectProps {
  id: number;
  description: string;
  html_url: string;
  name: string;
  language: string;
  topics: Array<string>;
}

// interface CardPublicationProps {
//   uid: number;
//   title: string;
//   subtitle: string;
//   data_publication: string;
//   author: string;
// }

interface HomeProps {
  data: [];
}

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <React.Fragment>
      <main className="profileProjects">
        <HeaderLatestPublications />
        <div className="cardsPublications">
          <CardPublication />
          <CardPublication />
        </div>
        <HeaderProjects />
        <div className="cardsProjects">
          {data.map((data: CardProjectProps) => (
            <CardProject key={data.id} {...data} />
          ))}
        </div>
      </main>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://api.github.com/users/adairjuneoaf/repos?sort=updated_at&order=desc");
  const data = await response.json();

  if (response.type === "error") {
    return <div>Erro ao carregar dados.</div>;
  }

  if (!data) {
    return <SpinnerLoading />;
  }

  return {
    props: { data },
    revalidate: 60 * 60 * 4, // 4 Horas
  };
};

export default Home;
