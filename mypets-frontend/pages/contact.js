import {
    Box,
    Text,
    Spacer
} from '@chakra-ui/react'

import PageContainer from '../components/PageContainer/PageContainer'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import { API_CATEGORIES_URL } from '../utils/urls'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import ParagraphSection from '../components/ParagraphSection/ParagraphSection'
import SectionSubHeader from '../components/SectionSubHeader/SectionSubHeader'

export default function contact({ categories }) {
    const intro = `

    Our Business Operating Hours: 9am - 12pm & 2pm - 6pm (Mon-Fri)
    
    We would love to hear from you!
    
    If you have any inquiries/feedback or suggestions, please contact us.
    
    • Email: contactmypetssg@gmail.com (Reply within 2 working days)
    
    • Live Chat Support: 9am - 12pm, 2pm - 6pm (Mon - Fri)
    
    Alternatively, for account/order-related which requires immediate assistance
    
    You can reach out to us via:
    
    • Phone/WhatsApp: 9126 4942 (anytime)
`

    return (
        <Box minH='100vh' bg='red.100'>
            <Sidebar categories={categories} />
            <PageContainer bg='blue.100'>
                <SectionHeader
                    mb={{ base: 2, md: 4 }}
                >
                    Contact Us
                </SectionHeader>
                <SectionSubHeader>
                    Last updated: 19/10/21
                </SectionSubHeader>
                <ParagraphSection
                    text={intro}
                />
            </PageContainer>
            <Spacer />
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