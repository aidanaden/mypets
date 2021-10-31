import React from 'react'
import { Select } from '@chakra-ui/react'

function ProductDetailVariantSelect({ variantWeight, options, onChange }) {
    return (
        <Select mt={{ base: 6, md: 8 }} value={variantWeight} w="160px" focusBorderColor="mypets.100" onChange={onChange}>
            {options.length > 0 ?
            options.map((option, i) => {
                if (option.available) return (
                    <option
                        key={i}
                        value={option.weight}
                    >
                        {option.weight}KG
                    </option>
            )}) :
            <option
                disabled
            >
                Sold out
            </option>}
        </Select>
    )
}

export default ProductDetailVariantSelect
