import {
    ButtonGroup,
    Button,
    HStack,
    Divider,
    Text
} from '@chakra-ui/react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

function LoginSocialBtnGroup() {
    return (
        <>  
            <HStack mt={6}>
                <Divider orientation='horizontal' w='100%'/>
                <Text fontSize='sm'>OR</Text>
                <Divider orientation='horizontal' w='100%'/>
            </HStack>
            <ButtonGroup w='100%' mt={6}>
                <Button w='100%' colorScheme='facebook' leftIcon={<FaFacebook />}>
                    Facebook
                </Button>
                <Button w='100%' colorScheme='blackAlpha' leftIcon={<FaGoogle />}>
                    Google
                </Button>
            </ButtonGroup>
        </>
    )
}

export default LoginSocialBtnGroup
