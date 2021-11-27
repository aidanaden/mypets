import { Box } from '@chakra-ui/react'
import BannerSwiper from '../BannerSwiper/BannerSwiper'

export default function HomeBannerSwiper({ rounded={ base: 20, md: 40 }, ...props }) {
    const homeBannerImgNames = ["desktop-launch.jpeg", "desktop-delivery.jpeg", "desktop-locations.jpeg"]
    const mobileBannerImgNames=["mobile-launch.jpeg", "mobile-delivery.jpeg", "mobile-locations.jpeg"]

    return (
        <Box
          mb={{ base: 8, md: 12 }}
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
