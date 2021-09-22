import React from 'react'
import { Badge } from '@chakra-ui/react'

function ProductDetailBadge({ children, ...props }) {
    return (
        <Badge
            rounded="full"
            px="2"
            mt={1}
            fontSize="0.8em"
            colorScheme="blackAlpha"
            {...props}
        >
            {children}
        </Badge>
    )
}

export default ProductDetailBadge
