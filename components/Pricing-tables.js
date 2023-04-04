import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";

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
              <Tab.List className="flex justify-center mt-8">
                <Tab>
                  <button>Tab 1</button>
                </Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>Content 1</Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
                <Tab.Panel>Content 3</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
}
