import Link from "next/link";
import React from "react";

import { FiCalendar, FiUser, FiClock, FiFileText } from "react-icons/fi";

import { Container } from "../styles/components/CardPublication";

const CardPublication: React.FC = () => {
  return (
    <Container>
      <div className="headerPublication">
        <div className="titlePublication">
          <FiFileText fontSize={32} color={"#BB86FC"} />
          <Link href={"/"}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a title="Navegar até o post">Ipsum dolor sit amet consectetur adipisicing elit, voluptatum recusandae assumenda debitis.</a>
          </Link>
        </div>
      </div>
      <div className="informationPublication">
        <div className="datePublication" title="Data de publicação">
          <FiCalendar fontSize={18} color={"#BB86FC"} />
          <p>3 Mar 2022</p>
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
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum numquam voluptatem veritatis sint odit quibusdam consectetur itaque
          perspiciatis? Rerum, repellendus? Atque reiciendis voluptates, voluptatum recusandae assumenda debitis quasi maxime.
        </p>
      </div>
    </Container>
  );
};

export default CardPublication;
