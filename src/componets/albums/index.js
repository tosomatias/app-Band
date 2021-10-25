import React, { useEffect, useState } from "react";
import NavBar from "../navbar/index";
import { useHistory } from "react-router-dom";
import {
  ContainerBand,
  Title,
  BandName,
  ContainerTitle,
  ImgReturn,
} from "./style";
import Album from "./Album";
import Return from "../img/return.svg";

const Albums = ({ search, idBand, nameBand }) => {
  const [albums, setAlbums] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const challenge = async () => {
      const url = search
        ? `https://my-json-server.typicode.com/improvein/dev-challenge/albums?q=${search}`
        : `https://my-json-server.typicode.com/improvein/dev-challenge/albums`;
      const respuesta = await fetch(url);
      const album = await respuesta.json();

      setAlbums(album);
    };
    challenge();
  }, [setAlbums, search]);
  const ReturnHome = () => {
    history.push("/home");
  };
  return (
    <>
      <NavBar />
      <ContainerTitle>
        {nameBand ? (
          <ImgReturn src={Return} alt="return" onClick={ReturnHome} />
        ) : null}
        <Title>Discografía</Title>
      </ContainerTitle>
      {nameBand ? <BandName> Banda Musical: {nameBand} </BandName> : null}
      <ContainerBand>
        {albums.map((album) => (
          <Album
            key={album.bandId}
            album={album}
            search={search}
            idBand={idBand}
          />
        ))}
      </ContainerBand>
    </>
  );
};

export default Albums;
