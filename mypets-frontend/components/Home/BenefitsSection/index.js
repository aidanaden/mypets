import { Box, SimpleGrid } from "@chakra-ui/react";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";
import BenefitCard from "./BenefitCard";
import FooterContainer from "../../Layouts/FooterContainer/FooterContainer";

function index({ benefits, spacing = 4, ...props }) {
  return (
    <Box bg="mypets.400">
      <FooterContainer {...props}>
        <SectionHeader textAlign="center">{benefits.Header}</SectionHeader>
        <SimpleGrid columns={2} spacing={spacing}>
          {benefits.benefit.map((benefit, i) => (
            <BenefitCard key={`benefit_${i}`} benefit={benefit} />
          ))}
        </SimpleGrid>
      </FooterContainer>
    </Box>
  );
}

export default index;
