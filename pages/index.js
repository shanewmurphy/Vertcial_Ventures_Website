import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Adventure from "../components/Adventure";
import Facility from "../components/Facility";
import Pricing from "../components/Pricing-tables";
import Membership from "../components/Membership";
import KidsClub from "../components/Kid-Club";
import FAQ from "../components/FAQ";
export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <div>
        <Intro />
      </div>
      <div>
        <Adventure />
      </div>
      <div>
        <Facility />
      </div>
      <div className="my-container pricing-table-desktop">
        <Pricing />
      </div>
      <div>
        <Membership />
      </div>
      <div>
        <KidsClub />
      </div>
      <div>
        <FAQ />
      </div>
    </div>
  );
}
