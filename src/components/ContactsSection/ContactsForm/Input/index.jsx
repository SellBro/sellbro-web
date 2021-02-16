import React from 'react';

import Icon from './Icon';

import * as S from './styled';

const TextInput = ({ label, type, icon, ...props }) => {
  return (
    <S.InputRoot isTextArea={type === 'textarea'}>
      <S.InputContainer>
        <Icon icon={icon} />
        <S.InputColumn>
          {/* <S.InputTitle>{label}</S.InputTitle> */}
          {type === 'textarea' ? <S.TextArea rows={4} {...props} /> : <S.Input {...props} />}
        </S.InputColumn>
      </S.InputContainer>
    </S.InputRoot>
  );
};

export default TextInput;
