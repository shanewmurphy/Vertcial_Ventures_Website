import Image from "next/image";
export default function Adventure() {
  return (
    <div>
      <div className="full-width-container">
        <div className="my-container">
          <div className="grid lg:grid-cols-2 sm:grid-col-1 xl:mt-32 lg:mt-32 md:mt-16 xxs:mt-12  pb-32 gap-14">
            <div>
              <h2 className="font-black text-midnight mb-2">
                Discover a new passion with indoor rock climbing
              </h2>
              <h4 className="text-darkblue font-bold antialiased">
                Offer a comprehensive approach to rock climbing, including gear,
                training, and instruction.
              </h4>
              <div className="mt-4">
                <ul className="bullet-point-list">
                  <li className="pt-2 pb-2">All ages and experience level</li>
                  <li className="pt-2 pb-2">Fun and challenging routes</li>
                  <li className="pt-2 pb-2">Friendly and helpful staff</li>
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
