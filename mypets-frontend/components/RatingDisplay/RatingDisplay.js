import React from 'react'
import { Box } from '@chakra-ui/react'
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa"

function RatingDisplay({ rating, numReviews=0 }) {
    return (
      <Box d="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <FaStar
                  key={i}
                  style={{ marginLeft: '1' }}
                  color='#ffc400'
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <FaStarHalfAlt key={i} style={{ marginLeft: '1' }} color='#ffc400'/>
            }
            return <FaRegStar key={i} style={{ marginLeft: '1' }} color='#ffc400'/>
          })}
        {numReviews > 0 ? <Box as="span" ml="2" color="gray.800" fontSize="sm" fontWeight='medium'>{numReviews} reviews </Box> : <Box />}
      </Box>
    );
  }

export default RatingDisplay
