import { Html, Head, Main, NextScript, } from 'next/document'
import Script from "next/script";
 
export default function Document() {

    return (
        <Html lang="en">
        <Head />
        <body>
            <Script
                strategy="beforeInteractive"
                type="text/javascript"
                dangerouslySetInnerHTML={{
                __html: `
                    console.log('document')
                    console.log(window.matchMedia('(prefers-color-scheme: dark)'))
                    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                        document.documentElement.classList.add('dark')
                    } else {
                        document.documentElement.classList.remove('dark')
                    }
                    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
                        if (event.matches) {
                            document.documentElement.classList.add('dark')
                        } else {
                            document.documentElement.classList.remove('dark')
                        }
                    });
                `,
                }}
            />
            <Main />
            <NextScript />
        </body>
        </Html>
    )
}