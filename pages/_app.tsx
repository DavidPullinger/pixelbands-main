// external components
import type { AppProps } from "next/app";
import Head from "next/head";
// styles
import "../styles/globals.css";
import "../styles/animations.css";
import "../styles/wallet.css";
// custom components
import { Navigation } from "@/components/Navigation";
import { ContextProvider } from "contexts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Head>
        <title>PixelBands</title>
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
