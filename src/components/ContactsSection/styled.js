import styled from 'styled-components';

import { colors } from 'utils/styles';

export const ContactsRoot = styled.div`
  font-family: Comfortaa;
  min-height: 60vh;
  position: relative;
  overflow-x: hidden;
  z-index: 1;
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 5;
  letter-spacing: 1px;
  margin: 0px auto;
  max-width: 1440px;
`;

export const ContactsHeading = styled.h3`
  font-size: 48px;
  margin: 0px 171px;
  position: relative;
  padding-bottom: 40px;
  color: ${colors.textPrimary};
`;

export const ContactsRowContainer = styled.div`
  margin: 0px 171px 171px;
  display: flex;
  flex-flow: row wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
