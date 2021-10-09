import React from 'react';
import ProductCard from '../components/ProductCard';
import Layout from '../layouts/Layout';

interface Props {}

const Home = (props: Props) => {
  return (
    <Layout>
      <ProductCard id={1} />
    </Layout>
  );
};

export default Home;
