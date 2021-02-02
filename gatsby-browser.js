import React from 'react';

import { ThemeProvider } from 'styled-components';

import Layout from './src/components/layout';
import { GlobalStyles, Theme } from './src/styles';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </ThemeProvider>
);
