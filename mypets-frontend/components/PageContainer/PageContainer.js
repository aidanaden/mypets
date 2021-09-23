import { Container } from '@chakra-ui/react'

function PageContainer({ children, ...props }) {
    return (
        <Container
            maxW={{ lg: "1200px" }}
            px={{ base: 0 }}
            py={{ base: 8, md: 12 }}
            {...props}
        >
            {children}
        </Container>
    )
}

export default PageContainer
