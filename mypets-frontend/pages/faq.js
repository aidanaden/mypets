import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";

import PageContainer from "../components/Layouts/PageContainer/PageContainer";
import Sidebar from "../components/Layouts/Sidebar/Sidebar";
import { API_CATEGORIES_URL, API_FAQ_URL } from "../utils/urls";
import SectionHeader from "../components/Layouts/SectionHeader/SectionHeader";
import SectionSubHeader from "../components/Layouts/SectionSubHeader/SectionSubHeader";
import ParagraphSection from "../components/Layouts/ParagraphSection/ParagraphSection";
import BaseLayout from "../components/Layouts/BaseLayout/BaseLayout";

export default function faq({ faq_data }) {
  return (
    <>
      <Head>
        <title>{faq_data.meta_title}</title>
        <meta name="description" content={faq_data.meta_description} />
      </Head>
      <PageContainer>
        <SectionHeader>Customer FAQ</SectionHeader>
        <SectionSubHeader>
          Last updated: {faq_data.Last_updated}
        </SectionSubHeader>
        <ParagraphSection
          heading="General Information:"
          text="- Live Chat (Support): 9am to 12pm & 2pm to 6pm (Mon-Fri)"
          mb={{ base: 3 }}
        />
        <ParagraphSection
          text="- Email: support@mypets.sg (reply within 2 working days)"
          mb={{ base: 3 }}
        />
        <ParagraphSection text="- Whatsapp/Phone-call: +65 8890 5982 (anytime)" />
        {faq_data.Question.map((data) => (
          <ParagraphSection heading={data.Title} text={data.Answer} />
        ))}
      </PageContainer>
    </>
  );
}

export async function getStaticProps() {
  // Fetch home page banner images + top banner text
  const faq_res = await fetch(`${API_FAQ_URL}`);
  const faq_data = await faq_res.json();

  // Return as props
  return {
    revalidate: 1,
    props: {
      faq_data,
    },
  };
}
