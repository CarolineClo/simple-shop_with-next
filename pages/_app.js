import "../styles/globals.scss";
import Layout from "../components/layout";
import App from "next/app";
function MyApp({ Component, pageProps, navData }) {
  return (
    <Layout navData={navData}>
      <Component navData={navData} {...pageProps} />
    </Layout>
  );
}

export default MyApp;

MyApp.getInitialProps = async (appContext) => {
  // Provide the appContext, in order to do 404's
  const appProps = await App.getInitialProps(appContext);
  const res = await fetch("https://kea-alt-del.dk/t7/api/products/");
  const navData = await res.json();
  return { ...appProps, navData };
};
