import React from 'react';
import Modal from 'react-modal';
import { Bike, BikeVariant } from '../lib/data';
import Close from './svgs/close';
import Image from 'next/image';
import Link from 'next/link';
export type ModalContent = {
  title: string;
  message: string;
  type: 'success' | 'error';
  product?: Bike;
  variant?: BikeVariant;
};
interface Props {
  modalIsOpen: boolean;
  setModalIsOpen: (arg: boolean) => void;
  modalContent: ModalContent;
}

const ModalWindow = ({ modalContent, modalIsOpen, setModalIsOpen }: Props) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      className="modal"
      overlayClassName="overlay"
      appElement={''}
    >
      <div
        className="title"
        style={{
          backgroundColor: modalContent.variant ? modalContent.variant.color : 'gray',
        }}
      >
        <h3>{modalContent.title}</h3>
        <button
          onClick={() => setModalIsOpen(false)}
          style={{ backgroundColor: modalContent.variant?.color }}
        >
          <Close size={20} color={modalContent.variant ? 'white' : 'gray'} />
        </button>
      </div>
      <div className="content">
        {!modalContent.product && <p className="message">{modalContent.message}</p>}
        {modalContent.product && (
          <div className="bike">
            <h4>
              {modalContent.product.brand} / {modalContent.product.model}
            </h4>
            <div className="img-wrapper">
              <Image
                src={modalContent.variant!.src}
                layout="fill"
                objectFit="cover"
                alt="bike image for the product"
              />
            </div>
          </div>
        )}
        {modalContent.type !== 'error' && (
          <Link href="/cart" passHref>
            <button className="go-to-cart-btn">go to cart 👉</button>
          </Link>
        )}
      </div>
    </Modal>
  );
};

export default ModalWindow;
