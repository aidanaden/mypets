import React from 'react'
import { Select } from '@chakra-ui/react'

function ProductDetailVariantSelect({ variantWeight, options, onChange }) {
    return (
        <Select mt={{ base: 6, md: 8 }} value={variantWeight} w="160px" focusBorderColor="mypets.100" onChange={onChange}>
            {options.map((option, i) => (
                // i > 0 ? 
                <option key={i} value={option.weight}>{option.weight}KG</option>
            ))}
        </Select>
    )
}

export default ProductDetailVariantSelect
