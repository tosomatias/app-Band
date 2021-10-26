import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, ContainerLogo, Containerh1, ButtonReturn } from "./style";

const Spinner = () => {
  const [animation, setAnimation] = useState(false);
  const history = useHistory();
  const returnHome = () => {
    setAnimation(true);
    setTimeout(() => {
      history.push("/home");
    }, 700);
  };
  return (
    <>
      <ContainerLogo>
        <Containerh1>My Band</Containerh1>
      </ContainerLogo>
      <Container onClick={returnHome}>
        <ButtonReturn animation={animation}>Volver al Home</ButtonReturn>
      </Container>
    </>
  );
};

export default Spinner;
