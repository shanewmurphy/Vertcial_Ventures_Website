import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function FAQ() {
  return (
    <div>
      <div className="text-centered-container">
        <h2 className="font-black text-midnight xl:text-5xl lg:text-4xl md:text-5xl sm:text-3xl">
          Frequent questions and answers
        </h2>
      </div>
      <div className="faq-container">
        <div className="rounded-2xl w-full bg-white p-4">
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
        <div className="rounded-2xl w-full bg-white p-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg drop-shadow-md bg-white lg:px-6 lg:py-6 md:px-6 md:py-6 sm:px-4 sm:py-4 text-left lg:text-xl md:text-lg sm:text-sm font-bold text-midnight hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Do I need special shoes for indoor rock climbing?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-8 w-8 text-midnight`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 px-4 pt-4 pb-2 text-base text-midnight">
                  Yes, specialized climbing shoes are necessary for indoor rock
                  climbing. These shoes are designed to provide maximum grip and
                  sensitivity on the climbing surface. They should fit snugly,
                  but not be painful or uncomfortable.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="rounded-2xl w-full bg-white p-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg drop-shadow-md bg-white lg:px-6 lg:py-6 md:px-6 md:py-6 sm:px-4 sm:py-4 text-left lg:text-xl md:text-lg sm:text-sm font-bold text-midnight hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    How do I choose the right level of difficulty for my climb?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-8 w-8 text-midnight`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 px-4 pt-4 pb-2 text-base text-midnight">
                  Choose a route that matches your ability level. Look for
                  routes with hand and foot holds that are comfortably within
                  your reach. Begin with routes that are easier than your
                  ability level and gradually work your way up.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="rounded-2xl w-full bg-white p-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg drop-shadow-md bg-white lg:px-6 lg:py-6 md:px-6 md:py-6 sm:px-4 sm:py-4 text-left lg:text-xl md:text-lg sm:text-sm font-bold text-midnight hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    How do I ensure my safety while indoor rock climbing?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-8 w-8 text-midnight`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 px-4 pt-4 pb-2 text-base text-midnight">
                  Always follow proper safety procedures when indoor rock
                  climbing. This includes wearing a harness, using a rope, and
                  climbing under the supervision of a qualified instructor or
                  experienced climber. Check your gear regularly and never climb
                  beyond your abilities.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="rounded-2xl w-full bg-white p-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg drop-shadow-md bg-white lg:px-6 lg:py-6 md:px-6 md:py-6 sm:px-4 sm:py-4 text-left lg:text-xl md:text-lg sm:text-sm font-bold text-midnight hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>How can I improve my indoor rock climbing skills?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-8 w-8 text-midnight`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 px-4 pt-4 pb-2 text-base text-midnight">
                  Practice regularly, seek advice from experienced climbers, and
                  take classes or workshops to improve your technique. Work on
                  building strength and endurance through targeted exercises and
                  training programs. Also, focus on mental preparation, such as
                  visualization and goal-setting, to improve your performance.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="rounded-2xl w-full bg-white p-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg drop-shadow-md bg-white lg:px-6 lg:py-6 md:px-6 md:py-6 sm:px-4 sm:py-4 text-left lg:text-xl md:text-lg sm:text-sm font-bold text-midnight hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    What is bouldering and how is it different from top rope
                    climbing?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-8 w-8 text-midnight`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 px-4 pt-4 pb-2 text-base text-midnight">
                  Bouldering is a type of climbing that involves short,
                  low-altitude routes without the use of ropes. Top rope
                  climbing involves climbing a longer route while attached to a
                  rope that runs from an anchor at the top of the wall to the
                  climber's harness. Bouldering is typically done without a
                  harness, but with the use of protective pads on the ground.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="rounded-2xl w-full bg-white p-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg drop-shadow-md bg-white lg:px-6 lg:py-6 md:px-6 md:py-6 sm:px-4 sm:py-4 text-left lg:text-xl md:text-lg sm:text-sm font-bold text-midnight hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Can indoor rock climbing help me get in shape?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-8 w-8 text-midnight`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 px-4 pt-4 pb-2 text-base text-midnight">
                  Yes, indoor rock climbing is a great way to improve your
                  overall fitness level. It can help build strength, endurance,
                  and flexibility, while also improving your balance and
                  coordination. Climbing also provides a fun and engaging
                  workout that can help you stay motivated and committed to your
                  fitness goals.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="rounded-2xl w-full bg-white p-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg drop-shadow-md bg-white lg:px-6 lg:py-6 md:px-6 md:py-6 sm:px-4 sm:py-4 text-left lg:text-xl md:text-lg sm:text-sm font-bold text-midnight hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    How do I prevent injuries while indoor rock climbing?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-8 w-8 text-midnight`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 px-4 pt-4 pb-2 text-base text-midnight">
                  Proper warm-up and stretching, good technique, and gradually
                  increasing difficulty levels can help prevent injuries. It's
                  also important to wear appropriate gear, such as climbing
                  shoes and a harness, and to follow all safety procedures when
                  climbing. If you experience pain or discomfort while climbing,
                  stop immediately and seek medical attention if necessary.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="rounded-2xl w-full bg-white p-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg drop-shadow-md bg-white lg:px-6 lg:py-6 md:px-6 md:py-6 sm:px-4 sm:py-4 text-left lg:text-xl md:text-lg sm:text-sm font-bold text-midnight hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Is indoor rock climbing safe for children?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-8 w-8 text-midnight`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 px-4 pt-4 pb-2 text-base text-midnight">
                  Indoor rock climbing can be a safe and enjoyable activity for
                  children when done under proper supervision and with
                  appropriate safety precautions. Children should always be
                  under the direct supervision of an experienced adult, and
                  should be taught to follow all safety rules and procedures
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}
