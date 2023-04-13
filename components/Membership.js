export default function Membership() {
  return (
    <div className="my-container my-dropshadow">
      <div className="bg-white rounded-lg h-auto mt-24 lg:p-12 md:p-10 mb-10 sm:p-6">
        <div className="flex lg:flex-row md:flex-col sm:flex-col gap-20">
          <div className="basis-1/2">
            <h2 className="font-black text-midnight xl:text-5xl lg:text-3xl md:text-5xl sm:text-3xl">
              Join now and start enjoying the benefits of membership
            </h2>
            <h4 className="font-medium text-gray lg:mt-2 md:mt-6 sm:mt-4 lg:text-lg md:text-2xl">
              Climb your way to a fitter, stronger and healthier you with this
              indoor rock climbing membership
            </h4>
          </div>
          <div>
            <h5 className="font-bold text-bluenavy lg:text-2xl md:text-3xl sm:text-lg">
              6/10 people become a full time member
            </h5>
            <h6 className="font-medium text-midnight mt-2 xl:text-xl">
              We Use Stripe to Charge your Credit or Debit Card
            </h6>
          </div>
        </div>
        <div className="flex justify-between lg:flex-row md:flex-col sm:flex-col gap-6 mt-14">
          <div className="lg:basis-1/3">
            <div className="bg-slate-800 rounded-lg h-44"></div>
            <div className="flex justify-center mt-4">
              <button className="w-44 h-9 outline border-slate-900 border-1">
                Join Now
              </button>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="bg-slate-800 rounded-lg h-44"></div>
            <div className="flex justify-center mt-4">
              <button className="w-44 h-9 outline border-slate-900 border-1">
                Join Now
              </button>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="bg-slate-800 rounded-lg h-44"></div>
            <div className="flex justify-center mt-4">
              <button className="w-44 h-9 outline border-slate-900 border-1">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
