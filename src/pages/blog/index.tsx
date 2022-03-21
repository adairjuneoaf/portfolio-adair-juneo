import React from "react";
import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";

import createClientPrismic from "../../services/prismic";

import { RichText } from "prismic-dom";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import CardPublication from "../../components/CardPublication";
import SpinnerLoading from "../../components/SpinnerLoading";
import HeaderBlog from "../../components/HeaderBlog";

import { Container, Content } from "../../styles/pages/blog";

interface PublicationProps {
  id: string;
  slug: string;
  title: string;
  author: string;
  description: string;
  publishedAt: string;
}

interface HomeProps {
  dataPrismic: Array<PublicationProps>;
}

const PagePosts: NextPage<HomeProps> = ({ dataPrismic }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <SpinnerLoading />;
  }

  return (
    <Container>
      <HeaderBlog isDisplayIcon={false} titleHeader={"Publicações e artigos"} />
      {/* <main className="postsPublished"> */}
      <Content>
        {dataPrismic.map((post: PublicationProps) => (
          <CardPublication key={post.id} {...post} />
        ))}
      </Content>
      {/* </main> */}
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const prismicClient = createClientPrismic();

  const responsePrismic = await prismicClient.get({
    fetch: ["publication.title", "publication.description", "publication.author"],
    pageSize: 30,
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
    props: { dataPrismic },
    revalidate: 60 * 60 * 1, // 1 Hora
  };
};

export default PagePosts;
