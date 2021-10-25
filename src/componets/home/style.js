import styled from "styled-components/macro";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2% 7%;
  z-index: 999;
`;

export const Input = styled.input`
  margin-top: 9%;
  margin-bottom: 5%;
  border-radius: 10px;
  width: 100%;
  padding: 3%;
  box-sizing: border-box;
  margin-bottom: 6%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  color: #ffffff;
  :focus {
    outline: none;
  }
  ::placeholder {
    text-align: center;
  }
  border: none;
`;
export const Button = styled.button`
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  background-color: transparent;
  color: #2997de;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  color: black;
  @media (min-width: 992px) {
    cursor: pointer;
  }
`;
export const ImgClose = styled.img`
  position: absolute;
  cursor: pointer;
`;

export const ContainerBand = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 130px);
  grid-gap: 40px;
  align-items: center;
  justify-content: center;
  padding-left: 10%;
  color: #fff;
  margin: 5% 0;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 353px);
    grid-gap: 50px;
    margin-bottom: 5%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-style: italic;
  @media (min-width: 992px) {
    font-size: 46px;
    cursor: pointer;
  }
`;
export const Glass = styled.div`
  width: 25%;
  position: fixed;
  top: 8%;
  right: -10px;
  background-color: transparent;
  transition: transform 0.5s ease-in-out;
  animation-name: moveUp;
  -webkit-animation-name: moveUp;
  animation-direction: alternate;
  -webkit-animation-direction: alternate;

  animation-duration: 2s;
  -webkit-animation-duration: 2s;

  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  cursor: pointer;

  @keyframes moveUp {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(20px);
    }
  }
  @media (min-width: 992px) {
    width: 10%;
    top: 12%;
    right: 30px;
  }
`;

export const ImgGlass = styled.img`
  width: 40%;
  align-items: center;
  margin-left: 35%;
`;
export const ConteinerFormHome = styled.div`
  position: fixed;
  top: 40%;
  left: 17%;
  height: 100px;
  width: 250px;
  background-color: #2997de;
  border-radius: 10px;
  @media (min-width: 992px) {
    top: 10%;
    left: 5%;
  }
`;
