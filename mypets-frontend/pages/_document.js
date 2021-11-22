import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from "@chakra-ui/react"

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link href="/fonts/style.css" rel="stylesheet"/>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','GTM-KR3LWDX');`,
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