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

export default function about({ categories }) {
    const markdownText = `
    ## **About Us**

Last updated: 19/10/21

MyPets was started by the animal lovers who were frustrated by the online landscape when shopping for pet products during the start of COVID-19. After purchasing from many different pet shops over the years, the founders have come to realize that customers deserved to have a much easier and quicker way of purchasing pet supplies without the hassle of sourcing the best products online.

Here at MyPets, we strive to help our customers choose the best product for their cats and dogs. We sell products ranging from foods, treats to even toys for your furry friends. We also believe in giving back to the community, as a small sum of earnings will be donated to pet shelters and the community.

We hope you&#39;ll be a part of our journey in changing the way you shop for pet products

VISION:

We aim to revolutionize how shopping online

for pet products can be.

MISSION:

Our mission is to provide every Cat &amp; Dog Owners the convenience when shopping for their pet products.

Likewise, we also aim to be a pet shop that listens to our customers &amp; gives back to the community`

    return (
        <Box>
            <Sidebar categories={categories} />
            <PageContainer>
                <SectionHeader>
                    About us
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