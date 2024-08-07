import { ExportedCategories } from "./components/categories";
import { Community } from "./components/community";
import { Evidence } from "./components/evidence";
import Footer from "./components/footer";
import { HomeHero } from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="bg-[#FAFAFA]">
      <Navbar />
      <HomeHero />
      <div className="bg-[#FAFAFA]">
        <Evidence />
      </div>
      <div className="bg-[#1A44EC] bg-opacity-5">
      <div className="my-10 bg-[#1A44EC] bg-opacity-5">
        <ExportedCategories />
      </div>
      </div>
      <Community />
      <Footer />
    </div>
  );
}
