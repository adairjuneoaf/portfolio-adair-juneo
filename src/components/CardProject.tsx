import React from "react";

import GitHubImage from "../assets/svg/github.svg";
import DefaultIconProject from "../assets/svg/folder.svg";

import { Container } from "../styles/components/CardProject";

interface CardProjectProps {
  id: number;
  description: string;
  html_url: string;
  name: string;
  language: string;
}

export default function CardProject({ id, description, html_url, name, language }: CardProjectProps) {
  return (
    <Container>
      <div className="titleProject">
        {name === "404" ? (
          <img src={DefaultIconProject} alt="Icone que representa o projeto." />
        ) : (
          <img src={`https://raw.githubusercontent.com/adairjuneoaf/${name}/master/.github/icon.svg`} alt="Icon" />
        )}
        <h4>{name}</h4>
      </div>
      <div className="descriptionProject">
        <p>{description}</p>
      </div>
      <div className="footerProject">
        <div className="commits">
          <img src={GitHubImage} alt="Icone que representa os commits do projeto." />
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
          {language === null ? <span className="other"></span> : <></>}
          {language !== null ? <p>{language}</p> : <p>HTML, CSS e JS</p>}
        </div>
      </div>
    </Container>
  );
}
