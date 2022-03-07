import { Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { zip } from "lodash";
import NextLink from "next/link";
SwiperCore.use([Autoplay, Navigation]);

export default function BannerSwiper({
  desktopImages,
  mobileImages,
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
        desktopImages.length > 1 && autoplay
          ? {
              delay: 3000,
              disableOnInteraction: false,
            }
          : false
      }
    >
      {zip(desktopImages, mobileImages).map((bannerData, i) => (
        <SwiperSlide key={i}>
          <NextLink href="/" as="/" passHref>
            <a>
              <Image
                alt={bannerData[0].alternativeText}
                loading="lazy"
                rounded={rounded}
                src={bannerData[0].url}
                boxSize="full"
                backgroundSize="cover"
                display={{ base: "none", md: "block" }}
              />
              <Image
                alt={bannerData[0].alternativeText}
                loading="lazy"
                rounded={rounded}
                src={bannerData[1].url}
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
