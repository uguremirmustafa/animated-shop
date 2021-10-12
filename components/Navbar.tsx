import React from 'react';
import Link from 'next/link';
import Cart from './svgs/cart';
import { useCart } from 'react-use-cart';
import { motion } from 'framer-motion';

interface Props {}

const Navbar = ({}: Props) => {
  const { totalItems } = useCart();
  return (
    <nav className="navbar">
      <div className="inner-navbar">
        <div className="left">
          <span className="logo">
            <Link href="/">FastBike</Link>
          </span>
        </div>
        <div className="right">
          <ul className="links">
            <li>
              <Link href="/cart" passHref>
                <motion.button className="cart-btn" whileTap={{ scale: [1, 0.8, 2, 1] }}>
                  {totalItems > 0 && <span>{totalItems}</span>}
                  <Cart size={18} />
                </motion.button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
