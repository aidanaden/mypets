import { Magic } from 'magic-sdk'
import { MAGIC_PUBLIC_KEY } from '../utils/urls'

const createMagic = (key) => {
    return (
        typeof window != 'undefined' && 
        new Magic(key)
    )
}

export const magic = createMagic(MAGIC_PUBLIC_KEY)