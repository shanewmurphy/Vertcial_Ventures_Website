import { useState, Fragment } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";
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
                  "mr-3 w-64 bg-bluenavy font-bold rounded-md  md:text-lg xxs:text-xs p-3",
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
                  "mr-3 w-64 bg-bluenavy font-bold  rounded-md text-sm p-3",
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
            <Tab.Panel>Content 1</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
