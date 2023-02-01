import { ChakraProvider } from "@chakra-ui/react";
import "../style.css";
import theme from "../theme";
import Script from 'next/script';
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
            {/* <!-- Google tag (gtag.js) --> */}
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-9LBBS0NMR7"/>
        <Script id='google-analytics' strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9LBBS0NMR7');
        `}
          </Script>
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  );
}

export default MyApp;
