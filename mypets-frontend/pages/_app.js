import { ChakraProvider, ColorModeProvider, useColorMode } from "@chakra-ui/react"
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
        <ColorModeProvider
          options={{
            initialColorMode: "light",
            useSystemColorMode: false,
          }}
        >
          <Fonts />
          <AnnouncementBanner />
          <Component {...pageProps} /> 
        </ColorModeProvider>
      </ChakraProvider>
    </AuthProvider>
  ) 
}

export default MyApp
