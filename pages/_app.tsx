import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/index";
import StateContext from "../context/StateContext";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </StateContext>
  );
}
