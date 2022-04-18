import { Box, Text, Stack, Circle, Center } from "@chakra-ui/react";
import SectionSubHeader from "../../Layouts/SectionSubHeader/SectionSubHeader";

export default function BenefitCard({ benefit, ...props }) {
  console.log("benefit icon src: ", benefit.Icon);
  return (
    <Stack
      direction={{ base: "row", lg: "row" }}
      alignItems="center"
      bg="gray.200"
      rounded="lg"
      spacing={8}
      p={{ base: 4, md: 8 }}
      {...props}
    >
      <Circle
        boxSize={{ base: "24", md: "32" }}
        p={{ base: 4, md: 8 }}
        shadow="md"
        bg="mypets.400"
        borderWidth={"6px"}
        borderColor="white"
      >
        <img src={benefit.Icon.url} loading="lazy" />
      </Circle>
      <Center py="auto">
        <Box my="auto" justifySelf={"center"}>
          <Text mb={2} fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
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
