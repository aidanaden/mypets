import { Box } from "@chakra-ui/react";
import BannerSwiper from "../BannerSwiper/BannerSwiper";

export default function MerchantBannerSwiper({
  banners,
  rounded = { base: 20, md: 40 },
  ...props
}) {
  return (
    <Box
      mb={{ base: 8, md: 12 }}
      maxW="1200px"
      boxShadow="2xl"
      rounded={rounded}
      {...props}
    >
      <BannerSwiper banners={banners} rounded={rounded} autoplay={false} />
    </Box>
  );
}
