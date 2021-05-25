import { ChakraProvider, ColorModeProvider, useColorMode } from "@chakra-ui/react"
import customTheme from '../styles/theme'
import { AuthProvider } from '../context/AuthContext'

import AnnouncementBanner from '../components/AnnouncementBanner/AnnouncementBanner'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider resetCSS theme={customTheme}>
        <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: true,
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
