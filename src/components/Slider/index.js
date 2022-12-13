import {Component} from "react";
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';

import {A11y, EffectCards, Grid, Navigation, Pagination, Scrollbar} from "swiper";
import {CircleWithNumber, SliderCard, SubTitleSlide, TitleSlide} from "./styles";
import {colors} from "../theme/default/styles";

const title = [
    {id: 1, label: 'You will benefit from our SaaS marketing product'},
    {id: 2, label: 'We have 10+ years of experience in digital marketing'},
    {id: 3, label: 'We enable generating hypotheses about what leads to low website conversions'},
    {id: 4, label: 'The analysis of the dynamic elements of the website'},
    {id: 5, label: 'The analysis of both the desktop and mobile versions of the website'},
    {id: 6, label: 'The analysis of the dynamic elements of the website!'},
];

const descriptionText = [
    {
        id: 1,
        descriptions: 'Our team has developed a powerful tool to audit website content – a heatmap that features more than 100 reports for e-marketers and business owners.'
    },
    {
        id: 2,
        descriptions: 'The Plerdy team has rich experience in auditing, analyzing, and improving eCommerce websites to boost their conversion rates. So we are well aware of all the weak spots of eCommerce websites and know what data you need to run a usability audit of your website.'
    },
    {
        id: 3,
        descriptions: 'Thanks to the data gathered with the Plerdy heatmap about your website visitors’ behavior, you can generate hypotheses that potentially explain which functional flaws and problems are causing a low conversion on your website and how.'
    },
    {
        id: 4,
        descriptions: 'Some services disregard such an important aspect as the clickability analysis of the dynamic elements when UX auditing, including drop-down menu, pop-up, and slider. However, thanks to the unique Plerdy auditing functionality, you will receive this information.'
    },
    {
        id: 5,
        descriptions: 'In some areas, websites generate more than 60% of the traffic from their mobile versions, so it would be unwise not to audit the behavior of mobile users. With the Plerdy heatmap, you can run a UX auditing analysis separately for the desktop and mobile versions of your website.'
    },
    {
        id: 6,
        descriptions: 'The analysis of the dynamic elements of the website!'
    },
];

const breakpoints = {
    320: {
        slidesPerView: 1,
    },
    480: {
        slidesPerView: 1,
    },
    640: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
    1200: {
        slidesPerView: 4,
    },
};

class SwiperBar extends Component {
    render() {
        return (
            <Swiper
                breakpoints={breakpoints}
                modules={[Navigation, Pagination, Scrollbar, A11y, Grid, EffectCards]}
                spaceBetween={10}
                resistance={false}
                // navigation
                pagination={{clickable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {title.map((item) => (
                    <SwiperSlide key={item.id} className="swiper">
                            <SliderCard>
                                <TitleSlide>{item.label}</TitleSlide>
                                <SubTitleSlide>{descriptionText[item.id - 1].descriptions}</SubTitleSlide>
                                <CircleWithNumber height="219" width="219">
                                    <circle cx="210" cy="210" r="110" fill={colors.solitude}/>
                                    <text x="170" y="190" fontWeight="900" textAnchor="middle"
                                          fill="white" fontSize="48">{item.id}</text>
                                </CircleWithNumber>
                            </SliderCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
}

export default SwiperBar;