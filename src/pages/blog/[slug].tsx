import React from "react";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { FiCalendar, FiClock, FiUser } from "react-icons/fi";
import ptBR from "date-fns/locale/pt-BR";
import format from "date-fns/format";

import { RichText } from "prismic-dom";

import createClientPrismic from "../../services/prismic";

import HeaderBlog from "../../components/HeaderBlog";

import { Content, Container } from "../../styles/pages/blog/[slug]";

interface ParamsGetStaticProps extends ParsedUrlQuery {
  slug: string;
}

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    imgpost: {
      url: string;
    };
    author: string;
    content: Array<{
      heading: string;
      body: Array<{
        text: string;
      }>;
    }>;
  };
}

type ContentPost = {
  titlecontent: string;
  contentpublication: Array<{ text: string }>;
};

interface PagePostProps {
  post: Post;
}

const PagePost: NextPage<PagePostProps> = ({ post }) => {
  return (
    <Container>
      <HeaderBlog isDisplayIcon={true} titleHeader={post.data.title} />
      <Content>
        <div className="informationPublicationPost">
          <div className="datePublicationPost" title="Data de publicação">
            <FiCalendar fontSize={18} color={"#BB86FC"} />
            <p>{post.first_publication_date}</p>
          </div>
          <div className="authorPublicationPost" title="Autor da publicação">
            <FiUser fontSize={18} color={"#BB86FC"} />
            <p>{post.data.author}</p>
          </div>
          <div className="readingTimePost" title="Tempo de leitura">
            <FiClock fontSize={18} color={"#BB86FC"} />
            <p>5 min</p>
          </div>
        </div>
        <article className="contentPost">
          {post.data.content.map((content) => (
            <section key={content.heading}>
              <h2
                dangerouslySetInnerHTML={{
                  __html: RichText.asText(content.heading),
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: RichText.asHtml(content.body),
                }}
              />
            </section>
          ))}
        </article>
      </Content>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as ParamsGetStaticProps;

  const prismicClient = createClientPrismic();

  const responsePrismic = await prismicClient.getByUID("publication", slug);

  const post: Post = {
    first_publication_date: format(new Date(responsePrismic.first_publication_date), "d MMM yyyy", {
      locale: ptBR,
    }),
    data: {
      title: RichText.asText(responsePrismic.data.title),
      imgpost: {
        url: responsePrismic.data.imgpost.url,
      },
      author: RichText.asText(responsePrismic.data.author),
      content: responsePrismic.data.content.map((contentPost: ContentPost) => {
        return {
          heading: contentPost.titlecontent,
          body: contentPost.contentpublication,
        };
      }),
    },
  };

  return {
    props: { post },
    revalidate: 60 * 60 * 1, // 1 Hora
  };
};

export default PagePost;
