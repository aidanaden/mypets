import { Badge } from '@chakra-ui/react'

function MerchantBadge({ merchantName, ...props }) {
    return (
        <Badge colorScheme='gray' rounded='full' px="2" fontSize="0.8em" {...props}>
            {merchantName}
        </Badge>
    )
}

export default MerchantBadge
