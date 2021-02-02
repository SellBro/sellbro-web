import React from 'react';

import { DividerWrapper, DividerContainer, DividerPolygon } from './styled';

const Divider = () => {
  return (
    <DividerContainer>
      <DividerWrapper>
        <DividerPolygon />
      </DividerWrapper>
    </DividerContainer>
  );
};

export default Divider;
