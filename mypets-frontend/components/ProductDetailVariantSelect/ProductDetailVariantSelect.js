import React from 'react'
import { Select } from '@chakra-ui/react'

function ProductDetailVariantSelect({ variantWeight, options, onChange }) {
    return (
        <Select
            value={variantWeight}
            focusBorderColor="mypets.100"
            onChange={onChange}
        >
            {options.map((option, i) => (
                <option
                    key={i}
                    value={option.weight}
                >
                    {option.weight}KG
                </option>
            ))}
        </Select>
    )
}

export default ProductDetailVariantSelect
