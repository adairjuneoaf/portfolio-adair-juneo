import React from "react";

import { Container } from "../styles/components/EducationHistory";

export default function EducationHistory() {
  return (
    <Container>
      <h3>Educação</h3>
      <div className="education">
        <ul>
          <li>Rocketseat</li>
          <p>2021 - Atualmente</p>
          <p>Desenvolvimento Full-Stack</p>
        </ul>
        <ul>
          <li>Faculdade de Ciência e Tecnologia - MG</li>
          <p>2017 - Atualmente</p>
          <p>Engenharia de Computação</p>
        </ul>
        <ul>
          <li>Instituto Federal de Ciência e Tecnologia - MG</li>
          <p>2014 - 2017</p>
          <p>Tecnólogo em Análise e Desenvolvimento de Sistemas</p>
        </ul>
      </div>
    </Container>
  );
}
