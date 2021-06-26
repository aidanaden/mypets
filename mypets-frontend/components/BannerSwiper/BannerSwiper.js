import {
    Image
} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
SwiperCore.use([Autoplay, Navigation]);

function BannerSwiper({ bannerImgNames, rounded, autoplay=true }) {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={autoplay}
            centeredSlides={true}
            autoplay={autoplay ? {
                delay: 5000,
                disableOnInteraction: false,
            } : false}
        >   
        {
            bannerImgNames.map((bannerImgName,i) => (
                <SwiperSlide key={i}>
                    <Image loading='lazy' rounded={rounded} objectFit="cover" src={`/${bannerImgName}`} alt="mypets banner"/>
                </SwiperSlide>
            ))
        }
        </Swiper>
    )
}

export default BannerSwiper
