import React from 'react'
import { Box, Center, Tooltip } from "@chakra-ui/react"
import { imageToUrl } from '../../utils/urls'
import NextImage from 'next/image'
import NextLink from 'next/link'

function MerchantCard({ merchant }) {
    return (
        <NextLink href={`/merchants/${merchant.slug}`}>
            <a>
                <Tooltip
                    label={merchant.name}
                    bg="white"
                    placement='bottom-end'
                    color='gray.800'
                    fontSize="md"
                >
                    <Center
                        rounded='xl'
                        height={{ base: '86px', md: '123px' }}
                        width={{ base: '172px', md: '246px' }}
                        borderWidth="1px"
                        shadow='sm'
                        _hover={{
                            shadow: "lg"
                        }}
                    >
                        <NextImage
                            src={`${imageToUrl(merchant.display_image)}`}
                            width='224'
                            height='112'
                        />
                    </Center>
                </Tooltip>
            </a>
        </NextLink>
    )
}

export default MerchantCard
