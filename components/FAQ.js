import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function FAQ() {
  return (
    <div className="my-container">
      <div>KKKK</div>
      <div className="faq-container">
        <div>
          <div className="rounded-2xl lg:w-full md:w-full sm:w-11/12 bg-white p-4">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg drop-shadow-md bg-white lg:px-6 lg:py-6 md:px-6 md:py-6 sm:px-4 sm:py-4 text-left lg:text-xl md:text-lg sm:text-sm font-bold text-midnight hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>What should I wear when indoor rock climbing?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-8 w-8 text-midnight`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 px-4 pt-4 pb-2 text-base text-midnight">
                    Wear comfortable athletic clothing that allows for a full
                    range of motion. Many climbers prefer to wear tight-fitting
                    clothes to reduce interference with gear and holds. Avoid
                    loose or baggy clothing, as it can get caught on holds or
                    gear.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <div>
          <div className="rounded-2xl lg:w-full md:w-full sm:w-11/12 bg-white p-4">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg drop-shadow-md bg-white lg:px-6 lg:py-6 md:px-6 md:py-6 sm:px-4 sm:py-4 text-left lg:text-xl md:text-lg sm:text-sm font-bold text-midnight hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>What should I wear when indoor rock climbing?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-8 w-8 text-midnight`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 px-4 pt-4 pb-2 text-base text-midnight">
                    Wear comfortable athletic clothing that allows for a full
                    range of motion. Many climbers prefer to wear tight-fitting
                    clothes to reduce interference with gear and holds. Avoid
                    loose or baggy clothing, as it can get caught on holds or
                    gear.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
}
