"use client"; 
import React from "react";
import { Hobbies } from "../typings.d";
import { urlFor } from "../lib/sanity";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from 'swiper/react';
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
    <div className="flex w-screen mt-5">
        <AnimateR>
          <div className="flex w-screen justify-center">
            <ul className="flex w-screen md:w-[60%]">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'2'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 100,
                  depth: 300,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow]}
                className="mySwiper"
              >
              {data.map(({ id, hobbieImg, title }) => (
                <SwiperSlide key={id}>
                  <div className="flex justify-center">
                    <div className="flex flex-col">
                      <img src={urlFor(hobbieImg.asset._ref).url()} className="rounded-t-lg" /> 
                      <p className="text-gray-50 p-1 bg-purple-900/90 text-center rounded-b-lg font-light">{title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        </div>
        <div className="w-screen flex justify-center flex-col items-center">
          <MdSwipe className="text-purple-900 mt-6" />
            <p className="text-purple-600 font-thin text-md">Swipe me out!</p>
            <p className="text-gray-400 font-thin text-md">Art created with Firefly AI</p>
        </div>
      </AnimateR>
    </div>
  );
};

export default Slider;