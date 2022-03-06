import { Heading } from "@chakra-ui/react";

export default function SectionHeader({ children, ...props }) {
  return (
    <Heading
      as="h4"
      textAlign="left"
      mb={{ base: 2, md: 4 }}
      fontSize={{ base: "md", md: "lg" }}
      {...props}
    >
      {children}
    </Heading>
  );
}
