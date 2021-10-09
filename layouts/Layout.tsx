import React, { ReactChild } from 'react';
import Navbar from '../components/Navbar';
import Container from './Container';

interface Props {
  children: ReactChild;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
