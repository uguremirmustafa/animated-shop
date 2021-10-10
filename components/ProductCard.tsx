import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
interface Props {
  id: number;
}

const ProductCard = ({ id }: Props) => {
  const items = [
    { index: 0, color: '#FF6666', sizes: ['sm', 'md', 'xxl'] },
    { index: 1, color: '#66C2FF', sizes: ['xs', 'md'] },
    { index: 2, color: '#1E2020', sizes: ['xs', 'sm', 'md', 'lg'] },
  ];
  const [active, setActive] = useState(items[0]);
  return (
    <div className="product-card">
      <motion.div
        animate={{
          x: [50, -100, 150, 200, -60],
          y: [-150, 150, -30, 50, 10],
          transition: {
            duration: 100,
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
        className="blur"
      ></motion.div>
      <h2>S-WORKS</h2>
      <div className="top">
        <div className="type">aero bike &#183; carbon</div>
        <p className="model-name">venge</p>
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={active.index}
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
          exit={{ x: 300, opacity: 0, transition: { duration: 0.4 } }}
          className="img-wrapper"
        >
          <Image
            src={`/images/sworks${active.index + 1}.jpg`}
            layout="fill"
            objectFit="cover"
            alt="sworks bike"
          />
        </motion.div>
      </AnimatePresence>
      <div className="mid">
        <div className="colors">
          colors
          <div className="options">
            {items.map((item) => {
              let isActive = active.index === item.index;
              return (
                <span
                  key={item.index}
                  style={{
                    backgroundColor: item.color,
                    border: !isActive ? `2px solid ${item.color}` : `2px solid gray`,
                  }}
                  onClick={() => setActive(items[item.index])}
                ></span>
              );
            })}
          </div>
        </div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={active.index}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            initial={{ opacity: 0 }}
            className="sizes"
          >
            sizes
            <div className="options">
              {active.sizes.map((size) => {
                return <span key={size}>{size}</span>;
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="price">
          <span className="old">
            $2299
            <span className="cross-line"></span>
          </span>
          <span className="current">$1799</span>
        </div>
      </div>
      <div className="bottom">
        <Link href={`/product/${id}`} passHref>
          <motion.button whileHover={{ scale: [1, 0.8, 2, 1] }} className="btn">
            see details
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
