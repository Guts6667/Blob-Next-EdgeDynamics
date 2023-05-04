import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import HomeBanner from "@/components/HomeBanner";
import OurCompany from "@/components/OurCompany";
import OurVision from "@/components/OurVision";
import OurFounders from "@/components/OurFounders";
import OurProducts from "@/components/OurProducts";
import Specifications from "@/components/Specifications";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>EdgeDynamics</title>
        <meta
          name="description"
          content="EdgeDynamics is an extremely innovative young start-up developing and implementing IIoT solution for the industrial sector using Ai, miniaturisation and LoRaWan wireless technology. We envision a future where wireless IOT devices such as temperature, vibration, humidity and pressure sensors will be widely used to decrease very significantly the expensive installation cost for non-critical applications."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeBanner />
      <OurCompany />
      <OurVision />
      <OurFounders />
      <OurProducts />
      <Specifications />
    </>
  );
}
