import Hero from "./ui/Hero";
import Navbar from "./ui/Navbar";
import Departments from "./ui/Departments";
import AboutUs from "./ui/AboutUs";
import Links from "./ui/Links";
import Footer from "./ui/Footer";
import JoinTeam from "./ui/JoinTeam";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Departments />
      <AboutUs />
      <JoinTeam />
      <Links />
      <Footer />
    </div>
  );
}
