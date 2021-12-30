import { 
    Box,  
    Stack, 
    Text 
} from '@chakra-ui/react'

function AnnouncementBanner({ text }) {
    return (
        <Box w={{ base: '100%' }} pr={0}>
            <Stack
                direction='row'
                justifyContent="center"
                alignItems="center"
                py={3}
                px={3}
                bgGradient="linear(to-t, mypets.900, mypets.100)"
                w={{ base: '100%' }}
            >
                <Text
                    fontWeight="sm"
                    marginEnd="2"
                    textColor='gray.800'
                >
                    {text}
                </Text>
            </Stack>
        </Box>
    )
}

export default AnnouncementBanner
