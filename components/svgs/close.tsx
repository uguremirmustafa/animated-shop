import React from 'react';
import SVG, { SvgType } from './SVG';

interface Props {
  size: number;
}

const Close = ({ size, color }: Props & SvgType) => {
  return (
    <SVG size={size} color={color}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
    </SVG>
  );
};

export default Close;
