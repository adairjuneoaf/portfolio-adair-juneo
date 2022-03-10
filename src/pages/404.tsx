import { NextPage } from "next";
import Link from "next/link";

import { Container } from "../styles/pages/404";

const Custom404: NextPage = () => {
  return (
    <Container>
      <h1>404</h1>
      <h3>PAGE NOT FOUND</h3>
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a title="Navegar até a página inicial">Voltar para página inicial</a>
      </Link>
    </Container>
  );
};

export default Custom404;
