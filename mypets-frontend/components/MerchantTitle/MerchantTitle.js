import { Box, Text } from '@chakra-ui/react'
import RatingDisplay from '../RatingDisplay/RatingDisplay'

function MerchantTitle({ merchantName, merchantRating, merchantNumReviews }) {
    return (
        <Box>
            <Text as='h2' mb={3}>{merchantTitle}</Text>
            <RatingDisplay rating={merchantRating} numReviews={merchantNumReviews} />
        </Box>
    )
}

export default MerchantTitle
