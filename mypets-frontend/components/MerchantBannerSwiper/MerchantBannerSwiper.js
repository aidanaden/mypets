import { Box } from '@chakra-ui/react'
import BannerSwiper from '../BannerSwiper/BannerSwiper'

function MerchantBannerSwiper({ rounded, ...props }) {

    const merchantBannerImgNames = ["macho_pawz_banner.jpg"]
    return (
        <Box maxW='1200px' boxShadow='2xl' rounded={rounded} {...props}>
          <BannerSwiper bannerImgNames={merchantBannerImgNames} rounded={rounded} autoplay={false}/>
        </Box>
    )
}

export default MerchantBannerSwiper