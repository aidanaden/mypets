import { Box } from '@chakra-ui/react'
import BannerSwiper from '../BannerSwiper/BannerSwiper'

function MerchantBannerSwiper({...props}) {

    const merchantBannerImgNames = ["macho_pawz_banner.jpg"]
    return (
        <Box maxW='1200px' boxShadow='2xl' rounded={40} {...props}>
          <BannerSwiper bannerImgNames={merchantBannerImgNames}/>
        </Box>
    )
}

export default MerchantBannerSwiper