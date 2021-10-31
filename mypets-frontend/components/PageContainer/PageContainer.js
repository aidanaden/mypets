import { Container } from '@chakra-ui/react'

function PageContainer({ isFooter, children, ...props }) {
    return (
        <Container
            maxW={{ lg: "1200px" }}
            px={{ base: 4, xl: 0 }}
            pt={{ base: 4, lg: 12 }}
            pb={{ base: 8, lg: 24 }}
            py={isFooter && { base: 4, lg: 12 }}
            {...props}
        >
            {children}
        </Container>
    )
}

export default PageContainer
