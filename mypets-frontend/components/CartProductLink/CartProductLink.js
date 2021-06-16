import { forwardRef } from 'react'
import { 
    Tooltip, 
    HStack, 
    Box, 
    Text, 
    Badge 
} from '@chakra-ui/react'
import NextImage from 'next/image'

const CartProductLink = forwardRef(({ onClick, href, product }, ref) => {
    if (product) {
        return (
            <a href={href} onClick={onClick} ref={ref}>
                <Tooltip
                    label={product.name}
                    bg="white"
                    placement={'top-start'}
                    color={'gray.800'}
                    fontSize="xs"
                >
                    <HStack mb={6}>
                        <NextImage src={imageToUrl(product.image)} width='100' height='100' />
                        <Box>
                            <Text fontWeight='semibold'>{product.name}</Text>
                            <Badge colorScheme='blackAlpha'>{product.merchant.name}</Badge>
                        </Box>
                    </HStack>
                </Tooltip>
            </a>
        )
    } else {
        return (
            <>
            </>
        )
    }
    
})

export default CartProductLink
