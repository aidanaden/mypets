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
                        rounded='xl'
                        height='120px'
                        width='240px'
                    >
                        <NextImage
                            src={`${imageToUrl(merchant.display_image)}`}
                            width='240'
                            height='120'
                        />
                    </Box>
                </Tooltip>
            </a>
        </NextLink>
    )
}

export default MerchantCard
