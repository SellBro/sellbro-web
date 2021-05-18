import styled from 'styled-components';

import { colors } from 'utils/styles';

export const ContactsInfoRoot = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-flow: column wrap;
  -webkit-box-pack: start;
  justify-content: flex-start;

  @media (max-width: 1071px) {
    margin-top: 50px;
  }
`;

export const InfoItemContainer = styled.div`
  width: 100%;
  margin: 15px 0px;
`;

export const InfoItemHeading = styled.h4`
  font-size: 24px;
  line-height: normal;
  padding-bottom: 15px;
`;

export const InfoItemMailTo = styled.span`
  font-size: 20px;
  line-height: normal;
  opacity: 0.6;
  cursor: pointer;
  transition: all 0.3s linear 0s;

  :hover {
    color: ${colors.textSecondary};
    opacity: 1;
  }
`;

export const TextRowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoItemText = styled.div`
  font-size: 20px;
  line-height: normal;
  opacity: 0.6;
  -webkit-box-flex: ${props => (props.isPhone ? 2 : 1)};
  flex-grow: ${props => (props.isPhone ? 2 : 1)};
  flex-basis: 0px;
`;

export const LinksContainer = styled.div`
  width: 100%;
  min-width: 300px;
  margin: 0px 0px 0px -10px;
`;
