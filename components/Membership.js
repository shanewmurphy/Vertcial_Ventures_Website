export default function Membership() {
  return (
    <div className="my-container my-dropshadow">
      <div className="bg-white rounded-lg h-96 mt-24 lg:p-12 md:p-10 sm:p-6">
        <div className="flex lg:flex-row md:flex-col sm:flex-col gap-6">
          <div className="basis-1/2">
            <h2 className="font-black text-midnight xl:text-4xl lg:text-3xl">
              Join now and start enjoying the benefits of membership
            </h2>
            <h4 className="font-medium text-gray mt-2 lg:text-lg">
              Climb your way to a fitter, stronger and healthier you with this
              indoor rock climbing membership
            </h4>
          </div>
          <div>
            <h5 className="font-bold text-bluenavy lg:text-2xl">
              6/10 people become a full time Member
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
