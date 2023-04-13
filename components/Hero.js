import Image from "next/image";
export default function Hero() {
  return (
    <div className="hero-container">
      <div className="my-container pt-8">
        <div className="flex justify-between nav-mobile">
          <div>
            <Image
              src="/imgs/Logo_Blue.svg"
              width={124}
              height={38}
              alt="Logo"
            />
          </div>
          <div>BBBBB</div>
        </div>
        <div className="nav-desktop flex justify-between">
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
                <li className="pl-4 text-white text-lg font-semibold antialiased">
                  <a href="#">Climbing Programs</a>
                </li>
                <li className="pl-4 text-white text-lg font-semibold antialiased">
                  <a href="#">Youth Club</a>
                </li>
                <li className="pl-4 text-white text-lg font-semibold antialiased">
                  <a href="#">Facilities</a>
                </li>
                <li className="pl-4 text-white text-lg font-semibold antialiased">
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>BBBB</div>
        </div>
        <div className="container pt-8">
          <h1 className="text-white font-black xl:text-7xl lg:text-6xl md:text-6xl sm:text-4xl uppercase antialiased">
            Cork Indoor <br />
            Rock Climbing
          </h1>
          <h3 className="text-slateblue mt-2 font-bold xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl antialiased">
            Climbing, Fitness and Fun
          </h3>
          <h4 className="text-white lg:w-1/2 md:w-2/3 font-medium mt-2 lg:text-2xl md:text-2xl sm:text-xl antialiased">
            Experience the thrill of climbing in a safe and controlled
            environment
          </h4>
          <div>
            <div className="flex mt-6">
              <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-4">
                <div>
                  <button className="button button1">Book Now</button>
                </div>
                <div className="lg:pt-4 sm:pt-1 text-white text-bold lg:visible">
                  <h4 className="hero-number">Call 0214 56874</h4>
                </div>
              </div>
            </div>
            <div className="flex gap-3.5 mt-8 xl:visible lg:visible md:visible sm:invisible">
              <div>
                <Image
                  src="/imgs/Google_Profiles.png"
                  width={120}
                  height={39}
                  alt="Google Profiles"
                />
              </div>
              <div>
                <Image
                  src="./imgs/Google_Star_Reviews.svg"
                  width={122}
                  height={37}
                  alt="Google reviews icon"
                />
              </div>
              <div>
                <h3 className="text-white font-bold">4.5</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
