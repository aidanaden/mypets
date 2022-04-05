import { Badge } from "@chakra-ui/react";

function ProductDetailBadge({ children, ...props }) {
  return (
    <Badge
      rounded="full"
      px={3}
      py={1}
      mt={1}
      fontSize="0.8em"
      colorScheme="blackAlpha"
      w="fit-content"
      {...props}
    >
      {children}
    </Badge>
  );
}

export default ProductDetailBadge;
