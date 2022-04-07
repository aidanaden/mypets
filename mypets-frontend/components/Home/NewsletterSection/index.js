import { Box } from "@chakra-ui/react";
import FooterContainer from "../../Layouts/FooterContainer/FooterContainer";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";

function index({ data, ...props }) {
  return (
    <FooterContainer bg="white" {...props}>
      <SectionHeader textAlign="center">{data.Header}</SectionHeader>
    </FooterContainer>
  );
}

export default index;
