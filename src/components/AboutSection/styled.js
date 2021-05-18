import styled from 'styled-components';

import { colors } from 'utils/styles';

export const AboutRoot = styled.div`
  position: relative;
  overflow-x: hidden;
  z-index: 1;
`;

export const AboutContainer = styled.div`
  width: 100%;
  margin: 0px auto 100px;
  max-width: 1440px;
  height: 100%;
`;

export const AboutContentRoot = styled.div`
  font-family: Comfortaa;

  display: flex;
  flex-flow: row wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  z-index: 0;
  margin-left: 150px;
  letter-spacing: 1px;

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin: 0 50px;
  }

  @media only screen and (max-width: 768px) {
    margin: 0 50px;
  }
`;

export const AboutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  flex-basis: 50%;

  @media only screen and (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const AboutInfoHeading = styled.h3`
  font-family: Comfortaa;
  font-size: 48px;
  color: ${colors.textPrimary};

  @media only screen and (max-width: 1024px) {
    font-size: 36px;
  }
`;

export const AboutInfoText = styled.p`
  font-size: 22px;
  line-height: 35px;
  opacity: 0.8;
  margin-top: 30px;
  color: ${colors.textPrimary};

  @media only screen and (max-width: 1024px) {
    font-size: 18px;
  }
`;

export const AboutImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  flex-basis: 50%;
  z-index: 1;

  > img {
    margin: auto;
    width: 100%;
    max-width: 400px;
    pointer-events: none;
  }

  @media only screen and (max-width: 768px) {
    flex-basis: 100%;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin-top: 50px;

    > img {
      width: 70%;
    }
  }
`;
