import React from 'react';
import Link from 'next/link';
export type BreadCrumbItem = {
  link?: string;
  text: string;
};

interface Props {
  items: BreadCrumbItem[];
  seperator: string;
}

const BreadCrumb = ({ items, seperator }: Props) => {
  //check if it is the last item
  const sep = (index: number) => {
    if (index === items.length - 1) {
      return '';
    }
    return seperator;
  };
  return (
    <div className="breadcrumb">
      {items.map((item, index) => {
        return (
          <div key={index}>
            {item.link ? (
              <span style={{ display: 'flex', gap: '0.5rem' }}>
                <Link href={item.link}>{item.text}</Link>
                <span>{sep(index)}</span>
              </span>
            ) : (
              <span style={{ display: 'flex', gap: '0.5rem' }}>
                <a>{item.text}</a>
                <span>{sep(index)}</span>
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
