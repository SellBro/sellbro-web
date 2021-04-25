import React from 'react';
import PropTypes from 'prop-types';

import { SocialLink } from 'components';

import * as S from './styled';

const TeamMateCard = ({ ...item }) => {
  return (
    <S.CardContainer>
      <S.ImageContainer>
        <S.Image alt={item.firstname} src={item.image} />
      </S.ImageContainer>
      <S.DescriptionContainer>
        <S.DescriptionFirstName>{item.firstname}</S.DescriptionFirstName>
        <S.DescriptionLastName>{item.lastname}</S.DescriptionLastName>
        <S.SocialContainer>
          {item.links.map((link, index) => (
            <SocialLink {...link} key={index} />
          ))}
        </S.SocialContainer>
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
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }),
  ),
};

TeamMateCard.defaultProps = {
  links: [],
};

export default TeamMateCard;
