import React from 'react';
import Link from 'next/link';
import Cart from './svgs/cart';
import { useCart } from 'react-use-cart';
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
                <button className="cart-btn">
                  {totalItems > 0 && <span>{totalItems}</span>}
                  <Cart size={18} />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
