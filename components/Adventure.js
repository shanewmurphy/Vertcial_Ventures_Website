import Image from "next/image";
export default function Adventure() {
  return (
    <div>
      <div className="full-width-container" id="adventure">
        <div className="my-container">
          <div className="grid lg:grid-cols-2 sm:grid-col-1 xl:mt-28 lg:mt-28 md:mt-28 sm:mt-16  gap-20">
            <div>
              <h2 className="font-black xl:text-5xl lg:text-5xl md:text-6xl sm:text-7xl text-midnight lg:mb-2 md:mb-4 sm:mb-2">
                Unleash your inner adventurer
              </h2>
              <h3 className="font-bold text-midnight xl:text-3xl lg:text-2xl md:text-4xl sm:text-2xl mb-2">
                Discover a new passion in indoor rock climbing
              </h3>
              <h4 className="text-darkblue font-medium lg:text-xl md:text-2xl sm:text-base antialiased">
                Offer a comprehensive approach to rock climbing, including gear,
                training, and instruction.
              </h4>
              <div className="flex items-center benefits-list p-2 mt-6">
                <div>
                  <Image
                    src="/imgs/Routes_A.png"
                    width={65}
                    height={50}
                    alt="routes icon"
                  />
                </div>
                <div className="w-64">
                  <h6 className="pl-4 font-bold text-midnight">
                    Fun and challenging routes
                  </h6>
                </div>
              </div>
              <div className="flex items-center benefits-list p-2 mt-3">
                <div>
                  <Image
                    src="/imgs/Staff_A.png"
                    width={65}
                    height={50}
                    alt="Staff icon"
                  />
                </div>
                <div>
                  <h6 className="pt-3 pl-4 font-bold text-midnight">
                    Friendly and helpful staff
                  </h6>
                </div>
              </div>
              <div className="flex items-center benefits-list p-2 mt-3">
                <div>
                  <Image
                    src="/imgs/Problem_A.png"
                    width={65}
                    height={50}
                    alt="Problem solving skills icon"
                  />
                </div>
                <div>
                  <h6 className="pt-3 pl-4 font-bold text-midnight">
                    Critical thinking skills
                  </h6>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/imgs/Ventical_ventures_climbers-min.png"
                width="640"
                height="667"
                alt="Ventical Ventures indoor climbing"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
