import { Badge } from '@chakra-ui/react'

function MerchantBadge({ merchantName, ...props }) {
    return (
        <Badge
            colorScheme='gray'
            rounded='full'
            px="2"
            maxW='100%'
            {...props}
        >
            {merchantName}
        </Badge>
    )
}

export default MerchantBadge
