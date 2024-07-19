'use client';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { EffectCoverflow, Pagination } from 'swiper/modules'


import slide_image_1 from '../../../public/Images/image1.png'
import slide_image_2 from '../../../public/Images/image2.png'
import slide_image_3 from '../../../public/Images/image3.png'
import slide_image_4 from '../../../public/Images/image4.png'
import slide_image_5 from '../../../public/Images/image5.png'
import Image from 'next/image';

const ImageSlider = () => {


    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            // loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            // pagination={{ el: '.swiper-pagination', clickable: true }}

            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide className='relative'>
                <Image width={700} height={300} src={slide_image_1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <Image width={700} height={300} src={slide_image_2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <Image width={700} height={300} src={slide_image_3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <Image width={700} height={300} src={slide_image_4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <Image width={700} height={300} src={slide_image_5} alt="slide_image" />
            </SwiperSlide>

            <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                    <span name="arrow-back-outline">x</span>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <span name="arrow-forward-outline">x</span>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
    )
}

export default ImageSlider;
