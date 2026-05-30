import { CategoryGrid } from "./components/category-grid";
import { CtaSection } from "./components/cta-section";
import { FeaturedCars } from "./components/featured-cars";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { HowItWorks } from "./components/how-it-works";
import { SearchProvider } from "./components/search-provider";
import { SearchSection } from "./components/search-section";
import { StatsBar } from "./components/stats-bar";

export default function Home() {
  return (
    <SearchProvider>
      <Header />
      <main>
        <HeroSection />
        <SearchSection />
        <StatsBar />
        <CategoryGrid />
        <FeaturedCars />
        <HowItWorks />
        <CtaSection />
      </main>
      <Footer />
    </SearchProvider>
  );
}
