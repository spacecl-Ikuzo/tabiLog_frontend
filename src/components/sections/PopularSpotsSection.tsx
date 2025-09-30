import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Tokyo from '../../assets/Tokyo.jpg';
import OsakaCastle from '../../assets/OsakaCastle.jpg';
import Kinkakuji from '../../assets/Kinkakuji.jpg';
import Sapporo from '../../assets/Sapporo.jpg';
import FukuokaHutami from '../../assets/fukuokahutami.jpg';
import OkinawaResort from '../../assets/OkinawaResort.jpg';
import Nagoya from '../../assets/Nagoya.jpg';
import Hiroshima from '../../assets/HiroShima.jpg';
import Kanazawa from '../../assets/Kanazawa.jpg';

const PopularSpotsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      return () => scrollContainer.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // 한 번에 300px씩 왼쪽으로 스크롤
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 300); // 스크롤 완료 후 상태 업데이트
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // 한 번에 300px씩 오른쪽으로 스크롤
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 300); // 스크롤 완료 후 상태 업데이트
    }
  };

  const handleCityClick = (cityName: string) => {
    navigate(`/spots?city=${encodeURIComponent(cityName)}`);
  };

  const spots = [
    { name: '東京', image: Tokyo },
    { name: '大阪', image: OsakaCastle },
    { name: '京都', image: Kinkakuji },
    { name: '札幌', image: Sapporo },
    { name: '福岡', image: FukuokaHutami },
    { name: '沖縄', image: OkinawaResort },
    { name: '名古屋', image: Nagoya },
    { name: '広島', image: Hiroshima },
    { name: '金沢', image: Kanazawa },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              エリア別人気スポット
            </h2>
            <p className="text-gray-600 leading-relaxed">
              東京、大阪、京都、福岡など、人気エリアのスポットを一目でチェック。
              あなたの次の目的地を見つけよう。
            </p>
          </div>
        </div>
        
        <div className="relative">
          {/* 왼쪽 스크롤 버튼 */}
          {canScrollLeft && (
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-14"
          >
            {spots.map((spot, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleCityClick(spot.name)}
              >
                <div className="h-48 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${spot.image})`}}>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900">{spot.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* 오른쪽 스크롤 버튼 */}
          {canScrollRight && (
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          {/* no numeric pagination here by requirement */}
        </div>
      </div>
    </section>
  );
};

export default PopularSpotsSection;


