import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2% 7%;
`;
export const ContainerLogo = styled.div`
  width: 50%;
  margin-bottom: 0;
  padding-left: 30%;
  display: flex;
  flex-direction: column;
  color: #2997de;

  @media (min-width: 992px) {
    width: 20%;
    text-align: center;
  }
`;

export const Containerh1 = styled.h1`
  text-align: center;
`;
export const ButtonReturn = styled.button`
  width: 75%;
  border: 1px solid #2997de;
  border-radius: 10px;
  background-color: transparent;
  color: #2997de;
  font-size: 20px;
  font-weight: bold;
  padding: 4%;
  align-items: center;
  text-align: center;

  cursor: pointer;
  @media (min-width: 992px) {
    width: 30%;
    padding: 2%;
    font-size: 30px;
  }
`;
