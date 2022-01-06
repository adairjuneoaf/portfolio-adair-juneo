import React from "react";
import { Container } from "../styles/components/TechnologiesProject";

interface TechnologiesProjectProps {
  topics: Array<string>;
}

const TechnologiesProject: React.FC<TechnologiesProjectProps> = ({ topics }) => {
  return (
    <Container>
      <div>
        {topics.map((topic, idx) => (
          <p key={idx}>{topic}</p>
        ))}
      </div>
    </Container>
  );
};

export default TechnologiesProject;
