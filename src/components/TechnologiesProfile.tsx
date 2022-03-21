import React, { memo } from "react";
import { Container } from "../styles/components/TechnologiesProfile";

const TechnologiesProfile: React.FC = () => {
  return (
    <Container>
      <h3>Tecnologias</h3>
      <div className="technologies">
        <div>REACT JS</div>
        <div>NEXT JS</div>
        <div>NODE JS</div>
        <div>TYPESCRIPT</div>
        <div>JAVASCRIPT</div>
        <div>ORACLE</div>
        <div>SQL</div>
        <div>GIT</div>
        <div>SASS</div>
      </div>
    </Container>
  );
};

export default memo(TechnologiesProfile);
