import React from "react";
import { useState } from "react/cjs/react.development";
import { Container, ContainerName, Text, List, Img } from "./style";
import Claxon from "../img/claxon.svg";
import Arrow from "../img/arrow.svg";
import { useHistory } from "react-router-dom";

const Music = ({ music, setIdBand, setNameBand }) => {
  const history = useHistory();
  const [membersList, SetMembersList] = useState(false);

  const { name, year, country, genreCode, members, id } = music;
  const Name = name;

  const Members = () => {
    SetMembersList(true);
  };
  const CloseMembers = () => {
    SetMembersList(false);
  };
  const Albums = (id) => {
    history.push(`/albums`);
    setIdBand(id);
    setNameBand(Name);
  };

  return (
    <Container>
      <ContainerName>
        <Text>Nombre: {Name}</Text>
        <Text>Año: {year}</Text>
        <Text>
          Integrantes
          <Img
            src={Arrow}
            alt="icon"
            onClick={membersList ? CloseMembers : Members}
            membersList={membersList}
          />
        </Text>
        {membersList ? (
          <>
            {members.map((member) => (
              <List key={member.name}>Integrantes: {member.name}</List>
            ))}
          </>
        ) : null}
        <Text>Pais: {country}</Text>
        <Text>Genero: {genreCode}</Text>
        <Text onClick={() => Albums(id)}>
          Discos{" "}
          <Img src={Claxon} alt="icon" onClick={() => Albums(id, Name)} />
        </Text>
      </ContainerName>
    </Container>
  );
};

export default Music;
