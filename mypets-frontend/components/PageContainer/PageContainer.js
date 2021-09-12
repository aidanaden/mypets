import { Container } from '@chakra-ui/react'

function PageContainer({ children, ...props }) {
    return (
        <Container
            maxW={{ lg: "1200px" }}
            mb={4}
            px={{ base: 4 }}
            py={{ base: 8, md: 16 }}
            {...props}
        >
            {children}
        </Container>
    )
}

export default PageContainer
