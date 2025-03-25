import Nav from "@/components/Nav";
import Slider from "@/components/Slider";
import CategoryCard from "@/ui/CategoryCard";
import AboutSection from "@/components/Aboutsection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import { BadgePercent } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Nav />
      <main className="bg-tjrgrey">
        <Slider/>
        <div className="flex flex-col gap-5 py-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between px-10">
              <div className="text-xl">
                Trending Categories
              </div>
              <div>
                <button className="px-8 py-2 border border-tjryellow rounded-lg">Explore All</button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-3 px-2 justify-items-center">
              <CategoryCard/>
            </div>
          </div>
        </div>
        <AboutSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}
