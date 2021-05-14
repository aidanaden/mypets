import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import RatingDisplay from '../RatingDisplay/RatingDisplay'
import { formatDistance } from 'date-fns'

function distanceFromToday(str_date) {
    const review_date = new Date(str_date)
    return formatDistance(review_date, new Date(), { addSuffix: true })
}   

function ProductReviewListCard({ review }) {

    const review_date = new Date(review.date_created)
    const date_fns_review_date = formatDistance(review_date, new Date(), { addSuffix: true })

    return (
        <Box rounded='lg' bgColor="gray.100" p={5}>
            <Text fontStyle="italic" fontSize="sm">
                {review.user}
            </Text>
            <Text mt={4}>
                {review.text}
            </Text>
            <Flex direction='row' mt={6} justifyContent="space-between">
                <RatingDisplay rating={review.rating} numReviews={0}/> 
                <Text fontStyle="italic" fontSize="sm">
                    {date_fns_review_date}
                </Text>
            </Flex>
        </Box>
    )
}

export default ProductReviewListCard
