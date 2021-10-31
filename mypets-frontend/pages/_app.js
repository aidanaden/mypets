import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react"
import Head from 'next/head'
import 'swiper/swiper.scss';

import customTheme from '../styles/theme'
import { AuthProvider } from '../context/AuthContext'
import Fonts from '../styles/fonts'

import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider resetCSS theme={customTheme}>
        <Fonts />
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/20498643.js"></script>
          <meta name="facebook-domain-verification" content="7eb3uouy35ihgi6xio3u93vnhznvdt" />
        </Head>  
        <Component {...pageProps}/>
        <Footer />
      </ChakraProvider>
    </AuthProvider>
  ) 
}

export default MyApp
