import { getNextRun, getUpcomingRuns } from "@/lib/data/events";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import RouteSection from "@/components/RouteSection";
import CalendarButtons from "@/components/CalendarButtons";
import Location from "@/components/Location";
import PhotoStrip from "@/components/PhotoStrip";
import Signups from "@/components/Signups";
import FinalCTA from "@/components/FinalCTA";
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
        <CalendarButtons run={nextRun} />
        <Location />
        <PhotoStrip />
        <Signups />
        <FinalCTA run={nextRun} />
      </main>
      <Footer />
    </>
  );
}
