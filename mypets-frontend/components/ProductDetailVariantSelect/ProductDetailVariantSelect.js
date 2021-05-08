import React from 'react'
import { Select } from '@chakra-ui/react'

function ProductDetailVariantSelect({ options }) {
    return (
        <Select mt={8} placeholder="Select weight" w="160px" focusBorderColor="mypets.100">
            {options.map((option, i) => (
                <option key={i} value={option}>{option}KG</option>
            ))}
        </Select>
    )
}

export default ProductDetailVariantSelect
