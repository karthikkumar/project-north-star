import Head from "next/head";
import AppWrapper from "../components/AppWrapper";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Project North Star</title>
        <meta name="description" content="Project North Star" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/images/star.svg" />
      </Head>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </div>
  );
}

export default MyApp;
