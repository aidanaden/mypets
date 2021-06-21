import { useContext, useState, useEffect } from 'react'
import { 
    Box,
    MenuItem,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    useDisclosure,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    useToast
} from '@chakra-ui/react'
import { parse, format } from 'date-fns'

import UserProfileForm from '../UserProfileForm/UserProfileForm'
import UserAddressForm from '../UserAddressForm/UserAddressForm'
import UserPasswordForm from '../UserPasswordForm/UserPasswordForm'
import AuthContext from '../../context/AuthContext'

function NavbarUserModalBtn({ mode='desktop' }) {

    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user, profile, updateProfile, updateUserPassword } = useContext(AuthContext)
    const [userInitialValues, setUserInitialValues] = useState({})
    const [addressInitialValues, setAddressInitialValues] = useState({})
    const tabs = [
        'User profile',
        'Address',
        'Change password'
    ]

    const formatDateString = (dateString) => {
        console.log('date received from database: ', dateString)
        const parsedDate = parse(dateString, 'yyyy-mm-dd', new Date(2021, 6, 18))
        return format(parsedDate, 'dd/mm/yyyy')
    } 

    const profileSuccesToast = (text) => toast({
        title: text,
        status: 'success',
        duration: 3000,
        isClosable: true,
    })

    const addressSuccessToast = (text) => toast({
        title: text,
        status: 'success',
        duration: 3000,
        isClosable: true,
    })

    const passwordSuccessToast = (text) => toast({
        title: text,
        status: 'success',
        duration: 3000,
        isClosable: true,
    })

    const handleUserProfileChange = (values, actions) => {
        delete values.email
        var dobDate = parse(values.dob, 'dd/MM/yyyy', new Date())
        dobDate.setHours(dobDate.getHours() + 8)
        console.log('dob value parsed (+8): ', dobDate)
        const profileValues = {
            ...values,
            dob: dobDate
        }

        try {
            actions.setSubmitting(true)
            updateProfile(profileValues)
        } catch (err) {
            console.error(err)
        }

        actions.setSubmitting(false)
        profileSuccesToast('User profile successfully updated')
    }

    const handleUserAddressChange = (values, actions) => {
        values.location = values.location.split(" ").join("_")
        try {
            actions.setSubmitting(true)
            updateProfile(values)
        } catch (err) {
            console.error(err)
        }
        actions.setSubmitting(false)
        addressSuccessToast('Address successfully updated')
    }

    const handleUserPasswordChange = (values, actions) => {
        try {
            actions.setSubmitting(true)
            updateUserPassword(values)
        } catch (err) {
            console.error(err)
        }
        actions.setSubmitting(false)
        passwordSuccessToast('Password successfully updated')
    }

    useEffect(() => {
        if (user) {
            const values = { email: user.email }
            if (profile) {
                setUserInitialValues({ 
                    ...values,
                    username: profile.username ? profile.username : '', 
                    phone_num: profile.phone_num ? profile.phone_num : '', 
                    dob: profile.dob ? formatDateString(profile.dob) : '', 
                    sex: profile.sex ? profile.sex : '',
                })
                setAddressInitialValues({ 
                    address: profile.address ? profile.address : '', 
                    unit: profile.unit ? profile.unit : '', 
                    postal: profile.postal ? profile.postal : '', 
                    location: profile.location ? profile.location.split("_").join(" ") : '',
                })
            } else {
                setUserInitialValues(values)
            }
        }
    }, [profile])

    return (
        <>
            {mode == 'mobile' ? (
                <Box px={2} onClick={onOpen}>
                    User Profile
                </Box>
            ) : (
                <MenuItem 
                    display={{ base: 'none', lg: 'inherit'}} 
                    onClick={onOpen}
                >
                    User Profile
                </MenuItem>
            )}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent mx={{ base: 4 }}>
                    <ModalHeader>
                        Your profile 
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Tabs isFitted colorScheme='mypets'>
                            <TabList >
                                {tabs.map((tabHeader,i) => (
                                    <Tab key={i}>{tabHeader}</Tab>
                                ))}
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <UserProfileForm 
                                        handleSubmit={handleUserProfileChange}
                                        initialValues={userInitialValues}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <UserAddressForm 
                                        handleSubmit={handleUserAddressChange}
                                        initialValues={addressInitialValues}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <UserPasswordForm 
                                        handleSubmit={handleUserPasswordChange} 
                                    />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NavbarUserModalBtn
