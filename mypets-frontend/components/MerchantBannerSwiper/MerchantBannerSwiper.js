import { Box } from '@chakra-ui/react'
import BannerSwiper from '../BannerSwiper/BannerSwiper'

export default function MerchantBannerSwiper({ merchantName, rounded = { base: 20, md: 40 }, ...props }) {
  const merchantFileName = merchantName.toLowerCase().split(" ").join("-")
  const desktopBannerImgNames = [`desktop-${merchantFileName}.jpeg`]
  const mobileBannerImgNames = [`mobile-${merchantFileName}.jpeg`]

  return (
    <Box
      mb={{ base: 8, md: 12 }}
      maxW='1200px'
      boxShadow='2xl'
      rounded={rounded}
      {...props}
    >
      <BannerSwiper
        bannerImgNames={desktopBannerImgNames}
        mobileBannerImgNames={mobileBannerImgNames}
        rounded={rounded}
        autoplay={false}
      />
    </Box>
  )
}