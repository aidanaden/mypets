import React from 'react'
import { 
    VStack, 
    Heading, 
    Box, 
    Text 
} from '@chakra-ui/react'
import ProductReviewListCard from "../ProductReviewListCard/ProductReviewListCard"

function ProductReviewSection({ reviews }) {

    return (
        <Box px={6} py={8}>
            <Heading as="h3" fontSize="2xl" textAlign="center" mb={6}>Ratings & Reviews</Heading>
            <VStack spacing={4}>
                {reviews.length > 0 ? 
                    reviews.map((review, i) => (
                        <ProductReviewListCard review={review} key={i}/>    
                    ))
                : ( <Text
                        textAlign='center'
                        align='center'
                    >
                        No reviews available for this product yet
                    </Text>)}
            </VStack>
        </Box>
    )
}

export default ProductReviewSection
