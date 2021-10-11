import React from 'react';
import ProductCard from '../components/ProductCard';
import Layout from '../layouts/Layout';
import { bikes } from '../lib/data';

interface Props {}

const Home = ({}: Props) => {
  return (
    <Layout>
      <div className="home">
        {bikes.map((bike) => (
          <ProductCard bike={bike} key={bike.id} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
