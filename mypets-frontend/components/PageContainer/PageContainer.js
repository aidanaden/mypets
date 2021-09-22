import { Container } from '@chakra-ui/react'

function PageContainer({ children, ...props }) {
    return (
        <Container
            maxW={{ lg: "1200px" }}
            px={{ base: 4 }}
            py={{ base: 8, md: 12 }}
            mb={0}
            {...props}
        >
            {children}
        </Container>
    )
}

export default PageContainer
