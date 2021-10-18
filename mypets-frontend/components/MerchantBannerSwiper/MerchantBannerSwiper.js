import { Box } from '@chakra-ui/react'
import BannerSwiper from '../BannerSwiper/BannerSwiper'

export default function MerchantBannerSwiper({ rounded={ base: 20, md: 40 }, ...props }) {
    const merchantBannerImgNames = ["macho_pawz_banner.jpg"]
    const mobileBannerImgNames=["macho_pawz_banner.jpg"]

    return (
        <Box
          mb={{ base: 8, md: 12 }}
          maxW='1200px'
          boxShadow='2xl'
          rounded={rounded}
          {...props}
        >
          <BannerSwiper
            bannerImgNames={merchantBannerImgNames}
            mobileBannerImgNames={mobileBannerImgNames}
            rounded={rounded}
            autoplay={false}
          />
        </Box>
    )
}