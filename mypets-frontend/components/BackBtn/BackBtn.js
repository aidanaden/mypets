import {
    Box,
    Button
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

function BackBtn({ variant='back', ...props }) {
    const router = useRouter()
    return (
        <Box mt={4} mb={4} justifyContent='left' {...props}>
            <Button 
                size='lg'
                h='100%'
                leftIcon={<ArrowBackIcon boxSize={6}/>} 
                textColor='mypets.100' 
                variant='link'
                onClick={variant == 'back' ? () => router.back() : () => router.push('/')}
            >
                Back    
            </Button>
        </Box>
    )
}

export default BackBtn
