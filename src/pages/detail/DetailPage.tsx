import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/layout/header';
import fukuokahutami from '../../assets/fukuokahutami.jpg';
import Kinkakuji from '../../assets/Kinkakuji.jpg';
import OsakaCastle from '../../assets/OsakaCastle.jpg';
import Sapporo from '../../assets/Sapporo.jpg';
import OkinawaResort from '../../assets/OkinawaResort.jpg';
import RamenJiro from '../../assets/RamenJiro.jpg';
import JiroSushi from '../../assets/JiroSushi.jpg';
import Tsukiji from '../../assets/Tsukiji.jpg';
import Marugamejemen2 from '../../assets/Marugamejemen2.jpg';
import USJ from '../../assets/USJ.jpg';
import OsakaGuriko from '../../assets/OsakaGuriko.jpg';
import KiyoMizuTera from '../../assets/KiyoMizuTera.jpg';
import SapporoTime from '../../assets/SapporoTime.jpg';
import SapporoTower from '../../assets/SapporoTower.jpg';
import HakataCity from '../../assets/HakataCity.jpg';
import FukuokaCastle from '../../assets/FukuokaCastle.jpg';
import Shurijo from '../../assets/Shurijo.jpg';
import OkiAquarium from '../../assets/OkiAquarium.jpg';
import Nagoya from '../../assets/Nagoya.jpg';
import NagoyaCastle from '../../assets/NagoyaCastle.jpg';
import nagoyawcs1 from '../../assets/nagoyawcs1.jpg';
import nagoyawcs2 from '../../assets/nagoyawcs2.jpg';
import KiminoNamaewa from '../../assets/KiminoNamaewa.jpg';
import KiminoNamaewaSuga from '../../assets/KiminoNamaewaSuga.jpg';
import Shibakoen from '../../assets/Shibakoen.jpg';
import ShinjukuPolice from '../../assets/ShinjukuPolice.jpg';
import Aogashima from '../../assets/Aogashima.jpg';
import tenkinoko from '../../assets/tenkinoko.jpg';
import denkiseibumc from '../../assets/denkiseibumc.jpg';
import odaiba from '../../assets/odaiba.jpg';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // 여행 계획 상세 정보 데이터
  const planDetails = {
    1: {
      title: '食い倒れ東京! 2泊3日グルメ旅',
      description:
        '築地市場の新鮮な海の幸から、丸亀製麺の本格讃岐うどんまで。東京の「うまい!」をすべて味わい尽くす、食いしん坊のためのプランです。',
      author: 'ソヒョン',
      image: Tsukiji,
      heroImage: Tsukiji,
      breadcrumb: ['東京', '築地市場', '丸亀製麺'],
      contentTitle: '東京グルメの基本情報',
      spots: ['築地市場', '丸亀製麺', '銀座寿司', 'ラーメン二郎'],
      content:
        '東京グルメの王道スポットを巡る2泊3日の旅。新鮮な海の幸から本格うどん、高級寿司、人気ラーメンまで、東京の「うまい！」をすべて味わい尽くします。<br><br>【2.1 築地市場】<br>世界最大級の魚市場。早朝の競りを見学し、市場内の寿司店で朝寿司を楽しみましょう。<br><br>【2.2 丸亀製麺】<br>本格讃岐うどんのチェーン店。コシのある麺と美味しい出汁が自慢です。<br><br>【2.3 銀座寿司】<br>高級寿司店で職人が握る江戸前寿司。新鮮なネタと丁寧な仕事が光ります。<br><br>【2.4 ラーメン二郎】<br>東京で最も有名なラーメン店。太い麺と濃厚スープ、大量の野菜が特徴です。',
    },
    2: {
      title: '大阪満喫!ショッピングとエンタメの旅',
      description:
        '道頓堀のきらびやかな夜景、USJのスリル満点のアトラクション。眠らない街・大阪の魅力を丸ごと楽しむプラン。',
      author: 'ドフン',
      image: OsakaCastle,
      heroImage: OsakaCastle,
      breadcrumb: ['大阪', '道頓堀', 'USJ'],
      contentTitle: '大阪エンタメの基本情報',
      spots: ['道頓堀', 'ユニバーサルスタジオジャパン', '大阪城'],
      content:
        '大阪は関西のエンターテイメントの中心地です。道頓堀のネオンサインが美しい夜景を演出し、USJでは世界レベルのアトラクションを楽しめます。大阪城では歴史を感じながら散策できます。',
    },
    3: {
      title: '心安らぐ京都、癒やしの週末',
      description:
        '嵐山の竹林を散策し、静かな旅館で温泉に浸かる。古都の美しい景色の中で、心と体をリフレッシュする週末旅行。',
      author: 'セヒョン',
      image: Kinkakuji,
      heroImage: Kinkakuji,
      breadcrumb: ['京都', '嵐山', '金閣寺'],
      contentTitle: '京都癒やしの基本情報',
      spots: ['嵐山竹林', '金閣寺', '清水寺'],
      content:
        '京都は千年の古都として、心を癒やす美しい景色がたくさんあります。嵐山の竹林では自然の音に包まれ、金閣寺では金色に輝く建物の美しさを堪能できます。静かな旅館での温泉も最高です。',
    },
    4: {
      title: '福岡屋台めぐり!博多グルメ紀行',
      description:
        '中洲の屋台で味わう絶品とんこつラーメンから、天神の最新ショッピングスポットまで。コンパクトシティ福岡の魅力を凝縮。',
      author: 'オンヒャク',
      image: fukuokahutami,
      heroImage: fukuokahutami,
      breadcrumb: ['福岡', '中洲屋台', '天神'],
      contentTitle: '福岡グルメの基本情報',
      spots: ['中洲屋台', '天神地下街', '博多駅'],
      content:
        '福岡は九州のグルメの中心地です。中洲の屋台では本場のとんこつラーメンを、天神では最新のショッピングを楽しめます。コンパクトな街なので徒歩で回れるのも魅力です。',
    },
    5: {
      title: '大自然を満喫!夏の北海道・札幌ドライブ',
      description:
        'ラベンダー畑が広がる富良野への日帰りドライブや、新鮮な海の幸を味わう市場めぐり。広大な北海道の自然を体感するプラン。',
      author: 'ドフン',
      image: Sapporo,
      heroImage: Sapporo,
      breadcrumb: ['北海道', '富良野', '札幌'],
      contentTitle: '北海道自然の基本情報',
      spots: ['富良野ラベンダー畑', '札幌時計台', '大通公園'],
      content:
        '北海道は日本最大の自然を誇る地域です。夏の富良野では紫色のラベンダー畑が美しく、札幌では新鮮な海の幸と美味しいビールを楽しめます。広大な自然の中でリフレッシュできます。',
    },
    6: {
      title: '絶景ビーチリゾート!沖縄でのんびり休暇',
      description:
        'エメラルドグリーンの海でシュノーケリングを楽しんだり、美しいサンセットを眺めたり。南国リゾートで過ごす、最高の贅沢。',
      author: 'ソヒョン',
      image: OkinawaResort,
      heroImage: OkinawaResort,
      breadcrumb: ['沖縄', '美ら海水族館', '首里城'],
      contentTitle: '沖縄リゾートの基本情報',
      spots: ['美ら海水族館', '首里城', '国際通り'],
      content:
        '沖縄は日本唯一の亜熱帯気候の地域です。エメラルドグリーンの海ではシュノーケリングやダイビングを楽しめ、美ら海水族館では世界最大級の水族館を体験できます。首里城では琉球王国の歴史を感じられます。',
    },
    7: {
      title: '名古屋城と熱田神宮めぐり',
      description: '名古屋の歴史と文化を感じる旅。徳川家康が築いた名城と日本三大神剣を祀る神宮を巡る歴史散策。',
      author: 'タロウ',
      image: Nagoya,
      heroImage: NagoyaCastle,
      breadcrumb: ['名古屋', '名古屋城', '熱田神宮'],
      contentTitle: '名古屋歴史めぐりの基本情報',
      spots: ['名古屋城', '熱田神宮', '大須商店街', '名古屋市科学館'],
      content:
        '名古屋の歴史と文化を感じる旅。徳川家康が築いた名城と日本三大神剣を祀る神宮を巡る歴史散策プランです。<br><br>【2.1 名古屋城】<br>徳川家康が築いた名城。金色のシャチホコが有名で、天守閣からは名古屋の街並みを一望できます。本丸御殿の復元展示も見どころです。<br><br>【2.2 熱田神宮】<br>日本三大神剣の一つ、草薙剣を祀る神宮。広大な境内には歴史的価値の高い建物や宝物が多数保存されています。<br><br>【2.3 大須商店街】<br>江戸時代から続く歴史ある商店街。アニメ・漫画グッズ、電子機器、食べ物まで何でも揃う独特な雰囲気が魅力です。<br><br>【2.4 名古屋市科学館】<br>世界最大級のプラネタリウムを有する科学館。体験型の展示が充実しており、子供から大人まで楽しめる施設です。',
    },
    8: {
      title: 'ワールドコスプレサミット',
      description:
        '毎年夏に名古屋で開催される世界規模のコスプレイベント。大須商店街と名古屋市街が舞台となる国際的なコスプレ祭典。',
      author: 'コスプレファン',
      image: nagoyawcs2,
      heroImage: nagoyawcs1,
      breadcrumb: ['名古屋', '大須商店街', 'ワールドコスプレサミット'],
      contentTitle: 'ワールドコスプレサミットの基本情報',
      spots: ['大須商店街', '名古屋市街', 'コスプレコンテスト', '国際交流'],
      content:
        '毎年夏に名古屋で開催される世界規模のコスプレイベント。大須商店街と名古屋市街が舞台となる国際的なコスプレ祭典です。<br><br>【2.1 大須商店街】<br>コスプレイベントのメイン会場。世界各国から集まったコスプレイヤーたちが街を練り歩き、独特な文化の交流が生まれます。<br><br>【2.2 名古屋市街】<br>市内各所でコスプレイベントが開催され、名古屋の街全体がコスプレの祭典会場となります。観光客も参加できるイベントが多数あります。<br><br>【2.3 コスプレコンテスト】<br>世界各国の代表コスプレイヤーが参加する国際コンテスト。技術力と表現力の高さを競い合い、観客を魅了します。<br><br>【2.4 国際交流】<br>コスプレを通じた国際文化交流の場。世界各国のファンが集まり、アニメ・漫画文化を共有する貴重な機会となります。',
    },
    14: {
      title: '君の名は。聖地巡礼！渋谷と代々木',
      description:
        '「君の名は。」の舞台となった東京の名所を巡る。渋谷のスクランブル交差点、代々木の神社、新宿御苑など、映画に登場した場所で主人公たちの気持ちを感じてみよう。',
      author: 'アニメファン',
      image: KiminoNamaewa,
      heroImage: KiminoNamaewaSuga,
      breadcrumb: ['東京', '渋谷', '代々木', '君の名は。聖地巡礼'],
      contentTitle: '君の名は。聖地巡礼の基本情報',
      spots: ['君の名は。映画紹介', '代々木八幡宮', '新宿警察署', '青ヶ島'],
      content:
        '「君の名は。」の舞台となった東京の名所を巡る聖地巡礼プランです。映画に登場した場所を実際に訪れ、主人公たちの気持ちを感じてみましょう。<br><br>【2.1 君の名は。映画紹介】<br>新海誠監督の代表作「君の名は。」は2016年に公開されたアニメーション映画です。田舎の少女三葉と東京の少年瀧が体を入れ替わるファンタジーロマンスで、時間と空間を超える感動的なストーリーが特徴です。世界中で大きな人気を博し、日本アニメーションの新しい転換点を築いた作品として評価されています。<br><br>【2.2 代々木八幡宮】<br>映画に登場する神社のモデルとなった場所。静寂な境内で、主人公たちの祈りの気持ちを感じることができます。神社の雰囲気と映画の世界観が重なり合う特別な体験ができます。新海誠監督が実際に訪れてインスピレーションを得た場所としても知られています。<br><br>【2.3 新宿警察署】<br>映画の重要なシーンで登場する新宿警察署周辺。主人公たちが東京で過ごした時間の象徴的な場所として描かれています。実際の警察署前で、映画の世界観を感じながら街の雰囲気を楽しめます。新宿の街並みと映画の記憶が重なり合う特別なスポットです。<br><br>【2.4 青ヶ島】<br>映画「君の名は。」の重要な舞台となった青ヶ島。東京都の離島で、主人公三葉の故郷として描かれた神秘的な島です。火山島特有の美しい自然と静寂な雰囲気が、映画の世界観を体現しています。実際に訪れることで、主人公たちの故郷への想いを感じることができる特別な場所です。',
    },
    11: {
      title: '天気の子聖地巡礼！東京スカイツリーと台場',
      description:
        '「天気の子」の舞台となった東京の名所を巡る。スカイツリー、台場、新宿など、映画に登場した場所で主人公たちの気持ちを感じてみよう。',
      author: '映画好き',
      image: tenkinoko,
      heroImage: tenkinoko,
      breadcrumb: ['東京', 'スカイツリー', '台場', '天気の子聖地巡礼'],
      contentTitle: '天気の子聖地巡礼の基本情報',
      spots: ['天気の子映画紹介', '東京スカイツリー', 'お台場', 'マクドナルド'],
      content:
        '新海誠監督の2019年公開作品「天気の子」の舞台となった東京の名所を巡る聖地巡礼プランです。映画に登場した場所を実際に訪れ、主人公たちの気持ちを感じてみましょう。<br><br>【2.1 天気の子映画紹介】<br>新海誠監督の2019年公開作品「天気の子」は、天気を操る能力を持つ少女ひなこと、彼女と出会った少年帆高の物語です。東京を舞台にした美しい映像と、現代社会の課題を描いた感動的なストーリーが特徴です。天気と人間の関係性をテーマにした深いメッセージが込められた作品として高い評価を受けています。<br><br>【2.2 東京スカイツリー】<br>映画の重要なシーンで登場する東京スカイツリー。主人公たちが東京の象徴的な場所として訪れる場所です。634mの高さを誇る電波塔からは東京の街並みを一望でき、映画の世界観を体感できます。天気の子の感動的なシーンを思い浮かべながら、東京の美しい景色を楽しめます。<br><br>【2.3 お台場】<br>映画のクライマックスシーンで重要な役割を果たすお台場。美しい海辺の風景と都市の景観が印象的に描かれています。実際にお台場を訪れることで、映画で描かれた風景の美しさと主人公たちの心情を深く理解することができます。お台場の夜景は特に映画ファンにとって特別な体験を提供します。<br><br>【2.4 マクドナルド】<br>映画「天気の子」で主人公帆高がアルバイトをしていたマクドナルド。新宿の街中にあるこの店舗は、主人公の東京での生活の象徴的な場所として描かれています。実際に訪れることで、映画で描かれた主人公の心境と東京での生活を感じることができます。映画ファンにとって特別な意味を持つ場所として、多くの人が聖地巡礼に訪れています。',
    },
  };

  const planId = id ? parseInt(id) : 1;
  const plan = planDetails[planId as keyof typeof planDetails] || planDetails[1];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${plan.heroImage})` }}
      >
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
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{plan.title}</h1>
            <p className="text-white text-lg mb-4 drop-shadow-md">{plan.description}</p>
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
                    <li key={index} className="text-orange-500">
                      <span className="text-gray-900">2.{index + 1}</span> {spot}
                    </li>
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
              <div
                className="h-64 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${
                    planId === 1
                      ? Tsukiji
                      : planId === 2
                      ? USJ
                      : planId === 3
                      ? KiyoMizuTera
                      : planId === 4
                      ? HakataCity
                      : planId === 5
                      ? SapporoTime
                      : planId === 6
                      ? OkiAquarium
                      : planId === 14
                      ? KiminoNamaewa
                      : plan.image
                  })`,
                }}
              ></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div
                className="h-64 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${
                    planId === 1
                      ? Marugamejemen2
                      : planId === 2
                      ? OsakaGuriko
                      : planId === 3
                      ? Kinkakuji
                      : planId === 4
                      ? FukuokaCastle
                      : planId === 5
                      ? SapporoTower
                      : planId === 6
                      ? Shurijo
                      : planId === 14
                      ? KiminoNamaewaSuga
                      : planId === 11
                      ? odaiba
                      : plan.heroImage
                  })`,
                }}
              ></div>
            </div>
          </div>

          {/* Extra Images for Tokyo Plan */}
          {planId === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${JiroSushi})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${RamenJiro})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Kimi no Na wa Plan */}
          {planId === 14 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${ShinjukuPolice})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Aogashima})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Tenki no Ko Plan */}
          {planId === 11 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Shibakoen})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${denkiseibumc})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Text Content */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: plan.content }}></p>
              <p className="text-gray-700 leading-relaxed mb-4">
                このプランは{plan.author}
                さんが実際に体験した内容を基に作成されました。現地での貴重な体験とおすすめスポットを詳しくご紹介しています。
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
