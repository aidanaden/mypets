import {
    Box,
    Button
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

function BackBtn() {
    const router = useRouter()
    return (
        <Box mt={4} justifyContent='left'>
            <Button 
                size='lg'
                h='100%'
                leftIcon={<ArrowBackIcon boxSize={4}/>} 
                textColor='mypets.100' 
                variant='link'
                onClick={() => router.back()}
            >
                Back    
            </Button>
        </Box>
    )
}

export default BackBtn
