import { Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import NextLink from "next/link";
SwiperCore.use([Autoplay, Navigation]);

export default function BannerSwiper({
  banners,
  rounded = { base: 20, md: 40 },
  autoplay = true,
}) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={autoplay}
      centeredSlides={true}
      autoplay={
        banners.length > 1 && autoplay
          ? {
              delay: 3000,
              disableOnInteraction: false,
            }
          : false
      }
    >
      {banners.map((bannerData, i) => (
        <SwiperSlide key={i}>
          <NextLink
            href={bannerData.banner_url}
            as={bannerData.banner_url}
            passHref
          >
            <a>
              <Image
                alt={bannerData.desktop_banner_image.alternativeText}
                loading="lazy"
                rounded={rounded}
                src={bannerData.desktop_banner_image.url}
                boxSize="full"
                backgroundSize="cover"
                display={{ base: "none", md: "block" }}
              />
              <Image
                alt={bannerData.desktop_banner_image.alternativeText}
                loading="lazy"
                rounded={rounded}
                src={bannerData.mobile_banner_image.url}
                boxSize="full"
                backgroundSize="cover"
                display={{ base: "block", md: "none" }}
              />
            </a>
          </NextLink>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
