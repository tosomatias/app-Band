import React from "react";
import { useHistory } from "react-router-dom";
import { auth, signOut } from "../../firebaseConfig";
import { Container, Title, Button } from "./style";

const NavBar = () => {
  const history = useHistory();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        history.push("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const closeSearchGlass = () => {
    history.push("/spinner");
  };
  return (
    <Container>
      <Title onClick={closeSearchGlass}>My Band</Title>

      <Button onClick={handleSignOut}>Cerrar sesión</Button>
    </Container>
  );
};

export default NavBar;
