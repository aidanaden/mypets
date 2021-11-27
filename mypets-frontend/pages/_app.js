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

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('4726241647431452') // facebookPixelId
        ReactPixel.pageView()

        Router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [Router.events])

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
