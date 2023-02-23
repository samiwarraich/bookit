import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default wrapper.withRedux(MyApp);
