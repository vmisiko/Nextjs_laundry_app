import '../styles/globals.css';
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import type { NextComponentType } from 'next';
import { ReactNode } from 'react';
import NextNProgress from 'nextjs-progressbar';
import { Provider } from "react-redux";
import store from '@/core/store';
import { createContext } from '@/core/context';
import CartCubit from '@/presentation/bloc/new-order/cart/cartCubit';
import { dependenciesLocator } from '@/core/dependencies';

const [blocContext, useBloc] = createContext<CartCubit>();

export const useCartBloc  = useBloc;

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return getLayout(
    <>
      <Provider store={store}>
        <blocContext.Provider value={dependenciesLocator.provideCartPloc()}>
            <NextNProgress />
            <Component {...pageProps} />
        </blocContext.Provider>
      </Provider>
    </>
  );
};

export default MyApp;
