import { Box } from '@chakra-ui/react'
import BannerSwiper from '../BannerSwiper/BannerSwiper'

function HomeBannerSwiper({rounded, ...props}) {

    const homeBannerImgNames = ["banner-a.jpg", "banner-b.jpg", "banner-c.jpg"]
    return (
        <Box w='100%' boxShadow='2xl' rounded={rounded} {...props}>
          <BannerSwiper bannerImgNames={homeBannerImgNames} rounded={rounded}/>
        </Box>
    )
}

export default HomeBannerSwiper
