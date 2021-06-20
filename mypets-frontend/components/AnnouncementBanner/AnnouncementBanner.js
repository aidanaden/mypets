import { 
    Box, 
    HStack,  
    Stack, 
    Text 
} from '@chakra-ui/react'

function AnnouncementBanner() {
    return (
        <Box w='100%'>
            <Stack
                direction='row'
                justifyContent="center"
                alignItems="center"
                py={3}
                px={3}
                bgGradient="linear(to-t, mypets.900, mypets.100)"
            >
                {/* <HStack spacing="3"> */}
                <Text fontWeight="sm" marginEnd="2" textColor='gray.800'>
                    We are only delivering to the EAST of SG for now 😢
                </Text>
                {/* </HStack> */}
            </Stack>
        </Box>
    )
}

export default AnnouncementBanner
