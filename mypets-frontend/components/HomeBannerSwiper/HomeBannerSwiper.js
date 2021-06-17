import { Box } from '@chakra-ui/react'
import BannerSwiper from '../BannerSwiper/BannerSwiper'

function HomeBannerSwiper({...props}) {

    const homeBannerImgNames = ["banner-a.jpg", "banner-b.jpg", "banner-c.jpg"]
    return (
        <Box maxW='1200px' boxShadow='2xl' rounded={40} {...props}>
          <BannerSwiper bannerImgNames={homeBannerImgNames}/>
        </Box>
    )
}

export default HomeBannerSwiper
