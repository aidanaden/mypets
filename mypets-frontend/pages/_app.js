import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react"
import 'swiper/swiper.scss';

import customTheme from '../styles/theme'
import { AuthProvider } from '../context/AuthContext'
import Fonts from '../styles/fonts'
import AnnouncementBanner from '../components/AnnouncementBanner/AnnouncementBanner'
import Navbar from '../components/Navbar/Navbar'


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider resetCSS theme={customTheme}>
        <Fonts />
        <ColorModeProvider
          options={{
            initialColorMode: "light",
            useSystemColorMode: false,
          }}
        >  
          <AnnouncementBanner />
          <Component {...pageProps} /> 
        </ColorModeProvider>
      </ChakraProvider>
    </AuthProvider>
  ) 
}

export default MyApp
