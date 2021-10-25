import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
`;

export const ContainerName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
`;
export const Text = styled.p`
  margin: 0;
  font-size: 10px;
  font-weight: 400;
  align-items: center;
  margin-top: 5px;
  @media (min-width: 992px) {
    font-size: 20px;
  }
`;
export const List = styled.li`
  margin: 0;
  font-size: 10px;
  font-weight: 400;
  @media (min-width: 992px) {
    font-size: 15px;
    margin: 1% 0;
  }
`;
export const Img = styled.img`
  width: 10%;
  animation: animationIcon 4s ease-in infinite;
  animation-direction: alternate;
  margin-left: 5px;
  cursor: pointer;
  transform: ${({ membersList }) =>
    membersList ? "rotate(90deg)" : "rotate(0)"};
  @keyframes animationIcon {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (min-width: 992px) {
    width: 6%;
    margin-left: 15px;
  }
`;
export const ImgClose = styled.img`
  width: 10%;
  margin-left: 50%;
`;
