import { useState, useRef, Fragment } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

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
                  "mr-3 w-64 bg-bluenavy font-medium text-lg rounded-md p-3",
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
                  "mr-3 w-64 bg-bluenavy font-medium text-lg  rounded-md p-3",
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
              <Swiper slidesPerView={"auto"} spaceBetween={20}>
                <SwiperSlide className="mt-8 mb-24">
                  <div className="price-card-mobile">
                    <div>
                      <h5 className="font-bold md:text-3xl sm:text-base pt-8 text-bluenavy antialiased">
                        Bouldering Induction
                      </h5>
                    </div>
                    <div className="mt-2">
                      <h6 className="font-bold md:text-2xl xs:text-xs text-midnight uppercase">
                        30 mins on small lower walls
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="mt-8 mb-24">
                  <div className="price-card-mobile"></div>
                </SwiperSlide>
                <SwiperSlide className="mt-8 mb-24">
                  <div className="price-card-mobile"></div>
                </SwiperSlide>
              </Swiper>
            </Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
