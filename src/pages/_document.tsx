import { Html, Head, Main, NextScript, } from 'next/document'
import Script from "next/script";
 
export default function Document() {

    return (
        <Html lang="en">
        <Head >
            <script src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"></script>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
        </Html>
    )
}