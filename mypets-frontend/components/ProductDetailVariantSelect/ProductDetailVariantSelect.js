import React from 'react'
import { Select } from '@chakra-ui/react'

function ProductDetailVariantSelect({ variantValue, variantUnit, variantIsFloat, options, onChange, ...props }) {
    console.log('variantValue: ', variantValue)
    console.log('variant unit: ', variantUnit)
    console.log('variantIsFloat: ', variantIsFloat)
    console.log('variants: ', options)
    return (
        <Select
            value={variantValue}
            focusBorderColor="mypets.100"
            onChange={onChange}
            {...props}
        >
            {options.map((option, i) => (
                <option
                    key={i}
                    value={variantIsFloat ? option.variant_type_float : option.variant_type_str}
                >
                    {variantIsFloat ? option.variant_type_float : option.variant_type_str}{variantUnit.toLowerCase()}
                </option>
            ))}
        </Select>
    )
}

export default ProductDetailVariantSelect
