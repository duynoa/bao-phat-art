"use client";
import { IMAGES } from "@/constants/images";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Carousel = () => {

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-2">
        <div className="h-60">
          <Image
            src={IMAGES.banner1}
            className="w-full h-full object-cover rounded-lg"
            alt="Blue fabric"
            width={1000}
            height={1000}
          />
        </div>

        <div className="h-60">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-full"
          >
            <SwiperSlide>
              <Image
                src={IMAGES.nhapho1}
                className="w-full h-full object-cover rounded-lg"
                alt="Orange fabric"
                width={1000}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={IMAGES.nhapho2}
                className="w-full h-full object-cover rounded-lg"
                alt="Orange fabric"
                width={1000}
                height={1000}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="row-span-2 h-full">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-full"
          >
            <SwiperSlide>
              <Image
                src={IMAGES.hoboi1}
                className="w-full h-full object-cover rounded-lg"
                alt="Swimming pool 1"
                width={1000}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={IMAGES.hoboi2}
                className="w-full h-full object-cover rounded-lg"
                alt="Swimming pool 2"
                width={1000}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={IMAGES.hoboi3}
                className="w-full h-full object-cover rounded-lg"
                alt="Swimming pool 3"
                width={1000}
                height={1000}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-2 flex gap-2">
          <div className="w-1/4 h-60">
            <Image
              src={IMAGES.banner2}
              className="w-full h-full object-cover rounded-lg"
              alt="Mint fabric"
              width={1000}
              height={1000}
            />
          </div>

          <div className="w-3/4 h-60">
            <Image
              src={IMAGES.banner3}
              className="w-full h-full object-cover rounded-lg"
              alt="Red fabric"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
