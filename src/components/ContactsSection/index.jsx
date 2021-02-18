import React from 'react';

import { strings } from 'data';
import { SectionHeader } from 'components';

import ContactsForm from './ContactsForm';
import ContactsInfo from './ContactsInfo';

import * as S from './styled';

const ContactsSection = () => {
  return (
    <S.ContactsRoot>
      <S.ContactsContainer>
        <SectionHeader>{strings.contacts.header}</SectionHeader>
        <S.ContactsHeading>{strings.contacts.heading2}</S.ContactsHeading>
        <S.ContactsRowContainer>
          <ContactsForm />
          <ContactsInfo />
        </S.ContactsRowContainer>
      </S.ContactsContainer>
    </S.ContactsRoot>
  );
};

export default ContactsSection;
