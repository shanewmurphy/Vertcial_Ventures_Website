import Image from "next/image";
export default function Intro() {
  return (
    <div className="full-width-container bg-midnight pb-32">
      <div className="my-container">
        <div className="grid lg:grid-cols-2 sm:grid-col-1 gap-20 xl:mt-24 lg:mt-0 md:mt-6">
          <div className="xl:mt-12 lg:mt-6 md:mt-0">
            <h2 className="text-slateblue font-black xl:text-5xl lg:text-4xl md:text-6xl sm:text-3xl mb-4 antialiased">
              Vertical Ventures is the only indoor rock climbing facility in
              Cork
            </h2>
            <h4 className="text-white mb-4 font-bold lg:text-2xl md:text-3xl sm:text-2xl antialiased">
              Improve your strength, balance, and flexibility with every climb
            </h4>
            <p className="text-white text-lg font-medium antialiased">
              Our experienced staff is here to support and encourage you every
              step of the way. Learn from experienced instructors and take your
              climbing to the next level.
            </p>
          </div>
          <div>
            <Image
              src="/imgs/vertical_ventures_indoor_climbing-min.png"
              width="640"
              height="449"
              alt="Ventical Ventures Cork in door climbing"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
