import { useState, useContext, useEffect } from 'react'
import { 
    IconButton, 
    Text, 
    HStack 
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

import AuthContext from '../../context/AuthContext'

function CartProductQuantityPicker({ addQuantity, minusQuantity, quantity }) {

    const [qty, setQty] = useState(quantity)
    const { cartLoading } = useContext(AuthContext)

    const combinedAddQuantity = () => {
        addQuantity()
        // let temp_qty = qty
        // temp_qty += 1
        // setQty(temp_qty)
        // console.log('current quantity is: ', temp_qty)
    }

    const combinedMinusQuantity = () => {
        minusQuantity()
        // let temp_qty = qty
        // qty > 0 ? temp_qty -= 1 : 0
        // setQty(temp_qty)
        // console.log('current quantity is: ', temp_qty)
    }

    useEffect(() => {
        setQty(quantity)
    }, [quantity])

    return (
        <HStack w='auto' justifyContent='center'>
            <IconButton 
                icon={<MinusIcon />} 
                size="sm" 
                onClick={combinedMinusQuantity}
                // onClick={minusQuantity}
                isLoading={cartLoading}
            />
            <Text w='42px' align="center" alignSelf='center' fontSize="lg">
                {qty}
            </Text>
            <IconButton 
                icon={<AddIcon />} 
                size="sm"
                onClick={combinedAddQuantity}
                // onClick={addQuantity}
                isLoading={cartLoading}
            />
        </HStack>
    )
}

export default CartProductQuantityPicker
