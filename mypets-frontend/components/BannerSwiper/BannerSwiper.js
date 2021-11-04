import {
    Image
} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
SwiperCore.use([Autoplay, Navigation]);

export default function BannerSwiper({ 
    bannerImgNames,
    mobileBannerImgNames,
    rounded={ base: 20, md: 40 },
    autoplay=true
}) {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={autoplay}
            centeredSlides={true}
            autoplay={ bannerImgNames.length > 1 && autoplay ? {
                delay: 3000,
                disableOnInteraction: false,
            } : false}
        >   
        {
            bannerImgNames.map((bannerImgName,i) => (
                <SwiperSlide key={i}>
                    <Image
                        rounded={rounded}
                        src={`https://www.mypets.sg/${bannerImgName}`}
                        boxSize="full"
                        backgroundSize="cover"
                        display={{ base: 'none', md: 'block' }}
                    />
                    <Image
                        rounded={rounded}
                        src={`https://www.mypets.sg/${mobileBannerImgNames[i]}`}
                        boxSize="full"
                        backgroundSize="cover"
                        display={{ base: 'block', md: 'none' }}
                    />
                </SwiperSlide>
            ))
        }
        </Swiper>
    )
}