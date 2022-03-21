import React, { memo } from "react";

import { Container } from "../styles/components/HeaderProjects";

const HeaderProjects: React.FC = () => {
  return (
    <Container>
      <h3>Meus projetos</h3>
      {/* <button type="button">Ver todos</button> */}
    </Container>
  );
};

export default memo(HeaderProjects);
