import React from 'react';

import { strings } from 'data';

import * as S from './styled';

const Phones = () => {
  return (
    <S.InfoItemContainer>
      <S.InfoItemHeading>{strings.contacts.info.phones.heading}</S.InfoItemHeading>
      {strings.contacts.info.phones.phones.map(({ country, phone }, i) => (
        <S.TextRowContainer key={i}>
          <S.InfoItemText>{country}</S.InfoItemText>
          <S.InfoItemText isPhone>{phone}</S.InfoItemText>
        </S.TextRowContainer>
      ))}
    </S.InfoItemContainer>
  );
};

export default Phones;
