import { Input } from "@chakra-ui/react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import PageContainer from "../../Layouts/PageContainer/PageContainer";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";

function index({ data, ...props }) {
  return (
    <PageContainer bg="white" {...props}>
      <SectionHeader textAlign="center">{data.Header}</SectionHeader>
    </PageContainer>
  );
}

export default index;
