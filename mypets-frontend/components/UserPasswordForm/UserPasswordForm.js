import { 
    FormControl,
    FormLabel,
    FormErrorMessage,
    Box
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
const Yup = require('yup')
require('yup-password')(Yup)

import MypetsBtn from '../MypetsBtn/MypetsBtn'
import PasswordInputGroup from '../PasswordInputGroup/PasswordInputGroup'

const passwordSchema = Yup.object().shape({
    password: Yup
                .string()
                .password()
                .required('Your password is required')
                .min(8, 'Password must contain at least 8 characters')
                .minNumbers(1, 'Password must contain at least 1 digit')
                .minSymbols(1, 'Password must contain at least 1 symbol'),
    password2: Yup
                .string()
                .password()
                .required('Your password is required')
                .min(8, 'Password must contain at least 8 characters')
                .minNumbers(1, 'Password must contain at least 1 digit')
                .minSymbols(1, 'Password must contain at least 1 symbol'),
    confirm_password2: Yup
                .string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match'),
})

function UserPasswordForm({ handleSubmit }) {
    return (
        <Formik
            initialValues={{ password: '', password2: '', confirm_password2: '' }}
            onSubmit={handleSubmit}
            validationSchema={passwordSchema}
        >
            {(props) => (
                <Form>
                    <Box mb={4}>
                        <Field name='password' >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.password && form.touched.password}>
                                    <FormLabel>Password</FormLabel>
                                    <PasswordInputGroup 
                                        field={field} 
                                        valid={!form.errors.password && form.touched.password} 
                                        id='password'
                                    />
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box mb={4}>
                        <Field name='password2' >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.password2 && form.touched.password2}>
                                    <FormLabel>New password</FormLabel>
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
                    <Box mb={4}>
                        <Field name='confirm_password2' >
                            {({ field, form }) => (
                            <FormControl isInvalid={form.errors.confirm_password2 && form.touched.confirm_password2}>
                                <FormLabel>Confirm new password</FormLabel>
                                <PasswordInputGroup 
                                    field={field} 
                                    valid={!form.errors.confirm_password2 && form.touched.confirm_password2} 
                                    id='confirm_password2' 
                                />
                                <FormErrorMessage>{form.errors.confirm_password2}</FormErrorMessage>
                            </FormControl>
                            )}
                        </Field>
                    </Box>
                    <MypetsBtn w='100%' btnText='Save password' mx={0} mt={8} isLoading={props.isSubmitting} type='submit'/>
                </Form>
            )}
        </Formik>
    )
}

export default UserPasswordForm
