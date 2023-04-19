import Image from "next/image";
export default function Amenities() {
  return (
    <div className="my-container">
      <div className="flex justify-between lg:flex-row md:flex-col sm:flex-col gap-16 mb-40">
        <div className="basis-2/4">
          <h2 className="font-black text-midnight xl:text-5xl lg:text-4xl md:text-5xl sm:text-3xl mb-2">
            Facility and Amenities
          </h2>
          <h4 className="font-bold text-midnight xl:text-lg lg:text-2xl md:text-3xl sm:text-2xl mt-2">
            We provide the essential equipment and facilities to enable anyone
            with a sense of adventure to try their hand at this supremely
            enjoyable pastime.
          </h4>
        </div>
        <div className="basis-2/4">
          <div className="grid grid-cols-3 justify-items-center">
            <div>
              <span className="icon-Coffee_icon lg:text-6xl md:text-5xl sm:text-4xl"></span>
              <h6 className="mt-2 text-center lg:text-base md:text-base sm:text-xs">
                Coffee
              </h6>
            </div>
            <div>
              <span className="icon-Vending_icon lg:text-6xl md:text-5xl sm:text-4xl"></span>
              <h6 className="mt-2 text-center lg:text-base md:text-base sm:text-xs">
                Vending Machine
              </h6>
            </div>
            <div>
              <span className="icon-Watercooler_icon lg:text-6xl md:text-5xl sm:text-4xl"></span>
              <h6 className="mt-2 text-center lg:text-base md:text-base sm:text-xs">
                Water Cooler
              </h6>
            </div>
            <div className="mt-6">
              <span className="icon-Locker_icon lg:text-6xl md:text-5xl sm:text-4xl"></span>
              <h6 className="mt-2 text-center lg:text-base md:text-base sm:text-xs">
                Secure Lockers
              </h6>
            </div>
            <div className="mt-6">
              <span className="icon-Wifi_icon lg:text-6xl md:text-5xl sm:text-4xl"></span>
              <h6 className="mt-2 text-center lg:text-base md:text-base sm:text-xs">
                Free Wifi
              </h6>
            </div>
            <div className="mt-6">
              <span className="icon-Parking_icon lg:text-6xl md:text-5xl sm:text-4xl"></span>
              <h6 className="mt-2 text-center lg:text-base md:text-base sm:text-xs">
                Free Parking
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
