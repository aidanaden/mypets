import React from 'react'
import { Box, Tooltip } from "@chakra-ui/react"
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
                    <Box
                        p={{ base: 1 }}
                        rounded='xl'
                        height={{ base: '56px', md: '112px' }}
                        width={{ base: '112px', md: '224px' }}
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
                    </Box>
                </Tooltip>
            </a>
        </NextLink>
    )
}

export default MerchantCard
