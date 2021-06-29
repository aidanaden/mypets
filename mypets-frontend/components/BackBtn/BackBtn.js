import {
    Box,
    Button
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

function BackBtn() {
    const router = useRouter()
    return (
        <Box justifyContent='left' bg='red.100'>
            <Button 
                h='100%'
                leftIcon={<ArrowBackIcon />} 
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
