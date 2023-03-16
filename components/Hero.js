import Image from "next/image";
export default function Hero() {
  return (
    <div className="hero-container">
      <div className="my-container">
        <div className="flex justify-between">
          <div>
            <nav>
              <ul>
                <div>
                  <Image
                    src="/imgs/Logo_Blue.svg"
                    width={124}
                    height={38}
                    alt="Logo"
                  />
                </div>
                <li className="pl-4 text-white text-base font-semibold antialiased">
                  <a href="#">Climbing Programs</a>
                </li>
                <li className="pl-4 text-white text-base font-semibold antialiased">
                  <a href="#">Youth Club</a>
                </li>
                <li className="pl-4 text-white text-base font-semibold antialiased">
                  <a href="#">Facilitiesss</a>
                </li>
                <li className="pl-4 text-white text-base font-semibold antialiased">
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>BBBB</div>
        </div>
        <div className="container pt-10">
          <h1 className="text-white text-display font-black uppercase antialiased">
            Rock Climbing
          </h1>
          <h2 className="text-slateblue text-4xl font-bold antialiased">
            Climbing, Fitness and Fun
          </h2>
          <h3 className="text-2xl text-white lg:w-1/2  font-medium mt-4 antialiased">
            Experience the thrill of climbing in a safe and controlled
            environment
          </h3>
          <div>
            <div className="flex mt-6">
              <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
                <div>
                  <button className="button button1">Book Now</button>
                </div>
                <div>09</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
