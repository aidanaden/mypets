import { Box, SimpleGrid } from "@chakra-ui/react";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";
import Section from "../../Layouts/Section/Section";
import BenefitCard from "./BenefitCard";

function index({ benefits, spacing = 4, ...props }) {
  console.log(benefits);
  return (
    <Section bg="mypets.400" {...props}>
      <SectionHeader textAlign="center">{benefits.Header}</SectionHeader>
      <SimpleGrid columns={2} spacing={spacing}>
        {benefits.benefit.map((benefit, i) => (
          <BenefitCard key={`benefit_${i}`} benefit={benefit} />
        ))}
      </SimpleGrid>
    </Section>
  );
}

export default index;
