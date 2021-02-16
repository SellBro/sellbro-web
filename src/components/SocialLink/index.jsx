import React from 'react';

import { LinkContainer } from './styled';

const SocialLink = ({ to, icon }) => {
  return (
    <LinkContainer href={to}>
      <img src={icon} alt="icon" />
    </LinkContainer>
  );
};

export default SocialLink;
