import React from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'
import Rating from '../Rating/Rating'
import { formatDistance } from 'date-fns'

function distanceFromToday(str_date) {
    const review_date = new Date(str_date)
    return formatDistance(review_date, new Date(), { addSuffix: true })
}   

function ProductReviewListCard({ review }) {

    const review_date = new Date(review.date_created)
    const date_fns_review_date = formatDistance(review_date, new Date(), { addSuffix: true })

    return (
        <Box rounded='lg' bgColor="gray.100" p={6}>
            <Text>
                {review.text}
            </Text>
            <HStack mt={6} justifyContent="space-between">
                <Rating rating={review.rating} numReviews={0}/>
                <Text fontStyle="italic" fontSize="sm">
                    {review.user}, {date_fns_review_date}
                </Text>
            </HStack>
        </Box>
    )
}

export default ProductReviewListCard
