import { 
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    HStack
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
const Yup = require('yup')

import MypetsBtn from '../MypetsBtn/MypetsBtn'
import LocationSelect from '../LocationSelect/LocationSelect'
import AddressInput from '../AddressInput/AddressInput'
import UnitInput from '../UnitInput/UnitInput'
import PostalInputGroup from '../PostalInputGroup/PostalInputGroup'

const locations = ['Bedok', 'Tampines', 'Pasir ris', 'Kembangan', 'Chai chee', 'Marine parade', 'Eunos']
const inLocations = loc => locations.includes(loc)
const locationHelperText = "We're delivering to these selected areas in SG for now"

const postalRegex = /^[0-9]{6}$/

const addressSchema = Yup.object().shape({
    address: Yup.string().required('Your address is required'),
    unit: Yup.string(),
    postal: Yup.string().matches(postalRegex, 'Postal code not valid'),
    location: Yup.string().test('location', 'We currently only deliver to customers living in select areas of SG', inLocations),
})

export default function UserAddressForm({ handleSubmit, initialValues }) {
    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={addressSchema}
        >
            {(props) => (
                <Form>
                    <Box mb={4}>
                        <Field name='address'>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.address && form.touched.address}>
                                    <FormLabel>Address</FormLabel>
                                    <AddressInput field={field} />
                                    <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <HStack mb={4}>
                        <Box>
                            <Field name='unit' >
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.unit && form.touched.unit}>
                                        <FormLabel>Unit no.</FormLabel>
                                        <UnitInput field={field} />
                                        <FormErrorMessage>{form.errors.unit}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Box>
                        <Box>
                            <Field name='postal' >
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.postal && form.touched.postal}>
                                        <FormLabel>Postal code</FormLabel>
                                        <PostalInputGroup field={field} valid={!form.errors.postal && form.touched.postal} />
                                        <FormErrorMessage>{form.errors.postal}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Box>
                    </HStack>
                    <Box mb={4}>
                        <Field name='location' >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.location && form.touched.location}>
                                    <FormLabel>Location</FormLabel>
                                    <LocationSelect field={field} values={locations} />
                                    <FormErrorMessage>{form.errors.location}</FormErrorMessage>
                                    <FormHelperText fontSize='sm'>{locationHelperText}</FormHelperText>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <MypetsBtn w='100%' btnText='Save address' mx={0} mt={8} isLoading={props.isSubmitting} type='submit' />
                </Form>
            )}
        </Formik>
    )
}
