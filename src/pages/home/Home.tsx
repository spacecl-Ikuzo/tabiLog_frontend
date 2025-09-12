import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/header';
import HeroSection from '../../components/sections/HeroSection';
import PopularSpotsSection from '../../components/sections/PopularSpotsSection';
import TravelPlansSection from '../../components/sections/TravelPlansSection';
import CreatePlan from '../../components/sections/CreatePlan';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/spots?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />

      {/* Search Section */}
      <section className="py-8 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="観光地、タグ、都市名で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 pl-10 pr-12 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button
              onClick={handleSearch}
              className="absolute inset-y-0 right-0 px-4 flex items-center text-white bg-orange-500 hover:bg-orange-600 rounded-r-lg transition-colors"
            >
              検索
            </button>
          </div>
        </div>
      </section>

      <PopularSpotsSection />
      <TravelPlansSection />
      <CreatePlan />
    </div>
  );
};

export default Home;
