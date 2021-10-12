import type { AppProps } from 'next/app';
import '../styles/main.scss';
import { CartProvider } from 'react-use-cart';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <CartProvider>
      <AnimatePresence exitBeforeEnter key={router.asPath}>
        <Component {...pageProps} />
      </AnimatePresence>
    </CartProvider>
  );
}

export default MyApp;
