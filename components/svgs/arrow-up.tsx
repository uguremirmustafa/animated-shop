import React from 'react';
import SVG, { SvgType } from './SVG';

interface Props {
  size: number;
}

const ArrowUp = ({ size, color }: Props & SvgType) => {
  return (
    <SVG size={size} color={color}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" />
    </SVG>
  );
};

export default ArrowUp;
