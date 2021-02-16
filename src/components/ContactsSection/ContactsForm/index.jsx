import React from 'react';

import { strings } from 'data';

import Input from './Input';
import Button from './Button';

import * as S from './styled';

const ContactsForm = () => {
  return (
    <S.ContactsFormRoot>
      {strings.contacts.form.inputs.map((item, i) => (
        <Input key={i} {...item} />
      ))}
      <Button />
    </S.ContactsFormRoot>
  );
};

export default ContactsForm;
