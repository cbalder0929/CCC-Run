import { getNextRun, getUpcomingRuns } from "@/lib/data/events";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import RouteSection from "@/components/RouteSection";
import PhotoStrip from "@/components/PhotoStrip";
import Signups from "@/components/Signups";
import Footer from "@/components/Footer";

export default function Home() {
  const nextRun = getNextRun();
  const upcomingRuns = getUpcomingRuns(4);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero run={nextRun} />
        <RouteSection />
        <Schedule runs={upcomingRuns} />
        <PhotoStrip />
        <Signups />
      </main>
      <Footer />
    </>
  );
}
