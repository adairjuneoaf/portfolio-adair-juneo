import React from "react";
import Link from "next/link";

import { FiHome, FiCornerUpLeft } from "react-icons/fi";

import { Header } from "../styles/components/HeaderBlog";

type HeaderBlogTypes = {
  titleHeader: string;
  isDisplayIcon: boolean;
};

const HeaderBlog: React.FC<HeaderBlogTypes> = ({ isDisplayIcon = true, titleHeader }) => {
  return (
    <Header>
      <h3>{titleHeader}</h3>
      <div className="buttons">
        {isDisplayIcon && (
          <Link href={"/blog"}>
            <FiCornerUpLeft fontSize={28} title="Voltar para página do Blog" cursor={"pointer"} className="buttonsNavigation" />
          </Link>
        )}
        <Link href={"/"}>
          <FiHome fontSize={28} title="Voltar para página de projetos" cursor={"pointer"} className="buttonsNavigation" />
        </Link>
      </div>
    </Header>
  );
};

export default HeaderBlog;
