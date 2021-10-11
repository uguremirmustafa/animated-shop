import React, { useState } from 'react';
import Layout from '../../layouts/Layout';
import { Bike, bikes } from '../../lib/data';
import { motion } from 'framer-motion';
import BreadCrumb, { BreadCrumbItem } from '../../components/BreadCrumb';

import ImageSlider from '../../components/ImageSlider';
import Heart from '../../components/svgs/heart';
import Share from '../../components/svgs/share';
import Truck from '../../components/svgs/truck';
import Timer from '../../components/svgs/timer';
import { LightenDarkenColor } from '../../utils/lightenDarkenColor';
interface Props {
  bike: Bike;
}

const ProductPage = ({ bike }: Props) => {
  const [active, setActive] = useState(bike.variants[0]);
  const breadCrumbData: BreadCrumbItem[] = [
    { text: 'bikes', link: '/' },
    { text: bike.brand },
    { text: bike.model, link: `/product/${bike.id}` },
  ];

  return (
    <Layout>
      <motion.div className="product">
        <BreadCrumb items={breadCrumbData} seperator="/" />
        <ImageSlider variants={bike.variants} active={active} setActive={setActive} />
        <div className="top">
          <h2 className="title">
            {bike.brand} / {bike.model}
          </h2>
          <div className="actions">
            <Share size={19} />
            <Heart size={22} />
          </div>
        </div>
        <div className="mid">
          <div className="price">
            <div className="old">
              {bike.price.currency}
              {bike.price.old}
            </div>
            <div className="divider"></div>
            <div className="current">
              {bike.price.currency}
              {bike.price.current}
            </div>
          </div>
          <div className="stickers">
            <div>
              free shipping
              <Truck size={17} />
            </div>
            <div>
              running out of stocks
              <Timer size={17} />
            </div>
          </div>
        </div>
        <div className="divider-slim"></div>
        <div className="lower-mid">
          <div className="sizes">
            sizes
            <div className="divider"></div>
            <div className="options">
              {active.sizes.map((size, index) => {
                return (
                  <button key={index} className="size">
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="colors">
            colors
            <div className="divider"></div>
            <div className="options">
              {bike.variants.map((variant, index) => {
                return (
                  <div
                    key={index}
                    className="color"
                    style={{ backgroundColor: `${variant.color}`, border: `2px solid gray` }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="details">
          details
          <div className="divider"></div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, reprehenderit esse
            reiciendis minima quo harum! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit.
          </div>
        </div>
        <div className="order">
          <button className="order-btn" style={{ backgroundColor: active.color }}>
            order now
          </button>
        </div>
      </motion.div>
    </Layout>
  );
};
export const getStaticProps = async (context: any) => {
  const bike = bikes[parseInt(context.params.id) - 1];
  return {
    props: {
      bike,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = bikes.map((bike) => ({ params: { id: bike.id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default ProductPage;
