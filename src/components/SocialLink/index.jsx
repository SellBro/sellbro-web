import React from 'react';
import PropTypes from 'prop-types';

import { LinkContainer } from './styled';

const SocialLink = ({ to, icon }) => {
  return (
    <LinkContainer href={to}>
      <img src={icon} alt="icon" />
    </LinkContainer>
  );
};

SocialLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SocialLink;
