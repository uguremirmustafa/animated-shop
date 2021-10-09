import React, { ReactChild } from 'react';

interface Props {
  children: ReactChild;
}

const Container = ({ children }: Props) => {
  return <div className="container">{children}</div>;
};

export default Container;
