import {Component} from "react";
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';

import {A11y, Grid, Navigation, Pagination, Scrollbar} from "swiper";
import {SliderCard} from "./styles";

const title = [
    { id: 1, titles: 'You will benefit from our SaaS marketing product' },
    { id: 2, titles: 'We have 10+ years of experience in digital marketing' },
    { id: 3, titles: 'We enable generating hypotheses about what leads to low website conversions' },
    { id: 4, titles: 'The analysis of the dynamic elements of the website' },
    { id: 5, titles: 'The analysis of both the desktop and mobile versions of the website' },
    { id: 6, titles: 'The analysis of the dynamic elements of the website!' },
]

class SwiperBar extends Component {


    render() {
        return (
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
                spaceBetween={50}
                slidesPerView={3}
                // navigation
                Mousewheel={true}
                pagination={{clickable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {title.map((item) => (
                    <SwiperSlide key={item.id}>
                        <SliderCard>
                            <h3>{item.titles}</h3>
                        </SliderCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
}

export default SwiperBar;