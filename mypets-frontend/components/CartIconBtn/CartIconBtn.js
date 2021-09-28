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
            bg='white'
            _active={{ bg: 'white' }}
            icon={
                <>
                    <Icon as={FaShoppingCart}
                        boxSize={{ base: 6 }}
                    />
                    {cartNumOrderProducts > 0 &&
                    <Circle
                        pos="absolute"
                        top="-2px"
                        right="-2px"
                        size={{ base: 6 }}
                        fontSize="xs"
                        fontWeight="semibold"
                        lineHeight="none"
                        color="white"
                        // transform="translate(50%,-50%)"
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