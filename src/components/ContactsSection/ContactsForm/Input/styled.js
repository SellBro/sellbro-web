import styled from 'styled-components';

import { colors } from 'utils/styles';

export const InputRoot = styled.div`
  flex-basis: 0px;
  margin: 15px 0px;
  background-color: ${colors.dividerBackground};
  min-height: 60px;
  ${props => props.isTextArea && `min-height: 200px;`}
`;

export const InputContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const InputColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding-right: 15px;
  ${props => props.isTextArea && `height: 200px;`}
`;

export const Input = styled.input`
  font-family: Comfortaa;
  padding: 0px;
  width: 100%;
  font-size: 20px;
  background: transparent;
  border: none;
  color: ${colors.textPrimary};
`;

export const InputTitle = styled.div`
  font-size: 14px;
  padding-top: 8px;
  color: ${colors.textSecondary};
`;

export const TextArea = styled.textarea`
  font-family: Comfortaa;
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding: 16px 0px 0px;
  width: 100%;
  font-size: 20px;
  color: ${colors.textPrimary};
  background: transparent;
  border: none;
  resize: none;
  margin-bottom: 15px;
`;

export const ErrorLabel = styled.span`
  font-size: 16px;
  color: ${colors.textError};
`;
