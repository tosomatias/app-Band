import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  margin-top: 25%;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row-reverse;
    margin-top: 5%;
  }
`;
export const ContainerLogo = styled.div`
  width: 50%;
  margin-bottom: 0;
  padding-left: 30%;
  display: flex;
  flex-direction: column;
  color: #2997de;
  font-family: "Poppins", sans-serif;
  @media (min-width: 992px) {
    width: 20%;
    padding-right: 10%;
    padding-left: 20%;
  }
`;
export const ContainerFomr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2% 7%;
`;
export const InputForm = styled.input`
  font-family: "Poppins", sans-serif;
  border-radius: 10px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 5%;
  padding-left: 7%;
  margin-bottom: 6%;

  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  color: #ffffff;
  :focus {
    outline: none;
  }
  border: none;
  ::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 16px;

    color: ${(props) => {
      return props.error ? "#F9BA48" : "gray";
    }};
    font-weight: 300;
  }
  @media (min-width: 992px) {
    font-size: 20px;
    padding: 1.5%;
    padding-left: 5%;
    margin-bottom: 5%;
  }
`;

export const ContainerGoogle = styled.button`
  width: 100%;
  border: 1px solid #2997de;
  border-radius: 10px;
  background-color: transparent;
  color: #2997de;
  font-size: 20px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: center;
  padding-left: 5%;
  padding-right: 20%;
  cursor: pointer;
  @media (min-width: 992px) {
    padding-right: 30%;
    margin-top: 3%;
  }
`;
export const Image = styled.img`
  width: 10%;
  margin-top: 1%;

  @media (min-width: 992px) {
    width: 10%;
    margin-right: 0;
  }
`;

export const TextAccount = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  @media (min-width: 992px) {
    margin-top: 5%;
  }
`;
export const ContainerLoginButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 5%;
`;
export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid #2997de;
  border-radius: 10px;
  background-color: transparent;
  color: #2997de;
  font-size: 20px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
`;

export const Path = styled.path`
  fill: none;
  stroke: #fff;
  stroke-width: 4;

  stroke-dasharray: 5400;
  stroke-dashoffset: 5400;

  animation: animationIcon 4s ease-in infinite;
  animation-direction: alternate;
  @keyframes animationIcon {
    to {
      stroke-dashoffset: 0;
      stroke: #2997de;
    }
  }
`;
export const TextError = styled.p`
  color: red;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
`;
