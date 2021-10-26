import React, { useEffect, useState } from "react";
import Form from "./Form";
import Music from "../music/Music";
import iconGlass from "../img/glass.svg";
import X from "../img/x.svg";

import {
  ContainerBand,
  Title,
  Glass,
  ImgGlass,
  ConteinerFormHome,
  ImgClose,
} from "./style";

const Home = ({
  setMusic,
  musics,
  search,
  setSearch,
  setIdBand,
  setNameBand,
}) => {
  const [word, setWord] = useState("");

  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    const challenge = async () => {
      const url = search
        ? `https://my-json-server.typicode.com/improvein/dev-challenge/bands?q=${search}`
        : `https://my-json-server.typicode.com/improvein/dev-challenge/bands`;
      const respuesta = await fetch(url);
      const bands = await respuesta.json();
      setMusic(bands);
    };
    challenge();
  }, [setMusic, search]);

  const searchGlass = () => {
    setOpenSearch(true);
  };
  const closeSearchGlass = () => {
    setOpenSearch(false);
  };
  return (
    <>
      {openSearch ? (
        <ConteinerFormHome>
          <ImgClose src={X} alt="close Icon" onClick={closeSearchGlass} />
          <Form setWord={setWord} word={word} setSearch={setSearch} />
        </ConteinerFormHome>
      ) : null}
      <Title>Bandas Musicales</Title>
      <ContainerBand>
        {musics.map((music) => (
          <Music
            key={music.id}
            music={music}
            search={search}
            setIdBand={setIdBand}
            setNameBand={setNameBand}
          />
        ))}

        <Glass>
          <ImgGlass
            src={iconGlass}
            alt="glass"
            onClick={openSearch ? closeSearchGlass : searchGlass}
          />
        </Glass>
      </ContainerBand>
    </>
  );
};

export default Home;
