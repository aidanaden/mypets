import { useState, useContext } from 'react'
import {
    Box,
    Text,
    Textarea,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from "@chakra-ui/react"

import MypetsBtn from '../MypetsBtn/MypetsBtn'
import Rating from '../Rating/Rating'
import ReviewTextArea from '../ReviewTextArea/ReviewTextArea'
import { API_URL } from '../../utils/urls'
import { callAPI }  from '../../context/AuthContext'
import AuthContext from '../../context/AuthContext'

function OrderProductReviewModalBtn({ product, productName }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [rating, setRating] = useState(0)
    const [reviewText, setReviewText] = useState('')

    const { user } = useContext(AuthContext)

    const handleInputChange = (e) => {
        setReviewText(e.target.value)
    }

    const onSubmit = async () => {

        const body = {
            date_created: new Date(),
            rating: rating + 1,
            text: reviewText,
            user: user.username,
            product: product
        }
        console.log('user submitting: ', user.username)
        console.log('product being submitted: ', product)
        console.log('body submitted in POST request: ', body)
        const response = await callAPI('/reviews', 'POST', body)
        onClose()
        console.log('submitted review, response: ', response)
    }

    return (
        <>
            <Box textAlign='center' mt={6}>
                <MypetsBtn onClick={onOpen} btnText='Write a review' variant='outline'/>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader mr={0}>{productName}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Rating scale={5} size={36} mt={0} rating={rating} setRating={setRating} />
                        <ReviewTextArea value={reviewText} onChange={handleInputChange} size='md' props={{mt: 8}}/>
                    </ModalBody>
                    <ModalFooter>
                        <MypetsBtn btnText='Submit review' onClick={onSubmit} w='100%'/>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default OrderProductReviewModalBtn
