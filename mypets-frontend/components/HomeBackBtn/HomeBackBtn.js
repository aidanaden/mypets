import {
    Box,
    Button
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

function HomeBackBtn() {
    const router = useRouter()
    return (
        <Box justifyContent='left'>
            <Button 
                leftIcon={<ArrowBackIcon />} 
                textColor='mypets.100' 
                variant='link'
                onClick={() => router.back()}
            />
        </Box>
    )
}

export default HomeBackBtn
