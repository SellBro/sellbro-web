import React from 'react';

import { strings } from 'data';

import { SocialLink } from 'components';

import * as S from './styled';

const Links = () => {
  return (
    <S.LinksContainer>
      {strings.contacts.info.links.map((item, i) => (
        <SocialLink key={i} {...item} />
      ))}
    </S.LinksContainer>
  );
};

export default Links;
