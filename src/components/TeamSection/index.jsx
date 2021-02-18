import React from 'react';
import { strings } from 'data';

import { SectionHeader } from 'components';

import TeamMateCard from './MateCard';

import { TeamCardsContainer, TeamContainer, TeamHeading, TeamRoot } from './styled';

const TeamSection = () => {
  return (
    <TeamRoot>
      <SectionHeader>{strings.team.header}</SectionHeader>
      <TeamContainer>
        <TeamHeading>{strings.team.heading1}</TeamHeading>
        <TeamCardsContainer>
          {strings.team.mates.map((item, i) => (
            <TeamMateCard {...item} key={i} />
          ))}
        </TeamCardsContainer>
      </TeamContainer>
    </TeamRoot>
  );
};

export default TeamSection;
