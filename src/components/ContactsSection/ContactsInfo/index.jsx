import React from 'react';

import Mails from './Mails';
import Links from './Links';
import Phones from './Phones';

import * as S from './styled';

const ContactsMedia = () => {
  return (
    <S.ContactsInfoRoot>
      <Mails />
      <Phones />
      <Links />
    </S.ContactsInfoRoot>
  );
};

export default ContactsMedia;
