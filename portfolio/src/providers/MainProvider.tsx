import { ThemeProvider } from 'next-themes';
import { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

import Layout from '@/layout/Layout';

import HeadProvider from '@/providers/head-provider/HeadProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MainProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <HeadProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute={'class'}>
          <Layout>{children}</Layout>
          <ToastContainer autoClose={200} />
        </ThemeProvider>
      </QueryClientProvider>
    </HeadProvider>
  );
};

export default MainProvider;
