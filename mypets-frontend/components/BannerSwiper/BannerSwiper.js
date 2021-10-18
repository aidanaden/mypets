import {
    Image
} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
SwiperCore.use([Autoplay, Navigation]);

export default function BannerSwiper({ 
    bannerImgNames,
    mobileBannerImgNames,
    rounded,
    autoplay=true
}) {
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
                    <Image
                        rounded={{ base: 20, md: 40 }}
                        src={bannerImgName}
                        boxSize="full"
                        backgroundSize="cover"
                        display={{ base: 'none', md: 'block' }}
                    />
                    <Image
                        rounded={{ base: 20, md: 40 }}
                        src={mobileBannerImgNames[i]}
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