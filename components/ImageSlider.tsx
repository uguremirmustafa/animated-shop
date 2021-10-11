import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { BikeVariant } from '../lib/data';
import Image from 'next/image';
interface Props {
  variants: BikeVariant[];
  active: BikeVariant;
  setActive: React.Dispatch<React.SetStateAction<BikeVariant>>;
}

const ImageSlider = ({ variants, active, setActive }: Props) => {
  //   const [loaded, setLoaded] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    setFirstLoad(false);
  }, [active.index]);
  //   useEffect(() => {
  //     setLoaded(true);
  //   }, []);
  const toRight = () => {
    if (active.index < variants.length - 1) {
      setActive(variants[active.index + 1]);
    }
  };
  const toLeft = () => {
    if (active.index > 0) {
      setActive(variants[active.index - 1]);
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
    <AnimatePresence exitBeforeEnter>
      <div className="images-wrapper">
        <motion.div
          className="images"
          {...handlers}
          style={{ width: `${variants.length * 100}%` }}
          animate={{
            left: `-${active.index * 100}%`,
            transition: {
              type: 'tween',
            },
          }}
        >
          {variants.map((item) => (
            <motion.div
              key={item.index}
              initial={!firstLoad && { opacity: 0.8, scale: 0.6 }}
              animate={
                active.index === item.index
                  ? {
                      x: 0,
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.2, type: 'tween' },
                    }
                  : { opacity: 0 }
              }
              exit={{ x: 300, opacity: 0, transition: { duration: 0.3 } }}
              className="image-wrapper"
            >
              <Image
                src={item.src}
                priority={true}
                layout="fill"
                objectFit="cover"
                alt="bike image for the product"
                // onLoad={() => {
                //   setLoaded(true);
                // }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ImageSlider;
