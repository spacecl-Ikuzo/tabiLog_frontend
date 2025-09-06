import React from 'react';
import Tokyo from '../../assets/Tokyo.jpg';
import OsakaCastle from '../../assets/OsakaCastle.jpg';
import Kinkakuji from '../../assets/Kinkakuji.jpg';
import Sapporo from '../../assets/Sapporo.jpg';

const PopularSpotsSection = () => {
  const spots = [
    { name: '東京', image: Tokyo },
    { name: '大阪', image: OsakaCastle },
    { name: '京都', image: Kinkakuji },
    { name: '札幌', image: Sapporo },
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
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {spots.map((spot, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${spot.image})`}}>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900">{spot.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* 스크롤 버튼 */}
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularSpotsSection;
