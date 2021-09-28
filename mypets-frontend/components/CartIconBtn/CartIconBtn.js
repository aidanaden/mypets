import {
    IconButton,
    Icon,
    chakra,
} from '@chakra-ui/react'

import { FaShoppingCart } from 'react-icons/fa'

export default function CartIconBtn({ cartNumOrderProducts, ...props }) {
    return (
        <IconButton
            // isRound
            size="lg"
            icon={
                <>
                    <Icon as={FaShoppingCart}
                        boxSize={{ base: 4 }}
                    />
                    {cartNumOrderProducts > 0 &&
                    <chakra.span
                        pos="absolute"
                        top="-1px"
                        right="-1px"
                        p={{ base: 1 }}
                        fontSize="xs"
                        fontWeight="bold"
                        lineHeight="none"
                        color="white"
                        transform="translate(50%,-50%)"
                        bg="mypets.400"
                        rounded="full"
                    >
                        {cartNumOrderProducts}
                    </chakra.span>}
                </>
            }
            {...props}
        />
    );
}