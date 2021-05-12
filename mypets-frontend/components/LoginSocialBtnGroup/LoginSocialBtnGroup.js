import {
    ButtonGroup,
    Button,
    HStack,
    Divider,
    Text
} from '@chakra-ui/react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import NextLink from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { API_URL } from '../../utils/urls'

function LoginSocialBtnGroup() {

    const router = useRouter()
    // const [loading, setLoading] = useState(false)

    const handleProviderSubmit = (provider) => {
        
        console.log('submit pressed by ', provider)
        // setLoading(true)
        // router.push(`${API_URL}/connect/${provider}`)
    }

    return (
        <>  
            <HStack mt={6}>
                <Divider orientation='horizontal' w='100%'/>
                <Text fontSize='sm'>OR</Text>
                <Divider orientation='horizontal' w='100%'/>
            </HStack>
            <ButtonGroup w='100%' mt={6}>
                <NextLink href={`${API_URL}/connect/facebook`}>
                    <Button w='100%' colorScheme='facebook' leftIcon={<FaFacebook />}>
                        Facebook
                    </Button>
                </NextLink>
                <NextLink href={`${API_URL}/connect/google`}>
                    <Button w='100%' colorScheme='blackAlpha' leftIcon={<FaGoogle />}>
                        Google
                    </Button>
                </NextLink>
            </ButtonGroup>
        </>
    )
}

export default LoginSocialBtnGroup
