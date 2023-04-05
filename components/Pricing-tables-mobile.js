import { useState, Fragment } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function PricingMobile() {
  return (
    <div>
      <div className="text-centered-container">
        <h2 className="font-black text-midnight mb-2">
          Pre-Booking is essential for all our Tasters & Courses
        </h2>
      </div>
      <div className="my-container">
        <Tab.Group>
          <Tab.List className="flex justify-center bg-white tab-background-mobile-container p-3">
            <Tab
              className={({ selected }) =>
                classNames(
                  "mr-3 w-64 bg-bluenavy font-bold text-lg rounded-md p-3",
                  selected
                    ? "bg-bluenavy  text-buttontextcolor"
                    : "bg-white text-midnight"
                )
              }
            >
              Beginners
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "mr-3 w-64 bg-bluenavy font-bold text-lg  rounded-md p-3",
                  selected
                    ? "bg-bluenavy  text-buttontextcolor"
                    : "bg-white text-midnight"
                )
              }
            >
              Advanced
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Swiper
                spaceBetween={10}
                slidesPerView={"auto"}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide className="mt-8">
                  <div className="price-card-mobile"></div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </Swiper>
            </Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
