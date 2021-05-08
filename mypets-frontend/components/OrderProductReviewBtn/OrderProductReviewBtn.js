import React from 'react'
import { Box } from '@chakra-ui/react'
import MypetsBtn from '../MypetsBtn/MypetsBtn'

function OrderProductReviewBtn() {
    return (
        <Box textAlign='center' mt={6}>
            <MypetsBtn btnText='Write a review' variant='outline'/>
        </Box>
        
    )
}

export default OrderProductReviewBtn
