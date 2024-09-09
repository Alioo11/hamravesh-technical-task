import Layout from "@/components/layout";
import { ThemeProvider } from "@/providers/theme";
import type { AppProps } from "next/app";
import "antd/dist/reset.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
