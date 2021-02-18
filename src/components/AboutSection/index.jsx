import React from 'react';

import { strings } from 'data';

import { SectionHeader } from 'components';

import * as S from './styled';

const index = () => {
  return (
    <S.AboutRoot>
      <S.AboutContainer>
        <SectionHeader>{strings.about.header}</SectionHeader>
        <S.AboutContentRoot>
          <S.AboutInfoContainer>
            <S.AboutInfoHeading>{strings.about.heading1}</S.AboutInfoHeading>
            <S.AboutInfoText>{strings.about.description}</S.AboutInfoText>
          </S.AboutInfoContainer>
          <S.AboutImageContainer>
            <img src={strings.about.image} alt="joystick" />
          </S.AboutImageContainer>
        </S.AboutContentRoot>
      </S.AboutContainer>
    </S.AboutRoot>
  );
};

export default index;
