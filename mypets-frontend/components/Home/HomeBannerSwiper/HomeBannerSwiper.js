import { Box } from "@chakra-ui/react";
import PageContainer from "../../Layouts/PageContainer/PageContainer";
import BannerSwiper from "../../Common/BannerSwiper/BannerSwiper";

export default function HomeBannerSwiper({
  banners,
  rounded = { base: 20, md: 40 },
  ...props
}) {
  return (
    <PageContainer>
      <Box
        mb={{ base: 8, md: 12 }}
        w="100%"
        boxShadow="2xl"
        rounded={rounded}
        {...props}
      >
        <BannerSwiper banners={banners} rounded={rounded} />
      </Box>
    </PageContainer>
  );
}
