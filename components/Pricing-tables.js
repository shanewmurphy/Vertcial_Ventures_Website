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
                  <div className="grid grid-cols-3 gap-4 h-4/5 mb-24 mt-12">
                    <div className="pricing-card-container text-center">
                      <div className="h-3/4">
                        <div>
                          <h4 className="font-black text-2xl mt-8 text-slateblue antialiased">
                            Bouldering Induction
                          </h4>
                        </div>
                        <div className="mt-2">
                          <h5 className="font-bold text-midnight uppercase">
                            30 mins on small lower walls
                          </h5>
                        </div>
                        <div className="mt-2 mb-4">
                          <p className="font-medium text-midnight">
                            <small>
                              Bouldering is fun, social and a great way to keep
                              fit and healthy as it involves full body exercise!
                              If you&apos;re psyched to try it out and join our
                              community then this is the option for you.
                            </small>
                          </p>
                        </div>
                        <div>
                          <h6 className="font-bold text-midnight antialiased">
                            Inductions include instruction and entry after your
                            session so you can keep climbing at no extra cost!
                          </h6>
                        </div>
                        <div className="mt-8">
                          <h6 className="font-bold text-midnight antialiased">
                            Per Participants
                          </h6>
                          <span className="font-bold antialiased">€30</span>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="book-btn font-medium text-2xl antialiased">
                          Book Now
                        </button>
                      </div>
                    </div>
                    <div className="pricing-card-container text-center">
                      <div className="h-3/4">
                        <div>
                          <h4 className="font-black text-2xl mt-8 text-slateblue antialiased">
                            Large Wall beginners
                          </h4>
                        </div>
                        <div className="mt-2">
                          <h5 className="font-bold text-midnight uppercase">
                            1 Hour Roped Climbing Taster
                          </h5>
                        </div>
                        <div className="mt-2 mb-4">
                          <p className="font-medium text-midnight antialiased">
                            <small>
                              Our taster session is a one hour guided tour of
                              our roped climbing walls. Join one of our expert
                              instructors as they select climbs specifically for
                              you
                            </small>
                          </p>
                        </div>
                        <div className="mt-4">
                          <h6 className="font-bold text-midnight">
                            2 Participants
                          </h6>
                          <span className="font-bold antialiased">€55</span>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="book-btn font-medium text-2xl antialiased">
                          Book Now
                        </button>
                      </div>
                    </div>
                    <div className="pricing-card-container text-center">
                      <div className="h-3/4">
                        <div>
                          <h4 className="font-black text-2xl mt-8 text-slateblue antialiased">
                            Top Rope Induction
                          </h4>
                        </div>
                        <div className="mt-2">
                          <h5 className="font-bold text-midnight uppercase">
                            Full centre Induction
                          </h5>
                        </div>
                        <div className="mt-2 mb-4">
                          <p className="font-medium text-midnight antialiased">
                            <small>
                              Our Full Centre Induction is perfect for people
                              who have tried climbing with an instructor and are
                              interested in learning the skills required to
                              climb independently.
                            </small>
                          </p>
                        </div>
                        <div className="mt-4">
                          <h6 className="font-bold text-midnight antialiased">
                            2 Participants
                          </h6>
                          <span className="font-bold antialiased">€100</span>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="book-btn font-medium text-2xl antialiased">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid grid-cols-3 gap-4 mb-24 mt-12">
                    <div className="pricing-card-container text-center">
                      <div className="h-3/4">
                        <div>
                          <h4 className="font-black text-2xl mt-8 text-slateblue antialiased">
                            Learn to Lean
                          </h4>
                        </div>
                        <div className="mt-2">
                          <h5 className="font-bold text-midnight uppercase">
                            Safety techniques you&apos;ll need to tackle our
                            impressive lead lines
                          </h5>
                        </div>
                        <div className="mt-2">
                          <h5 className="font-bold text-midnight uppercase">
                            Duration 1.5hrs
                          </h5>
                        </div>
                        <div className="mt-2 mb-4">
                          <p className="font-medium text-midnight antialiased">
                            <small>
                              Now you&apos;re getting into the big league. Lead
                              climbing is the top of the indoor climbing food
                              chain and the next step on your climbing
                              progression. Let our staff teach you the essential
                              safety techniques you&apos;ll need to tackle the
                              biggest and most impressive lead lines
                            </small>
                          </p>
                        </div>
                        <div className="mt-4">
                          <h6 className="font-bold text-midnight antialiased">
                            2 Participants
                          </h6>
                          <span className="font-bold antialiased">€70</span>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="book-btn font-medium text-2xl antialiased">
                          Book Now
                        </button>
                      </div>
                    </div>
                    <div className="pricing-card-container text-center">
                      <div className="h-3/4">
                        <div>
                          <h4 className="font-black text-2xl mt-8 text-slateblue antialiased">
                            Advanced Coaching
                          </h4>
                        </div>
                        <div className="mt-2">
                          <h5 className="font-bold text-midnight uppercase">
                            One-on-one 1.5 Hours with instructor
                          </h5>
                        </div>
                        <div className="mt-2">
                          <h5 className="font-bold text-midnight uppercase">
                            Duration 2hrs
                          </h5>
                        </div>
                        <div className="mt-2 mb-4">
                          <p className="font-medium text-midnight antialiased">
                            <small>
                              Learn advanced climbing skills, explore your
                              centre of gravity in depth, focus on your
                              weaknesses by having the session tailored to your
                              needs
                            </small>
                          </p>
                        </div>
                        <div className="mt-4">
                          <h6 className="font-bold text-midnight antialiased">
                            2 Participants
                          </h6>
                          <span className="font-bold antialiased">€100</span>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="book-btn font-medium text-2xl antialiased">
                          Book Now
                        </button>
                      </div>
                    </div>
                    <div className="pricing-card-container text-center">
                      <div className="h-3/4">
                        <div>
                          <h4 className="font-black text-2xl mt-8 text-slateblue antialiased">
                            Tailored Training
                          </h4>
                        </div>
                        <div className="mt-2">
                          <h5 className="font-bold text-midnight uppercase">
                            Individual Tailor Made Training Program
                          </h5>
                        </div>
                        <div className="mt-2">
                          <h5 className="font-bold text-midnight uppercase">
                            Duration 2hrs
                          </h5>
                        </div>
                        <div className="mt-2 mb-4">
                          <p className="font-medium text-midnight antialiased">
                            <small>
                              Have a tailored program written for you. Set out
                              your goals, develop a programme to address your
                              weaknesses and build on your strengths. Identify
                              your current ability and manage your progression
                              by keeping a log of your gains
                            </small>
                          </p>
                        </div>
                        <div className="mt-4">
                          <h6 className="font-bold text-midnight antialiased">
                            2 Participants
                          </h6>
                          <span className="font-bold antialiased">€120</span>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="book-btn font-medium text-2xl antialiased">
                          Book Now
                        </button>
                      </div>
                    </div>
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
