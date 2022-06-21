// external components
import type { AppProps } from "next/app";
import Head from "next/head";
// styles
import "../styles/globals.css";
import "../styles/animations.css";
// custom components
import { Navigation } from "@/components/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navigation />
      <Head>
        <title>PixelBands</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
