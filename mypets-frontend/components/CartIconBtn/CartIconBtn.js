import {
    IconButton,
    Icon,
    Circle
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
                        boxSize={{ base: 6 }}
                    />
                    {cartNumOrderProducts > 0 &&
                    <Circle
                        pos="absolute"
                        top="-1px"
                        right="-1px"
                        p={{ base: 2 }}
                        fontSize="xs"
                        fontWeight="bold"
                        lineHeight="none"
                        color="white"
                        transform="translate(50%,-50%)"
                        bg="mypets.400"
                    >
                        {cartNumOrderProducts}
                    </Circle>}
                </>
            }
            {...props}
        />
    );
}