import { Box } from "@chakra-ui/react";

export default function BaseLayout({ children, ...props }) {
  return (
    <Box pb={{ base: 400, md: 200, lg: 48 }} {...props}>
      {children}
    </Box>
  );
}
