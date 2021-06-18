import {
    Image
} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
SwiperCore.use([Autoplay, Navigation]);

function BannerSwiper({ bannerImgNames }) {
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
                    <Image loading='lazy' rounded={40} boxSize="100%" objectFit="cover" src={`/${bannerImgName}`} alt="merchant banner"/>
                </SwiperSlide>
            ))
        }
        </Swiper>
    )
}

export default BannerSwiper
