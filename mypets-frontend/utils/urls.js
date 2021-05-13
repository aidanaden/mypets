import { formatDistance, format } from 'date-fns'
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
export const NEXTAUTH_URL = 'http://localhost:3000'
export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51IoDymJNGU0rJw40a155i0tWv8wysc7pgzvDCXYlJ7ykwtE3gZF4OKlHfBJPMwINLfqnfAqxqYzZNWCYn0gWassg00ZDcY5wzo'
// export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://strange-impala-53.loca.lt'
// export const API_URL = process.env.NEXTP_PUBLIC_API_URL || 'https://ad1672877683.ngrok.io'
// export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_A7D3E6B2B6FEE248'
// export const MAGIC_PUBLIC_KEY = 'pk_test_A7D3E6B2B6FEE248'
export const API_ORDERS_URL = `${API_URL}/orders/`
export const API_PRODUCTS_URL = `${API_URL}/products/`
export const API_CATEGORIES_URL = `${API_URL}/categories/`
export const API_MERCHANTS_URL = `${API_URL}/merchants/`
export const GOOGLE_CLIENT_ID = '376425642987-nl2dd8gud2c3jn409veqd508njjqenud.apps.googleusercontent.com'
export const GOOGLE_CLIENT_SK = 'MK7U2vz73yH4AnJUZ3iM35pW'


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
        return '/mypets-2.svg'
    }
    
    if (image.url.indexOf('/') === 0) {
        return `${API_URL}${image.url}`
    }

    return image.url
}

export function distanceFromToday(str_date) {
    const review_date = new Date(str_date)
    return formatDistance(review_date, new Date(), { addSuffix: true })
}   

export function stringToDate(str_date) {
    
    const review_date = new Date(str_date)
    return format(review_date, "eee, dd MMM y")
}
 