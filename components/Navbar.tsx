import React from 'react';
import Link from 'next/link';
interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="navbar">
      <div className="inner-navbar">
        <div className="left">
          <span className="logo">
            <Link href="/">Animated Shop</Link>
          </span>
        </div>
        <div className="right">
          <ul className="links">
            <li>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
