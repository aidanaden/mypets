import React from 'react'
import { 
    Button, 
    Box 
} from "@chakra-ui/react"

function CategoryBtn({ cat, onClick }) {
    return (
        <Box
            w="100%"  
            py={4}
            px={6}
            rounded="md" 
            bgColor="gray.100" 
            textColor="gray.600"
            textAlign='center'
            fontSize="lg"
            _hover={{ bgGradient: "linear(to-t, mypets.900, mypets.100)", textColor: "gray.100", cursor: "pointer" }}
            _active={{ transform: "scale(0.95)"}}
            onClick={() => onClick(cat)}
        >
            {cat}
        </Box>
    )
}

export default CategoryBtn
