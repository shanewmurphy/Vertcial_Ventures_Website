import Image from "next/image";
export default function KidsClub() {
  return (
    <div>
      <div className="my-container">
        <div className="mt-48 mb-48 bg-backgroundGray rounded-lg h-auto lg:p-12 md:p-12 sm:p-6 content-around">
          <div className="flex lg:flex-row md:flex-col sm:flex-col gap-20">
            <div className="basis-2/4">
              <h2 className="font-black text-midnight xl:text-5xl lg:text-4xl md:text-5xl sm:text-3xl lg:mt-4 antialiased">
                Youth Climbing Club
              </h2>
              <h4 className="font-bold text-slateblue lg:mt-2 md:mt-4 sm:mt-4 xl:text-4xl lg:text-2xl md:text-4xl sm:text-2xl antialiased">
                Ages 8 to 14
              </h4>
              <h5 className="lg:mt-8 md:mt-8 sm:mt-6 font-semibold text-gray xl:text-2xl lg:text-xl antialiased">
                One hour of fun climbing at our centre, learning new skills,
                boosting confidence and making new friends
              </h5>
              <h6 className="mt-8 mb-1 font-bold xl:text-2xl lg:text-2xl text-midnight">
                Weekend&apos;s
              </h6>
              <p className="font-bold text-midnight xl:text-lg">
                Sat - Level 1 - 10:30am to 11:30am
              </p>
              <p className="font-bold text-midnight xl:text-lg">
                Sat - Level 2 - 12 noon to 1:00pm
              </p>
            </div>
            <div className="basis-2/4">
              <Image
                className="container mx-auto aspect-square image-container-kid-club"
                src="/imgs/Kid_Club-min.png"
                width={423}
                height={402}
                alt="vertical ventures kids club"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
