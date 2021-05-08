import React from 'react'
import { Badge } from '@chakra-ui/react'

function ProductDetailMerchantBadge({ merchant }) {
    return (
        <Badge rounded="full" px="2" mt={1} fontSize="0.8em" colorScheme="blackAlpha">
            {merchant}
        </Badge>
    )
}

export default ProductDetailMerchantBadge
