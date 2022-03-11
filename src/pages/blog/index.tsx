import React from "react";
import Link from "next/link";
import { NextPage } from "next";

// import CardPublication from "../../components/CardPublication";

import { Content, Header } from "../../styles/pages/blog";

const PagePosts: NextPage = () => {
  return (
    <React.Fragment>
      <main className="postsPublished">
        <Header>
          <h3>Todas as minhas publicações e artigos</h3>
          <Link href={"/"}>
            <button type="button">Voltar a página de projetos</button>
          </Link>
        </Header>
        <Content>a</Content>
      </main>
    </React.Fragment>
  );
};
export default PagePosts;
