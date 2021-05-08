import React from 'react'
import { Box } from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

function Rating({ rating, numReviews=152 }) {
    return (
      <Box d="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color="#ffc400"
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} color="#ffc400"/>;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} color="#ffc400"/>;
          })}
        {numReviews > 0 ? <Box as="span" ml="2" color="gray.600" fontSize="sm">{numReviews} reviews </Box> : <Box />}
      </Box>
    );
  }

export default Rating
