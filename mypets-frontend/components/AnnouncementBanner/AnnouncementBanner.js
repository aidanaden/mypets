import { Bell2Icon } from '@chakra-ui/icons'
import { 
    Box, 
    HStack, 
    Icon, 
    Stack, 
    Text 
} from '@chakra-ui/react'

function AnnouncementBanner() {
    return (
        <Box as="section">
            <Stack
                direction='row'
                justifyContent="center"
                alignItems="center"
                py={3}
                px={3}
                bgGradient="linear(to-t, mypets.900, mypets.100)"
            >
                <HStack spacing="3">
                    {/* <Icon as={Bell2Icon} fontSize="xl" h="10" /> */}
                    <Text fontWeight="sm" marginEnd="2" textColor='gray.800'>
                        We will only delivering to select areas of SG for now 😢
                    </Text>
                </HStack>
            </Stack>
        </Box>
    )
}

export default AnnouncementBanner
