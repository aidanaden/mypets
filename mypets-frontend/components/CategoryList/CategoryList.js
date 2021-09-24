import {
    Stack
} from "@chakra-ui/react"

import CategoryBtn from "../CategoryBtn/CategoryBtn"

export default function CategoryList({ direction='row', categories, setSelectedCategory }) {
    return (
        <Stack 
            mt={{ lg: 0 }}
            direction={{ base: 'row', lg: direction }} 
            overflow={{ base: 'auto' }}
        >
            {categories.map((cat, i) => (
                <CategoryBtn
                    isAnimal={isAnimal}
                    cat={cat}
                    key={i}
                    onClick={setSelectedCategory}
                />
            ))}
        </Stack>
    )
}
