import "../styles/globals.css";
import Layout from "../src/components/layout/Layout";

function MyApp({ Component, pageProps }) {

  console.log("testt")


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
