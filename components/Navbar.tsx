import React from 'react';
import Link from 'next/link';
import Cart from './svgs/cart';
interface Props {}

const Navbar = ({}: Props) => {
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
                <Cart size={18} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
