/* global google */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import ClientOnly from "../components/ClientOnly";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClientOnly>
      <Component {...pageProps} />
    </ClientOnly>
  );
}

export default MyApp;
