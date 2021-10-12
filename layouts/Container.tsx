import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="container"
    >
      {children}
    </motion.div>
  );
};

export default Container;
