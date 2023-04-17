import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Layout";
import StateContext from "../context/StateContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <StateContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </div>
  );
}
