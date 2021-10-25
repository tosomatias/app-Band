import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
`;

export const ContainerBand = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;
  color: #fff;
  margin: 0;
`;
export const Text = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  align-items: center;
  @media (min-width: 992px) {
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-style: italic;
  font-weight: bold;
  font-size: 24px;

  @media (min-width: 992px) {
    font-size: 46px;
  }
`;

export const BandName = styled.p`
  text-align: start;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  padding-left: 4.5%;
  margin-bottom: 1%;
  @media (min-width: 992px) {
    font-size: 30px;
    padding-left: 9.5%;
  }
`;
export const ContainerAlbum = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5%;
  @media (min-width: 992px) {
    padding: 0 10%;
  }
`;
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding-left: 5%;
  padding-right: 30%;
  @media (min-width: 992px) {
    padding-right: 40%;
    padding-left: 10%;
  }
`;

export const ImgReturn = styled.img`
  width: 6%;
  cursor: pointer;
  padding-top: 1%;
  @media (min-width: 992px) {
    width: 3%;
  }
`;
