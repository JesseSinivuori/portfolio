import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Layout";
import StateContext from "../context/StateContext";
import { useEffect, useState } from "react";
import Loading from "../components/helpers/Loading";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // set the loading status to false once the app has finished loading
    setIsLoading(false);
  }, []);

  return (
    <>
      <StateContext>
        <Layout>
          {isLoading ? (
            <div className="h-screen w-full">
              <Loading />
            </div>
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </StateContext>
    </>
  );
}
