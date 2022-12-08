import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import Navbar from "../Component/Navbar";
import Head from "next/head";

export default function App({ Component, pageProps }: any) {
  if (Component?.["getLayout"]) {
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>
        General page
        </title></Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
