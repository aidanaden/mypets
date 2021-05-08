import React from 'react'
import { Button } from "@chakra-ui/react"

function CategoryBtn({ cat }) {
    return (
        <Button
            w="100%"  
            p={6}
            rounded="md" 
            bgColor="gray.100" 
            textColor="gray.600"
            fontSize="lg"
            _hover={{ bgGradient: "linear(to-t, mypets.900, mypets.100)", textColor: "gray.100" }}
            _active={{ transform: "scale(0.95)"}}
        >
            {cat.name}
        </Button>
    )
}

export default CategoryBtn
