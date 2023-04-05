import { useState, Fragment } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Pricing() {
  return (
    <div>
      <div className="text-centered-container">
        <h2 className="font-black text-midnight mb-2">
          Pre-Booking is essential for all our Tasters & Courses
        </h2>
      </div>
      <div>
        <div className="my-container">
          <div>
            <Tab.Group>
              <Tab.List className="flex justify-center bg-white tab-background-container p-3">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "mr-3 w-64 bg-bluenavy rounded-md  text-xl p-3",
                      selected
                        ? "bg-bluenavy  text-buttontextcolor"
                        : "bg-white text-midnight"
                    )
                  }
                >
                  Beginners Programs
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "mr-3 w-64 bg-bluenavy rounded-md text-xl p-3",
                      selected
                        ? "bg-bluenavy  text-buttontextcolor"
                        : "bg-white text-midnight"
                    )
                  }
                >
                  Advanced Programs
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="pricing-card-container mb-64 mt-12 border-t-4 border-indigo-500">
                        <div className="h-3/4">
                          <div className="text-center pt-8">
                            <h4 className="font-bold text-slateblue antialiased">
                              Bouldering Induction
                            </h4>
                            <div className="mt-4">
                              <h5 className="font-bold text-midnight uppercase">
                                30 mins on small lower walls
                              </h5>
                            </div>
                            <div className="mt-4 mb-8">
                              <p className="font-medium text-midnight">
                                <small>
                                  Bouldering is fun, social and a great way to
                                  keep fit and healthy as it involves full body
                                  exercise! If you're psyched to try it out and
                                  join our community then this is the option for
                                  you.
                                </small>
                              </p>
                            </div>
                            <div>
                              <h6 className="font-bold text-midnight antialiased">
                                Inductions include instruction and entry after
                                your session so you can keep climbing at no
                                extra cost!
                              </h6>
                            </div>
                            <div className="mt-8">
                              <h6 className="font-bold text-midnight antialiased">
                                Per Participants
                              </h6>
                              <span className="font-bold antialiased">€30</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          <button className="book-btn font-medium text-2xl antialiased">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <div className="pricing-card-container mb-64 mt-12 border-t-4 border-indigo-500">
                          <div className="h-3/4">
                            <div className="text-center pt-8">
                              <h4 className="font-bold text-slateblue antialiased">
                                Large Wall beginners
                              </h4>
                              <div className="mt-4">
                                <h5 className="font-bold text-midnight uppercase antialiased">
                                  1 Hour Roped Climbing Taster
                                </h5>
                              </div>
                              <div className="mt-4 mb-8">
                                <p className="font-medium text-midnight antialiased">
                                  <small>
                                    Our taster session is a one hour guided tour
                                    of our roped climbing walls. Join one of our
                                    expert instructors as they select climbs
                                    specifically for you
                                  </small>
                                </p>
                              </div>
                              <div className="mt-8">
                                <h6 className="font-bold text-midnight">
                                  2 Participants
                                </h6>
                                <span className="font-bold antialiased">
                                  €55
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex">
                            <button className="book-btn font-medium text-2xl antialiased">
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="pricing-card-container mb-64 mt-12 border-t-4 border-indigo-500">
                        <div className="h-3/4">
                          <div className="text-center pt-8">
                            <h4 className="font-bold text-slateblue antialiased">
                              Top Rope Induction
                            </h4>
                            <div className="mt-4">
                              <h5 className="font-bold text-midnight uppercase antialiased">
                                Full centre Induction
                              </h5>
                            </div>
                            <div className="mt-4 mb-8">
                              <p className="font-medium text-midnight antialiased">
                                <small>
                                  Our Full Centre Induction is perfect for
                                  people who have tried climbing with an
                                  instructor and are interested in learning the
                                  skills required to climb independently.
                                </small>
                              </p>
                            </div>
                            <div>
                              <h6 className="font-bold text-midnight antialiased">
                                You Must Have Completed the Beginners Course
                                First
                              </h6>
                            </div>
                            <div className="mt-8">
                              <h6 className="font-bold text-midnight antialiased">
                                2 Participants
                              </h6>
                              <span className="font-bold antialiased">
                                €100
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          <button className="book-btn font-medium text-2xl antialiased">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </Tab.Panel>
                <Tab.Panel>
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="pricing-card-container mb-64 mt-12 border-t-4 border-indigo-500">
                        <div className="h-3/4">
                          <div className="text-center pt-8">
                            <h4 className="font-bold text-slateblue antialiased">
                              Learn to Lean
                            </h4>
                            <div className="mt-4">
                              <h5 className="font-bold text-midnight uppercase">
                                safety techniques you’ll need to tackle our
                                impressive lead lines
                              </h5>
                            </div>
                            <div className="mt-4 mb-8">
                              <p className="font-medium text-midnight">
                                <small>
                                  Now you’re getting into the big league. Lead
                                  climbing is the top of the indoor climbing
                                  food chain and the next step on your climbing
                                  progression. Let our staff teach you the
                                  essential safety techniques you’ll need to
                                  tackle the biggest and most impressive lead
                                  lines you.
                                </small>
                              </p>
                            </div>
                            <div className="mt-8">
                              <h6 className="font-bold text-midnight antialiased">
                                Per Participants
                              </h6>
                              <span className="font-bold antialiased">€70</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          <button className="book-btn font-medium text-2xl antialiased">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="pricing-card-container mb-64 mt-12 border-t-4 border-indigo-500">
                        <div className="h-3/4">
                          <div className="text-center pt-8">
                            <h4 className="font-bold text-slateblue antialiased">
                              Advanced Coaching
                            </h4>
                            <div className="mt-4">
                              <h5 className="font-bold text-midnight uppercase">
                                One-on-one 1.5 Hours with instructor
                              </h5>
                            </div>
                            <div className="mt-4 mb-8">
                              <p className="font-medium text-midnight">
                                <small>
                                  Learn advanced climbing skills, explore your
                                  center of gravity in depth, focus on your
                                  weaknesses by having the session tailored to
                                  your needs
                                </small>
                              </p>
                            </div>
                            <div className="mt-8">
                              <h6 className="font-bold text-midnight antialiased">
                                Per Participants
                              </h6>
                              <span className="font-bold antialiased">€80</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          <button className="book-btn font-medium text-2xl antialiased">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="pricing-card-container mb-64 mt-12 border-t-4 border-indigo-500">
                        <div className="h-3/4">
                          <div className="text-center pt-8">
                            <h4 className="font-bold text-slateblue antialiased">
                              Tailored Training
                            </h4>
                            <div className="mt-4">
                              <h5 className="font-bold text-midnight uppercase">
                                Individual Tailor Made Training Program
                              </h5>
                            </div>
                            <div className="mt-4 mb-8">
                              <p className="font-medium text-midnight">
                                <small>
                                  Have a tailored program written for you. Set
                                  out your goals, develop a programme to address
                                  your weaknesses and build on your strengths.
                                  Identify your current ability and manage your
                                  progression by keeping a log of your gains
                                </small>
                              </p>
                            </div>
                            <div className="mt-8">
                              <h6 className="font-bold text-midnight antialiased">
                                Per Participants
                              </h6>
                              <span className="font-bold antialiased">
                                €120
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          <button className="book-btn font-medium text-2xl antialiased">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
}
