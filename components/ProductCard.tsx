import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
interface Props {
  id: number;
}
const ballVariant = (x: number): Variants => ({
  animate: {
    x: [0, -3 * (x - 1)],
    y: [0, -3 * x, 3 * x],
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

// const ballVariants: Variants = {};

const ProductCard = ({ id }: Props) => {
  return (
    <div className="product-card">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="blur"></motion.div>

      <h2>S-WORKS</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className="img-wrapper"
      >
        <Image src="/images/sworks5.jpg" layout="fill" objectFit="cover" alt="sworks bike" />
      </motion.div>
      <p>venge</p>
      <div className="type">aero bike</div>
      <div className="bottom">
        <div className="dots">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate="animate"
              variants={ballVariant(i)}
              className="dot"
            ></motion.div>
          ))}
        </div>
        <Link href={`/product/${id}`}>
          <button className="btn">see details</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
