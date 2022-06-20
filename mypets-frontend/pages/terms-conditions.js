import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";

import PageContainer from "../components/Layouts/PageContainer/PageContainer";
import Sidebar from "../components/Layouts/Sidebar/Sidebar";
import { API_CATEGORIES_URL, API_TERMS_URL } from "../utils/urls";
import SectionHeader from "../components/Layouts/SectionHeader/SectionHeader";
import ParagraphSection from "../components/Layouts/ParagraphSection/ParagraphSection";
import SectionSubHeader from "../components/Layouts/SectionSubHeader/SectionSubHeader";
import BaseLayout from "../components/Layouts/BaseLayout/BaseLayout";

export default function terms({ terms_data }) {
  return (
    <>
      <Head>
        <title>{terms_data.meta_title}</title>
        <meta name="description" content={terms_data.meta_description} />
      </Head>
      <PageContainer>
        <SectionHeader>Terms & Conditions</SectionHeader>
        <SectionSubHeader>
          Last Updated: {terms_data.Last_updated}
        </SectionSubHeader>
        <ParagraphSection text="Our Business Operating Hours: 9am - 12pm & 2pm - 6pm (Mon-Fri)" />
        {terms_data.Terms.map((data) => (
          <ParagraphSection heading={data.Header} text={data.Details} />
        ))}
      </PageContainer>
    </>
  );
}

export async function getStaticProps() {
  // Fetch home page banner images + top banner text
  const terms_res = await fetch(`${API_TERMS_URL}`);
  const terms_data = await terms_res.json();

  // Return as props
  return {
    props: {
      terms_data,
    },
  };
}
