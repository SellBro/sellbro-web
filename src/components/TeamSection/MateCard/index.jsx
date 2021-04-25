import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const TeamMateCard = ({ ...item }) => {
  return (
    <S.CardContainer>
      <S.ImageContainer>
        <S.Image alt={item.name} src={item.image} />
      </S.ImageContainer>
      <S.DescriptionContainer>
        <S.DescriptionFirstName>{item.firstname}</S.DescriptionFirstName>
        <S.DescriptionLastName>{item.lastname}</S.DescriptionLastName>
        <S.DescriptionRank>{item.rank}</S.DescriptionRank>
        <S.DescriptionText>{item.description}</S.DescriptionText>
      </S.DescriptionContainer>
    </S.CardContainer>
  );
};

TeamMateCard.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TeamMateCard;
