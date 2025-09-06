import React, { useState } from 'react';
import Header from '../../components/layout/header';
import Tokyo from '../../assets/Tokyo.jpg';
import OsakaCastle from '../../assets/OsakaCastle.jpg';
import Kinkakuji from '../../assets/Kinkakuji.jpg';
import Sapporo from '../../assets/Sapporo.jpg';

const SpotsPage = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const destinations = [
    {
      id: 'tokyo',
      name: '東京',
      image: Tokyo,
      description: '日本の首都。伝統と現代が融合した魅力的な都市。',
      tags: ['ショッピング', '夜景・展望']
    },
    {
      id: 'osaka',
      name: '大阪',
      image: OsakaCastle,
      description: '日本のグルメ都市。活気あふれるエネルギッシュな街。',
      tags: ['グルメ・食べ歩き', '文化・歴史']
    },
    {
      id: 'kyoto',
      name: '京都',
      image: Kinkakuji,
      description: '千年の古都。歴史と自然が息づく街。',
      tags: ['ショッピング', '夜景・展望']
    },
    {
      id: 'sapporo',
      name: '札幌',
      image: Sapporo,
      description: '北海道の中心都市。冬の雪まつりや美味しいラーメンで知られる場所。',
      tags: ['祭り', 'スキー場']
    }
  ];

  const spots = [
    { id: 1, name: '都市別観光地1', description: '昼も夜も美しい街の景色を楽しめるスポット', tags: ['文化・歴史', '絞り'] },
    { id: 2, name: '都市別観光地2', description: '昼も夜も美しい街の景色を楽しめるスポット', tags: ['文化・歴史', '絞り'] },
    { id: 3, name: '都市別観光地3', description: '昼も夜も美しい街の景色を楽しめるスポット', tags: ['文化・歴史', '絞り'] },
    { id: 4, name: '都市別観光地4', description: '昼も夜も美しい街の景色を楽しめるスポット', tags: ['文化・歴史', '絞り'] },
    { id: 5, name: '都市別観光地5', description: '昼も夜も美しい街の景色を楽しめるスポット', tags: ['文化・歴史', '絞り'] },
    { id: 6, name: '都市別観光地6', description: '昼も夜も美しい街の景色を楽しめるスポット', tags: ['文化・歴史', '絞り'] }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{backgroundImage: 'url(/placeholder-hero.jpg)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-white text-4xl font-bold">観光スポット紹介</h1>
      </section>

      {/* Travel Destination Selection */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">旅行先選択</h2>
          
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {destinations.map((destination) => (
                <div 
                  key={destination.id}
                  className={`flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
                    selectedCity === destination.id ? 'ring-4 ring-orange-500' : ''
                  }`}
                  onClick={() => setSelectedCity(destination.id)}
                >
                  <div className="h-48 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${destination.image})`}}>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-800 text-white text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tourist Spots Grid */}
      {selectedCity && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">観光スポット</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spots.map((spot) => (
                <div key={spot.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">이미지 영역</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{spot.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{spot.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {spot.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-800 text-white text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SpotsPage;
