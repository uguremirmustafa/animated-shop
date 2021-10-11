import React from 'react';

interface Props {
  color: string;
}

const Divider = ({ color }: Props) => {
  return <div className="divider" style={{ backgroundColor: color }}></div>;
};

export default Divider;
