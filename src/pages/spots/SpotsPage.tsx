import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../../components/layout/header';
import MainBackGround from '../../assets/MainBackGround.jpg';
import Tokyo from '../../assets/Tokyo.jpg';
import OsakaCastle from '../../assets/OsakaCastle.jpg';
import Kinkakuji from '../../assets/Kinkakuji.jpg';
import Sapporo from '../../assets/Sapporo.jpg';
import fukuokahutami from '../../assets/fukuokahutami.jpg';
import SapporoTower from '../../assets/SapporoTower.jpg';
import OkinawaResort from '../../assets/OkinawaResort.jpg';

const SpotsPage = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const destScrollRef = useRef<HTMLDivElement>(null);

  const scrollDestLeft = () => {
    if (destScrollRef.current) {
      destScrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollDestRight = () => {
    if (destScrollRef.current) {
      destScrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // URL 쿼리 파라미터에서 도시 정보 읽기
  useEffect(() => {
    const cityFromUrl = searchParams.get('city');
    if (cityFromUrl) {
      setSelectedCity(cityFromUrl);
    }
  }, [searchParams]);

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
    },
    {
      id: 'fukuoka',
      name: '福岡',
      image: fukuokahutami,
      description: '九州の玄関口。屋台やグルメが楽しめる街。',
      tags: ['グルメ・食べ歩き', '文化・歴史']
    },
    {
      id: 'okinawa',
      name: '沖縄',
      image: OkinawaResort,
      description: '青い海と白い砂浜。リゾート気分を満喫できる島。',
      tags: ['ビーチ', 'リゾート']
    },
    {
      id: 'nagoya',
      name: '名古屋',
      image: 'https://placehold.co/600x400/FFF/000?text=名古屋',
      description: '中部地方の中心都市。歴史と産業の街。',
      tags: ['文化・歴史']
    },
    {
      id: 'hiroshima',
      name: '広島',
      image: 'https://placehold.co/600x400/FFF/000?text=広島',
      description: '平和を象徴する街。世界遺産と美景の島々。',
      tags: ['文化・歴史', '世界遺産']
    },
    {
      id: 'kanazawa',
      name: '金沢',
      image: 'https://placehold.co/600x400/FFF/000?text=金沢',
      description: '伝統工芸と美しい庭園が魅力の城下町。',
      tags: ['文化・歴史', '庭園']
    }
  ];

  const spots = [
    { id: 1, name: '東京タワー', description: '東京のシンボルタワー。夜景が美しい観光スポット', tags: ['文化・歴史', '夜景・展望'], city: '東京' },
    { id: 2, name: '浅草寺', description: '東京で最も古い寺院。雷門で有名な観光地', tags: ['文化・歴史', '祭り'], city: '東京' },
    { id: 3, name: '大阪城', description: '豊臣秀吉が築いた名城。歴史と美しさを兼ね備えた城', tags: ['文化・歴史', '祭り'], city: '大阪' },
    { id: 4, name: '道頓堀', description: '大阪の食文化を体験できる繁華街', tags: ['グルメ・食べ歩き', '文化・歴史'], city: '大阪' },
    { id: 5, name: '金閣寺', description: '京都の代表的な寺院。金色に輝く美しい建物', tags: ['文化・歴史', '祭り'], city: '京都' },
    { id: 6, name: '清水寺', description: '京都で最も有名な寺院。舞台からの景色が絶景', tags: ['文化・歴史', '祭り'], city: '京都' },
    { id: 7, name: '札幌時計台', description: '札幌のシンボル。歴史ある時計台', tags: ['文化・歴史', '祭り'], city: '札幌' },
    { id: 8, name: '大通公園', description: '札幌の中心にある美しい公園', tags: ['文化・歴史', '祭り'], city: '札幌' },
    { id: 9, name: '福岡城跡', description: '福岡の歴史を感じられる城跡', tags: ['文化・歴史', '祭り'], city: '福岡' },
    { id: 10, name: '博多駅', description: '福岡の玄関口。グルメとショッピングの中心地', tags: ['グルメ・食べ歩き', 'ショッピング'], city: '福岡' },
    { id: 11, name: '首里城', description: '沖縄の歴史と文化を感じられる城', tags: ['文化・歴史', '祭り'], city: '沖縄' },
    { id: 12, name: '美ら海水族館', description: '世界最大級の水族館。ジンベエザメが人気', tags: ['文化・歴史', '祭り'], city: '沖縄' },
    { id: 13, name: '名古屋城', description: '名古屋のシンボル。金の鯱で有名な城', tags: ['文化・歴史', '祭り'], city: '名古屋' },
    { id: 14, name: '熱田神宮', description: '名古屋で最も重要な神社', tags: ['文化・歴史', '祭り'], city: '名古屋' },
    { id: 15, name: '原爆ドーム', description: '広島の平和の象徴。世界遺産', tags: ['文化・歴史', '祭り'], city: '広島' },
    { id: 16, name: '宮島', description: '厳島神社で有名な美しい島', tags: ['文化・歴史', '祭り'], city: '広島' },
    { id: 17, name: '兼六園', description: '金沢の代表的な庭園。日本三名園の一つ', tags: ['文化・歴史', '祭り'], city: '金沢' },
    { id: 18, name: '金沢城公園', description: '金沢の歴史を感じられる城跡公園', tags: ['文化・歴史', '祭り'], city: '金沢' }
  ];

  // 선택된 도시에 따라 스팟 필터링
  const filteredSpots = selectedCity 
    ? spots.filter(spot => spot.city === selectedCity)
    : spots;

  const travelPlans = [
    {
      id: 1,
      title: '福岡屋台めぐり！博多グルメ紀行',
      description: 'とんこつラーメンと福岡の名所を巡る旅。',
      image: fukuokahutami,
      author: 'オンピック',
      type: '二人旅'
    },
    {
      id: 2,
      title: '大自然を満喫！夏の北海道・札幌ドライブ',
      description: '富良野のラベンダー畑と海鮮を味わう旅。',
      image: SapporoTower,
      author: 'ドアン',
      type: '二人旅'
    },
    {
      id: 3,
      title: '絶景ビーチリゾート！沖縄でのんびり休暇',
      description: 'エメラルドグリーンの海でシュノーケリングと夕日鑑賞。',
      image: OkinawaResort,
      author: 'ソヒョン',
      type: '二人旅'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{backgroundImage: `url(${MainBackGround})`}}>
        <div className="absolute inset-0 "></div>
        <h1 className="relative z-10 text-white text-4xl font-bold">観光スポット紹介</h1>
      </section>

      {/* Travel Destination Selection */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">旅行先選択</h2>
          
          <div className="relative">
            {/* 왼쪽 화살표 */}
            <button onClick={scrollDestLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center z-10 hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* 오른쪽 화살표 */}
            <button onClick={scrollDestRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center z-10 hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div ref={destScrollRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-16">
              {destinations.map((destination) => (
                <div 
                  key={destination.id}
                  className={`flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105 ${
                    selectedCity === destination.name ? 'ring-4 ring-orange-500 ring-offset-2' : ''
                  }`}
                  onClick={() => setSelectedCity(destination.name)}
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
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              観光スポット
            </h2>
            <p className="text-gray-600 text-center mb-12">
              {selectedCity ? `${selectedCity}で人気の観光スポットをご紹介します` : '人気の観光スポットをご紹介します'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSpots.map((spot) => (
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

      {/* Travel Plans Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">みんなの旅行プラン</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              タビログが提案するモデルプランで、新しい旅のインスピレーションを見つけよう。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {travelPlans.map((plan) => (
              <div 
                key={plan.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate(`/detail/${plan.id}`)}
              >
                <div className="h-48 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${plan.image})`}}>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{plan.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{plan.type}</span>
                    <span>{plan.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <button 
              className={`px-3 py-2 rounded ${currentPage === 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            <button 
              className={`px-3 py-2 rounded ${currentPage === 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
            <button 
              className={`px-3 py-2 rounded ${currentPage === 3 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
              onClick={() => setCurrentPage(3)}
            >
              3
            </button>
            <button className="px-3 py-2 rounded bg-gray-200 text-gray-600 hover:bg-gray-300">
              &gt;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpotsPage;
