import { Stack } from "@chakra-ui/react";

export default function BenefitCard({ benefit, ...props }) {
  return (
    <Stack dir="row" {...props} bg="gray.400" rounded="lg" spacing={4}>
      <Box>
        <SectionSubHeader mb={2}>{benefit.header}</SectionSubHeader>
        <Text>{benefit.text}</Text>
      </Box>
    </Stack>
  );
}
