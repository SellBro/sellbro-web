import styled from 'styled-components';

import { colors } from 'utils/styles';

export const TeamContainer = styled.div`
  font-family: Comfortaa;

  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 5;
  font-family: Co;
  letter-spacing: 1px;
  margin-bottom: 50px;
`;

export const TeamHeader = styled.h3`
  font-family: Comfortaa;
  font-size: 48px;

  position: relative;
  padding-bottom: 40px;
  color: ${colors.textPrimary};
`;

export const TeamCardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  z-index: 1;
`;

export const TeamRoot = styled.div`
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  z-index: 1;
  margin: 0px auto;
  max-width: 1440px;
`;
