import React from "react";
import { useHistory } from "react-router-dom";

import { Container, ContainerLogo, Containerh1, ButtonReturn } from "./style";

const Spinner = () => {
  const history = useHistory();
  const returnHome = () => {
    history.push("/home");
  };
  return (
    <>
      <ContainerLogo>
        <Containerh1>My Band</Containerh1>
      </ContainerLogo>
      <Container onClick={returnHome}>
        <ButtonReturn>Volver al Home</ButtonReturn>
      </Container>
    </>
  );
};

export default Spinner;
