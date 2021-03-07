import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Button = ({ onSubmit }) => {
  return (
    <S.ButtonRoot onClick={onSubmit}>
      <S.Button>Send Message</S.Button>
    </S.ButtonRoot>
  );
};

Button.propTypes = {
  onSubmit: PropTypes.func,
};

Button.defaultProps = {
  onSubmit: () => {},
};

export default Button;
