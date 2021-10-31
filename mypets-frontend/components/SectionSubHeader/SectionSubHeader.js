import {
    Text
} from '@chakra-ui/react'

export default function SectionSubHeader({ children, ...props }) {
    return (
        <Text
            textAlign="left"
            mb={{ base: 4, md: 6 }}
            fontSize={{ base: 'sm', md: 'md'}}
            {...props}
        >
            {children}
        </Text>
    )
}
