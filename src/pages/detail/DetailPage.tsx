import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/layout/header';
import fukuokahutami from '../../assets/fukuokahutami.jpg';
import Tokyo from '../../assets/Tokyo.jpg';
import Kinkakuji from '../../assets/Kinkakuji.jpg';
import OsakaCastle from '../../assets/OsakaCastle.jpg';
import Sapporo from '../../assets/Sapporo.jpg';
import OkinawaResort from '../../assets/OkinawaResort.jpg';
import RamenJiro from '../../assets/RamenJiro.jpg';
import JiroSushi from '../../assets/JiroSushi.jpg';
import USJ from '../../assets/USJ.jpg';
import OsakaGuriko from '../../assets/OsakaGuriko.jpg';
import KiyoMizuTera from '../../assets/KiyoMizuTera.jpg';
import SapporoTime from '../../assets/SapporoTime.jpg';
import SapporoTower from '../../assets/SapporoTower.jpg';
import HakataCity from '../../assets/HakataCity.jpg';
import FukuokaCastle from '../../assets/FukuokaCastle.jpg';
import Shurijo from '../../assets/Shurijo.jpg';
import OkiAquarium from '../../assets/OkiAquarium.jpg';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // 여행 계획 상세 정보 데이터
  const planDetails = {
    1: {
      title: "食い倒れ東京! 2泊3日グルメ旅",
      description: "築地市場の新鮮な海の幸から、新宿の深夜ラーメンまで。東京の「うまい!」をすべて味わい尽くす、食いしん坊のためのプランです。",
      author: "ソヒョン",
      image: RamenJiro,
      heroImage: Tokyo,
      breadcrumb: ["東京", "築地市場", "新宿ラーメン"],
      contentTitle: "東京グルメの基本情報",
      spots: ["築地市場", "新宿ラーメン横丁", "銀座寿司"],
      content: "東京は日本のグルメの聖地です。築地市場では新鮮な海の幸を、新宿では深夜まで営業するラーメン店を楽しめます。銀座の高級寿司店から下町の立ち食いそばまで、様々な食文化が共存しています。"
    },
    2: {
      title: "大阪満喫!ショッピングとエンタメの旅",
      description: "道頓堀のきらびやかな夜景、USJのスリル満点のアトラクション。眠らない街・大阪の魅力を丸ごと楽しむプラン。",
      author: "ドフン",
      image: OsakaCastle,
      heroImage: OsakaCastle,
      breadcrumb: ["大阪", "道頓堀", "USJ"],
      contentTitle: "大阪エンタメの基本情報",
      spots: ["道頓堀", "ユニバーサルスタジオジャパン", "大阪城"],
      content: "大阪は関西のエンターテイメントの中心地です。道頓堀のネオンサインが美しい夜景を演出し、USJでは世界レベルのアトラクションを楽しめます。大阪城では歴史を感じながら散策できます。"
    },
    3: {
      title: "心安らぐ京都、癒やしの週末",
      description: "嵐山の竹林を散策し、静かな旅館で温泉に浸かる。古都の美しい景色の中で、心と体をリフレッシュする週末旅行。",
      author: "セヒョン",
      image: Kinkakuji,
      heroImage: Kinkakuji,
      breadcrumb: ["京都", "嵐山", "金閣寺"],
      contentTitle: "京都癒やしの基本情報",
      spots: ["嵐山竹林", "金閣寺", "清水寺"],
      content: "京都は千年の古都として、心を癒やす美しい景色がたくさんあります。嵐山の竹林では自然の音に包まれ、金閣寺では金色に輝く建物の美しさを堪能できます。静かな旅館での温泉も最高です。"
    },
    4: {
      title: "福岡屋台めぐり!博多グルメ紀行",
      description: "中洲の屋台で味わう絶品とんこつラーメンから、天神の最新ショッピングスポットまで。コンパクトシティ福岡の魅力を凝縮。",
      author: "オンヒャク",
      image: fukuokahutami,
      heroImage: fukuokahutami,
      breadcrumb: ["福岡", "中洲屋台", "天神"],
      contentTitle: "福岡グルメの基本情報",
      spots: ["中洲屋台", "天神地下街", "博多駅"],
      content: "福岡は九州のグルメの中心地です。中洲の屋台では本場のとんこつラーメンを、天神では最新のショッピングを楽しめます。コンパクトな街なので徒歩で回れるのも魅力です。"
    },
    5: {
      title: "大自然を満喫!夏の北海道・札幌ドライブ",
      description: "ラベンダー畑が広がる富良野への日帰りドライブや、新鮮な海の幸を味わう市場めぐり。広大な北海道の自然を体感するプラン。",
      author: "ドフン",
      image: Sapporo,
      heroImage: Sapporo,
      breadcrumb: ["北海道", "富良野", "札幌"],
      contentTitle: "北海道自然の基本情報",
      spots: ["富良野ラベンダー畑", "札幌時計台", "大通公園"],
      content: "北海道は日本最大の自然を誇る地域です。夏の富良野では紫色のラベンダー畑が美しく、札幌では新鮮な海の幸と美味しいビールを楽しめます。広大な自然の中でリフレッシュできます。"
    },
    6: {
      title: "絶景ビーチリゾート!沖縄でのんびり休暇",
      description: "エメラルドグリーンの海でシュノーケリングを楽しんだり、美しいサンセットを眺めたり。南国リゾートで過ごす、最高の贅沢。",
      author: "ソヒョン",
      image: OkinawaResort,
      heroImage: OkinawaResort,
      breadcrumb: ["沖縄", "美ら海水族館", "首里城"],
      contentTitle: "沖縄リゾートの基本情報",
      spots: ["美ら海水族館", "首里城", "国際通り"],
      content: "沖縄は日本唯一の亜熱帯気候の地域です。エメラルドグリーンの海ではシュノーケリングやダイビングを楽しめ、美ら海水族館では世界最大級の水族館を体験できます。首里城では琉球王国の歴史を感じられます。"
    }
  };

  const planId = id ? parseInt(id) : 1;
  const plan = planDetails[planId as keyof typeof planDetails] || planDetails[1];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${plan.heroImage})`}}>
        {/* Custom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
        
        {/* Breadcrumb Navigation - positioned absolutely */}
        <nav className="absolute top-4 left-6 z-10">
          <div className="flex items-center space-x-2 text-sm">
            {plan.breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                <span className="px-2 py-1 bg-white/20 rounded text-gray-800 font-semibold hover:bg-white/30 transition-colors cursor-pointer">
                  {item}
                </span>
                {index < plan.breadcrumb.length - 1 && <span className="text-gray-500 mx-1">&gt;</span>}
              </React.Fragment>
            ))}
          </div>
        </nav>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              {plan.title}
            </h1>
            <p className="text-white text-lg mb-4 drop-shadow-md">
              {plan.description}
            </p>
            <div className="flex items-center space-x-4 text-white text-sm drop-shadow-md">
              <span>PLAN | SHARE | LOG</span>
              <span>16K views</span>
              <span>by {plan.author}</span>
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
              <span className="text-orange-500">{plan.contentTitle}</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-600 mr-3">2.</span>
              <div>
                <span className="text-orange-500 font-medium">おすすめ観光スポット</span>
                <ul className="ml-6 mt-2 space-y-1">
                  {plan.spots.map((spot, index) => (
                    <li key={index} className="text-orange-500">{spot}</li>
                  ))}
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{plan.contentTitle}</h2>
          
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${planId === 1 ? RamenJiro : planId === 2 ? USJ : planId === 3 ? KiyoMizuTera : planId === 4 ? HakataCity : planId === 5 ? SapporoTime : planId === 6 ? OkiAquarium : plan.image})`}}>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${planId === 1 ? JiroSushi : planId === 2 ? OsakaGuriko : planId === 3 ? Kinkakuji : planId === 4 ? FukuokaCastle : planId === 5 ? SapporoTower : planId === 6 ? Shurijo : plan.heroImage})`}}>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                {plan.content}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                このプランは{plan.author}さんが実際に体験した内容を基に作成されました。現地での貴重な体験とおすすめスポットを詳しくご紹介しています。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                旅行の準備や現地での移動方法、おすすめの時期など、実用的な情報も含まれていますので、ぜひ参考にしてください。
              </p>
              <p className="text-gray-700 leading-relaxed">
                皆さんも素敵な旅の思い出を作って、タビログでシェアしてくださいね！
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
