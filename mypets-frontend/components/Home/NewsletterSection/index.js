import { Box } from "@chakra-ui/react";
import PageContainer from "../../Layouts/PageContainer/PageContainer";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";

function index({ data, ...props }) {
  return (
    <PageContainer pb={{ base: 4, lg: 12 }} {...props}>
      <SectionHeader>{data.Header}</SectionHeader>
    </PageContainer>
  );
}

export default index;
