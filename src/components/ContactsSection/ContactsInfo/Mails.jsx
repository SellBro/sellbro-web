import React from 'react';

import { strings } from 'data';

import * as S from './styled';

const Mails = () => {
  const sendEmail = email => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      {strings.contacts.info.mail.map(({ heading, mailTo }, i) => (
        <S.InfoItemContainer key={i}>
          <S.InfoItemHeading>{heading}</S.InfoItemHeading>
          <S.InfoItemMailTo onClick={() => sendEmail(mailTo)}>{mailTo}</S.InfoItemMailTo>
        </S.InfoItemContainer>
      ))}
    </>
  );
};

export default Mails;
