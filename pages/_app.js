import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Router from 'next/router';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
