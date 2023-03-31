import Image from "next/image";
export default function Adventure() {
  return (
    <div>
      <div className="full-width-container">
        <div className="my-container">
          <div className="grid lg:grid-cols-2 sm:grid-col-1 xl:mt-32 lg:mt-32 md:mt-16 xxs:mt-12 pb-32 gap-14">
            <div>
              <h2 className="font-black text-midnight mb-4">
                Discover a new passion with indoor rock climbing
              </h2>
              <h4 className="text-darkblue font-bold antialiased">
                Offer a comprehensive approach to rock climbing, including gear,
                training, and instruction.
              </h4>
              <div className="mt-6">
                <div className="flex benefits-list p-2">
                  <Image
                    src="/imgs/routes_B.png"
                    width={75}
                    height={56}
                    alt="routes icon"
                  />
                  <h6 className="pt-4 pl-4 font-medium">
                    Fun and challenging routes
                  </h6>
                </div>
                <div className="flex benefits-list p-2">
                  <Image
                    src="/imgs/Staff_C.png"
                    width={75}
                    height={47}
                    alt="Staff icon"
                  />
                  <h6 className="pt-2 pl-4 font-medium">BB</h6>
                </div>
                <div>CC</div>
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
