import AppIntegration from "@/components/AppIntegration";
import Build from "@/components/Build";
import Copyright from "@/components/Copyright";
import Craft from "@/components/Craft";
import Cta from "@/components/Cta";
import Dependencies from "@/components/Dependencies";
import Design from "@/components/Design";
import Footer from "@/components/Footer";
import Heroarea from "@/components/Heroarea";
import Navbar from "@/components/Navbar";
import Performance from "@/components/Performance";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Heroarea />
      <Design />
      <Craft />
      <Dependencies />
      <Performance />
      <AppIntegration />
      <Build />
      <Cta />
      <Footer />
      <Copyright />
    </div>
  );
}
