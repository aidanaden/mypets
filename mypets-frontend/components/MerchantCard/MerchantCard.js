import React from 'react'
import { Box, Tooltip } from "@chakra-ui/react"
import { imageToUrl } from '../../utils/urls'
import NextImage from 'next/image'
import NextLink from 'next/link'

function MerchantCard({ merchant }) {

    return (
        <NextLink href='/'>
            <a>
                <Tooltip
                    label={merchant.name}
                    bg="white"
                    placement={'bottom-end'}
                    color={'gray.800'}
                    fontSize="md"
                >
                    <Box w="120px" h="120px" rounded="full">
                        <NextImage src={`${imageToUrl(merchant.display_image)}`} width='120' height='120' />
                    </Box>
                </Tooltip>
            </a>
        </NextLink>
    )
}

export default MerchantCard
