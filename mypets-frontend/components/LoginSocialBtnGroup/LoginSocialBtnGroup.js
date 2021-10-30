import {
    ButtonGroup,
    Button,
    HStack,
    Divider,
    Text,
    useToast
} from '@chakra-ui/react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import NextLink from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { API_URL } from '../../utils/urls'

function LoginSocialBtnGroup() {
    const toast = useToast()
    const [fbLoading, setfbLoading] = useState(false)
    const [googleLoading, setGoogleLoading] = useState(false)

    const loginProviderToast = (text) => toast({
        title: text,
        status: 'info',
        duration: 3000,
        isClosable: true,
    })

    const handleFbSubmit = () => {
        setfbLoading(true)
        loginProviderToast('Logging in via Facebook...')
    }

    const handleGoogleSubmit = () => {
        setGoogleLoading(true)
        loginProviderToast('Logging in via Google...')
    }

    return (
        <>  
            <HStack mt={6}>
                <Divider orientation='horizontal' w='100%'/>
                <Text fontSize='sm'>OR</Text>
                <Divider orientation='horizontal' w='100%'/>
            </HStack>
            <ButtonGroup 
                w='100%' 
                mt={6} 
                flexDirection={{ base: 'column', md: 'row' }} 
                spacing={{ base: 0, md: 4 }}
            >
                <NextLink href={`${API_URL}/connect/facebook`}>
                    <Button 
                        w='100%' 
                        colorScheme='facebook' 
                        leftIcon={<FaFacebook />} 
                        onClick={handleFbSubmit} 
                        isLoading={fbLoading}
                    >
                        Facebook
                    </Button>
                </NextLink>
                <NextLink href={`${API_URL}/connect/google`}>
                    <Button 
                        w='100%' 
                        colorScheme='blackAlpha' 
                        leftIcon={<FaGoogle />} 
                        onClick={handleGoogleSubmit} 
                        isLoading={googleLoading}
                        mt={{ base: 3, md: 0 }}
                    >
                        Google
                    </Button>
                </NextLink>
            </ButtonGroup>
        </>
    )
}

export default LoginSocialBtnGroup
