import Head from "next/head";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  // console.log(Component());
  // console.log(pageProps);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>NextJS Pro</title>
        <meta name="description" content="NextJS Pro Examples" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
