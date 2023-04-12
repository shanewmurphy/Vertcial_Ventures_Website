import Image from "next/image";
export default function KidsClub() {
  return (
    <div>
      <div className="my-container my-dropshadow">
        <div className="mt-48 mb-48 bg-backgroundGray rounded-lg h-auto p-12 content-around">
          <div className="flex lg:flex-row md:flex-col sm:flex-col gap-24">
            <div className="basis-2/4">
              <h2 className="font-bold text-midnight xl:text-5xl lg:text-4xl mt-4">
                Youth Climbing Club
              </h2>
              <h4 className="font-medium text-slateblue mt-2 xl:text-4xl lg:text-2xl">
                Ages 8 to 14
              </h4>
              <p className="mt-2">
                No need to book. One hour of fun climbing at our centre,
                learning new skills, boosting confidence and making new friends
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
