import {
    Heading
} from '@chakra-ui/react'

export default function SectionHeader({ children, ...props }) {
    return (
        <Heading
            as="h2"
            textAlign="left"
            mb={{ base: 4, md: 6 }}
            fontSize={{ base: 'xl', md: '2xl'}}
            {...props}
        >
            {children}
        </Heading>
    )
}
