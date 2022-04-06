import { Box, Text, Stack } from "@chakra-ui/react";
import SectionSubHeader from "../../Layouts/SectionSubHeader/SectionSubHeader";

export default function BenefitCard({ benefit, ...props }) {
  return (
    <Stack
      dir="row"
      {...props}
      bg="gray.200"
      rounded="lg"
      justify="space-between"
    >
      <Box rounded="lg" boxSize={"48"} shadow="md"></Box>
      <Box p={{ base: 4, lg: 8 }}>
        <Text mb={2} fontSize="2xl" fontWeight="bold">
          {benefit.Header}
        </Text>
        <SectionSubHeader>{benefit.Text}</SectionSubHeader>
      </Box>
    </Stack>
  );
}
