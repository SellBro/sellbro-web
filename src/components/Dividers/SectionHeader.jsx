import React from 'react';

import { SectionHeaderRoot, SectionHeaderText } from './styled';

const SectionHeader = ({ children }) => {
  return (
    <SectionHeaderRoot>
      <SectionHeaderText>{children}</SectionHeaderText>
    </SectionHeaderRoot>
  );
};

export default SectionHeader;
