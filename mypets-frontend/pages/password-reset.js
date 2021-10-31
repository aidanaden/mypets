import {
    Box
} from '@chakra-ui/react'
import PageContainer from '../components/PageContainer/PageContainer'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import { API_CATEGORIES_URL } from '../utils/urls'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import UserPasswordForm from '../components/UserPasswordForm/UserPasswordForm'
import router from 'next/router'

export default function reset({ categories }) {
    const toast = useToast()
    const { user, updateUserPassword } = useContext(AuthContext)

    const passwordSuccessToast = (text) => toast({
        title: text,
        status: 'success',
        duration: 3000,
        isClosable: true,
    })

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

    return (
        <Box>
            <Sidebar categories={categories} />
            <PageContainer>
                <SectionHeader>
                    Reset your password
                </SectionHeader>
                <UserPasswordForm handleSubmit={handleUserPasswordChange} />
            </PageContainer>
            <Footer />
        </Box>
    )
}

export async function getStaticProps() {
    // Fetch categories
    const categories_res = await fetch(`${API_CATEGORIES_URL}`)
    const categories = await categories_res.json()

    // Return as props
    return {
        props: {
            categories,
        }
    }
}