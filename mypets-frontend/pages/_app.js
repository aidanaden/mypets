import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react"
import Head from 'next/head'
import 'swiper/swiper.scss';

import customTheme from '../styles/theme'
import { AuthProvider } from '../context/AuthContext'
import Fonts from '../styles/fonts'
import AnnouncementBanner from '../components/AnnouncementBanner/AnnouncementBanner'


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider resetCSS theme={customTheme}>
        <Fonts />
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>  
        <AnnouncementBanner />
        <Component {...pageProps} /> 
      </ChakraProvider>
    </AuthProvider>
  ) 
}

export default MyApp
