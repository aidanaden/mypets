import { ChakraProvider, ColorModeProvider, useColorMode } from "@chakra-ui/react"
import customTheme from '../styles/theme'
import { AuthProvider } from '../context/AuthContext'

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
          <Component {...pageProps} /> 
        </ColorModeProvider>
      </ChakraProvider>
    </AuthProvider>
  ) 
}

export default MyApp
