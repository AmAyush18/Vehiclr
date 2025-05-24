import BrowseByBodyType from "./_components/browse-by-body-type";
import BrowseByMakeSection from "./_components/browse-by-make";
import CtaSection from "./_components/cta";
import FaqSection from "./_components/faq";
import FeaturedCarsSection from "./_components/featured-cars";
import WhyChooseUsSection from "./_components/why-choose-us";
import HeroSection from "./_components/hero";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="pt-20 flex flex-col">
      <HeroSection />

      <FeaturedCarsSection />

      <BrowseByMakeSection />

      <WhyChooseUsSection />

      <BrowseByBodyType />

      <FaqSection />

      <CtaSection />

      <Footer />
    </div>
  );
}
