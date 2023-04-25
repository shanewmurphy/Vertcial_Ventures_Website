import Image from "next/image";
export default function Amenities() {
  return (
    <div className="my-container">
      <div className="flex justify-between lg:flex-row md:flex-col sm:flex-col gap-16 mb-40">
        <div className="basis-2/4">
          <h2 className="font-black text-midnight xl:text-5xl lg:text-4xl md:text-5xl sm:text-3xl mb-2">
            Facility and Amenities
          </h2>
          <h4 className="font-medium text-midnight text-base mt-2">
            Comfortable lounge areas: Take a break from climbing and relax in
            our comfortable lounge areas. We offer free Wi-Fi, refreshments, and
            a welcoming atmosphere where you can connect with fellow climbers
            and share your experiences
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
