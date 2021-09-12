import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import NextLink from 'next/link'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGooglepay, SiApplepay, SiVisa, SiMastercard } from 'react-icons/si';

import PageContainer from '../PageContainer/PageContainer'

const Logo = (props) => {
    return (
        <Box display={{ base: 'none', lg: 'block' }}>
            <NextLink
                href='/'
                as='/'
                passHref
            >
                <a><img src='/cropped-logo.svg' width='125' height='52' /></a>
            </NextLink>
        </Box>
    );
};

const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}
        >
            <VisuallyHidden>
                {label}
            </VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function SmallCentered() {
    return (
        <Box
            color='white'
            bgGradient="linear(to-t, mypets.900, mypets.100)"
        >
            <PageContainer
                as={Stack}
                spacing={4}
                justify={'center'}
                align={'center'}
            >
                <Logo />
                <Stack
                    direction='row'
                    spacing={6}
                >
                    <Link
                        href='#'
                    >
                        About us
                    </Link>
                    <Link
                        href='#'
                    >
                        Frequently Asked Questions
                    </Link>
                    <Link
                        href='#'
                    >
                        Terms & Conditions
                    </Link>
                    <Link
                        href={'#'}
                    >
                        Privacy Policy
                    </Link>
                </Stack>
            </PageContainer>
            <PageContainer
                as={Stack}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Text>
                    © 2020 Chakra Templates. All rights reserved
                </Text>
                <Stack
                    direction='row'
                    spacing={6}
                >
                    <SocialButton
                        label={'Twitter'}
                        href={'#'}
                    >
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton
                        label={'YouTube'}
                        href={'#'}
                    >
                        <FaYoutube />
                    </SocialButton>
                    <SocialButton
                        label={'Instagram'}
                        href={'#'}
                    >
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </PageContainer>
        </Box>
    );
}