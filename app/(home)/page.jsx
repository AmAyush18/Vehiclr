import BrowseByMakeSection from "./_components/browse-by-make";
import FeaturedCarsSection from "./_components/featured-cars";
import HeaderComponent from "./_components/header";

export default function Home() {
  return (
    <div className="pt-20 flex flex-col">
      <HeaderComponent />

      <FeaturedCarsSection />

      <BrowseByMakeSection />
    </div>
  );
}
