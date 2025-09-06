

import Header from '../../components/layout/header';
import HeroSection from '../../components/sections/HeroSection';
import PopularSpotsSection from '../../components/sections/PopularSpotsSection';
import TravelPlansSection from '../../components/sections/TravelPlansSection';
import CreatePlan from '../../components/sections/CreatePlan';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PopularSpotsSection />
      <TravelPlansSection />
      <CreatePlan />
    </div>
  );
};

export default Home;
