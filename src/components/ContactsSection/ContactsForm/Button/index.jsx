import React from 'react';

import * as S from './styled';

const Button = ({ onSubmit }) => {
  return (
    <S.ButtonRoot onClick={onSubmit}>
      <S.Button>Send Message</S.Button>
    </S.ButtonRoot>
  );
};

export default Button;
