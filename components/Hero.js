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
          <h1 className="text-white font-black xl:text-6xl lg:text-5xl md:text-6xl sm:text-4xl uppercase antialiased">
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
            <div className="flex lg:mt-6 md:mt-6 sm:mt-6">
              <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-4">
                <div>
                  <button className="button button1">Book Now</button>
                </div>
                <div className="lg:pt-4 sm:pt-1 text-white text-bold lg:visible md:visible sm:invisible">
                  <h4 className="hero-number font-bold text-3xl lg:pt-0 sm:pt-2">
                    Call 0214 56874
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex gap-3.5 mt-8 xl:visible lg:visible md:visible sm:invisible google-review-container">
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
                <h3 className="text-white font-bold text-4xl">4.5</h3>
              </div>
            </div>
            <div className="lg:invisible md:invisible sm:visible">
              <div className="flex flex-row">
                <div>
                  <Image
                    src="/imgs/Google_Profiles_mobile.png"
                    width={93}
                    height={30}
                    alt="Google reviews icon"
                  />
                </div>
                <div className="mt-1 pl-2">
                  <Image
                    src="./imgs/Star_Rating_Mobile.svg"
                    width={106}
                    height={30}
                    alt="Google reviews icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
