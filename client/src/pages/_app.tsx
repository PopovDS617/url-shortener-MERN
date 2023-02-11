import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/index.css";
import { AnimatePresence } from "framer-motion";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AnimatePresence mode="wait" initial={true}>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
