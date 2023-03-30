import Header from "@/components/Header";
import "@/styles/globals.css";
// import "../styles/Header.scss"

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header />
      <Component {...pageProps} />
    </>
  );
}
