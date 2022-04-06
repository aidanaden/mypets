import { Box, Text, Stack, Circle } from "@chakra-ui/react";
import SectionSubHeader from "../../Layouts/SectionSubHeader/SectionSubHeader";

export default function BenefitCard({ benefit, ...props }) {
  return (
    <Stack
      direction={"row"}
      bg="gray.200"
      rounded="lg"
      justify="space-between"
      p={{ base: 4, md: 8 }}
      {...props}
    >
      <Circle boxSize={"48"} shadow="md" bg="blue.200" />
      <Box bg="red.300">
        <Text mb={2} fontSize="2xl" fontWeight="bold">
          {benefit.Header}
        </Text>
        <SectionSubHeader>{benefit.Text}</SectionSubHeader>
      </Box>
    </Stack>
  );
}
