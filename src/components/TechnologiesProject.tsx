import React from "react";
import { Container } from "../styles/components/TechnologiesProject";

interface TechnologiesProjectProps {
  topics: Array<string>;
}

export default function TechnologiesProject({ topics }: TechnologiesProjectProps) {
  return (
    <Container>
      <div>
        {topics.map((topic, idx) => (
          <p key={idx}>{topic}</p>
        ))}
      </div>
    </Container>
  );
}
