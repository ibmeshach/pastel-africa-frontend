import Heroarea from "@/components/Heroarea";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Heroarea />
    </div>
  );
}
