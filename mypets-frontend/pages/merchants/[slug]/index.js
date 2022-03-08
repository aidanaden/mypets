import React from "react";
import lodash from "lodash";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

import AnnouncementBanner from "../../../components/AnnouncementBanner/AnnouncementBanner";
import { API_HOME_URL, API_MERCHANTS_URL } from "../../../utils/urls";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Carousel from "../../../components/Carousel/Carousel";
import Footer from "../../../components/Footer/Footer";
import BackBtn from "../../../components/BackBtn/BackBtn";
import MerchantTitle from "../../../components/MerchantTitle/MerchantTitle";
import MerchantProductReviewTab from "../../../components/MerchantProductReviewTab/MerchantProductReviewTab";
import MerchantBannerSwiper from "../../../components/MerchantBannerSwiper/MerchantBannerSwiper";
import PageContainer from "../../../components/PageContainer/PageContainer";

export default function index({ merchant, bannerText }) {
  const merchantCategories = Object.keys(
    lodash.groupBy(merchant.products, "category.name")
  );
  return (
    <>
      <Head>
        <title>{merchant.meta_title}</title>
        <meta name="description" content={merchant.meta_description} />
      </Head>
      <Box>
        <AnnouncementBanner text={bannerText} />
        <Sidebar />
        <PageContainer>
          <BackBtn />
          {/* <Carousel bannerImgNames={[`${merchant.name}.jpg`]} /> */}
          <MerchantBannerSwiper
            desktopImages={merchant.desktop_banners}
            mobileImages={merchant.mobile_banners}
          />
          <MerchantTitle
            merchantName={merchant.name}
            merchantRating={merchant.rating}
            merchantNumReviews={merchant.reviews}
          />
          {/* <MerchantProductReviewTab
            merchantProducts={merchant.products}
            categories={merchantCategories}
            merchantReviews={merchant.merchant_reviews}
          /> */}
        </PageContainer>
      </Box>
    </>
  );
}

export async function getStaticProps({ params: { slug } }) {
  // Fetch merchants, products
  const merchant_res = await fetch(`${API_MERCHANTS_URL}?slug=${slug}`);
  const merchant = await merchant_res.json();

  const home_res = await fetch(`${API_HOME_URL}`);
  const home_data = await home_res.json();

  // Return as props
  return {
    props: {
      merchant: merchant[0],
      bannerText: home_data.banner_text,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 1, // In seconds
  };
}

export async function getStaticPaths() {
  // retrieve all possible paths
  const merchant_res = await fetch(`${API_MERCHANTS_URL}`);
  const merchants = await merchant_res.json();

  // return to NextJS context
  return {
    paths: merchants.map((merchant) => ({
      params: { slug: String(merchant.slug) },
    })),

    // tells nextjs to show 404 if param not matched
    fallback: false,
  };
}
