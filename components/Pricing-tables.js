import { Tab } from "@headlessui/react";
import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";

export default function Pricing() {
  return (
    <div>
      <div className="text-centered-container">
        <h2 className="font-black xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-midnight mb-2">
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
                      "mr-3 w-64 bg-bluenavy rounded-md text-xl p-3",
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
                      "mr-3 w-64 bg-bluenavy rounded-md text-xl p-3",
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
                  <div className="grid lg:grid-cols-3 md:grid-rows-1 gap-6 mt-12">
                    <div className="h-auto lg:p-10 md:p-10 sm:p-6 rounded-md my-dropshadow">
                      <div className="xl:text-2xl lg:text-2xl md:text-4xl sm:text-2xl font-bold text-midnight antialiased">
                        <h4>Bouldering Induction</h4>
                        <span className="font-medium lg:text-xl md:text-2xl sm:text-base mt-6 text-gray">
                          Duration: Unlimited
                        </span>
                      </div>
                      <div className="mt-10">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-7xl sm:text-5xl font-black text-bluenavy antialiased">
                          €30
                          <span className="pl-2 text-base font-medium text-midnight antialiased">
                            Per Participants
                          </span>
                        </h1>
                      </div>
                      <div className="mt-4">
                        <button className="w-full h-16 bg-bluenavy rounded-md font-bold text-white xl:text-2xl lg:text-3xl md:text-3xl sm:text-2xl antialiased">
                          Book Now
                        </button>
                      </div>
                      <div className="mt-6">
                        <p className="lg:text-sm md:text-1xl sm:text-sm text-darkblue">
                          What is Bouldering?
                          <span className="pl-2">Learn More</span>
                        </p>
                      </div>
                    </div>
                    <div className="h-auto lg:p-10 md:p-10 sm:p-6 rounded-md my-dropshadow">
                      <div className="xl:text-2xl lg:text-2xl md:text-4xl sm:text-2xl font-bold text-midnight antialiased">
                        <h4>Large Wall Beginners</h4>
                        <span className="font-medium lg:text-xl md:text-2xl sm:text-base mt-6 text-gray">
                          Duration: 1hr
                        </span>
                      </div>
                      <div className="mt-10">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-7xl sm:text-5xl font-black text-bluenavy antialiased">
                          €55
                          <span className="pl-2 text-base font-medium text-midnight">
                            Min 2 participants
                          </span>
                        </h1>
                      </div>
                      <div className="mt-4">
                        <button className="w-full h-16 bg-bluenavy rounded-md font-bold text-white xl:text-2xl lg:text-3xl md:text-3xl sm:text-2xl antialiased">
                          Book Now
                        </button>
                      </div>
                      <div className="mt-6">
                        <p className="lg:text-sm md:text-2xl sm:text-sm text-darkblue">
                          What is Large Wall Climbing?
                          <span className="pl-2">Learn More</span>
                        </p>
                      </div>
                    </div>
                    <div className="h-auto lg:p-10 md:p-10 sm:p-6 rounded-md my-dropshadow">
                      <div className="xl:text-2xl lg:text-2xl md:text-4xl sm:text-2xl font-bold text-midnight antialiased">
                        <h4>Top Rope Induction</h4>
                        <span className="font-medium lg:text-xl md:text-2xl sm:text-base mt-6 text-gray antialiased">
                          Duration: 1.5hrs
                        </span>
                      </div>
                      <div className="mt-10">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-7xl sm:text-5xl font-black text-bluenavy antialiased">
                          €80
                          <span className="pl-2 text-base font-medium text-midnight">
                            Min 2 participants
                          </span>
                        </h1>
                      </div>
                      <div className="mt-4">
                        <button className="w-full h-16 bg-bluenavy rounded-md font-bold text-white xl:text-2xl lg:text-3xl md:text-3xl sm:text-2xl antialiased">
                          Book Now
                        </button>
                      </div>
                      <div className="mt-6 pb-2">
                        <p className="lg:text-sm md:text-2xl sm:text-sm text-darkblue">
                          What is Top Rope Climbing?
                          <span className="pl-2">Learn More</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid lg:grid-cols-3 md:grid-rows-3 gap-6 mt-12">
                    <div className="h-auto lg:p-10 md:p-10 sm:p-6 rounded-md my-dropshadow">
                      <div className="xl:text-2xl lg:text-2xl md:text-4xl sm:text-2xl font-bold text-midnight antialiased">
                        <h4>Learn to Lean</h4>
                        <span className="font-medium lg:text-xl md:text-2xl sm:text-base mt-6 text-gray antialiased">
                          Duration: 2hrs
                        </span>
                      </div>
                      <div className="mt-10">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-7xl sm:text-5xl font-black text-bluenavy antialiased">
                          €100
                          <span className="pl-2 text-base font-medium text-midnight">
                            Per participants
                          </span>
                        </h1>
                      </div>
                      <div className="mt-4">
                        <button className="w-full h-16 bg-bluenavy rounded-md font-bold text-white xl:text-2xl lg:text-3xl md:text-3xl sm:text-2xl antialiased">
                          Book Now
                        </button>
                      </div>
                      <div className="mt-6 pb-2">
                        <p className="lg:text-sm md:text-2xl sm:text-sm text-darkblue">
                          Learn to Learn course details?
                          <span className="pl-2">Learn More</span>
                        </p>
                      </div>
                    </div>
                    <div className="h-auto lg:p-10 md:p-10 sm:p-6 rounded-md my-dropshadow">
                      <div className="xl:text-2xl lg:text-2xl md:text-4xl sm:text-2xl font-bold text-midnight antialiased">
                        <h4>Advanced Coaching</h4>
                        <span className="font-medium lg:text-xl md:text-2xl sm:text-base mt-6 text-gray antialiased">
                          Duration: 2.5hrs
                        </span>
                      </div>
                      <div className="mt-10">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-7xl sm:text-5xl font-black text-bluenavy antialiased">
                          €120
                          <span className="pl-2 text-base font-medium text-midnight">
                            Per participants
                          </span>
                        </h1>
                      </div>
                      <div className="mt-4">
                        <button className="w-full h-16 bg-bluenavy rounded-md font-bold text-white xl:text-2xl lg:text-3xl md:text-3xl sm:text-2xl antialiased">
                          Book Now
                        </button>
                      </div>
                      <div className="mt-6 pb-2">
                        <p className="lg:text-base md:text-2xl sm:text-sm text-darkblue">
                          Advanced Coaching details?
                          <span className="pl-2">Learn More</span>
                        </p>
                      </div>
                    </div>
                    <div className="h-auto lg:p-10 md:p-10 sm:p-6 rounded-md my-dropshadow">
                      <div className="xl:text-2xl lg:text-2xl md:text-4xl sm:text-2xl font-bold text-midnight antialiased">
                        <h4>Tailored Training</h4>
                        <span className="font-medium lg:text-xl md:text-2xl sm:text-base mt-6 text-gray antialiased">
                          Duration: 2.5hrs
                        </span>
                      </div>
                      <div className="mt-10">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-7xl sm:text-5xl font-black text-bluenavy antialiased">
                          €120
                          <span className="pl-2 text-base font-medium text-midnight">
                            Per participants
                          </span>
                        </h1>
                      </div>
                      <div className="mt-4">
                        <button className="w-full h-16 bg-bluenavy rounded-md font-bold text-white xl:text-2xl lg:text-3xl md:text-3xl sm:text-2xl antialiased">
                          Book Now
                        </button>
                      </div>
                      <div className="mt-6 pb-2">
                        <p className="lg:text-sm md:text-2xl sm:text-sm text-darkblue">
                          Advanced Coaching details?
                          <span className="pl-2">Learn More</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div className="text-centered-container">
            <h5 className="mt-12 mb-4">
              Climb for a cause with our fundraising events for local
              non-profits and charities
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
