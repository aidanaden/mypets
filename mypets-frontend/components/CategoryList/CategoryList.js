import React from 'react'
import { VStack } from "@chakra-ui/react"
import CategoryBtn from "../CategoryBtn/CategoryBtn"

function CategoryList({ categories, setSelectedCategory }) {
    return (
        <VStack mt={16}>
            {categories.map((cat, i) => (
                <CategoryBtn cat={cat} key={i} onClick={setSelectedCategory} />
            ))}
        </VStack>
    )
}

export default CategoryList
