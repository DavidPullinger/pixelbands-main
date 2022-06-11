import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#221d51" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;400;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="bg-primary text-secondary m-10">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
