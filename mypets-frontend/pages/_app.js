import { useEffect, useState } from "react";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import ReactGA from "react-ga";
import "swiper/swiper.scss";
import "@fontsource/poppins";
import SimpleReactLightbox from "simple-react-lightbox";

import customTheme from "../styles/theme";
import { AuthProvider } from "../context/AuthContext";
import Fonts from "../styles/fonts";
// import { GTMPageView } from '../utils/gtm'

import AnnouncementBanner from "../components/Layouts/AnnouncementBanner/AnnouncementBanner";
import Sidebar from "../components/Layouts/Sidebar/Sidebar";
import BaseLayout from "../components/Layouts/BaseLayout/BaseLayout";
import Footer from "../components/Layouts/Footer/Footer";
import MessengerCustomerChat from "react-messenger-customer-chat";

function MyApp({ Component, pageProps }) {
  const [bannerText, setBannerText] = useState("");
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (
      process.env.GOOGLE_ANALYTICS_ID &&
      process.env.NODE_ENV === "production"
    ) {
      // Checks for GA ID and only turns on GA in production
      ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  });

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("445262823815733"); // facebookPixelId
        ReactPixel.pageView();
        ReactPixel.fbq("track", "viewContent");

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
          ReactPixel.fbq("track", "viewContent");
        });
      });
  }, [Router.events]);

  useEffect(async () => {
    const home_res = await fetch(`${API_HOME_URL}`);
    const home_data = await home_res.json();
    console.log("home data: ", home_data);
    setBannerText(home_data.banner_text);
  }, []);

  return (
    <SimpleReactLightbox>
      <AuthProvider>
        <ChakraProvider resetCSS theme={customTheme}>
          <Fonts />
          <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta
              name="facebook-domain-verification"
              content="7eb3uouy35ihgi6xio3u93vnhznvdt"
            />
          </Head>
          <BaseLayout minH="100vh">
            <AnnouncementBanner text={bannerText} />
            <Sidebar />
            <Component {...pageProps} />
          </BaseLayout>
          <Footer />
          <MessengerCustomerChat
            pageId="105638824710827"
            appId="615727602931296"
          />
        </ChakraProvider>
      </AuthProvider>
    </SimpleReactLightbox>
  );
}

export default MyApp;
