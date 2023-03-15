import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
    </div>
  );
}
