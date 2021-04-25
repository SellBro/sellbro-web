import styled from 'styled-components';

import { colors } from 'utils/styles';

export const CardContainer = styled.div`
  font-family: Comfortaa;

  flex-basis: 0px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;

export const ImageContainer = styled.div`
  background-color: grey;
  width: 325px;
  height: 440px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center top;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionFirstName = styled.h3`
  margin-top: 15px;
  font-size: 32px;
`;

export const DescriptionLastName = styled.h3`
  font-size: 32px;
`;

export const DescriptionRank = styled.h3`
  font-size: 24px;
  margin-top: 5px;
  color: ${colors.textSecondary};
`;

export const DescriptionText = styled.p`
  margin-top: 10px;
  line-height: 20px;
  opacity: 0.8;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  margin-left: -5px;
  margin-top: 5px;
`;
