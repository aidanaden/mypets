import {
    Box,
    Text
} from '@chakra-ui/react'

import PageContainer from '../components/PageContainer/PageContainer'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import { API_CATEGORIES_URL, API_ABOUT_URL } from '../utils/urls'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import ParagraphSection from '../components/ParagraphSection/ParagraphSection'
import SectionSubHeader from '../components/SectionSubHeader/SectionSubHeader'

export default function about({ categories }) {
    const intro = `MyPets was started by the animal lovers who were frustrated by the online landscape when shopping for pet products during the start of COVID-19. After purchasing from many different pet shops over the years, the founders have come to realize that customers deserved to have a much easier and quicker way of purchasing pet supplies without the hassle of sourcing the best products online.
    Here at MyPets, we strive to help our customers choose the best product for their cats and dogs. We sell products ranging from foods, treats to even toys for your furry friends. We also believe in giving back to the community, as a small sum of earnings will be donated to pet shelters and the community.
    We hope you'll be a part of our journey in changing the way you shop for pet products`

    return (
        <Box minH='100vh'>
            <Sidebar categories={categories} />
            <PageContainer>
                <SectionHeader
                    mb={{ base: 2, md: 4 }}
                >
                    About
                </SectionHeader>
                <SectionSubHeader>
                    Last updated: 19/10/21
                </SectionSubHeader>
                <ParagraphSection
                    text={intro}
                />
                <ParagraphSection
                    heading="VISION:"
                    text='We aim to revolutionize how shopping online for pet products can be.'
                />
                <ParagraphSection
                    heading='MISSION:'
                    text='Our mission is to provide every Cat & Dog Owners the convenience when shopping for their pet products.
                    Likewise, we also aim to be a pet shop that listens to our customers & gives back to the community'
                />
            </PageContainer>
        </Box>
    )
}

export async function getStaticProps() {

    // Fetch home page banner images + top banner text
    const about_res = await fetch(`${API_ABOUT_URL}`)
    const about_data = await about_res.json()

    // Fetch categories
    const categories_res = await fetch(`${API_CATEGORIES_URL}`)
    const categories = await categories_res.json()

    // Return as props
    return {
        revalidate: 1,
        props: {
            categories,
            about_data
        }
    }
}