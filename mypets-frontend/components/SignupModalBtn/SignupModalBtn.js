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
import * as Yup from 'yup'
import AuthContext from '../../context/AuthContext'
import EmailInputGroup from '../EmailInputGroup/EmailInputGroup'
import MypetsBtn from '../MypetsBtn/MypetsBtn'
import NameInputGroup from '../NameInputGroup/NameInputGroup'
import TelInputGroup from '../TelInputGroup/TelInputGroup'
import LocationSelect from '../LocationSelect/LocationSelect'
import LoginSocialBtnGroup from '../LoginSocialBtnGroup/LoginSocialBtnGroup'

function SignupModalBtn() {

    // name
    // email
    // phone number
    // dob
    // location in SG (Bedok, Tampines, Pasir ris, Kembangan, Chai Chee, Marine Parade)

    const locations = ['Bedok', 'Tampines', 'Pasir ris', 'Kembangan', 'Chai Chee', 'Marine Parade']

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [dob, setDob] = useState(null)
    const [location, setLocation] = useState('')

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { loginUser } = useContext(AuthContext)

    function inLocations(loc) {
        return locations.includes(loc)
    }

    const handleSubmit = (values, actions) => {
        setTimeout(() => {
            console.log(values)
            actions.setSubmitting(false)
        }, 1000)
    }

    
    const checkIfEmpty = value => nonEmptyRegex.test(value)

    const telRegex = /^[0-9]\d{7}$/
    const dobRegex = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)$/
    const nonEmptyRegex = /(.|\s)*\S(.|\s)*/

    const signupSchema = Yup.object().shape({
        name: Yup.string().required('Your name is required'),
        email: Yup.string().email('Invalid email').required('Your email is required'),
        tel: Yup.string().matches(telRegex, 'Phone number is not valid'),
        dob: Yup.string().matches(dobRegex, 'Birthday is not valid'),
        location: Yup.string().test('locationSG', 'We currently only deliver to customers living in select areas of SG', inLocations)
    })

    return (
        <>
            <MypetsBtn 
                btnText='Sign up' 
                mx={0} 
                onClick={onOpen}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Sign up</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mb={2}> 
                        <Formik
                            initialValues={{ name: '', email: '', tel: '', dob: null, location: '' }}
                            onSubmit={handleSubmit}
                            validationSchema={signupSchema}
                        >
                            {(props) => (
                                <Form>
                                    <Box mb={4}>
                                        <Field name='name'>
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                                    <FormLabel>Name</FormLabel>
                                                    <NameInputGroup field={field} valid={!form.errors.name && form.touched.name}/>
                                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </Box>
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
                                        <Field name='tel' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.tel && form.touched.tel}>
                                                    <FormLabel>Phone number</FormLabel>
                                                    <TelInputGroup field={field} valid={!form.errors.tel && form.touched.tel && nonEmptyRegex.test(field.value)}/>
                                                    <FormErrorMessage>{form.errors.tel}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </Box>
                                    <Box mb={4}>
                                        <Field name='location' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.tel && form.touched.tel}>
                                                    <FormLabel>Location</FormLabel>
                                                    <LocationSelect field={field} values={locations} />
                                                    <FormErrorMessage>{form.errors.location}</FormErrorMessage>
                                                    <FormHelperText fontSize='sm'>We're only delivering to select areas of SG for now!</FormHelperText>
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
