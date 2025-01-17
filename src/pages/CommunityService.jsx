import GraphSection from "../graphs/GraphSection";
import CommunityMap from "../maps/CommunityMap";
import ProjectsGrid from "../ui/ProjectsGrid";
import Quote from "../ui/Quote";
import Testimonials from "../ui/Testimonials";
import VolunteerButton from "../ui/VolunteerButton";

function CS() {
  return (
    <section className="pt-[100px] pb-12 px-7 lg:px-10 bg-theme-backgroundC">
      <h2 className="text-2xl font-bold text-center mb-4">
        Helping the Community
      </h2>
      <p className="text-center text-lg mb-8">Our Work</p>
      <ProjectsGrid />
      <VolunteerButton />
      <GraphSection />
      <Testimonials />
      <Quote />
      <CommunityMap />
    </section>
  );
}

export default CS;
