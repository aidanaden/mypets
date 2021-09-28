import { Box } from '@chakra-ui/react'

export default function Section({ children, ...props }) {
    return (
        <Box
            p={{ base: 4, md: 8, xl: 12 }}
            w='100%'
            rounded='lg'
            boxShadow='sm'
            borderWidth='1px'
            {...props}
        >
            {children}
        </Box>
    )
}
