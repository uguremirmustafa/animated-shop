import React, { useEffect, useState } from 'react';
import Layout from '../../layouts/Layout';
import { Bike, bikes } from '../../lib/data';
import { motion } from 'framer-motion';
import BreadCrumb, { BreadCrumbItem } from '../../components/BreadCrumb';
import ImageSlider from '../../components/ImageSlider';
import Heart from '../../components/svgs/heart';
import Share from '../../components/svgs/share';
import Truck from '../../components/svgs/truck';
import Timer from '../../components/svgs/timer';
import Divider from '../../components/Divider';
import { useCart } from 'react-use-cart';
import ModalWindow, { ModalContent } from '../../components/ModalWindow';

interface Props {
  bike: Bike;
}

const ProductPage = ({ bike }: Props) => {
  const { addItem } = useCart();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [active, setActive] = useState(bike.variants[0]);
  const [modalContent, setModalContent] = useState<ModalContent>({
    title: '',
    message: '',
    type: 'success',
  });
  const breadCrumbData: BreadCrumbItem[] = [
    { text: 'bikes', link: '/' },
    { text: bike.brand },
    { text: bike.model, link: `/product/${bike.id}` },
  ];

  const [selectedSize, setSelectedSize] = useState('');
  useEffect(() => {
    setSelectedSize('');
  }, [active.index]);
  const addItemToCart = () => {
    if (selectedSize === '') {
      setModalContent({
        title: 'Error happened!',
        message: 'please select the size',
        type: 'error',
      });
      setModalIsOpen(true);
      return;
    }
    addItem({
      id: `${bike.id.toString()}-${active.index}-${active.color}-${active.src}-${selectedSize}`,
      price: bike.price.current,
      size: selectedSize,
      color: active.color,
      img: active.src,
      title: `${bike.brand} / ${bike.model}`,
    });
    setModalContent({
      title: 'Product added successfully!',
      message: `Product added to the cart`,
      type: 'success',
      product: bike,
      variant: active,
    });
    setModalIsOpen(true);
    setSelectedSize('');
  };

  return (
    <Layout>
      <ModalWindow
        modalContent={modalContent}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <motion.div className="product">
        <BreadCrumb items={breadCrumbData} seperator="/" />
        <ImageSlider variants={bike.variants} active={active} setActive={setActive} />
        <div className="top">
          <h2 className="title">
            {bike.brand} / {bike.model}
          </h2>
          <div className="actions">
            <Share size={19} color={active.color} />
            <Heart size={22} color={active.color} />
          </div>
        </div>
        <div className="mid">
          <div className="price">
            <div className="old">
              {bike.price.currency}
              {bike.price.old}
            </div>
            <Divider color={active.color} />
            <div className="current">
              {bike.price.currency}
              {bike.price.current}
            </div>
          </div>
          <div className="stickers">
            <div>
              free shipping
              <Truck size={17} color={active.color} />
            </div>
            <div>
              running out of stocks
              <Timer size={17} color={active.color} />
            </div>
          </div>
        </div>
        <div className="divider-slim"></div>
        <div className="lower-mid">
          <div className="sizes">
            sizes
            <Divider color={active.color} />
            <div className="options">
              {active.sizes.map((size, index) => {
                return (
                  <motion.button
                    whileTap={{ scale: [1, 0.8, 2, 1] }}
                    whileHover={{
                      y: -2,
                    }}
                    key={index}
                    className="size"
                    onClick={() => setSelectedSize(size)}
                    style={
                      size === selectedSize
                        ? {
                            backgroundColor: active.color,
                            color: 'white',
                          }
                        : { backgroundColor: 'white', color: 'black' }
                    }
                  >
                    {size}
                  </motion.button>
                );
              })}
            </div>
          </div>
          <div className="colors">
            colors
            <Divider color={active.color} />
            <div className="options">
              {bike.variants.map((variant, index) => {
                return (
                  <motion.div
                    whileTap={{ scale: [1, 0.8, 2, 1] }}
                    key={index}
                    className="color"
                    style={{
                      borderColor: active.color !== variant.color ? 'transparent' : variant.color,
                    }}
                    onClick={() => setActive(bike.variants[index])}
                  >
                    <div className="inner" style={{ backgroundColor: `${variant.color}` }}></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="details">
          details
          <Divider color={active.color} />
          <div className="text">{bike.desc}</div>
        </div>
        <motion.div className="order">
          <motion.button
            whileTap={{ scale: [1, 0.8, 2, 1] }}
            className="order-btn"
            style={{ backgroundColor: active.color }}
            onClick={addItemToCart}
          >
            order now
          </motion.button>
        </motion.div>
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
