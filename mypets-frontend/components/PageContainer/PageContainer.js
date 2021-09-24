import { Container } from '@chakra-ui/react'

function PageContainer({ children, ...props }) {
    return (
        <Container
            maxW={{ lg: "1200px" }}
            px={{ base: 4, xl: 0 }}
            py={{ base: 4, md: 8 }}
            {...props}
        >
            {children}
        </Container>
    )
}

export default PageContainer
