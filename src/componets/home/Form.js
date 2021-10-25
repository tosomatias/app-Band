import React from "react";
import { ContainerForm, Input, Button } from "./style";

const Form = ({ word, setWord, setSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(word);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ContainerForm>
          <Input
            type="text"
            placeholder="Nombre de la banda"
            onChange={(e) => setWord(e.target.value)}
          />

          <Button type="submit">Buscar</Button>
        </ContainerForm>
      </form>
    </>
  );
};

export default Form;
