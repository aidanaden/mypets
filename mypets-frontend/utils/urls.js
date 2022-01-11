import { formatDistance, format } from 'date-fns'
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
export const FRONTEND_URL = process.env.FRONTEND_URL
export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK
export const API_HOME_URL = `${API_URL}/home-page/`
export const API_ABOUT_URL = `${API_URL}/about-page/`
export const API_CONTACT_URL = `${API_URL}/contact-page/`
export const API_PRIVACY_URL = `${API_URL}/privacy-page/`
export const API_TERMS_URL = `${API_URL}/terms-page/`
export const API_FAQ_URL = `${API_URL}/faq-page/`
export const API_ORDERS_URL = `${API_URL}/orders/`
export const API_PRODUCTS_URL = `${API_URL}/products/`
export const API_CATEGORIES_URL = `${API_URL}/categories/`
export const API_MERCHANTS_URL = `${API_URL}/merchants/`
export const API_ANIMALS_URL = `${API_URL}/animals/`
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
export const GOOGLE_CLIENT_SK = process.env.GOOGLE_CLIENT_SK

export const REVIEW_TEXT_LEN = 128

export const CONTRIBUTION_AMT = 0.05
export const TAX_AMT = 0.00
export const DELIVERY_FEE = 3.00

/**
 * Given an image (from strapi api) return the URL
 * Works for local & deployed strapis
 * 
 * URL = API_URL/image.url
 * 
 * @param  {any} image
 * 
 */
export function imageToUrl(image) {
    if (!image) {
        return '/cropped-logo.svg'
    }
    
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return `${API_URL}${image.url}`
    } else {
        return image.url
    }
}

export function distanceFromToday(str_date) {
    const review_date = new Date(str_date)
    return formatDistance(review_date, new Date(), { addSuffix: true })
}   

export function stringToDate(str_date) {
    const review_date = new Date(str_date)
    return format(review_date, "eee, dd MMM y")
}

export const getAnimals = (products) => {
    const totalProductAnimals = products.map(product => product.animal.name)
    const uniqueProductAnimals = [...new Set(totalProductAnimals)]
    return uniqueProductAnimals
}

export const getCategories = (products) => {
    const totalProductCategories = products.map(product => product.category.name)
    const uniqueProductCategories = [...new Set(totalProductCategories)]
    return uniqueProductCategories
}