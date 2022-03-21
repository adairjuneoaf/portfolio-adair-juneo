import React from "react";

import Loader from "react-loader-spinner";

import { Container } from "../styles/components/SpinnerLoading";

const SpinnerLoading: React.FC = () => {
  return (
    <Container>
      <Loader type="ThreeDots" height={64} width={64} color="#BB86FC" />
    </Container>
  );
};

export default SpinnerLoading;
