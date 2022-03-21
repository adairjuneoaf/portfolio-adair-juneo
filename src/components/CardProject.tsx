import React, { memo } from "react";

import { FiFolder, FiGithub } from "react-icons/fi";

import TechnologiesProject from "./TechnologiesProject";

import { Container } from "../styles/components/CardProject";

interface CardProjectProps {
  id: number;
  description: string;
  html_url: string;
  name: string;
  language: string;
  topics: Array<string>;
}

const CardProject: React.FC<CardProjectProps> = ({ id, description, html_url, name, language, topics }) => {
  return (
    <Container>
      <div className="headerProject">
        <div className="titleProject">
          {/* <img src={DefaultIconProject} alt="Icone que representa o projeto." /> */}
          <FiFolder fontSize={32} color={"#BB86FC"} title="Icone que representa o projeto." />
          <h4>{name}</h4>
        </div>

        <div className="technologiesProject">
          <TechnologiesProject topics={topics} />
        </div>
      </div>
      <div className="descriptionProject">
        <p>{description}</p>
      </div>
      <div className="footerProject">
        <div className="commits">
          <FiGithub fontSize={24} color={"#BB86FC"} title="Id do projeto, clique para navegar até o repositório no GitHub." />
          <p>
            <a href={html_url} title="Navegar até o repositório desse projeto." target="_blank" rel="noreferrer">
              # {id}
            </a>
          </p>
        </div>
        <div className="technologies">
          {language === "TypeScript" ? <span className="TypeScript"></span> : <></>}
          {language === "JavaScript" ? <span className="JavaScript"></span> : <></>}
          {language === "HTML" ? <span className="HTML"></span> : <></>}
          {language === "CSS" ? <span className="CSS"></span> : <></>}
          {language === null ? <span className="Other"></span> : <></>}
          {language !== null ? <p>{language}</p> : <p>HTML, CSS e JS</p>}
        </div>
      </div>
    </Container>
  );
};

export default memo(CardProject);
