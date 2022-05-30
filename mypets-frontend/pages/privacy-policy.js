import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";

import PageContainer from "../components/Layouts/PageContainer/PageContainer";
import Sidebar from "../components/Layouts/Sidebar/Sidebar";
import { API_CATEGORIES_URL, API_PRIVACY_URL } from "../utils/urls";
import SectionHeader from "../components/Layouts/SectionHeader/SectionHeader";
import SectionSubHeader from "../components/Layouts/SectionSubHeader/SectionSubHeader";
import ParagraphSection from "../components/Layouts/ParagraphSection/ParagraphSection";
import BaseLayout from "../components/Layouts/BaseLayout/BaseLayout";

export default function privacy({ categories, privacy_data }) {
  console.log("privacy_data: ", privacy_data);
  return (
    <>
      <Head>
        <title>{privacy_data.meta_title}</title>
        <meta name="description" content={privacy_data.meta_description} />
      </Head>
      <PageContainer>
        <SectionHeader>Privacy Policy</SectionHeader>
        <SectionSubHeader>
          Last Updated: {privacy_data.Last_updated}
        </SectionSubHeader>
        <ParagraphSection
          text="This Privacy Policy describes our policies and procedures on how we collect, use and disclose the information provided when you use our site.

                            MyPets uses your personal data to provide and improve our service & platform. By using our platform, you agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the [Privacy Policy Generator](https://www.freeprivacypolicy.com/free-privacy-policy-generator/).
                            
                            The term MyPets/MyPets Singapore refers to the same entity."
        />
        <ParagraphSection heading="Definitions" />
        {privacy_data.Term.map((data) => (
          <ParagraphSection heading={data.Header} text={data.Details} />
        ))}
      </PageContainer>
    </>
  );
}

export async function getStaticProps() {
  // Fetch home page banner images + top banner text
  const privacy_res = await fetch(`${API_PRIVACY_URL}`);
  const privacy_data = await privacy_res.json();

  // Fetch categories
  const categories_res = await fetch(`${API_CATEGORIES_URL}`);
  const categories = await categories_res.json();

  // Return as props
  return {
    revalidate: 1,
    props: {
      categories,
      privacy_data,
    },
  };
}
