import { Box } from "@chakra-ui/react";

export default function BaseLayout({ children, ...props }) {
  return (
    <Box pb={{ base: 512, lg: 96 }} {...props}>
      {children}
    </Box>
  );
}
