import styled from 'styled-components';

import { colors } from 'utils/styles';

export const InputRoot = styled.div`
  flex-basis: 0px;
  margin: 15px 0px;
  background-color: ${colors.dividerBackground};
  min-height: 60px;
  ${props => props.isTextArea && `min-height: 200px;`}
  ${props => props.hasError && `outline: ${colors.textError} solid 1px;`}
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

  ${props =>
    props.hasLabel &&
    `
    -webkit-box-pack: start;
    justify-content: flex-start;
}`}
`;

export const Label = styled.div`
  font-size: 14px;
  padding-top: 8px;
  padding-bottom: 5px;
  text-transform: capitalize;
  color: ${colors.textSecondary};
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

  ${props =>
    props.notEmpty &&
    `
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-top: 4px !important;`}
`;

export const ErrorLabel = styled.span`
  font-size: 16px;
  color: ${colors.textError};
`;
