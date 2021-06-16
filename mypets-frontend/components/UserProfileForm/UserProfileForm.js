import { useRef } from 'react'
import { 
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Center
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import { parse, isDate } from 'date-fns'
const Yup = require('yup')

import MypetsBtn from '../MypetsBtn/MypetsBtn'
import EmailInputGroup from '../EmailInputGroup/EmailInputGroup'
import NameInputGroup from '../NameInputGroup/NameInputGroup'
import DatePicker from '../DatePicker/DatePicker'
import SexRadioGroup from '../SexRadioGroup/SexRadioGroup'
import TelInputGroup from '../TelInputGroup/TelInputGroup'
import BirthdayInputGroup from '../BirthdayInputGroup/BirthdayInputGroup'

const today = new Date()
const telRegex = /^[0-9]\d{7}$/
const nonEmptyRegex = /(.|\s)*\S(.|\s)*/
const dobRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/

const userProfileSchema = Yup.object().shape({
    username: Yup.string().required('Your name is required'),
    email: Yup.string().email('Invalid email').required('Your email is required'),
    dob: Yup
        .string()
        .matches(dobRegex, 'Date format is not valid')
        .required('Your date of birth is required')
        .test('is-greater', 'Birthday should not be greater than current date', function(value) {
            const parsedDate = parse(value, 'dd/mm/yyyy', today)
            if (parsedDate) {
                const check = (parsedDate < today)
                return check 
            }
            return false
        }),
    sex: Yup.string(),
    phone_num: Yup.string().matches(telRegex, 'Phone number is not valid'),
})

function UserProfileForm({ handleSubmit, initialValues }) {

    return (
        <Formik
            enableReinitialize  
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={userProfileSchema}
        >
            {(props) => (
                <Form>
                    <Box mb={4}>
                        <Field name='username' >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.username && form.touched.username}>
                                    <FormLabel>Name</FormLabel>
                                    <NameInputGroup field={field} valid={!form.errors.username && form.touched.username} />
                                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box mb={4}>
                        <Field name='email' >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <FormLabel>Email</FormLabel>
                                    <EmailInputGroup field={field} valid={!form.errors.email && form.touched.email} />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box mb={4}>
                        <Field name='dob' >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.dob && form.touched.dob}>
                                    <FormLabel>Birthday</FormLabel>
                                    <BirthdayInputGroup field={field} valid={!form.errors.dob && form.touched.dob} error={form.errors.dob}/>
                                    <FormErrorMessage>{form.errors.dob}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box mb={4}>
                        <Field name='sex' >
                            {({ field, form }) => (
                                <FormControl>
                                    <FormLabel>Sex</FormLabel>
                                    <SexRadioGroup field={field} />
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box mb={4}>
                        <Field name='phone_num' >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.phone_num && form.touched.phone_num}>
                                    <FormLabel>Phone number</FormLabel>
                                    <TelInputGroup field={field} valid={!form.errors.phone_num && form.touched.phone_num && nonEmptyRegex.test(field.value)} />
                                    <FormErrorMessage>{form.errors.phone_num}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <MypetsBtn w='100%' btnText='Save changes' mx={0} mt={8} isLoading={props.isSubmitting} type='submit'/>
                </Form>
            )}
        </Formik>
    )
}

export default UserProfileForm
