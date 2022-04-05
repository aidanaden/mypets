import { Box, Flex, Text } from "@chakra-ui/react";
import { formatDistanceToNowStrict } from "date-fns";

import RatingDisplay from "../../Common/RatingDisplay/RatingDisplay";
import { REVIEW_TEXT_LEN } from "../../../utils/urls";

function distanceFromToday(str_date) {
  const review_date = new Date(str_date);
  return formatDistanceToNowStrict(review_date, {
    addSuffix: true,
    unit: "day",
    roundingMethod: "ceil",
  });
}

function textEnded(str) {
  return str.length > REVIEW_TEXT_LEN;
}

function MerchantReviewListCard({ review }) {
  const date_fns_review_date = distanceFromToday(review.date_created);

  return (
    <Flex
      direction="column"
      rounded="lg"
      bgColor="gray.100"
      p={5}
      textAlign="left"
      justifyContent="space-between"
    >
      <Box>
        <Text fontStyle="italic" fontSize="sm">
          {review.profile.username}
        </Text>
        <Text mt={4} fontSize="md">
          {textEnded(review.text)
            ? review.text.substring(0, REVIEW_TEXT_LEN) + "..."
            : review.text}
        </Text>
      </Box>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignContent="center"
        mt={4}
      >
        <RatingDisplay rating={review.rating} numReviews={0} />
        <Text fontStyle="italic" fontSize="sm" textAlign="right">
          {date_fns_review_date}
        </Text>
      </Flex>
    </Flex>
  );
}

export default MerchantReviewListCard;
