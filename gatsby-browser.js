import React from 'react';

import Layout from './src/components/layout';
import { GlobalStyles } from './src/styles';

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </>
);
