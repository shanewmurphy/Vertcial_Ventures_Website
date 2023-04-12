import Image from "next/image";
export default function KidsClub() {
  return (
    <div>
      <div className="my-container">
        <div className="mt-48 mb-48 bg-backgroundGray rounded-lg h-auto lg:p-12 md:p-12 sm:p-6 content-around">
          <div className="flex lg:flex-row md:flex-col sm:flex-col gap-24">
            <div className="basis-2/4">
              <h2 className="font-bold text-midnight xl:text-5xl lg:text-4xl md:text-5xl sm:text-3xl lg:mt-4 antialiased">
                Youth Climbing Club
              </h2>
              <h4 className="font-medium text-slateblue lg:mt-2 md:mt-4 sm:mt-4 xl:text-4xl lg:text-2xl md:text-4xl sm:text-2xl antialiased">
                Ages 8 to 14
              </h4>
              <h5 className="lg:mt-10 md:mt-8 sm:mt-6 font-bold text-gray xl:text-2xl lg:text-2xl antialiased">
                No need to book. One hour of fun climbing at our centre,
                learning new skills, boosting confidence and making new friends
              </h5>
              <h6 className="mt-6 font-bold">Weekend&apos;s</h6>
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
