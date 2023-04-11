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
                  <div className="grid lg:grid-cols-3 md:grid-rows-3 gap-6 mt-12">
                    <div className="h-auto lg:p-12 md:p-12 sm:p-6 rounded-md my-dropshadow">
                      <div className="xl:text-3xl lg:text-2xl md:text-4xl sm:text-2xl font-bold">
                        <h4>Bouldering Induction</h4>
                        <span className="font-medium lg:text-xl md:text-2xl sm:text-base mt-6">
                          Duration: Unlimited
                        </span>
                      </div>
                      <div className="mt-10">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-7xl sm:text-5xl font-black text-slateblue">
                          €30
                          <span className="pl-2 text-base font-medium text-midnight">
                            Per Participants
                          </span>
                        </h1>
                      </div>
                      <div className="mt-4">
                        <button className="w-full h-16 bg-bluenavy rounded-md font-bold text-white xl:text-2xl">
                          Book Now
                        </button>
                      </div>
                      <div className="mt-4">
                        <p>
                          What is Bouldering?<span>Learn More</span>
                        </p>
                      </div>
                    </div>
                    <div className="h-96 lg:p-12 md:p-12 sm:p-6 rounded-md my-dropshadow">
                      <div className="xl:text-3xl lg:text-2xl md:text-4xl sm:text-2xl font-bold">
                        <h4>Large Wall Beginners</h4>
                        <span className="font-medium lg:text-xl md:text-2xl sm:text-base mt-6">
                          Duration: 1hr
                        </span>
                      </div>
                      <div className="mt-10">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-7xl sm:text-5xl font-black text-slateblue">
                          €55
                          <span className="pl-2 text-base font-medium text-midnight">
                            Min 2 participants
                          </span>
                        </h1>
                      </div>
                    </div>
                    <div className="h-96 p-12 rounded-md my-dropshadow">C</div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid lg:grid-cols-3 md:grid-rows-3 gap-6 mt-12">
                    <div className="h-auto p-12 rounded-md my-dropshadow">
                      D
                    </div>
                    <div className="h-auto p-12 rounded-md my-dropshadow">
                      E
                    </div>
                    <div className="h-96 p-12 rounded-md my-dropshadow">F</div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
}
