import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Layout";
import StateContext from "../context/StateContext";
import { Suspense } from "react";
import Loading from "../components/helpers/Loading";
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
