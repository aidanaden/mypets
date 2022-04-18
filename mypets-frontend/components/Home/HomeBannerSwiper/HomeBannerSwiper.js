import { Box } from "@chakra-ui/react";
import TopContainer from "../../Layouts/TopContainer/TopContainer";
import BannerSwiper from "../../Common/BannerSwiper/BannerSwiper";

export default function HomeBannerSwiper({
  banners,
  rounded = { base: 20, md: 40 },
  ...props
}) {
  return (
    <Box
      pt={{ base: 4, lg: 14 }}
      mb={{ base: 10, md: 14 }}
      w="100%"
      boxShadow="2xl"
      rounded={rounded}
      {...props}
    >
      <BannerSwiper banners={banners} rounded={rounded} />
    </Box>
  );
}
