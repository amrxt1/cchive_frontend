import HeroSection from "../components/home/HeroSection";
import Features from "../components/home/Features";
import JoinUs from "../components/home/JoinUs";
import AboutUs from "../components/home/AboutUs";
import Footer from "../components/shared/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <JoinUs />
      <AboutUs />
      <Footer />
    </>
  );
}
