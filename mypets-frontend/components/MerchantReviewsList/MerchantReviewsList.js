import {
    SimpleGrid
} from '@chakra-ui/react'

import ReviewListCard from '../MerchantReviewListCard/MerchantReviewListCard'

function MerchantReviewsList({ reviews, spacing=4 }) {
    return (
        <SimpleGrid columns={5} spacing={spacing}>
            {reviews.map((review, index) => (
                <ReviewListCard review={review} key={index} />
            ))}
        </SimpleGrid>
    )
}

export default MerchantReviewsList
