import { Container } from "@chakra-ui/react";

export default function FooterContainer() {
  return (
    <Container
      maxW={{ lg: "1200px" }}
      px={{ base: 4, xl: 0 }}
      pt={{ base: 4, lg: 12 }}
      pb={{ base: 4, lg: 12 }}
      {...props}
    >
      {children}
    </Container>
  );
}
