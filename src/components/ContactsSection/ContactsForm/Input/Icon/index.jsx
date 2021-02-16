import React from 'react';

import * as S from './styled';

const Icon = ({ icon }) => {
  return <S.IconRoot>{React.createElement(icon)}</S.IconRoot>;
};

export default Icon;
