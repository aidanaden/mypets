import { Box } from '@chakra-ui/react'
import BannerSwiper from '../BannerSwiper/BannerSwiper'

export default function HomeBannerSwiper({ desktopImages, mobileImages, rounded = { base: 20, md: 40 }, ...props }) {
  return (
    <Box
      mb={{ base: 8, md: 12 }}
      w='100%'
      boxShadow='2xl'
      rounded={rounded}
      {...props}
    >
      <BannerSwiper
        desktopImages={desktopImages}
        mobileImages={mobileImages}
        rounded={rounded}
      />
    </Box>
  )
}
