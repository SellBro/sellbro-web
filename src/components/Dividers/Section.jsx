import React from 'react';
import PropTypes from 'prop-types';

import { SectionContainer, SectionHeading } from './styled';

const Section = ({ children }) => {
  return (
    <SectionContainer>
      <SectionHeading>{children}</SectionHeading>
    </SectionContainer>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
