import {
    Box,
    Text
} from '@chakra-ui/react'

import ParagraphHeader from '../ParagraphHeader/ParagraphHeader'

export default function ParagraphSection({ heading, text, ...props }) {
    return (
        <Box mb={{ base: 12 }} {...props}>
            <ParagraphHeader>
                {heading}
            </ParagraphHeader>
            <Text>
                {text}
            </Text>
        </Box>
        
    )
}