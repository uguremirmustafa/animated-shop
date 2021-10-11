import type { AppProps } from 'next/app';
import '../styles/main.scss';
import { CartProvider } from 'react-use-cart';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
