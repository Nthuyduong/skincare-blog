import { Html, Head, Main, NextScript, } from 'next/document'
import Script from "next/script";
 
export default function Document() {

    return (
        <Html lang="en">
            <link rel="icon" href="/favicon.png" />
            <meta name="google-site-verification" content="CwnPTh1KwncElwQ7VSbR25TG23jdVqkh4vGhKgB2N2I" />
            <script
                dangerouslySetInnerHTML={{
                __html: `
                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                    ga('create', 'UA-XXXXX-Y', 'auto');
                    ga('send', 'pageview');
                `,
                }}
            />
        <Head />
        <body>
            <Main />
            <NextScript />
        </body>
        </Html>
    )
}