import React from 'react';

import { ContactsSection, Convex, AboutSection, TeamSection } from 'components';

import Paralax from './Paralax';

const Home = () => {
  return (
    <Paralax>
      <AboutSection />
      <Convex />
      <TeamSection />
      <Convex />
      <ContactsSection />
    </Paralax>
  );
};

export default Home;
