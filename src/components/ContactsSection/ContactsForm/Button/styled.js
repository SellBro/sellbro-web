import styled from 'styled-components';

import { colors } from 'utils/styles';

export const ButtonRoot = styled.div`
  user-select: none;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s linear 0s;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  box-shadow: rgb(212 107 16 / 50%) 0px 3px 32px;
  margin-top: 15px;
  background-color: ${colors.textSecondary};
  width: 100%;
  padding: 24px 0px;
`;

export const Button = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05px;
  white-space: nowrap;
  padding-top: 3px;
  color: ${colors.textPrimary};
`;
