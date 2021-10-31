import {
    Heading
} from '@chakra-ui/react'

export default function SectionHeader({ children, ...props }) {
    return (
        <Heading
            as="h4"
            textAlign="left"
            mb={{ base: 4, md: 6 }}
            fontSize={{ base: 'lg', md: 'xl'}}
            {...props}
        >
            {children}
        </Heading>
    )
}
