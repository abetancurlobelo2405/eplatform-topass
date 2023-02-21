import Head from "next/head";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>E-platform</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>{children}</div>
      <Footer />
    </>
  );
}
