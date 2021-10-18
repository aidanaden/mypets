import { Box } from '@chakra-ui/react'
import BannerSwiper from '../BannerSwiper/BannerSwiper'

export default function HomeBannerSwiper({ rounded={ base: 20, md: 40 }, ...props }) {
    const homeBannerImgNames = ["desktop.jpeg"]
    const mobileBannerImgNames=["mobile.jpeg"]

    return (
        <Box
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
