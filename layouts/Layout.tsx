import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Container from './Container';

interface Props {
  children: ReactNode;
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
