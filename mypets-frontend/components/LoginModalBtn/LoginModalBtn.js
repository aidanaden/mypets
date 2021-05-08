import { useContext, useState } from 'react'
import { 
    Button, 
    useDisclosure, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import AuthContext from '../../context/AuthContext'
import MypetsBtn from '../MypetsBtn/MypetsBtn'
import EmailInputGroup from '../EmailInputGroup/EmailInputGroup'
import LoginSocialBtnGroup from '../LoginSocialBtnGroup/LoginSocialBtnGroup'


function LoginModalBtn() {

    const [email, setEmail] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { loginUser } = useContext(AuthContext)

    const handleSubmit = (values, actions) => {

        loginUser(values.email)
        actions.setSubmitting(true)
    }

    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Your email is required'),
    })

    return (
        <>
            <MypetsBtn 
                btnText='Log in' 
                mx={0} 
                variant='outline'
                onClick={onOpen}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                {/* <ModalContent maxW={1000} w={1000}> */}
                <ModalContent>
                    <ModalHeader>Log in</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mb={2}> 
                        <Formik
                            initialValues={{ email: ''}}
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
                                    <MypetsBtn btnText='Log in' w='100%' mx={0} mt={4} isLoading={props.isSubmitting} type='submit'/>
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

export default LoginModalBtn
