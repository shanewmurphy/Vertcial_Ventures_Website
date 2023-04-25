import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { Modal } from "./Modal";

const Content = () => {
  useEffect(() => {
    console.log("Content mount");
    return () => console.log("Content UNmount");
  }, []);
};

export default function Pricing() {
  const [open, setOpen] = useState(false);
  const modal1autoFocusRef = useRef(null);
  const closeModal = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = useState(false);
  const modal2autoFocusRef = useRef(null);
  const closeModal2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = useState(false);
  const closeModal3 = () => {
    setOpen3(false);
  };

  const [open4, setOpen4] = useState(false);
  const closeModal4 = () => {
    setOpen4(false);
  };
  const [open5, setOpen5] = useState(false);
  const closeModal5 = () => {
    setOpen5(false);
  };
  const [open6, setOpen6] = useState(false);
  const closeModal6 = () => {
    setOpen6(false);
  };
  return (
    <div>
      <div className="text-centered-container" id="pricing">
        <h2 className="font-black xl:text-5xl lg:text-5xl md:text-5xl sm:text-7xl text-midnight mb-2">
          <span className="text-bluenavy">Pre-Booking </span>is essential for
          all our Tasters & Courses
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
                    <div className="h-auto lg:p-8 md:p-8 sm:p-4 rounded-md my-dropshadow">
                      <div className="xl:text-2xl lg:text-2xl md:text-4xl sm:text-2xl font-bold text-midnight antialiased">
                        <h4>Bouldering Induction</h4>
                        <span className="font-medium lg:text-xl md:text-2xl sm:text-base mt-6 text-gray">
                          Duration: Unlimited
                        </span>
                      </div>
                      <div className="mt-10">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-7xl sm:text-5xl font-black text-bluenavy antialiased">
                          €25
                          <span className="pl-2 text-base font-medium text-midnight antialiased">
                            Per Participants
                          </span>
                        </h1>
                      </div>
                      <div className="mt-4">
                        <Link
                          href="https://tidycal.com/vertical-ventures-indoor-rock-climbing-cork/bouldering-induction"
                          target="blank"
                        >
                          <button className="w-full h-16 bg-bluenavy hover:bg-transparent hover:text-bluenavy hover:border-2 border-bluenavy rounded-md font-bold text-white xl:text-2xl lg:text-2xl md:text-3xl sm:text-2xl antialiased">
                            Book Now
                          </button>
                        </Link>
                      </div>
                      <div className="mt-6">
                        <p className="lg:text-sm md:text-lg sm:text-sm sm:mb-4 text-darkblue font-bold antialiased">
                          What is Bouldering?
                          <button
                            className="underline text-yellow-500 pl-2 font-medium"
                            onClick={() => setOpen(true)}
                          >
                            Learn More
                          </button>
                        </p>
                        <Modal
                          open={open}
                          onClose={closeModal}
                          autoFocusRef={modal1autoFocusRef}
                        >
                          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Modal.Title
                              as="h3"
                              className="text-lg text-center mb-2 font-bold leading-6 text-gray-900"
                            >
                              <h3>Boulding Climbing</h3>
                            </Modal.Title>
                            <p>
                              Indoor bouldering is a type of rock climbing that
                              is done on small, artificial climbing walls that
                              are typically no higher than 20 feet. It is a form
                              of free climbing, which means that the climber
                              does not use ropes or harnesses, but instead
                              relies on their own strength, balance, and
                              technique to navigate the route.
                              <p className="mt-2">
                                Bouldering routes, or problems, are often marked
                                with colored tape or holds to indicate the
                                intended path, and climbers typically work on
                                them in short, intense sessions. Indoor
                                bouldering is a popular form of exercise and
                                recreation, and can be enjoyed by people of all
                                ages and skill levels.
                              </p>
                            </p>
                            <Content />
                            <div className="my-4 gap-2 grid grid-cols-4">
                              <button
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200"
                                onClick={closeModal}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </Modal>
                      </div>
                    </div>
                    <div className="h-auto lg:p-8 md:p-8 sm:p-4 rounded-md my-dropshadow">
                      <div className="xl:text-2xl lg:text-2xl md:text-4xl sm:text-2xl font-bold text-midnight antialiased">
                        <h4>Large Wall Beginners</h4>
                        <span className="font-medium lg:text-xl md:text-2xl sm:text-base mt-6 text-gray">
                          Duration: 1hr
                        </span>
                      </div>
                      <div className="mt-10">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-7xl sm:text-5xl font-black text-bluenavy antialiased">
                          €35
                          <span className="pl-2 text-base font-medium text-midnight">
                            Per participants
                          </span>
                        </h1>
                      </div>
                      <div className="mt-4">
                        <button className="w-full h-16 bg-bluenavy rounded-md font-bold text-white xl:text-2xl lg:text-2xl md:text-3xl sm:text-2xl hover:bg-transparent hover:text-bluenavy hover:border-2 border-bluenavy antialiased">
                          Book Now
                        </button>
                      </div>
                      <div className="mt-6">
                        <p className="lg:text-sm md:text-lg sm:text-sm sm:mb-4 text-darkblue font-bold antialiased">
                          What is Large Wall?
                          <button
                            className="underline text-yellow-500 pl-2 font-medium"
                            onClick={() => setOpen2(true)}
                          >
                            Learn More
                          </button>
                        </p>
                        <Modal
                          open={open2}
                          onClose={closeModal2}
                          autoFocusRef={modal2autoFocusRef}
                        >
                          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Modal.Title
                              as="h3"
                              className="text-lg text-center mb-2 font-bold leading-6 text-gray-900"
                            >
                              Large Wall Climbing
                            </Modal.Title>
                            <p>
                              Indoor large wall climbing is a type of rock
                              climbing that takes place on tall, artificial
                              climbing walls typically ranging from 30 to 60
                              feet in height. Unlike bouldering, climbers in
                              large wall climbing use ropes and harnesses for
                              protection, and work with a climbing partner to
                              ascend the wall. Indoor large wall climbing can be
                              done using a variety of techniques, including
                              top-rope climbing, lead climbing, and speed
                              climbing.
                              <p className="mt-2">
                                This form of climbing requires a higher level of
                                physical and technical skill than bouldering, as
                                well as an understanding of rope management and
                                safety systems. It is a popular activity among
                                experienced climbers and those looking to
                                challenge themselves in a controlled indoor
                                environment.
                              </p>
                            </p>
                            <Content />
                            <div className="my-4 gap-2 grid grid-cols-4">
                              <button
                                ref={modal2autoFocusRef}
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200"
                                onClick={closeModal2}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </Modal>
                      </div>
                    </div>
                    <div className="h-auto lg:p-8 md:p-8 sm:p-4 rounded-md my-dropshadow">
                      <div className="xl:text-2xl lg:text-2xl md:text-4xl sm:text-2xl font-bold text-midnight antialiased">
                        <h4>Top Rope Induction</h4>
                        <span className="font-medium lg:text-xl md:text-2xl sm:text-base mt-6 text-gray antialiased">
                          Duration: 1.5hrs
                        </span>
                      </div>
                      <div className="mt-10">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-7xl sm:text-5xl font-black text-bluenavy antialiased">
                          €45
                          <span className="pl-2 text-base font-medium text-midnight">
                            Per participants
                          </span>
                        </h1>
                      </div>
                      <div className="mt-4">
                        <button className="w-full h-16  bg-bluenavy hover:bg-transparent hover:text-bluenavy hover:border-2 border-bluenavy rounded-md font-bold text-white xl:text-2xl lg:text-2xl md:text-3xl sm:text-2xl antialiased">
                          Book Now
                        </button>
                      </div>
                      <div className="mt-6 pb-2">
                        <p className="lg:text-sm md:text-lg sm:text-sm sm:mb-4 text-darkblue font-bold antialiased">
                          What is Top Rope?
                          <button
                            className="underline text-yellow-500 pl-2 font-medium"
                            onClick={() => setOpen3(true)}
                          >
                            Learn More
                          </button>
                        </p>
                        <Modal open={open3} onClose={closeModal3}>
                          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Modal.Title
                              as="h3"
                              className="text-lg text-center mb-2 font-bold leading-6 text-gray-900"
                            >
                              Top Rope Climbing
                            </Modal.Title>
                            <p>
                              Indoor top rope climbing is a type of rock
                              climbing that involves climbing up an artificial
                              wall while attached to a rope that runs from the
                              climber, up to an anchor at the top of the wall,
                              and then back down to a belayer on the ground. The
                              belayer manages the slack in the rope as the
                              climber ascends, providing a controlled descent in
                              the event of a fall.
                              <p className="mt-2">
                                Top rope climbing is a relatively safe and
                                beginner-friendly form of climbing, as it offers
                                a higher level of protection than other forms of
                                climbing, such as lead climbing or bouldering.
                                It is a popular activity at indoor climbing
                                gyms, and can be enjoyed by people of all ages
                                and skill levels.
                              </p>
                            </p>
                            <Content />
                            <div className="my-4 gap-2 grid grid-cols-4">
                              <button
                                ref={modal2autoFocusRef}
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200"
                                onClick={closeModal3}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid lg:grid-cols-3 md:grid-rows-1 gap-6 mt-12">
                    <div className="h-auto lg:p-8 md:p-8 sm:p-4 rounded-md my-dropshadow">
                      <div className="xl:text-2xl lg:text-2xl md:text-4xl sm:text-2xl font-bold text-midnight antialiased">
                        <h4>Learn to Lean</h4>
                        <span className="font-medium lg:text-xl md:text-2xl sm:text-base mt-6 text-gray antialiased">
                          Duration: 2hrs
                        </span>
                      </div>
                      <div className="mt-10">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-7xl sm:text-5xl font-black text-bluenavy antialiased">
                          €70
                          <span className="pl-2 text-base font-medium text-midnight">
                            Per participants
                          </span>
                        </h1>
                      </div>
                      <div className="mt-4">
                        <button className="w-full h-16  bg-bluenavy hover:bg-transparent hover:text-bluenavy hover:border-2 border-bluenavy rounded-md font-bold text-white xl:text-2xl lg:text-2xl md:text-3xl sm:text-2xl antialiased">
                          Book Now
                        </button>
                      </div>
                      <div className="mt-6 pb-2">
                        <p className="lg:text-sm md:text-lg sm:text-sm sm:mb-4 text-darkblue font-bold antialiased">
                          Learn to Learn details?
                          <button
                            className="underline text-yellow-500 pl-2 font-medium"
                            onClick={() => setOpen4(true)}
                          >
                            Learn More
                          </button>
                        </p>
                        <Modal open={open4} onClose={closeModal4}>
                          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Modal.Title
                              as="h3"
                              className="text-lg text-center mb-2 font-bold leading-6 text-gray-900"
                            >
                              Learn to Lean Program
                            </Modal.Title>
                            <p>
                              Now you&apos;re getting into the big league. Lead
                              climbing is the top of the indoor climbing food
                              chain and the next step on your climbing
                              progression. Let our staff teach you the essential
                              safety techniques you&apos;ll need to tackle the
                              biggest and most impressive lead lines
                            </p>
                            <Content />
                            <div className="my-4 gap-2 grid grid-cols-4">
                              <button
                                ref={modal2autoFocusRef}
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200"
                                onClick={closeModal4}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </Modal>
                      </div>
                    </div>
                    <div className="h-auto lg:p-8 md:p-8 sm:p-4 rounded-md my-dropshadow">
                      <div className="xl:text-2xl lg:text-2xl md:text-4xl sm:text-2xl font-bold text-midnight antialiased">
                        <h4>Advanced Coaching</h4>
                        <span className="font-medium lg:text-xl md:text-2xl sm:text-base mt-6 text-gray antialiased">
                          Duration: 2.5hrs
                        </span>
                      </div>
                      <div className="mt-10">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-7xl sm:text-5xl font-black text-bluenavy antialiased">
                          €80
                          <span className="pl-2 text-base font-medium text-midnight">
                            Per participants
                          </span>
                        </h1>
                      </div>
                      <div className="mt-4">
                        <button className="w-full h-16  bg-bluenavy hover:bg-transparent hover:text-bluenavy hover:border-2 border-bluenavy rounded-md font-bold text-white xl:text-2xl lg:text-2xl md:text-3xl sm:text-2xl antialiased">
                          Book Now
                        </button>
                      </div>
                      <div className="mt-6 pb-2">
                        <p className="lg:text-sm md:text-lg sm:text-sm sm:mb-4 text-darkblue font-bold antialiased">
                          Advanced Coaching?
                          <button
                            className="underline text-yellow-500 pl-2 font-medium"
                            onClick={() => setOpen5(true)}
                          >
                            Learn More
                          </button>
                        </p>
                        <Modal open={open5} onClose={closeModal5}>
                          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Modal.Title
                              as="h3"
                              className="text-lg text-center mb-2 font-bold leading-6 text-gray-900"
                            >
                              Advanced Coaching
                            </Modal.Title>
                            <p>
                              Learn advanced climbing skills, explore your
                              centre of gravity in depth, focus on your
                              weaknesses by having the session tailored to your
                              needs.
                            </p>
                            <Content />
                            <div className="my-4 gap-2 grid grid-cols-4">
                              <button
                                ref={modal2autoFocusRef}
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200"
                                onClick={closeModal5}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </Modal>
                      </div>
                    </div>
                    <div className="h-auto lg:p-8 md:p-8 sm:p-4 rounded-md my-dropshadow">
                      <div className="xl:text-2xl lg:text-2xl md:text-4xl sm:text-2xl font-bold text-midnight antialiased">
                        <h4>Tailored Training</h4>
                        <span className="font-medium lg:text-xl md:text-2xl sm:text-base mt-6 text-gray antialiased">
                          Duration: 2.5hrs
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
                        <button className="w-full h-16  bg-bluenavy hover:bg-transparent hover:text-bluenavy hover:border-2 border-bluenavy rounded-md font-bold text-white xl:text-2xl lg:text-2xl md:text-3xl sm:text-2xl antialiased">
                          Book Now
                        </button>
                      </div>
                      <div className="mt-6 pb-2">
                        <p className="lg:text-sm md:text-lg sm:text-sm sm:mb-4 text-darkblue font-bold antialiased">
                          Tailored Training details?
                          <button
                            className="underline text-yellow-500 pl-2 font-medium"
                            onClick={() => setOpen6(true)}
                          >
                            Learn More
                          </button>
                        </p>
                        <Modal open={open6} onClose={closeModal6}>
                          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Modal.Title
                              as="h3"
                              className="text-lg text-center mb-2 font-bold leading-6 text-gray-900"
                            >
                              Tailored Training
                            </Modal.Title>
                            <p>
                              Have a tailored program written for you. Set out
                              your goals, develop a programme to address your
                              weaknesses and build on your strengths. Identify
                              your current ability and manage your progression
                              by keeping a log of your gains.
                            </p>
                            <Content />
                            <div className="my-4 gap-2 grid grid-cols-4">
                              <button
                                ref={modal2autoFocusRef}
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200"
                                onClick={closeModal6}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div className="text-centered-container">
            <h5 className="mt-12 mb-2 font-black text-midnight lg:text-3xl md:text-3xl sm:text-xl">
              Climb for a cause with our fundraising events for local
              non-profits and charities
            </h5>
            <h6 className="font-bold lg:text-2xl md:text-2xl sm:text-lg text-gray">
              Please drop us an email to
              <span className="text-slateblue pl-1 pr-1">
                info@verticalventures.com
              </span>
              <br /> or call us on 0214 547 547
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
