import { Tab } from "@headlessui/react";
import classNames from "classnames";

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
                  <div className="grid lg:grid-cols-3 md:grid-rows-3 gap-6 mt-12">
                    <div className="h-96 p-12 rounded-md my-dropshadow">
                      <div className="text-2xl font-bold">
                        <h4>Bouldering Induction</h4>
                        <span className="font-semibold text-xl mt-2">
                          Duration 30mins
                        </span>
                      </div>
                      <div className="mt-10">
                        <h1 className="text-6xl font-black">
                          €30
                          <span className="pl-2 text-base font-medium">
                            Per Participants
                          </span>
                        </h1>
                      </div>
                    </div>
                    <div className="h-96 p-12 rounded-md my-dropshadow">B</div>
                    <div className="h-96 p-12 rounded-md my-dropshadow">C</div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid lg:grid-cols-3 md:grid-rows-3 gap-6 mt-12">
                    <div className="h-96 p-12 rounded-md my-dropshadow">D</div>
                    <div className="h-96 p-12 rounded-md my-dropshadow">E</div>
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
