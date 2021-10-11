import React, { ReactNode } from 'react';

export type SvgType = {
  size: number;
  color?: string;
};

interface Props {
  children: ReactNode;
}

const SVG = ({ children, size, color = '' }: Props & SvgType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${24} ${24}`}
      width={size}
      height={size}
      style={{ fill: color, cursor: 'pointer' }}
    >
      {children}
    </svg>
  );
};

export default SVG;
