import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Icon = ({ icon }) => {
  return <S.IconRoot>{React.createElement(icon)}</S.IconRoot>;
};

Icon.propTypes = {
  icon: PropTypes.func.isRequired,
};

export default Icon;
