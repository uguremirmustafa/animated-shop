import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import Layout from '../layouts/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import Trash from '../components/svgs/trash';
import { LightenDarkenColor } from '../utils/lightenDarkenColor';
interface Props {}

const Cart = ({}: Props) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState('');
  const { items, updateItemQuantity, removeItem, cartTotal, totalItems, emptyCart, isEmpty } =
    useCart();
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
  const tapAnimation = { scale: [1, 0.8, 2, 1] };

  if (isEmpty) {
    return (
      <Layout>
        <div className="empty">
          <p>Cart is empty!</p>
          <Link href="/" passHref>
            <motion.button whileTap={tapAnimation}>go and buy some bikes 👉</motion.button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="cart">
        <h2 className="cart__title">
          cart
          <motion.button whileTap={tapAnimation} onClick={() => router.back()}>
            👈 back
          </motion.button>
        </h2>
        <AnimateSharedLayout>
          <motion.div className="cart__items">
            {items.map((item) => (
              <motion.div layout key={item.id} className="item">
                <div className="item__left-column" onClick={() => expand(item.id)}>
                  <div className="item__image-wrapper">
                    <Image
                      src={item.img}
                      layout="fill"
                      objectFit="cover"
                      alt="bike image for the product"
                    />
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <div className="item__buttons">
                  <motion.button
                    whileTap={tapAnimation}
                    className="increase"
                    disabled={item.quantity === 10}
                    onClick={() => {
                      if (!item.quantity) return;
                      if (item.quantity < 10) {
                        updateItemQuantity(item.id, item.quantity + 1);
                      }
                    }}
                  >
                    +
                  </motion.button>
                  <motion.button
                    whileTap={tapAnimation}
                    disabled={item.quantity === 1}
                    className="decrease"
                    onClick={() => {
                      if (!item.quantity) return;
                      if (item.quantity > 1) {
                        updateItemQuantity(item.id, item.quantity - 1);
                      }
                    }}
                  >
                    -
                  </motion.button>
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
                      <motion.button
                        whileTap={{ scale: [1, 0.8, 2, 1] }}
                        className="remove"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash size={12} /> remove
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimateSharedLayout>
        <div className="cart__total">
          <motion.button className="cart__total__empty" onClick={() => emptyCart()}>
            <Trash size={16} />
            remove all
          </motion.button>
          <span>{totalItems} items</span>
          <AnimatePresence key={cartTotal}>
            <motion.span
              initial={{ y: 0, opacity: 0.7 }}
              animate={{ y: [10, -10, 0], opacity: 1, transition: { duration: 0.3 } }}
            >
              total: ${cartTotal}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
