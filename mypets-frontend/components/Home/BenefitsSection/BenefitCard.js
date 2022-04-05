import { Box, Text, Stack } from "@chakra-ui/react";
import SectionSubHeader from "../../Layouts/SectionSubHeader/SectionSubHeader";

export default function BenefitCard({ benefit, ...props }) {
  return (
    <Stack dir="row" {...props} bg="gray.400" rounded="lg" spacing={4}>
      <Box p={{ base: 4, lg: 8 }}>
        <SectionSubHeader mb={2}>{benefit.Header}</SectionSubHeader>
        <Text>{benefit.Text}</Text>
      </Box>
    </Stack>
  );
}
