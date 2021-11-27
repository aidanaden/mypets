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
    
    If you have any inquiries/feedback or suggestions, please contact us.
    
    • Email: support@mypets.sg (Reply within 2 working days)
    
    • Live Chat Support: 9am - 12pm, 2pm - 6pm (Mon - Fri)
    
    For account/order-related which requires immediate assistance
    
    • Phone/WhatsApp: 9126 4942 (anytime)
`

    return (
        <Box minH='100vh'>
            <Sidebar categories={categories} />
            <PageContainer>
                <SectionHeader
                    mb={{ base: 2, md: 4 }}
                >
                    Contact Us
                </SectionHeader>
                <SectionSubHeader>
                    Last updated: 19/10/21
                </SectionSubHeader>
                <ParagraphSection
                    text='Our Business Operating Hours: 9am - 12pm & 2pm - 6pm (Mon-Fri)'
                />
                <ParagraphSection
                    heading='If you have any inquiries/feedback or suggestions, please contact us.'
                    text='• Email: support@mypets.sg (Reply within 2 working days)'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='• Live Chat Support: 9am - 12pm, 2pm - 6pm (Mon - Fri)'
                />
                <ParagraphSection
                    heading='For account/order-related which requires immediate assistance'
                    text='• Phone/WhatsApp: 9126 4942 (anytime)'
                />
            </PageContainer>
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