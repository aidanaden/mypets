import { Box, Text, Stack, Circle, Center } from "@chakra-ui/react";
import SectionSubHeader from "../../Layouts/SectionSubHeader/SectionSubHeader";

export default function BenefitCard({ benefit, ...props }) {
  return (
    <Stack
      direction={"row"}
      bg="gray.200"
      rounded="lg"
      spacing={4}
      p={{ base: 4, md: 8 }}
      {...props}
    >
      <Circle boxSize={"36"} shadow="md" bg="blue.200" />
      <Center bg="red.300" py="auto">
        <Box my="auto" justifySelf={"center"} bg="blue.100">
          <Text mb={2} fontSize="2xl" fontWeight="bold">
            {benefit.Header}
          </Text>
          <SectionSubHeader
            mb={0}
            justifySelf="center"
            my="auto"
            justifyContent={"center"}
            justifyItems={"center"}
          >
            {benefit.Text}
          </SectionSubHeader>
        </Box>
      </Center>
    </Stack>
  );
}
