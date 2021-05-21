import { 
    Heading, 
    VStack, 
    HStack,
    Text,
    Flex
} from '@chakra-ui/react'
import RatingDisplay from '../RatingDisplay/RatingDisplay'

function MerchantTitle({ merchantName, merchantRating, merchantNumReviews, merchantEmail, merchantContact }) {
    return (
        <VStack alignItems='center'>
            <Heading as='h2'>{merchantName}</Heading>
            <RatingDisplay rating={merchantRating} numReviews={merchantNumReviews} />
            <Flex direction='row'>
                <Text as='h4' fontSize='sm' mr={4} textColor='gray.600'>
                    Contact: {merchantContact}
                </Text>
                <Text as='h4' fontSize='sm' textColor='gray.600'>
                    Email: {merchantEmail}
                </Text>
            </Flex>
        </VStack>
    )
}

export default MerchantTitle
