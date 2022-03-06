import React, { useState } from "react";
import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = React.forwardRef(
  ({ size, scale, mt, rating, setRating }, ref) => {
    const onClick = (idx) => {
      if (!isNaN(idx)) {
        // allow user to click first icon and set rating to zero if rating is already 1
        if (rating === 1 && idx === 1) {
          setRating(0);
        } else {
          setRating(idx);
        }
      }
    };

    const RatingIcon = ({ fill }) => {
      if (fill == 1) {
        return <FaStar size={size} color="#ffc400" />;
      } else if (fill == 0.5) {
        return <FaStarHalfAlt size={size} color="#ffc400" />;
      } else {
        return <FaRegStar size={size} color="#ffc400" />;
      }
    };

    const RatingButton = ({ idx, fill }) => {
      return (
        <Box
          as="button"
          aria-label={`Rate ${idx}`}
          height={`${size}px`}
          width={`${size}px`}
          variant="unstyled"
          onClick={() => onClick(idx)}
          _focus={{ outline: 0 }}
        >
          <RatingIcon fill={fill} />
        </Box>
      );
    };

    return (
      <Stack isInline mt={mt} justify="center">
        <input name="rating" type="hidden" value={rating} ref={ref} />
        {Array(scale)
          .fill(0)
          .map((v, i) => (
            <RatingButton key={i} idx={i} fill={i <= rating} />
          ))}
      </Stack>
    );
  }
);

export default Rating;
