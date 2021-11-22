import { useEffect } from "react";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react"
import Head from 'next/head'
import Router from 'next/router'
import 'swiper/swiper.scss';

import customTheme from '../styles/theme'
import { AuthProvider } from '../context/AuthContext'
import Fonts from '../styles/fonts'
import { GTMPageView } from '../utils/gtm'

import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [])

  return (
    <AuthProvider>
      <ChakraProvider resetCSS theme={customTheme}>
        <Fonts />
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="facebook-domain-verification" content="7eb3uouy35ihgi6xio3u93vnhznvdt" />
        </Head>  
        <Component {...pageProps}/>
        <Footer />
      </ChakraProvider>
    </AuthProvider>
  ) 
}

export default MyApp
