import { Box, SimpleGrid } from "@chakra-ui/react";
import SectionHeader from "../../layouts/SectionHeader";

function index({ benefits, space = 4, ...props }) {
  return (
    <Box>
      <SectionHeader>Choose Mypets</SectionHeader>
      <SimpleGrid columns={5} spacing={spacing}>
        {benefits.map((benefit, i) => (
          <BenefitCard key={`benefit_${i}`} benefit={benefit} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default index;
