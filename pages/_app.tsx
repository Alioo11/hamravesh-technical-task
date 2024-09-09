import Layout from "@/components/layout";
import Head from "next/head";
import { ThemeProvider } from "@/providers/theme";
import type { AppProps } from "next/app";
import "antd/dist/reset.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Head>
        <link rel="icon" href="/hamravesh.png" sizes="any" />
          <title>Hamravesh Technical Task</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
