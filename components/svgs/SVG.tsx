import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  size: number;
}

const SVG = ({ children, size }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${24} ${24}`} width={size} height={size}>
      {children}
    </svg>
  );
};

export default SVG;
