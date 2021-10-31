import { Container } from '@chakra-ui/react'

export default function PageContainer({ isFooter, children, ...props }) {
    return (
        <Container
            maxW={{ lg: "1200px" }}
            px={{ base: 4, xl: 0 }}
            pt={{ base: 4, lg: 12 }}
            pb={isFooter == true ? { base: 4, lg: 12 } : { base: 24, lg: 48 }}
            {...props}
        >
            {children}
        </Container>
    )
}
