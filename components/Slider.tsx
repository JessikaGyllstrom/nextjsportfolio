"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Hobbies } from "../typings.d";
import { urlFor } from "../lib/sanity";
// Our custom button component
import "swiper/css/effect-cards";
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


import { EffectCoverflow } from 'swiper/modules';
import { MdSwipe } from "react-icons/md";
import AnimateR from "./AnimateR";




interface SliderProps {
  data: Hobbies[];
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  return (
    <section className="w-screen mt-5">
      <AnimateR>
        <div className="">
          <ul className="">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'3'}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow]}
            >
              {data.map(({ id, hobbieImg, title }) => (
                <SwiperSlide key={id}>
                  <div className="">
                    <img src={urlFor(hobbieImg.asset._ref).url()} className="rounded-t-lg" /> 
                    <p className="text-gray-50 p-1 bg-purple-900/90 text-center rounded-b-lg">{title}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
          <div className="w-screen flex justify-center flex-col items-center">
            <MdSwipe className="text-purple-900 mt-2" />
            <p className="text-purple-600 font-thin text-md">Swipe me out!</p>
            <p className="text-purple-900 font-thin text-md">Art created with Firefly AI</p>
          </div>
        </div>
      </AnimateR>
    </section>
  );
};

export default Slider;