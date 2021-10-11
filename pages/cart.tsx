import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import Layout from '../layouts/Layout';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ArrowDown from '../components/svgs/arrow-down';
import ArrowUp from '../components/svgs/arrow-up';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Trash from '../components/svgs/trash';
import { LightenDarkenColor } from '../utils/lightenDarkenColor';
interface Props {}

const Cart = ({}: Props) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState('');
  const { items, updateItemQuantity, removeItem, cartTotal, totalItems } = useCart();
  const expand = (id: string) => {
    if (expanded === '') {
      setExpanded(id);
    }
    if (expanded === id) {
      setExpanded('');
    }
    if (expanded !== id) {
      setExpanded(id);
    }
  };
  return (
    <Layout>
      <div className="cart">
        <h2 className="cart__title">
          cart
          <button className="" onClick={() => router.back()}>
            👈 back
          </button>
        </h2>
        <AnimateSharedLayout>
          <motion.div className="cart__items">
            {items.map((item) => (
              <motion.div layout key={item.id} className="item">
                <div className="item__left-column">
                  <div className="item__image-wrapper">
                    <Image
                      src={item.img}
                      layout="fill"
                      objectFit="cover"
                      alt="bike image for the product"
                    />
                  </div>
                  <h3 onClick={() => expand(item.id)}>{item.title}</h3>
                </div>
                <div className="item__buttons">
                  <button
                    className="increase"
                    disabled={item.quantity === 10}
                    onClick={() => {
                      if (!item.quantity) return;
                      if (item.quantity < 10) {
                        updateItemQuantity(item.id, item.quantity + 1);
                      }
                    }}
                  >
                    <ArrowUp size={12} />
                  </button>
                  <button
                    disabled={item.quantity === 1}
                    className="decrease"
                    onClick={() => {
                      if (!item.quantity) return;
                      if (item.quantity > 1) {
                        updateItemQuantity(item.id, item.quantity - 1);
                      }
                    }}
                  >
                    <ArrowDown size={12} />
                  </button>
                </div>
                <div className="item__price">
                  {item.price} x {item.quantity} = {item.itemTotal}
                </div>
                {expanded === item.id && (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.2, type: 'tween' },
                    }}
                    exit={{ opacity: 0, transition: { duration: 0.2, type: 'tween' } }}
                    className="item__expanded"
                  >
                    <div className="item__expanded-content">
                      <div className="size">{item.size}</div>
                      <motion.div
                        className="size"
                        animate={{
                          backgroundColor: item.color,
                          color: LightenDarkenColor(item.color, 150),
                        }}
                      >
                        {item.color}
                      </motion.div>
                      <button className="remove" onClick={() => removeItem(item.id)}>
                        <Trash size={12} /> remove
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimateSharedLayout>
      </div>
      <div className="total">
        <span>{totalItems} items</span>
        <span>total: ${cartTotal}</span>
      </div>
    </Layout>
  );
};

export default Cart;
