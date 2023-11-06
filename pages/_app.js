import "../styles/globals.css";

import Layout from "../components/Layout";
import Transition from "../components/Transition";
import Script from "next/script";

// Router
import { useRouter } from "next/router";

// Framer Motion

import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Script
        id="gtag-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-3N2Q283BHL`}
      />

      <Script id="gtag-inline-script" strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-3N2Q283BHL', {
      page_path: window.location.pathname,
    });
  `}
      </Script>

      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
