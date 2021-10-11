import React from 'react';
import SVG, { SvgType } from './SVG';

interface Props {
  size: number;
}

const ArrowDown = ({ size, color }: Props & SvgType) => {
  return (
    <SVG size={size} color={color}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
    </SVG>
  );
};

export default ArrowDown;
