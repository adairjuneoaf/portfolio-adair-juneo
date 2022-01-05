import React from "react";
import { Container } from "../styles/components/ExperienceProfile";

export default function ExperienceProfile() {
  return (
    <Container>
      <h3>Experiências</h3>
      <div className="experiences">
        <ul>
          <li>Freelancer</li>
          <p>2021 - Atualmente</p>
          <p>Desenvolvedor Full Stack</p>
        </ul>
        <ul>
          <li>GB Musical</li>
          <p>2019 - 2021</p>
          <p>Analista de Sistemas e Projetos</p>
        </ul>
        <ul>
          <li>Renon, Costa e CIA LTDA</li>
          <p>2017 - 2019</p>
          <p>Técnico em Informática</p>
        </ul>
      </div>
    </Container>
  );
}
