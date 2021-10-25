import React from "react";
import { Container, Text, ContainerAlbum } from "./style";

const Album = ({ album, idBand }) => {
  return (
    <Container>
      {idBand === album.bandId ? (
        <ContainerAlbum>
          <Text>Disco: {album.name}</Text>
          <Text>Año: {album.year}</Text>
        </ContainerAlbum>
      ) : null}
    </Container>
  );
};

export default Album;
