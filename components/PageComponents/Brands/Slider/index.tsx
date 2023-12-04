"use client";
import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./slider.module.scss";

export const Slider = (): JSX.Element => {
    const slides: string[] = [
        "/slider/1.png",
        "/slider/2.png",
        "/slider/3.png",
        "/slider/4.png",
        "/slider/5.png",
        "/slider/6.png",
        "/slider/7.png",
        "/slider/8.png",
        "/slider/9.png",
        "/slider/10.png",
        "/slider/11.png",
        "/slider/12.png",
        "/slider/13.png",
        "/slider/14.png",
        "/slider/15.png",
        "/slider/16.png",
        "/slider/17.png",
        "/slider/18.png",
    ];

    const [swiperInstance, setSwiperInstance] = useState<null | SwiperClass>(
        null,
    );

    const ButtonPrev = (): JSX.Element => {
        return (
            <>
                {swiperInstance && (
                    <button
                        className={styles.arrowButton}
                        aria-label="Попередній слайд"
                        onClick={() => swiperInstance.slidePrev()}
                    >
                        <img src="/icons/arrow-left.svg" alt="стрілка" />
                    </button>
                )}
            </>
        );
    };

    const ButtonNext = (): JSX.Element => {
        return (
            <>
                {swiperInstance && (
                    <button
                        className={`${styles.arrowButton} ${styles.next}`}
                        aria-label="Наступний слайд"
                        onClick={() => swiperInstance.slideNext()}
                    >
                        <img src="/icons/arrow-left.svg" alt="стрілка" />
                    </button>
                )}
            </>
        );
    };

    return (
        <div className={styles.slider}>
            <ButtonPrev />
            <Swiper
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                spaceBetween={50}
                slidesPerView={3}
                className={styles.swiper}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    400: { slidesPerView: 2 },
                    600: { slidesPerView: 3 },
                }}
                style={
                    {
                        "--swiper-pagination-color": "#A0A0A0",
                        "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "4px",
                        "--swiper-pagination-bullet-horizontal-gap": "3px",
                        "--swiper-pagination-bottom": "-20px",
                        "--swiper-pagination-top": "auto",
                    } as React.CSSProperties
                }
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img src={slide} alt="slide" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <ButtonNext />
        </div>
    );
};
