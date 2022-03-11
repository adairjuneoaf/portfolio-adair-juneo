import React from "react";
import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";

import createClientPrismic from "../services/prismic";

import { RichText } from "prismic-dom";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

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

interface PublicationProps {
  id: string;
  slug: string;
  title: string;
  author: string;
  description: string;
  publishedAt: string;
}

interface HomeProps {
  dataGitHub: [];
  dataPrismic: Array<PublicationProps>;
}

const Home: NextPage<HomeProps> = ({ dataGitHub, dataPrismic }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <SpinnerLoading />;
  }

  return (
    <React.Fragment>
      <main className="profileProjects">
        <HeaderLatestPublications />
        <div className="cardsPublications">
          {dataPrismic.map((post: PublicationProps) => (
            <CardPublication key={post.id} {...post} />
          ))}
        </div>
        <HeaderProjects />
        <div className="cardsProjects">
          {dataGitHub.map((data: CardProjectProps) => (
            <CardProject key={data.id} {...data} />
          ))}
        </div>
      </main>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const responseGitHub = await fetch("https://api.github.com/users/adairjuneoaf/repos?sort=updated_at&order=desc");
  const dataGitHub = await responseGitHub.json();

  if (responseGitHub.type === "error") {
    return <div>Erro ao carregar dados.</div>;
  }

  const prismicClient = createClientPrismic();

  const responsePrismic = await prismicClient.get({
    fetch: ["publication.title", "publication.description", "publication.content", "publication.author"],
    pageSize: 2,
  });

  const dataPrismic = responsePrismic.results.map((post) => {
    return {
      id: post.id,
      slug: post.uid,
      title: RichText.asText(post.data.title),
      author: RichText.asText(post.data.author),
      description: RichText.asText(post.data.description),
      publishedAt: format(new Date(post.first_publication_date), "dd MMM yyyy", {
        locale: ptBR,
      }),
    };
  });

  return {
    props: { dataGitHub, dataPrismic },
    revalidate: 60 * 60 * 4, // 4 Horas
  };
};

export default Home;
