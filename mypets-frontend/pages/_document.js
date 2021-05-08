import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GoogleFonts } from 'next-google-fonts'
import { ColorModeScript } from "@chakra-ui/react"

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"/>
                <Head />
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument