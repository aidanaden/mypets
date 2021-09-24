import React from 'react'
import lodash from 'lodash'

import AnnouncementBanner from '../../../components/AnnouncementBanner/AnnouncementBanner'
import { API_MERCHANTS_URL, getAnimals } from '../../../utils/urls'
import Sidebar from "../../../components/Sidebar/Sidebar"
import Footer from '../../../components/Footer/Footer'
import BackBtn from '../../../components/BackBtn/BackBtn'
import MerchantTitle from '../../../components/MerchantTitle/MerchantTitle'
import MerchantProductReviewTab from '../../../components/MerchantProductReviewTab/MerchantProductReviewTab'
import MerchantBannerSwiper from '../../../components/MerchantBannerSwiper/MerchantBannerSwiper'
import PageContainer from '../../../components/PageContainer/PageContainer'

export default function index({ merchant }) {
    const merchantCategories = Object.keys(lodash.groupBy(merchant.products, 'category.name'))

    return (
        <>  
            <AnnouncementBanner />
            <Sidebar />
            <PageContainer>
                <BackBtn />
                <MerchantBannerSwiper my={{ base: 8, md: 16 }} rounded={{ base: 20, md: 40 }}/>
                <MerchantTitle 
                    merchantName={merchant.name} 
                    merchantRating={merchant.rating} 
                    merchantNumReviews={merchant.reviews}
                    merchantEmail={merchant.contact_email}
                    merchantContact={merchant.contact_number}
                />
                <MerchantProductReviewTab 
                    merchantProducts={merchant.products} 
                    categories={merchantCategories} 
                    merchantReviews={merchant.merchant_reviews}
                />
            </PageContainer>
            <Footer />
        </>
    )
}

export async function getStaticProps({ params: { slug } }) {
    // Fetch merchants, products 
    const merchant_res = await fetch(`${API_MERCHANTS_URL}?slug=${slug}`)
    const merchant = await merchant_res.json()

    // Return as props
    return {
        props: {
            merchant: merchant[0]
        }
    }
}

export async function getStaticPaths() {
    // retrieve all possible paths
    const merchant_res = await fetch(`${API_MERCHANTS_URL}`)
    const merchants = await merchant_res.json()

    // return to NextJS context
    return {
        paths: merchants.map(merchant => ({
            params: { slug: String(merchant.slug) }
        })),

        // tells nextjs to show 404 if param not matched
        fallback: false 
    }
}