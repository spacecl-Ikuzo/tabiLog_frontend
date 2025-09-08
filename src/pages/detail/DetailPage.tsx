import React from 'react';
import Header from '../../components/layout/header';
import fukuokahutami from '../../assets/fukuokahutami.jpg';
import Tokyo from '../../assets/Tokyo.jpg';
import Kinkakuji from '../../assets/Kinkakuji.jpg';

const DetailPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${fukuokahutami})`}}>
        {/* Custom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
        
        {/* Breadcrumb Navigation - positioned absolutely */}
        <nav className="absolute top-4 left-6 z-10">
          <div className="flex items-center space-x-2 text-sm">
            <span className="px-2 py-1 bg-white/20 rounded text-gray-800 font-semibold hover:bg-white/30 transition-colors cursor-pointer">東京</span>
            <span className="text-gray-500 mx-1"></span>
            <span className="px-2 py-1 bg-white/20 rounded text-gray-800 font-semibold hover:bg-white/30 transition-colors cursor-pointer">東京タワー</span>
            <span className="text-gray-500 mx-1"></span>
            <span className="px-2 py-1 bg-white/20 rounded text-gray-800 font-semibold hover:bg-white/30 transition-colors cursor-pointer">渋谷スクランブル交差点</span>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              福岡屋台めぐり! 博多グルメ紀行
            </h1>
            <p className="text-white text-lg mb-4 drop-shadow-md">
              中洲の屋台で味わう絶品とんこつラーメンから、天神の最新ショッピングスポットまで
            </p>
            <div className="flex items-center space-x-4 text-white text-sm drop-shadow-md">
              <span>PLAN | SHARE | LOG</span>
              <span>16K views</span>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">内容リスト</h2>
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="text-gray-600 mr-3">1.</span>
              <span className="text-orange-500">東京の基本情報</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-600 mr-3">2.</span>
              <div>
                <span className="text-orange-500 font-medium">おすすめ観光スポット</span>
                <ul className="ml-6 mt-2 space-y-1">
                  <li className="text-orange-500">浅草寺(せんそうじ)</li>
                  <li className="text-orange-500">渋谷スクランブル交差点</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">東京の基本情報</h2>
          
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${Tokyo})`}}>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${Kinkakuji})`}}>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                東京は日本の首都であり、世界有数の大都市です。人口約1400万人を擁し、政治、経済、文化の中心地として機能しています。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                伝統と現代が美しく融合した街として知られ、江戸時代からの歴史ある寺院や神社と、最新の高層ビルやテクノロジーが共存しています。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                浅草寺や渋谷スクランブル交差点、銀座の高級ショッピングエリアなど、多様な魅力を持つエリアが点在しています。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                春には桜、夏には花火大会、秋には紅葉、冬にはイルミネーションなど、四季を通じて様々なイベントや景色を楽しむことができます。
              </p>
              <p className="text-gray-700 leading-relaxed">
                地下鉄やJR線など、充実した公共交通機関により、市内の移動も便利で、観光客にとっても非常にアクセスしやすい都市です。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
