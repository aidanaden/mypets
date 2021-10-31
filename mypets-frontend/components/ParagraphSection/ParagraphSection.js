import {
    Box,
    Text
} from '@chakra-ui/react'

import ParagraphHeader from '../components/ParagraphHeader/ParagraphHeader'

export default function ParagraphSection({ heading, text }) {
    return (
        <Box mb={{ base: 6 }}>
            <ParagraphHeader>
                {heading}
            </ParagraphHeader>
            <Text>
                {text}
            </Text>
        </Box>
        
    )
}