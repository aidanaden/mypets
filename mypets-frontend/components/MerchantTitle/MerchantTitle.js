import { Heading, VStack, HStack, Text, Flex } from "@chakra-ui/react";
import RatingDisplay from "../RatingDisplay/RatingDisplay";

function MerchantTitle({ merchantName, merchantRating, merchantNumReviews }) {
  return (
    <VStack alignItems="center">
      <Heading as="h2">{merchantName}</Heading>
      <RatingDisplay rating={merchantRating} numReviews={merchantNumReviews} />
    </VStack>
  );
}

export default MerchantTitle;
