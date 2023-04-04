import Image from "next/image";
export default function Adventure() {
  return (
    <div>
      <div className="full-width-container">
        <div className="my-container">
          <div className="grid lg:grid-cols-2 sm:grid-col-1 xl:mt-32 lg:mt-32 md:mt-16 xxs:mt-12 pb-32 gap-14">
            <div>
              <h2 className="font-black text-midnight mb-2">
                Discover a new passion with indoor rock climbing
              </h2>
              <h4 className="text-darkblue font-bold antialiased">
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
