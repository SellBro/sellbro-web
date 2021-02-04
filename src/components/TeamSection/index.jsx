import React from 'react';

import TeamMateCard from './MateCard';

import { TeamCardsContainer, TeamContainer, TeamHeader, TeamRoot } from './styled';

const TeamSection = ({ ...section }) => {
  return (
    <TeamRoot>
      <TeamContainer>
        <TeamHeader>{section.header}</TeamHeader>
        <TeamCardsContainer>
          {section.mates.map((item, i) => (
            <TeamMateCard {...item} key={i} />
          ))}
        </TeamCardsContainer>
      </TeamContainer>
    </TeamRoot>
  );
};

export default TeamSection;
