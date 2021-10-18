import { Box } from '@chakra-ui/react'
import BannerSwiper from '../BannerSwiper/BannerSwiper'

export default function HomeBannerSwiper({rounded, ...props}) {
    const homeBannerImgNames = ["desktop.jpeg", "banner-c.jpg"]
    const mobileBannerImgNames=["mobile.jpeg", "banner-c.jpg"]

    return (
        <Box
          w='100%'
          boxShadow='2xl'
          rounded={rounded}
          {...props}
        >
          <BannerSwiper
            bannerImgNames={homeBannerImgNames}
            mobileBannerImgNames={mobileBannerImgNames}
            rounded={rounded}
          />
        </Box>
    )
}
