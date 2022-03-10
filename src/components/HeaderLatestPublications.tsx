import React from "react";
import Link from "next/link";

import { Container } from "../styles/components/HeaderLatestPublications";

const HeaderLatestPublications: React.FC = () => {
  return (
    <Container>
      <h3 title="Visite o meu blog clicando no botão ao lado e veja mais publicações">Últimas publicações e artigos</h3>
      <Link href="/blog">
        <button type="button" title="Navegar até o blog do portfólio">
          Visualizar tudo
        </button>
      </Link>
    </Container>
  );
};

export default HeaderLatestPublications;
