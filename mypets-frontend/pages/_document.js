import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from "@chakra-ui/react"

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link href="/fonts/style.css" rel="stylesheet"/>
                </Head>
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