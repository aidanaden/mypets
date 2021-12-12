import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from "@chakra-ui/react"

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link href="/fonts/style.css" rel="stylesheet"/>
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=GTM-KR3LWDX"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'GTM-KR3LWDX', { page_path: window.location.pathname });
                            `,
                        }}
                    />
                </Head>
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KR3LWDX" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                        }}
                    />
                </body>
            </Html>
        )
    }
}

export default MyDocument