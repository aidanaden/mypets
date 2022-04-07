import { Box, SimpleGrid } from "@chakra-ui/react";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";
import BenefitCard from "./BenefitCard";
import PageContainer from "../../Layouts/PageContainer/PageContainer";

function index({ benefits, spacing = 4, ...props }) {
  console.log(benefits);
  return (
    <PageContainer bg="mypets.400" {...props}>
      <Box>
        <SectionHeader textAlign="center">{benefits.Header}</SectionHeader>
        <SimpleGrid columns={2} spacing={spacing}>
          {benefits.benefit.map((benefit, i) => (
            <BenefitCard key={`benefit_${i}`} benefit={benefit} />
          ))}
        </SimpleGrid>
      </Box>
    </PageContainer>
  );
}

export default index;
