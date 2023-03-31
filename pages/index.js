import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Adventure from "../components/Adventure";
import Facility from "../components/Facility";
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
    </div>
  );
}
