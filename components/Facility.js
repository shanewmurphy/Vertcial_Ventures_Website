import Image from "next/image";

export default function Climbs() {
  return (
    <div>
      <div className="my-container">
        <div className="text-centered-container xl:mt-32 lg:mt-32 md:mt-16 sm:mt-20">
          <h2 className="text-center font-black text-midnight xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl mb-2 antialiased">
            Our facilities have walls of different heights ranging from 3 to 32
            feet
          </h2>
          <div>
            <h5 className="text-center text-gray font-bold xl:text-2xl lg:text-2xl md:text-2xl sm:text-1xl antialiased">
              With over 10,000 square feet of climbing opportunities,
              there&apos;s lots to choose from
            </h5>
          </div>
        </div>
        <div className="my-container">
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-6 mb-32">
            <div className="mt-8">
              <Image
                className="image-container"
                src="/imgs/Boulding-min.png"
                width={638}
                height={428}
                alt="Boulding walls Ventical Ventures"
              />
              <h3 className="text-center font-bold xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl mt-4 mb-2 text-midnight">
                Bouldering
              </h3>
              <p className="font-medium text-base leading-normal text-darkblue">
                150m2 of climbing surface offering a variety of terrain in one
                area, it&apos;s made up of slab climbing and slightly off
                vertical terrain on the sides, and steep climbing with unique,
                dramatic angles a prow and a cave feature.
              </p>
            </div>
            <div className="mt-8">
              <Image
                className="image-container"
                src="/imgs/Roped_Climbing-min.png"
                width={638}
                height={428}
                alt="Roped climbing vertical Ventures "
              />
              <h3 className="text-center font-bold xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl mt-4 mb-2 text-midnight">
                Roped Climbing
              </h3>
              <p className="font-medium text-base leading-normal text-darkblue">
                Our rope climbing area has walls 10m high, with route lengths up
                to 14m in area&apos;s. Offering 500m2 of climbing, it features
                32 lines, 28 of which can be led, 12 lines pre-equipped with Top
                Ropes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
