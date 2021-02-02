import React from 'react';

import { Layout, SEO, Home } from 'components';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Home />
    </Layout>
  );
};

export default IndexPage;
