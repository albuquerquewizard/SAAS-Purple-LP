import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Navbar } from "@/components/Navbar";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
    </>
  );
}
