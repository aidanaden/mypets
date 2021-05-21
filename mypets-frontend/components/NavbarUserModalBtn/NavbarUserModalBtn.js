import { useContext, useState, useEffect } from 'react'
import { 
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

import UserProfileForm from '../UserProfileForm/UserProfileForm'
import UserAddressForm from '../UserAddressForm/UserAddressForm'
import UserPasswordForm from '../UserPasswordForm/UserPasswordForm'
import AuthContext from '../../context/AuthContext'

function NavbarUserModalBtn() {

    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user, profile, updateProfile } = useContext(AuthContext)
    const [userInitialValues, setUserInitialValues] = useState({})
    const [addressInitialValues, setAddressInitialValues] = useState({})
    const tabs = [
        'User profile',
        'Address',
        'Change password'
    ]

    const succesToast = (text) => toast({
        title: text,
        status: 'success',
        duration: 3000,
        isClosable: true,
    })

    const handleUserProfileChange = (values, actions) => {
        console.log('user profile changed!')
        console.log(values)
        delete values.email
        try {
            actions.setSubmitting(true)
            updateProfile(values)
        } catch (err) {
            console.error(err)
        }
        actions.setSubmitting(false)
        // display toast showing successfully updated changes
        succesToast('User profile successfully updated')
    }

    const handleUserAddressChange = (values, actions) => {
        console.log('user address changed!')
        console.log(values)
        try {
            actions.setSubmitting(true)
            updateProfile(values)
        } catch (err) {
            console.error(err)
        }
        actions.setSubmitting(false)
        SuccessToast('Address successfully updated')
    }

    const handleUserPasswordChange = (values, actions) => {
        console.log('user password changed!')
        console.log(values)
    }

    useEffect(() => {

        if (profile) {

            setUserInitialValues({ 
                name: profile.username ? profile.username : '', 
                email: user.email, 
                phone_num: profile.phone_num ? profile.phone_num : '', 
                dob: profile.dob ? profile.dob : '', 
                sex: profile.sex ? profile.sex : '',
            })
    
            setAddressInitialValues({ 
                address: profile.address ? profile.address : '', 
                unit: profile.unit ? profile.unit : '', 
                postal: profile.postal ? profile.postal : '', 
                location: profile.location ? profile.location: '',
            })
        }

        console.log('profile value changed to: ', profile)
        console.log('useEffect profile initial values: ', userInitialValues)
        console.log('useEffect user address initial values: ', addressInitialValues)

    }, [profile])

    return (
        <>
            <MenuItem onClick={onOpen}>User Profile</MenuItem>
            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay />
                <ModalContent>
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
