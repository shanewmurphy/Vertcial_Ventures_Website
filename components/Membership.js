import { checkout } from "../lib/checkout";
import Image from "next/image";
export default function Membership() {
  return (
    <div className="my-container my-dropshadow">
      <div className="bg-white rounded-lg h-auto mt-24 lg:p-12 md:p-10 mb-10 sm:p-6">
        <div className="flex lg:flex-row md:flex-col sm:flex-col lg:gap-20 md:gap-12 sm:gap-6">
          <div className="basis-1/2">
            <h2 className="font-black text-midnight xl:text-5xl lg:text-3xl md:text-5xl sm:text-7xl antialiased">
              Join now and start enjoying the benefits of membership
            </h2>
            <h4 className="font-medium text-gray lg:mt-2 md:mt-6 sm:mt-4 lg:text-lg md:text-2xl antialiased">
              Climb your way to a fitter, stronger and healthier you with this
              indoor rock climbing membership
            </h4>
          </div>
          <div>
            <h5 className="font-bold text-bluenavy lg:text-2xl md:text-3xl sm:text-lg antialiased">
              6/10 people become a full time member
            </h5>
            <h6 className="font-medium text-midnight mt-2 xl:text-xl antialiased">
              We Use Stripe to Charge your Credit or Debit Card
            </h6>
          </div>
        </div>
        <div className="flex justify-between lg:flex-row md:flex-col sm:flex-col gap-6 mt-14">
          <div className="basis-1/3">
            <div>
              <Image
                className="membership-image-container"
                src="/imgs/Student.png"
                width={310}
                height={163}
                alt="Student Membership Vertical Venetures"
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="w-44 h-9 rounded-md outline outline-2 outline-bluenavy hover:bg-bluenavy hover:outline-none hover:text-white antialiased"
                onClick={() => {
                  checkout({
                    lineItems: [
                      {
                        price: "price_1Myy8wKZXFZOoTWJDDva2HEZ",
                        quantity: 1,
                      },
                    ],
                  });
                }}
              >
                Join Now
              </button>
            </div>
          </div>
          <div className="basis-1/3">
            <div>
              <Image
                className="membership-image-container"
                src="/imgs/Adult.png"
                width={310}
                height={163}
                alt="Adult membership Vertcial Ventures"
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="w-44 h-9 rounded-md outline outline-2 outline-bluenavy hover:bg-bluenavy hover:outline-none hover:text-white"
                onClick={() => {
                  checkout({
                    lineItems: [
                      {
                        price: "price_1MyyCEKZXFZOoTWJV28MvRfb",
                        quantity: 1,
                      },
                    ],
                  });
                }}
              >
                Join Now
              </button>
            </div>
          </div>
          <div className="basis-1/3">
            <div>
              <Image
                className="membership-image-container"
                src="/imgs/Family.png"
                width={310}
                height={163}
                alt="Family Membership Vertical Venture"
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="w-44 h-9 rounded-md outline outline-2 outline-bluenavy hover:bg-bluenavy hover:outline-none hover:text-white"
                onClick={() => {
                  checkout({
                    lineItems: [
                      {
                        price: "price_1MyyDuKZXFZOoTWJl552DOV6",
                        quantity: 1,
                      },
                    ],
                  });
                }}
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
