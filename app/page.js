import Hero from "./ui/Hero";
import Navbar from "./ui/Navbar";
import Departments from "./ui/Departments";
import AboutUs from "./ui/AboutUs";
import Links from "./ui/Links";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Departments />
      <AboutUs />
      <Links />
      <Footer />
    </div>
  );
}
