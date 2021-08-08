import React from 'react';
import Meta from '../components/Meta';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Meta title="404: Страница не найдена!" />
    <h1>404</h1>
    <p>Страница не найдена!</p>
  </Layout>
);

export default NotFoundPage;
