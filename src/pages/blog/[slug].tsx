import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import HeaderBlog from "../../components/HeaderBlog";

import { Content } from "../../styles/pages/blog/[slug]";

const Post: NextPage = () => {
  const { query } = useRouter();

  return (
    <React.Fragment>
      <main className="postPage">
        <HeaderBlog isDisplayIcon={true} titleHeader={String(query.slug)} />
        <Content>{query.slug}</Content>
      </main>
    </React.Fragment>
  );
};
export default Post;
