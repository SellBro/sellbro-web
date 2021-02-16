import React from 'react';

import { strings } from 'data';

import { TeamSection, ContactsSection, Convex } from 'components';

import Paralax from './Paralax';

const Home = () => {
  return (
    <Paralax>
      {strings.team.map((section, i) => (
        <TeamSection {...section} key={i} />
      ))}
      <Convex />
      <ContactsSection />
    </Paralax>
  );
};

export default Home;
