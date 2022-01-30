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
        <Box display={{ base: 'block' }}>
            <NextLink
                href='/'
                as='/'
                passHref
            >
                <a><img src='/logo-white.svg' width='125' height='52' /></a>
            </NextLink>
        </Box>
    );
};

const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg='blackAlpha.100'
            rounded='full'
            w={8}
            h={8}
            cursor='pointer'
            as={'a'}
            href={href}
            display='inline-flex'
            alignItems='center'
            justifyContent='center'
            transition='background 0.3s ease'
            _hover={{
                bg: 'blackAlpha.200',
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
            pos='absolute'
            bottom='0'
            left='0'
            right='0'
        >
            <PageContainer
                as={Stack}
                isFooter={true}
                direction={{ base: 'column' }}
                spacing={{ base: 8 }}
                justify='center'
                align='center'
            >
                <Logo />
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    textAlign='center'
                    spacing={{ base: 4, md: 6 }}
                >
                    <Link
                        href='/about'
                    >
                        About us
                    </Link>
                    <Link
                        href='/contact'
                    >
                        Contact us
                    </Link>
                    <Link
                        href='/faq'
                    >
                        Frequently Asked Questions
                    </Link>
                    <Link
                        href='/terms-conditions'
                    >
                        Terms & Conditions
                    </Link>
                    <Link
                        href='/privacy-policy'
                    >
                        Privacy Policy
                    </Link>
                </Stack>
            </PageContainer>
            <Stack
                maxW={{ lg: "1200px" }}
                mx='auto'
                py={{ base: 4, md: 2 }}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Text
                    textAlign={{ base: 'center', md: 'left' }}
                >
                    © 2022 Mypets Pte Ltd. All Rights Reserved.
                </Text>
                <Stack
                    direction='row'
                    spacing={6}
                >
                    <SocialButton
                        label='Facebook'
                        href='https://www.facebook.com/mypets.sg'
                    >
                        <FaFacebook />
                    </SocialButton>
                    <SocialButton
                        label='Instagram'
                        href='https://www.instagram.com/mypets.sg'
                    >
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Stack>
        </Box>
    );
}