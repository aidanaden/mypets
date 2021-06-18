import {
    Box
} from '@chakra-ui/react'
import NextImage from 'next/image'
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
                    <Box rounded={40} boxSize="100%" objectFit="cover">
                        <NextImage src={`/${bannerImgName}`} alt="merchant banner" width='1200' height='411'/>
                    </Box>
                </SwiperSlide>
            ))
        }
        </Swiper>
    )
}

export default BannerSwiper
