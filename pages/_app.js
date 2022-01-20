import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // console.log(Component());
  // console.log(pageProps);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
