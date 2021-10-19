import { useContext, useState, useEffect } from 'react'
import {
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    useToast
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
const Yup = require('yup')
require('yup-password')(Yup)

import AuthContext from '../../context/AuthContext'
import MypetsBtn from '../MypetsBtn/MypetsBtn'
import EmailInputGroup from '../EmailInputGroup/EmailInputGroup'
import PasswordInputGroup from '../PasswordInputGroup/PasswordInputGroup'
import LoginSocialBtnGroup from '../LoginSocialBtnGroup/LoginSocialBtnGroup'

function LoginModalBtn() {
    
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { loginUser } = useContext(AuthContext)

    const handleSubmit = async (values, actions) => {
        actions.setSubmitting(true)
        const status = await loginUser(values, toast)
        actions.setSubmitting(false)
    }

    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Your email is required'),
        password: Yup.string()
                    .password()
                    .required('Your password is required')
                    .min(8, 'Password must contain at least 8 characters')
                    .minNumbers(1, 'Password must contain at least 1 digit')
                    .minSymbols(1, 'Password must contain at least 1 symbol')
    })

    return (
        <>
            <MypetsBtn 
                btnText='Log in' 
                mx={0} 
                variant='outline'
                onClick={onOpen}
            />
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay/>
                <ModalContent mx={{ base: 4 }}>
                    <ModalHeader>Log in</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mb={2}> 
                        <Formik
                            initialValues={{ email: '', password: ''}}
                            onSubmit={handleSubmit}
                            validationSchema={loginSchema}
                        >
                            {(props) => (
                                <Form>
                                    <Box mb={4}>
                                        <Field name='email' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                                    <FormLabel>Email</FormLabel>
                                                    <EmailInputGroup field={field} valid={!form.errors.email && form.touched.email}/>
                                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </Box>
                                    <Box mb={4}>
                                        <Field name='password' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.password && form.touched.password}>
                                                    <FormLabel>Password</FormLabel>
                                                    <PasswordInputGroup field={field} valid={!form.errors.password && form.touched.password}/>
                                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </Box>
                                    <Button
                                        variant='link'
                                        mb={4}
                                        alignSelf='end'
                                        justifySelf='end'
                                    >
                                        Forget password?
                                    </Button>
                                    <MypetsBtn btnText='Log in' w='100%' mx={0} mt={4} isLoading={props.isSubmitting} type='submit'/>
                                </Form>
                            )}
                        </Formik>
                        <LoginSocialBtnGroup />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default LoginModalBtn
