import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";

import AnnouncementBanner from "../../../components/AnnouncementBanner/AnnouncementBanner";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Footer from "../../../components/Footer/Footer";
import BackBtn from "../../../components/BackBtn/BackBtn";
import ProductDetailSection from "../../../components/ProductDetailSection/ProductDetailSection";
import ProductDescriptionSection from "../../../components/ProductDescriptionSection/ProductDescriptionSection";
import ProductReviewSection from "../../../components/ProductReviewSection/ProductReviewSection";
import ProductList from "../../../components/ProductList/ProductList";
import {
  API_HOME_URL,
  API_PRODUCTS_URL,
  FRONTEND_URL,
  imageToUrl,
} from "../../../utils/urls";
import PageContainer from "../../../components/PageContainer/PageContainer";

export default function Product({ bannerTitle, product, otherProducts }) {
  const { asPath } = useRouter();
  return (
    <>
      <Head>
        <title>{product.meta_title}</title>
        <meta name="description" content={product.meta_description} />
        <meta property="og:title" content={product.name} />
        {/* <meta property="og:description" content=“SHORT_DESCRIPTION”> */}
        <meta property="og:url" content={`${FRONTEND_URL}${asPath}`} />
        <meta property="og:image" content={imageToUrl(product.image)} />
        <meta property="product:brand" content={product.merchant.name} />
        <meta
          property="product:availability"
          content={product.variants[0].available}
        />
        <meta property="product:condition" content="new" />
        <meta
          property="product:price:amount"
          content={
            product.variants[0].discounted_price > 0
              ? product.variants[0].discounted_price
              : product.variants[0].price
          }
        />
        <meta property="product:price:currency" content="SGD" />
      </Head>
      <Box>
        <AnnouncementBanner text={bannerTitle} />
        <Sidebar />
        <PageContainer>
          <BackBtn />
          <Grid
            templateRows="min-content"
            templateColumns="repeat(3, 1fr)"
            gap={4}
            mb={{ base: 8, md: 12 }}
          >
            <GridItem colSpan={3} shadow="sm" borderWidth="1px" rounded="lg">
              <ProductDetailSection product={product} />
            </GridItem>
            <GridItem
              colSpan={{ base: 3, md: 2 }}
              shadow="sm"
              borderWidth="1px"
              rounded="lg"
            >
              <ProductDescriptionSection product={product} />
            </GridItem>
            <GridItem
              colSpan={{ base: 3, md: 1 }}
              shadow="sm"
              borderWidth="1px"
              rounded="lg"
            >
              <ProductReviewSection reviews={product.reviews} />
            </GridItem>
          </Grid>
          <ProductList
            heading="Suggested products"
            products={otherProducts}
            selectedAnimal=""
            maxRows={2}
          />
        </PageContainer>
      </Box>
    </>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const product_res = await fetch(`${API_PRODUCTS_URL}?slug=${slug}`);
  const product = await product_res.json();
  const category_res = await fetch(
    `${API_PRODUCTS_URL}?category=${product[0].category.id}`
  );
  const categoryProducts = await category_res.json();
  const home_res = await fetch(`${API_HOME_URL}`);
  const home_data = await home_res.json();

  // Return as props
  return {
    props: {
      product: product[0],
      otherProducts: categoryProducts.filter(
        (otherProduct) => otherProduct.id != product[0].id
      ),
      bannerTitle: home_data.banner_text,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 1, // In seconds
  };
}

export async function getStaticPaths() {
  // retrieve all possible paths
  const product_res = await fetch(`${API_PRODUCTS_URL}`);
  const products = await product_res.json();
  // return to NextJS context
  return {
    paths: products.map((product) => ({
      params: {
        slug: String(product.slug),
      },
    })),

    // tells nextjs to show 404 if param not matched
    fallback: false,
  };
}
