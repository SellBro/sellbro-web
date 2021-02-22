import React from 'react';
import PropTypes from 'prop-types';

import { SectionHeaderRoot, SectionHeaderText } from './styled';

const SectionHeader = ({ children }) => {
  return (
    <SectionHeaderRoot>
      <SectionHeaderText>{children}</SectionHeaderText>
    </SectionHeaderRoot>
  );
};

SectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionHeader;
