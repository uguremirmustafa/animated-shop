import React from 'react';
import SVG from './SVG';

interface Props {
  size: number;
}

const Share = ({ size }: Props) => {
  return (
    <SVG size={size}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12l7-7z" />
    </SVG>
  );
};

export default Share;
