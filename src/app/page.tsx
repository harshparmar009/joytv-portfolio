
import Navbar from "@/components/pages/Navbar";
import Hero from "@/components/pages/Hero";
import Shops from "@/components/pages/Shops";
import HeroSection from "@/components/pages/HeroSection";
import Adventure from "@/components/pages/Adventure";
import Achieve from "@/components/pages/Achieve";
// import Footer from "../components/pages/footer";
import Footer from "@/components/pages/footer";
import Testimonials from "@/components/pages/Testimonial";


export default function Home() {
  return (
  <div> 
    <Navbar/>
    <Hero/>
    <Shops/>
    {/* <HeroSection/> */}
    <Adventure/> 
    <Testimonials/>
    <Achieve/> 
    <Footer/>
  </div>
  );
}
