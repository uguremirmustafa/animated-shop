import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Bike } from '../pages';
import { LightenDarkenColor } from '../utils/lightenDarkenColor';
import { useSwipeable } from 'react-swipeable';
interface Props {
  bike: Bike;
}

const ProductCard = ({ bike }: Props) => {
  const [active, setActive] = useState(bike.variants[2]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  const lighterColor = LightenDarkenColor(active.color, 70);
  const textStyle = (withShadow: boolean, shadow: number) => ({
    textShadow: withShadow
      ? `${shadow}px ${shadow}px ${LightenDarkenColor(active.color, 20)}`
      : `${shadow}px ${shadow}px ${LightenDarkenColor(active.color, 20)}`,
    color: LightenDarkenColor(active.color, 300),
  });
  const toRight = () => {
    if (active.index < bike.variants.length - 1) {
      setActive(bike.variants[active.index + 1]);
    }
  };
  const toLeft = () => {
    if (active.index > 0) {
      setActive(bike.variants[active.index - 1]);
    }
  };
  const handlers = useSwipeable({
    onSwiped: ({ dir }) => {
      if (dir === 'Right') {
        toLeft();
      }
      if (dir === 'Left') {
        toRight();
      }
    },
  });
  return (
    <div className="product-card" style={{ backgroundColor: LightenDarkenColor(active.color, 10) }}>
      <motion.div
        animate={{
          x: [50, -100, 150, 200, -60],
          y: [-150, 150, -30, 50, 10],
          transition: {
            duration: 100,
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
        style={{ backgroundColor: `${lighterColor}30` }}
        //30 is for tranparency, read more here: https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
        className="blur"
      ></motion.div>
      <h2 style={{ color: lighterColor }}>{bike.brand}</h2>
      <div className="top">
        <div
          className="type"
          style={{
            color: LightenDarkenColor(active.color, 300),
          }}
        >
          {bike.features[0]} &#183; {bike.features[1]}
        </div>
        <p className="model-name" style={textStyle(true, 8)}>
          {bike.model}
        </p>
      </div>
      <AnimatePresence exitBeforeEnter>
        <div className="images-wrapper">
          <motion.div
            {...handlers}
            style={{
              position: 'relative',
              display: 'flex',
              width: `${bike.variants.length * 100}%`,
            }}
            animate={{
              left: `-${active.index * 100}%`,
              transition: {
                type: 'spring',
              },
            }}
          >
            {bike.variants.map((item) => (
              <motion.div
                key={item.index}
                initial={{ opacity: 0.8, scale: 0.5 }}
                animate={
                  active.index === item.index
                    ? {
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.2, ease: 'easeInOut' },
                      }
                    : { opacity: 0 }
                }
                exit={{ x: 300, opacity: 0, transition: { duration: 0.3 } }}
                className="img-wrapper"
              >
                <Image
                  src={item.src}
                  priority={true}
                  layout="fill"
                  objectFit="cover"
                  alt={bike.model}
                  onLoad={() => {
                    setLoaded(true);
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatePresence>
      <div className="mid">
        <div className="colors" style={textStyle(false, 0)}>
          colors
          <div className="options">
            {bike.variants.map((item) => {
              let isActive = active.index === item.index;
              return (
                <span
                  key={item.index}
                  style={{
                    backgroundColor: item.color,
                    border: !isActive ? `2px solid ${item.color}` : `2px solid gray`,
                  }}
                  onClick={() => {
                    setActive(bike.variants[item.index]), setLoaded(!loaded);
                  }}
                ></span>
              );
            })}
          </div>
        </div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={active.index}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            initial={{ opacity: 0 }}
            className="sizes"
            style={textStyle(false, 0)}
          >
            sizes
            <div className="options">
              {active.sizes.map((size) => {
                return <span key={size}>{size}</span>;
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="price">
          <span className="old" style={textStyle(false, 0)}>
            {bike.price.currency}
            {bike.price.old}
            <span className="cross-line" style={{ backgroundColor: lighterColor }}></span>
          </span>
          <span className="current" style={textStyle(false, 0)}>
            {bike.price.currency}
            {bike.price.current}
          </span>
        </div>
      </div>
      <div className="bottom">
        <Link href={`/product/${bike.id}`} passHref>
          <motion.button
            whileHover={{ scale: [1, 0.8, 2, 1] }}
            className="btn"
            style={{
              backgroundColor: LightenDarkenColor(active.color, 10),
              borderColor: 'white',
              color: 'white',
            }}
          >
            see details
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
