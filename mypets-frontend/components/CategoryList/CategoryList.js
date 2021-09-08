import {
    Stack
} from "@chakra-ui/react"

import CategoryBtn from "../CategoryBtn/CategoryBtn"

function CategoryList({ categories, setSelectedCategory }) {
    return (
        <Stack 
            mt={{ lg: 0 }}
            direction={{ base: 'row', lg: 'row'}} 
            overflow={{ base: 'auto', lg: 'none'}}
        >
            {categories.map((cat, i) => (
                <CategoryBtn
                    cat={cat}
                    key={i}
                    onClick={setSelectedCategory}
                />
            ))}
        </Stack>
    )
}

export default CategoryList
