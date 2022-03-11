import Link from "next/link";
import React from "react";

import { FiCalendar, FiUser, FiClock, FiFileText } from "react-icons/fi";

import { Container } from "../styles/components/CardPublication";

interface CardPublicationProps {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
}

const CardPublication: React.FC<CardPublicationProps> = ({ slug, title, publishedAt, description }) => {
  return (
    <Container>
      <div className="headerPublication">
        <div className="titlePublication">
          <FiFileText fontSize={32} color={"#BB86FC"} />
          <Link href={`/blog/${slug}`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a title="Navegar até o post">{title}</a>
          </Link>
        </div>
      </div>
      <div className="informationPublication">
        <div className="datePublication" title="Data de publicação">
          <FiCalendar fontSize={18} color={"#BB86FC"} />
          <p>{publishedAt}</p>
        </div>
        <div className="authorPublication" title="Autor da publicação">
          <FiUser fontSize={18} color={"#BB86FC"} />
          <p>Adair Juneo</p>
        </div>
        <div className="readingTime" title="Tempo de leitura">
          <FiClock fontSize={18} color={"#BB86FC"} />
          <p>5 min</p>
        </div>
      </div>

      <div className="subtitlePublication">
        <p>{description}</p>
      </div>
    </Container>
  );
};

export default CardPublication;
