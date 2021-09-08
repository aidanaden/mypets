import React from 'react'
import { 
    Center,
    Button, 
    Box 
} from "@chakra-ui/react"

function CategoryBtn({ isAnimal, cat, onClick }) {
    if (isAnimal) {
        return (
            <Center
                w="100%"  
                py={{ lg: 3 }}
                px={{ lg: 6 }}
                minW={{ base: '160px', lg: 'none'}}
                minH={{ base: '56px', lg: 'none'}}
                rounded="md" 
                bgColor="gray.100" 
                textColor="gray.600"
                fontSize="lg"
                _hover={{ bgGradient: "linear(to-t, mypets.900, mypets.100)", textColor: "gray.100", cursor: "pointer" }}
                _active={{ transform: "scale(0.95)"}}
                onClick={() => onClick(cat)}
            >
                {cat}
            </Center>
        )
    } else {
        return (
            <Center
                w="100%"  
                py={{ lg: 3 }}
                px={{ lg: 6 }}
                minW={{ base: '160px', lg: 'none'}}
                minH={{ base: '56px', lg: 'none'}}
                rounded="md" 
                bgColor="gray.100" 
                textColor="gray.600"
                fontSize="lg"
                _hover={{ bgGradient: "linear(to-t, mypets.900, mypets.100)", textColor: "gray.100", cursor: "pointer" }}
                _active={{ transform: "scale(0.95)"}}
                onClick={() => onClick(cat)}
            >
                {cat}
            </Center>
        )
    }
}

export default CategoryBtn
