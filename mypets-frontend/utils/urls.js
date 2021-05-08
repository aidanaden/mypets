export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
// export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_A7D3E6B2B6FEE248'
export const MAGIC_PUBLIC_KEY = 'pk_test_A7D3E6B2B6FEE248'
export const API_ORDERS_URL = `${API_URL}/orders/`
export const API_PRODUCTS_URL = `${API_URL}/products/`
export const API_CATEGORIES_URL = `${API_URL}/categories/`
export const API_MERCHANTS_URL = `${API_URL}/merchants/`
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
 