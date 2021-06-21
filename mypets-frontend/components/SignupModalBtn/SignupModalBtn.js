import { useContext, useState } from 'react'
import { 
    useDisclosure, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    VStack,
    Box
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
const Yup = require('yup')
require('yup-password')(Yup)

import AuthContext from '../../context/AuthContext'
import EmailInputGroup from '../EmailInputGroup/EmailInputGroup'
import PasswordInputGroup from '../PasswordInputGroup/PasswordInputGroup'
import MypetsBtn from '../MypetsBtn/MypetsBtn'
import NameInputGroup from '../NameInputGroup/NameInputGroup'
import TelInputGroup from '../TelInputGroup/TelInputGroup'
import LocationSelect from '../LocationSelect/LocationSelect'
import LoginSocialBtnGroup from '../LoginSocialBtnGroup/LoginSocialBtnGroup'

function SignupModalBtn() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { registerUser } = useContext(AuthContext)

    const handleSubmit = (values, actions) => {
        try {
            actions.setSubmitting(true)
            const user = registerUser(values.email, values.password)
            console.log('registered new user: ', user)
        } catch (err) {
            console.error(err)
        }
        onClose()
    }

    const nonEmptyRegex = /(.|\s)*\S(.|\s)*/

    const signupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Your email is required'),
        password: Yup.string()
                    .password()
                    .required('Your password is required')
                    .min(8, 'Password must contain at least 8 characters')
                    .minNumbers(1, 'Password must contain at least 1 digit')
                    .minSymbols(1, 'Password must contain at least 1 symbol'),
        password2: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    })

    return (
        <>
            <MypetsBtn 
                btnText='Sign up' 
                mx={0} 
                onClick={onOpen}
            />
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay/>
                <ModalContent mx={{ base: 4 }}>
                    <ModalHeader>Sign up</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mb={2}> 
                        <Formik
                            initialValues={{ email: '', password: '', password2: '' }}
                            onSubmit={handleSubmit}
                            validationSchema={signupSchema}
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
                                    <Box mb={4}>
                                        <Field name='password2' >
                                            {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.password2 && form.touched.password2}>
                                                <FormLabel>Confirm password</FormLabel>
                                                <PasswordInputGroup 
                                                    field={field} 
                                                    valid={!form.errors.password2 && form.touched.password2} 
                                                    id='password2' 
                                                />
                                                <FormErrorMessage>{form.errors.password2}</FormErrorMessage>
                                            </FormControl>
                                            )}
                                        </Field>
                                    </Box>
                                    <MypetsBtn w='100%' btnText='Sign up' mx={0} mt={8} isLoading={props.isSubmitting} type='submit'/>
                                    <LoginSocialBtnGroup />
                                </Form>
                            )}
                        </Formik>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SignupModalBtn
