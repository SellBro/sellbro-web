import React from 'react';

import ContactsForm from './ContactsForm';
import ContactsInfo from './ContactsInfo';

import * as S from './styled';

const ContactsSection = () => {
  return (
    <S.ContactsRoot>
      <S.ContactsContainer>
        <S.ContactsHeading>Contacts</S.ContactsHeading>
        <S.ContactsRowContainer>
          <ContactsForm />
          <ContactsInfo />
        </S.ContactsRowContainer>
      </S.ContactsContainer>
    </S.ContactsRoot>
  );
};

export default ContactsSection;
