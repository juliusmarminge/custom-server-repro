import type { AppProps } from "next/app";

import { trpc } from "../utils/api";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default trpc.withTRPC(App);
