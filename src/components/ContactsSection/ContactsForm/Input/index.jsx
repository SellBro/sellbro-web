import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import Icon from './Icon';

import * as S from './styled';

const TextInput = ({ label, icon, type, ...props }) => {
  const [field, meta] = useField(props);

  const hasError = meta.touched && meta.error;

  return (
    <>
      <S.InputRoot hasError={hasError} isTextArea={type === 'textarea'}>
        <S.InputContainer>
          <Icon icon={icon} />
          <S.InputColumn isTextArea={type === 'textarea'} hasLabel={field.value}>
            {field.value && <S.Label>{field.name}</S.Label>}
            {type === 'textarea' ? (
              <S.TextArea notEmpty={field.value} {...field} {...props} />
            ) : (
              <S.Input {...field} {...props} />
            )}
          </S.InputColumn>
        </S.InputContainer>
      </S.InputRoot>
      {hasError && <S.ErrorLabel>{meta.error}</S.ErrorLabel>}
    </>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
};

export default TextInput;
