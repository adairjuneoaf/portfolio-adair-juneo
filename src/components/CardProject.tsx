import React from "react";

import ImgFolderProject from "../assets/svg/folder.svg";

import { Container } from "../styles/components/CardProject";

export default function CardProject() {
  return (
    <Container>
      <div className="titleProject">
        <img src={ImgFolderProject} alt="Icone que representa o projeto." />
        <h4>Project title development</h4>
      </div>
      <div className="descriptionProject">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugit excepturi architecto deserunt blanditiis. Voluptatum
          impedit enim.
        </p>
      </div>
      <div className="footerProject">
        <div className="commits">
          <img src={ImgFolderProject} alt="Icone que representa os commits do projeto." />
          <p>18</p>
        </div>
        <div className="technologies">
          <span></span>
          <p>TypeScript</p>
        </div>
      </div>
    </Container>
  );
}
