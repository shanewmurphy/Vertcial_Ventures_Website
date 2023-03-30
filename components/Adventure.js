import Image from "next/image";
export default function Adventure() {
  return (
    <div>
      <div className="full-width-container">
        <div className="my-container">
          <div className="grid lg:grid-cols-2 sm:grid-col-1 gap-12 mt-32 pb-36">
            <div>
              <h2 className="font-black text-midnight mb-4">
                Unleash your inner adventurer and discover a <br /> new passion
                with indoor rock climbing
              </h2>
              <h4 className="text-darkblue font-bold antialiased">
                Offer a comprehensive approach to rock climbing, including gear,
                training, and instruction.
              </h4>
              <div className="mt-4">
                <ul className="bullet-point-list">
                  <li className="pt-2 pb-2">
                    <span className="icon font-bold pr-6">
                      Suitable for any age and experience level
                    </span>
                  </li>
                  <li className="pt-2 pb-2">
                    <span className="icon font-bold text-slateblue pr-6">
                      Fun and challenging routes
                    </span>
                  </li>
                  <li className="pt-2 pb-2">CC</li>
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
