import {
    Box,
    Img
} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
SwiperCore.use([Autoplay, Navigation]);

function HomeBannerSwiper() {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            autoplay={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <Img rounded={40} boxSize="100%" objectFit="cover" src="/macho_pawz_banner.jpg" alt="merchant banner"></Img>
            </SwiperSlide>
            <SwiperSlide>
                <Img rounded={40} boxSize="100%" objectFit="cover" src="/discount_banner.jpg" alt="merchant banner"></Img>
            </SwiperSlide>
            <SwiperSlide>
                <Img rounded={40} boxSize="100%" objectFit="cover" src="/discount_banner_2.jpg" alt="merchant banner"></Img>
            </SwiperSlide>
        </Swiper>
    )
}

export default HomeBannerSwiper
