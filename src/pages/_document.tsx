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
                    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                        document.documentElement.classList.add('dark')
                    } else {
                        document.documentElement.classList.remove('dark')
                    }
                    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
                        if (event.matches) {
                            document.documentElement.classList.add('dark')
                            localStorage.setItem('theme', 'dark')
                        } else {
                            document.documentElement.classList.remove('dark')
                            localStorage.removeItem('theme')
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