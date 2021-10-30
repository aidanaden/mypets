import {
    Box
} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown/react-markdown.min'
import PageContainer from '../components/PageContainer/PageContainer'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import { API_CATEGORIES_URL } from '../utils/urls'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import SectionHeader from '../components/SectionHeader/SectionHeader'

export default function contact({ categories }) {
    const markdownText = `
    ## **Contact Us**

    Last updated: 19/10/21
    
    **Our Business Operating Hours:** 9am - 12pm &amp; 2pm - 6pm (Mon-Fri)
    
    We would love to hear from you!
    
    If you have any inquiries/feedback or suggestions, please contact us.
    
    • Email: contactmypetssg@gmail.com (Reply within 2 working days)
    
    • Live Chat Support: 9am - 12pm, 2pm - 6pm (Mon - Fri)
    
    Alternatively, for account/order-related which requires immediate assistance
    
    You can reach out to us via:
    
    • Phone/WhatsApp: 9126 4942 (anytime)`

    return (
        <Box>
            <Sidebar categories={categories} />
            <PageContainer>
                <SectionHeader>
                    Conctact
                </SectionHeader>
                <ReactMarkdown
                    components={ChakraUIRenderer()}
                    children={markdownText}
                />
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