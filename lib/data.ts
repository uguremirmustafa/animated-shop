export type BikeVariant = {
  index: number;
  color: string;
  sizes: string[];
  src: string;
};
export type Bike = {
  id: number;
  brand: string;
  model: string;
  price: {
    old: number;
    current: number;
    currency: string;
  };
  features: string[];
  variants: BikeVariant[];
  desc: string;
};
export const bikes: Bike[] = [
  {
    id: 1,
    brand: 'S-WORKS',
    model: 'venge',
    price: { old: 2299, current: 1799, currency: '$' },
    features: ['aero bike', 'carbon'],
    variants: [
      { index: 0, color: '#1E2020', src: '/images/sworks1.jpg', sizes: ['xs', 'sm', 'md', 'lg'] },
      { index: 1, color: '#E394CC', src: '/images/sworks2.jpg', sizes: ['sm', 'md', 'xxl'] },
      { index: 2, color: '#5FD4D5', src: '/images/sworks3.jpg', sizes: ['xs', 'md'] },
    ],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, reprehenderit essereiciendis minima quo harum! Lorem ipsum, dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit.',
  },
  {
    id: 2,
    brand: 'CANYON',
    model: 'aeroad',
    price: { old: 2899, current: 2199, currency: '$' },
    features: ['endurance', 'carbon'],
    variants: [
      { index: 0, color: '#2D860C', src: '/images/canyon1.jpg', sizes: ['sm', 'md', 'xxl'] },
      { index: 1, color: '#4E545B', src: '/images/canyon2.jpg', sizes: ['xs', 'sm', 'md', 'lg'] },
      { index: 2, color: '#F2384C', src: '/images/canyon3.jpg', sizes: ['xs', 'md'] },
    ],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, reprehenderit essereiciendis minima quo harum! Lorem ipsum, dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit.',
  },
  {
    id: 3,
    brand: 'LAPIERRE',
    model: 'aircode',
    price: { old: 1970, current: 1900, currency: '$' },
    features: ['durable', 'carbon'],
    variants: [
      { index: 0, color: '#EA625D', src: '/images/lapierre1.jpg', sizes: ['sm', 'md', 'xxl'] },
      {
        index: 1,
        color: '#4E545B',
        src: '/images/lapierre2.jpg',
        sizes: ['xs', 'sm', 'md', 'lg'],
      },
      { index: 2, color: '#AF6D14', src: '/images/lapierre3.jpg', sizes: ['xs', 'md'] },
    ],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, reprehenderit essereiciendis minima quo harum! Lorem ipsum, dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit.',
  },
  {
    id: 4,
    brand: 'CERVELO',
    model: 'aspero',
    price: { old: 4270, current: 3900, currency: '$' },
    features: ['gravel', 'wide-tires'],
    variants: [
      { index: 0, color: '#AB396C', src: '/images/cervelo1.jpg', sizes: ['sm', 'md', 'xxl'] },
      {
        index: 1,
        color: '#A27C19',
        src: '/images/cervelo2.jpg',
        sizes: ['xs', 'sm', 'md', 'lg'],
      },
      { index: 2, color: '#727980', src: '/images/cervelo3.jpg', sizes: ['xs', 'md'] },
    ],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, reprehenderit essereiciendis minima quo harum! Lorem ipsum, dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit.',
  },
];
