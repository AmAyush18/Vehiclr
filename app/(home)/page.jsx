import FeaturedCarsSection from "./_components/featured-cars";
import HeaderComponent from "./_components/header";

export default function Home() {
  return (
    <div className="pt-20 flex flex-col">
      <HeaderComponent />

      <FeaturedCarsSection />
    </div>
  );
}
