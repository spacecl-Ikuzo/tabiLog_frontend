import React from 'react';
import Tokyotrip from '../../assets/Tokyotrip.jpg';
import OsakaGuriko from '../../assets/OsakaGuriko.jpg';
import KyotoSakura from '../../assets/KyotoSakura.jpg';
import fukuokahutami from '../../assets/fukuokahutami.jpg';
import SapporoTower from '../../assets/SapporoTower.jpg';
import OkinawaResort from '../../assets/OkinawaResort.jpg';

const TravelPlansSection = () => {
  const plans = [
    {
      title: '食い倒れ東京！2泊3日グルメ旅',
      description: '東京の名店を巡るグルメ旅。築地市場から高級レストランまで。',
      tags: ['グルメ', 'ショッピング'],
      image: Tokyotrip
    },
    {
      title: '大阪の下町を満喫！1泊2日',
      description: '道頓堀、通天閣など大阪の名所を巡る旅。',
      tags: ['グルメ', '観光'],
      image: OsakaGuriko
    },
    {
      title: '京都の桜と寺社巡り',
      description: '春の京都で桜と伝統的な寺社を巡る旅。',
      tags: ['観光', '自然'],
      image: KyotoSakura
    },
    {
      title: '福岡の博多を満喫！',
      description: '博多ラーメンと福岡の名所を巡る旅。',
      tags: ['グルメ', '観光'],
      image: fukuokahutami
    },
    {
      title: '札幌の雪まつり体験',
      description: '冬の札幌で雪まつりとスキーを楽しむ旅。',
      tags: ['イベント', 'アクティビティ'],
      image: SapporoTower
    },
    {
      title: '沖縄のリゾート滞在',
      description: '美しいビーチとリゾートホテルでのんびり過ごす旅。',
      tags: ['リゾート', 'ビーチ'],
      image: OkinawaResort
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            みんなの旅行プラン
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            タビログがおすすめするモデルプランで新しいインスピレーションを見つけよう。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${plan.image})`}}>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                  {plan.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {plan.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {plan.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
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
  );
};

export default TravelPlansSection;
