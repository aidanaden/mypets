import React from 'react'
import { VStack } from "@chakra-ui/react"
import CategoryBtn from "../CategoryBtn/CategoryBtn"

function CategoryList({ categories }) {
    return (
        <>
        <VStack mt={16}>
            {categories.map((cat, i) => (
                <CategoryBtn cat={cat} key={i}/>
            ))}
        </VStack>
        </>
    )
}

export default CategoryList
