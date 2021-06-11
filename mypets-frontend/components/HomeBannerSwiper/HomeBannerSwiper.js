import { Box } from '@chakra-ui/react'
import BannerSwiper from '../BannerSwiper/BannerSwiper'

function HomeBannerSwiper({...props}) {

    const homeBannerImgNames = ["macho_pawz_banner.jpg", "discount_banner.jpg", "discount_banner_2.jpg"]
    return (
        <Box maxW='1200px' boxShadow='2xl' rounded={40} {...props}>
          <BannerSwiper bannerImgNames={homeBannerImgNames}/>
        </Box>
    )
}

export default HomeBannerSwiper
