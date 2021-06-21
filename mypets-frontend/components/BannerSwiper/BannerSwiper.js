import {
    Image
} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
SwiperCore.use([Autoplay, Navigation]);

function BannerSwiper({ bannerImgNames, rounded }) {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            autoplay={true}
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
