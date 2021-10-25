import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0;
  padding: 0 7%;
  background-color: #2997de;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid #fff;
  color: #fff;
  padding: 0.5% 5%;
  cursor: pointer;
`;
