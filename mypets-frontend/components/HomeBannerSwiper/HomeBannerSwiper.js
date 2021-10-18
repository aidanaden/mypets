import { Box } from '@chakra-ui/react'
import BannerSwiper from '../BannerSwiper/BannerSwiper'

export default function HomeBannerSwiper({rounded, ...props}) {
    const homeBannerImgNames = ["desktop.jpeg"]
    const mobileBannerImgNames=["mobile.jpeg"]

    return (
        <Box
          mt={{ base: 4, md: 8 }}
          mb={{ base: 8, md: 16 }}
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
