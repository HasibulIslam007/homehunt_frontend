import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import HeroSection from "@/components/modules/home/HeroSection";

const HomePage = async () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
