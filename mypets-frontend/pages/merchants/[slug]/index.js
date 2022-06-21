import React from "react";
import lodash from "lodash";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

import { API_HOME_URL, API_MERCHANTS_URL } from "../../../utils/urls";
import BackBtn from "../../../components/Common/BackBtn/BackBtn";
import MerchantTitle from "../../../components/Merchant/MerchantTitle/MerchantTitle";
import MerchantProductReviewTab from "../../../components/Merchant/MerchantProductReviewTab/MerchantProductReviewTab";
import MerchantBannerSwiper from "../../../components/Merchant/MerchantBannerSwiper/MerchantBannerSwiper";
import PageContainer from "../../../components/Layouts/PageContainer/PageContainer";

export default function index({ merchant }) {
  const merchantCategories = Object.keys(
    lodash.groupBy(merchant.products, "category.name")
  );
  return (
    <>
      <Head>
        <title>{merchant.meta_title}</title>
        <meta name="description" content={merchant.meta_description} />
      </Head>
      <PageContainer>
        <BackBtn />
        {/* <Carousel bannerImgNames={[`${merchant.name}.jpg`]} /> */}
        <MerchantBannerSwiper banners={merchant.banners} />
        <MerchantTitle
          merchantName={merchant.name}
          merchantRating={merchant.rating}
          merchantNumReviews={merchant.reviews}
        />
        <MerchantProductReviewTab
          merchantProducts={merchant.products}
          categories={merchantCategories}
          merchantReviews={merchant.merchant_reviews}
        />
      </PageContainer>
    </>
  );
}

export async function getStaticProps({ params: { slug } }) {
  // Fetch merchants, products
  const merchant_res = await fetch(`${API_MERCHANTS_URL}?slug=${slug}`);
  const merchant = await merchant_res.json();

  // Return as props
  return {
    props: {
      merchant: merchant[0],
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
