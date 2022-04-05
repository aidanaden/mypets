import { Box, SimpleGrid } from "@chakra-ui/react";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";
import BenefitCard from "./BenefitCard";

function index({ benefits, spacing = 4, ...props }) {
  console.log(benefits);
  return (
    <Box {...props}>
      <SectionHeader>Choose Mypets</SectionHeader>
      <SimpleGrid columns={5} spacing={spacing}>
        {benefits.benefit.map((benefit, i) => (
          <BenefitCard key={`benefit_${i}`} benefit={benefit} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default index;
