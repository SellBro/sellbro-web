import React from 'react';

import * as S from './styled';

const TeamMateCard = ({ ...item }) => {
  return (
    <S.CardContainer>
      <S.ImageContainer>
        <S.Image alt={item.name} src={item.image} />
      </S.ImageContainer>
      <S.DescriptionContainer>
        <S.DescriptionTitle>{item.name}</S.DescriptionTitle>
        <S.DescriptionRank>{item.rank}</S.DescriptionRank>
        <S.DescriptionText>{item.description}</S.DescriptionText>
      </S.DescriptionContainer>
    </S.CardContainer>
  );
};

export default TeamMateCard;
