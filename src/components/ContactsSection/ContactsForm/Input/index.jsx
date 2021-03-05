import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';

import * as S from './styled';

const TextInput = ({ label, type, icon, ...props }) => {
  return (
    <S.InputRoot isTextArea={type === 'textarea'}>
      <S.InputContainer>
        <Icon icon={icon} />
        <S.InputColumn>
          {type === 'textarea' ? <S.TextArea rows={4} {...props} /> : <S.Input {...props} />}
        </S.InputColumn>
      </S.InputContainer>
    </S.InputRoot>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
};

export default TextInput;
