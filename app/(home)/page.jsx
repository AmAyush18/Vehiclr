import BrowseByBodyType from "./_components/browse-by-body-type";
import BrowseByMakeSection from "./_components/browse-by-make";
import FeaturedCarsSection from "./_components/featured-cars";
import HeaderComponent from "./_components/header";
import WhyChooseUsSection from "./_components/why-choose-us";

export default function Home() {
  return (
    <div className="pt-20 flex flex-col">
      <HeaderComponent />

      <FeaturedCarsSection />

      <BrowseByMakeSection />

      <WhyChooseUsSection />

      <BrowseByBodyType />
    </div>
  );
}
