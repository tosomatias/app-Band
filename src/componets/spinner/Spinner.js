import React from "react";
import NavBar from "../navbar/index";
import { useHistory } from "react-router-dom";

import { Container, ContainerLogo, Containerh1, ButtonReturn } from "./style";

const Spinner = () => {
  const history = useHistory();
  const returnHome = () => {
    history.push("/home");
  };
  return (
    <>
      <NavBar />
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
