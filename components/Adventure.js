import Image from "next/image";
export default function Adventure() {
  return (
    <div>
      <div className="full-width-container">
        <div className="my-container">
          <div className="grid lg:grid-cols-2 sm:grid-col-1 xl:mt-32 lg:mt-32 md:mt-16 xxs:mt-8  pb-32 gap-14">
            <div>
              <h2 className="font-black text-midnight mb-4">
                Discover a new passion with indoor rock climbing
              </h2>
              <h4 className="text-darkblue font-bold antialiased">
                Offer a comprehensive approach to rock climbing, including gear,
                training, and instruction.
              </h4>
              <div className="mt-4">
                <ul className="bullet-point-list">
                  <li className="pt-2 pb-2">
                    <span className="icon font-bold text-midnight pr-6">
                      <h6 className="pl-2">
                        Suitable for any age and experience level
                      </h6>
                    </span>
                  </li>
                  <li className="pt-2 pb-2">
                    <span className="icon font-bold text-midnight pr-6">
                      <h6 className="pl-2">Fun and challenging routes</h6>
                    </span>
                  </li>
                  <li className="pt-2 pb-2">
                    <span className="icon font-bold text-midnight pr-6">
                      <h6 className="pl-2">Friendly and helpful staff</h6>
                    </span>
                  </li>
                </ul>
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
