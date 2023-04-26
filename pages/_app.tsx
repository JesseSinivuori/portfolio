import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout, Loading } from "../components/index";
import StateContext from "../context/StateContext";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StateContext>
        <Layout>
          <Suspense fallback={<Loading />}>
            <Component {...pageProps} />
            <Analytics />
          </Suspense>
        </Layout>
      </StateContext>
    </>
  );
}
