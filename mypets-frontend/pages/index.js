import { useState } from "react";
import { useRouter } from "next/router";
import { Box, Stack, useToast } from "@chakra-ui/react";
import Head from "next/head";

import PageContainer from "../components/Layouts/PageContainer/PageContainer";
import AnnouncementBanner from "../components/Layouts/AnnouncementBanner/AnnouncementBanner";
import Sidebar from "../components/Layouts/Sidebar/Sidebar";
import HomeBannerSwiper from "../components/Home/HomeBannerSwiper/HomeBannerSwiper";
import MerchantSectionList from "../components/Merchant/MerchantSectionList/MerchantSectionList";
import ProductSectionList from "../components/Product/ProductSectionList/ProductSectionList";
import CategoryList from "../components/Home/CategoryList/CategoryList";
import {
  API_HOME_URL,
  API_PRODUCTS_URL,
  API_MERCHANTS_URL,
  getAnimals,
  getCategories,
} from "../utils/urls";
import AnimalCategorySection from "../components/Home/AnimalCategorySection";
import BenefitsSection from "../components/Home/BenefitsSection";
import NewsletterSection from "../components/Home/NewsletterSection";
import SocialProofSection from "../components/Home/SocialProofSection";

export default function Home({
  home_data,
  products,
  categories,
  animals,
  merchants,
}) {
  const [pageProducts, setPageProducts] = useState(products);
  const [sortMethod, setSortMethod] = useState("pop");
  const [pageCategories, setPageCategories] = useState(categories);
  const [pageAnimals, setPageAnimals] = useState(animals);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const router = useRouter();
  const toast = useToast();

  const setCategorySelected = (cat) => {
    setCategoryToast(cat);
    setSelectedCategory(cat);
  };

  const setCategoryToast = (text) =>
    toast({
      title: `Loading ${text}...`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });

  // console.log("home info data from backend: ", home_data.Banners);
  console.log("page animals: ", pageAnimals);

  return (
    <>
      <Head>
        <title>{home_data.meta_title}</title>
        <meta name="description" content={home_data.meta_description} />
      </Head>
      <Box>
        <AnnouncementBanner text={home_data.banner_text} />
        <Sidebar categories={pageCategories} />
        <PageContainer>
          {/* <CategoryList
            display={{ base: "none", md: "flex" }}
            categories={pageCategories}
            setSelectedCategory={setCategorySelected}
          /> */}
          {/* <Carousel /> */}
          <HomeBannerSwiper banners={home_data.Banners} />
          <Stack direction="column" spacing={{ base: 8, lg: 12 }}>
            <AnimalCategorySection
              pageAnimals={pageAnimals}
              setSelectedAnimal={setSelectedAnimal}
              setSortMethod={setSortMethod}
            />
            <MerchantSectionList merchants={merchants} />
            <ProductSectionList
              products={pageProducts}
              categories={pageCategories}
              sortMethod={sortMethod}
              setSortMethod={setSortMethod}
              selectedAnimal={selectedAnimal}
            />
          </Stack>
        </PageContainer>
        <BenefitsSection benefits={home_data.Benefits} />
        {/* <NewsletterSection data={home_data.Newsletter} />
        <SocialProofSection /> */}
      </Box>
    </>
  );
}

export async function getStaticProps() {
  // Fetch home page banner images + top banner text
  const home_res = await fetch(`${API_HOME_URL}`);
  const home_data = await home_res.json();

  // Fetch merchants, products
  const product_res = await fetch(`${API_PRODUCTS_URL}`);
  const products = await product_res.json();

  const merchant_res = await fetch(`${API_MERCHANTS_URL}`);
  const merchants = await merchant_res.json();

  const categories = getCategories(products);
  const animals = getAnimals(products);

  // Return as props
  return {
    revalidate: 1,
    props: {
      home_data,
      products,
      categories,
      animals,
      merchants,
    },
  };
}
