import React from 'react'
import './styles/Section3.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Section3 = () => {

    const slideClasses = [
        's3_sl_1',
        's3_sl_2',
        's3_sl_3',
        's3_sl_4'
    ]

    return (
        <section className='sc3'>
            <div className="inner">
                <div className="t-wrap">
                    <h2 className="con_tit">
                        순정 약산성 클렌징
                    </h2>
                    <p className="txt">
                        30년간 이어온 피부 연구를 통해 축적된<br /> 기술과 노하우를 담아 에뛰드에서 피부 솔루션을 제안합니다.
                    </p>
                    <a href="#" className='con_btn '>
                        MEET ETTUDE
                    </a>
                </div>
                <div className="s3_sl_wrap">
                    <div className="in">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={2}
                            breakpoints={{
                                1111: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                }
                            }}
                        >
                            {slideClasses.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className={slide}></div>
                                </SwiperSlide>

                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3