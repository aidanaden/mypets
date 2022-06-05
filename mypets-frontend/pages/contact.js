import { Box, Text, Spacer } from "@chakra-ui/react";
import Head from "next/head";

import PageContainer from "../components/Layouts/PageContainer/PageContainer";
import Sidebar from "../components/Layouts/Sidebar/Sidebar";
import { API_CATEGORIES_URL, API_CONTACT_URL } from "../utils/urls";
import SectionHeader from "../components/Layouts/SectionHeader/SectionHeader";
import ParagraphSection from "../components/Layouts/ParagraphSection/ParagraphSection";
import SectionSubHeader from "../components/Layouts/SectionSubHeader/SectionSubHeader";
import BaseLayout from "../components/Layouts/BaseLayout/BaseLayout";

export default function contact({ contact_data }) {
  const intro = `

    Our Business Operating Hours: 9am - 12pm & 2pm - 6pm (Mon-Fri)
    
    If you have any inquiries/feedback or suggestions, please contact us.
    
    • Email: support@mypets.sg (Reply within 2 working days)
    
    • Live Chat Support: 9am - 12pm, 2pm - 6pm (Mon - Fri)
    
    For account/order-related which requires immediate assistance
    
    • Phone/WhatsApp: 9126 4942 (anytime)
`;

  return (
    <>
      <Head>
        <title>{contact_data.meta_title}</title>
        <meta name="description" content={contact_data.meta_description} />
      </Head>
      <PageContainer>
        <SectionHeader mb={{ base: 2, md: 4 }}>Contact Us</SectionHeader>
        <SectionSubHeader>Last updated: 19/10/21</SectionSubHeader>
        <ParagraphSection text="Our Business Operating Hours: 9am - 12pm & 2pm - 6pm (Mon-Fri)" />
        <ParagraphSection
          heading="If you have any inquiries/feedback or suggestions, please contact us."
          text="• Email: support@mypets.sg (Reply within 2 working days)"
          mb={{ base: 3 }}
        />
        <ParagraphSection text="• Live Chat Support: 9am - 12pm, 2pm - 6pm (Mon - Fri)" />
        <ParagraphSection
          heading="For account/order-related which requires immediate assistance"
          text="• Phone/WhatsApp: 9126 4942 (anytime)"
        />
      </PageContainer>
    </>
  );
}

export async function getStaticProps() {
  const contact_res = await fetch(`${API_CONTACT_URL}`);
  const contact_data = await contact_res.json();

  // Return as props
  return {
    revalidate: 1,
    props: {
      // categories,
      contact_data,
    },
  };
}
