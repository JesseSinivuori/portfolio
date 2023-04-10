import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Layout";
import StateContext from "../context/StateContext";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <StateContext>
        <Layout>
          <Toaster
            containerClassName="mt-16 lg:mt-0"
            toastOptions={{
              className: "",
              style: {
                padding: "16px",
                color: "white",
                backgroundColor: "#030303",
              },
            }}
          />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </div>
  );
}
