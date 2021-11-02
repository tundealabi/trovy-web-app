import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SessionProvider } from 'next-auth/react';
import { store as reduxStore } from '../redux/store';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={reduxStore}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} position='top-left' />
        </SessionProvider>
      </Provider>
    </QueryClientProvider>
  );
}
export default MyApp;
