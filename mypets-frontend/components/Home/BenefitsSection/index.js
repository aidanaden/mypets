import { Box, SimpleGrid } from "@chakra-ui/react";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";
import BenefitCard from "./BenefitCard";
import PageContainer from "../../Layouts/PageContainer/PageContainer";

function index({ benefits, spacing = 4, ...props }) {
  return (
    <PageContainer pb={{ base: 4, lg: 12 }} bg="mypets.400" {...props}>
      <SectionHeader textAlign="center">{benefits.Header}</SectionHeader>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={spacing}>
        {benefits.benefit.map((benefit, i) => (
          <BenefitCard key={`benefit_${i}`} benefit={benefit} />
        ))}
      </SimpleGrid>
    </PageContainer>
  );
}

export default index;
