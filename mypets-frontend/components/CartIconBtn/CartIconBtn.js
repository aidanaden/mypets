import {
    IconButton,
    chakra,
} from '@chakra-ui/react'

import { FaShoppingCart } from 'react-icons/fa'

export default function CartIconBtn({ ...props }) {
    return (
        <IconButton
            // isRound
            size="md"
            icon={
                <>
                    <FaShoppingCart />
                    <chakra.span
                        pos="absolute"
                        top="-1px"
                        right="-1px"
                        p="4px"
                        fontSize="xs"
                        fontWeight="bold"
                        lineHeight="none"
                        color="red.100"
                        transform="translate(50%,-50%)"
                        bg="red.600"
                        rounded="full"
                    />
                </>
            }
            {...props}
        />
    );
}