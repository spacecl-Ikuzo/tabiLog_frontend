import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/layout/header';

// Assets
import TokyoHero from '../../assets/Tokyo.jpg';
import TokyoTower from '../../assets/TokyoTower.jpg';
import AsaKusa from '../../assets/AsaKusa.jpg';
import TokyoDome from '../../assets/TokyoDome.jpg';
import TokyoDome2 from '../../assets/TokyoDome2.jpg';
import DomeSpa from '../../assets/DomeSpa.jpg';
import SpoFes from '../../assets/SpoFes.jpg';
import OsakaHero from '../../assets/OsakaCastle.jpg';
import OsakaGuriko from '../../assets/OsakaGuriko.jpg';
import USJ from '../../assets/USJ.jpg';
import KyotoHero from '../../assets/Kinkakuji.jpg';
import KiyoMizuTera from '../../assets/KiyoMizuTera.jpg';
import SapporoHero from '../../assets/Sapporo.jpg';
import SapporoTime from '../../assets/SapporoTime.jpg';
import SapporoTower from '../../assets/SapporoTower.jpg';
import FukuokaHero from '../../assets/fukuokahutami.jpg';
import FukuokaCastle from '../../assets/FukuokaCastle.jpg';
import HakataCity from '../../assets/HakataCity.jpg';
import OkinawaHero from '../../assets/OkinawaResort.jpg';
import Shurijo from '../../assets/Shurijo.jpg';
import OkiAquarium from '../../assets/OkiAquarium.jpg';
import NagoyaHero from '../../assets/Nagoya.jpg';
import NagoyaCastle from '../../assets/NagoyaCastle.jpg';
import Atsutasinkyu from '../../assets/Atsutasinkyu.jpg';
import HiroshimaHero from '../../assets/HiroShima.jpg';
import GenbakuDome from '../../assets/GenbakuDome.jpg';
import Miyajima from '../../assets/miyajima.jpg';
import KanazawaHero from '../../assets/Kanazawa.jpg';
import Kenrokuen from '../../assets/Kenrokuen.jpg';
import KanazawaCastle from '../../assets/KanazawaCastle.jpg';

type SpotDetail = {
  title: string;
  description: string;
  author: string;
  heroImage: string;
  breadcrumb: string[];
  contentTitle: string;
  spots: string[];
  imageLeft: string;
  imageRight: string;
  content: string;
};

const SPOT_DETAILS: Record<string, Record<string, SpotDetail>> = {
  '東京': {
    '1': {
      title: '東京タワー',
      description: '東京のシンボルタワー。夜景が美しい観光スポット',
      author: 'タビログ編集部',
      heroImage: TokyoHero,
      breadcrumb: ['東京', '港区', '東京タワー'],
      contentTitle: '東京タワーの基本情報',
      spots: ['大展望台', '特別展望台', 'フットタウン'],
      imageLeft: TokyoTower,
      imageRight: TokyoHero,
      content:
        '東京タワーは高さ333mの電波塔で、昭和から令和に至るまで東京の景観を象徴するランドマークです。昼は街並みと富士山、夜は宝石のような夜景が一望でき、季節やイベントに合わせたライトアップも見どころ。フットタウンにはショップやフードコート、ポップカルチャーの展示も充実し、家族連れからカップル、海外旅行者まで幅広く楽しめます。アクセスは赤羽橋・御成門・神谷町など複数駅から徒歩圏で便利です。'
    },
    '2': {
      title: '浅草寺',
      description: '東京で最も古い寺院。雷門で有名な観光地',
      author: 'タビログ編集部',
      heroImage: TokyoHero,
      breadcrumb: ['東京', '台東区', '浅草寺'],
      contentTitle: '浅草寺の基本情報',
      spots: ['雷門', '仲見世通り', '本堂'],
      imageLeft: AsaKusa,
      imageRight: TokyoHero,
      content:
        '浅草寺は628年創建と伝わる都内最古の寺院。雷門の大提灯と仲見世通りの賑わいが象徴的で、和菓子や工芸品の老舗が並ぶ参道は散策に最適です。四季折々の年中行事があり、江戸文化と信仰が今も息づいています。スカイツリーや隅田川クルーズと組み合わせた観光コースも人気です。'
    },
    '19': {
      title: '東京ドーム',
      description: 'イベントや野球観戦で人気の多目的ドーム',
      author: 'タビログ編集部',
      heroImage: TokyoHero,
      breadcrumb: ['東京', '文京区', '東京ドーム'],
      contentTitle: '東京ドームの基本情報',
      spots: ['アトラクションズ', 'ショッピング', 'イベントホール'],
      imageLeft: TokyoDome,
      imageRight: TokyoDome2,
      content:
        '東京ドームはプロ野球・読売ジャイアンツの本拠地として知られる多目的スタジアムで、コンサート、展示会、スポーツイベントなど年間を通して多彩な催しが開催されます。隣接する「LaQua（ラクーア）」にはスパ施設やショッピングモール、飲食店が集まり、温泉・サウナ・リラクゼーションを楽しめる都市型スパとして地元民にも観光客にも人気です。\n\nまた、学校行事の会場としても利用され、日本電子専門学校のスポーツフェスティバルなど、各種団体の大規模イベントが開催されることでも知られています。国際大会ではWBC（ワールド・ベースボール・クラシック）の会場にもなり、世界中のファンが集まる熱狂の舞台となりました。アクセスは後楽園駅、水道橋駅から直結・至近で非常に便利。球場観戦からスパ、ショッピングまで、1日を通してエンタメを満喫できるエリアです。'
    }
  },
  '大阪': {
    '3': {
      title: '大阪城',
      description: '豊臣秀吉が築いた名城。歴史と美しさを兼ね備えた城',
      author: 'タビログ編集部',
      heroImage: OsakaHero,
      breadcrumb: ['大阪', '中央区', '大阪城'],
      contentTitle: '大阪城の基本情報',
      spots: ['天守閣', '西の丸庭園', '大阪城公園'],
      imageLeft: OsakaHero,
      imageRight: OsakaGuriko,
      content:
        '大阪城は豊臣秀吉の栄華を今に伝える名城。壮麗な天守と高石垣、広大な堀が見どころです。天守閣の展示では戦国史と城郭建築を学べ、上層の展望台からは大阪の街並みを一望可能。春は桜、秋は紅葉と四季の彩りも美しく、公園はジョギングやピクニックで賑わいます。夜間ライトアップは写真映え抜群です。'
    },
    '4': {
      title: '道頓堀',
      description: '大阪の食文化を体験できる繁華街',
      author: 'タビログ編集部',
      heroImage: OsakaHero,
      breadcrumb: ['大阪', '中央区', '道頓堀'],
      contentTitle: '道頓堀の基本情報',
      spots: ['グリコサイン', '戎橋', 'くいだおれ太郎'],
      imageLeft: OsakaGuriko,
      imageRight: OsakaHero,
      content:
        '道頓堀は大阪ミナミの中心地。グリコサインや戎橋での記念撮影は定番で、たこ焼き・お好み焼き・串カツなど粉もんの名店が揃います。川沿いの遊歩道散策やクルーズも人気。夜はネオンが水面に反射するフォトジェニックな景色が広がり、心斎橋・アメリカ村と合わせた周遊も便利です。'
    },
    '20': {
      title: 'ユニバーサル・スタジオ・ジャパン',
      description: '大阪の大人気テーマパーク。映画の世界を体験',
      author: 'タビログ編集部',
      heroImage: OsakaHero,
      breadcrumb: ['大阪', '此花区', 'USJ'],
      contentTitle: 'USJの基本情報',
      spots: ['ハリウッド・ドリーム', 'ザ・フライング・ダイナソー', 'マリオエリア'],
      imageLeft: USJ,
      imageRight: OsakaGuriko,
      content:
        'ユニバーサル・スタジオ・ジャパンは映画の世界観を五感で体験できるテーマパーク。ダイナミックなライド、キャラクター・グリーティング、ショーに加え、スーパー・ニンテンドー・ワールドなど話題エリアも充実しています。季節ごとのナイトパレードやホラーナイトも人気で、一年を通して新鮮な驚きに出会えます。USJ公式ホテルやユニバーサル・シティウォークとの連携で、食事やショッピングもスムーズです。'
    }
  }
  ,
  '京都': {
    '5': {
      title: '金閣寺',
      description: '京都の代表的な寺院。金色に輝く美しい建物',
      author: 'タビログ編集部',
      heroImage: KyotoHero,
      breadcrumb: ['京都', '北区', '金閣寺'],
      contentTitle: '金閣寺の基本情報',
      spots: ['鏡湖池', '舎利殿', '庭園'],
      imageLeft: KyotoHero,
      imageRight: KiyoMizuTera,
      content: '金閣寺は金箔に覆われた舎利殿が有名で、鏡湖池に映り込む金色の建物は四季ごとに表情を変えます。雪化粧の冬景色や新緑、紅葉といった自然の移ろいと調和する風景は必見。参道には茶室や庭園の見どころが点在し、拝観後は周辺の和菓子店や茶屋で一服も楽しめます。'
    },
    '6': {
      title: '清水寺',
      description: '京都で最も有名な寺院。舞台からの景色が絶景',
      author: 'タビログ編集部',
      heroImage: KyotoHero,
      breadcrumb: ['京都', '東山区', '清水寺'],
      contentTitle: '清水寺の基本情報',
      spots: ['清水の舞台', '音羽の滝', '三重塔'],
      imageLeft: KiyoMizuTera,
      imageRight: KyotoHero,
      content: '清水寺は断崖に張り出した「清水の舞台」で知られ、京都市街を一望できる絶景スポット。音羽の滝での参拝や、三重塔・地主神社など境内の見どころも豊富です。桜・紅葉シーズンの夜間特別拝観は幻想的な光景が広がり、写真好きにも人気です。'
    }
  },
  '札幌': {
    '7': {
      title: '札幌時計台',
      description: '札幌のシンボル。歴史ある時計台',
      author: 'タビログ編集部',
      heroImage: SapporoHero,
      breadcrumb: ['札幌', '中央区', '札幌時計台'],
      contentTitle: '札幌時計台の基本情報',
      spots: ['展示室', '鐘楼', '写真スポット'],
      imageLeft: SapporoTime,
      imageRight: SapporoTower,
      content: '札幌時計台は北海道開拓使時代の歴史を伝える貴重な建造物。館内展示で札幌の成り立ちを学べ、外観は四季の装いとともに美しく写真映えします。大通公園やテレビ塔と合わせた市内散策の起点にも最適です。'
    },
    '8': {
      title: '大通公園',
      description: '札幌の中心にある美しい公園',
      author: 'タビログ編集部',
      heroImage: SapporoHero,
      breadcrumb: ['札幌', '中央区', '大通公園'],
      contentTitle: '大通公園の基本情報',
      spots: ['噴水', '花壇', 'テレビ塔ビュー'],
      imageLeft: SapporoTower,
      imageRight: SapporoTime,
      content: '大通公園は札幌の中心を東西に貫く緑の帯。季節の花壇や噴水、イベントが魅力で、夏のビアガーデンや冬の雪まつりなど市民に親しまれる催しが多数開催されます。周辺にはカフェや百貨店が揃い、観光の合間の休憩にも便利です。'
    }
  },
  '福岡': {
    '9': {
      title: '福岡城跡',
      description: '福岡の歴史を感じられる城跡',
      author: 'タビログ編集部',
      heroImage: FukuokaHero,
      breadcrumb: ['福岡', '中央区', '福岡城跡'],
      contentTitle: '福岡城跡の基本情報',
      spots: ['天守台跡', '花見スポット', '舞鶴公園'],
      imageLeft: FukuokaCastle,
      imageRight: FukuokaHero,
      content: '福岡城跡（舞鶴公園）は石垣や堀の遺構が良好に残る歴史公園。春は桜の名所として知られ、ライトアップ時は幻想的な雰囲気に包まれます。天守台跡からは市街地を一望でき、歴史散策と自然鑑賞を同時に楽しめます。'
    },
    '10': {
      title: '博多駅',
      description: '福岡の玄関口。グルメとショッピングの中心地',
      author: 'タビログ編集部',
      heroImage: FukuokaHero,
      breadcrumb: ['福岡', '博多区', '博多駅'],
      contentTitle: '博多駅の基本情報',
      spots: ['駅ビル', 'デパ地下', 'イルミネーション'],
      imageLeft: HakataCity,
      imageRight: FukuokaHero,
      content: '博多駅は九州の玄関口。駅ビルには名物の明太子や豚骨ラーメン、銘菓など福岡グルメが集結し、ショッピングも充実。イルミネーションやイベントも多く、旅行初日・最終日の滞在でも満足度の高い時間を過ごせます。空港や地下鉄とのアクセスも至便です。'
    }
  },
  '沖縄': {
    '11': {
      title: '首里城',
      description: '沖縄の歴史と文化を感じられる城',
      author: 'タビログ編集部',
      heroImage: OkinawaHero,
      breadcrumb: ['沖縄', '那覇市', '首里城'],
      contentTitle: '首里城の基本情報',
      spots: ['正殿', '守礼門', '園比屋武御嶽石門'],
      imageLeft: Shurijo,
      imageRight: OkinawaHero,
      content: '首里城は琉球王国の王宮で、朱色の正殿や城郭遺構が沖縄独自の歴史文化を物語ります。復元・保存が進む城内では琉球王国の政治や祭祀の一端に触れられます。那覇市街からのアクセスも良く、首里金城町石畳道の散策と合わせるのもおすすめです。'
    },
    '12': {
      title: '美ら海水族館',
      description: '世界最大級の水族館。ジンベエザメが人気',
      author: 'タビログ編集部',
      heroImage: OkinawaHero,
      breadcrumb: ['沖縄', '本部町', '美ら海水族館'],
      contentTitle: '美ら海水族館の基本情報',
      spots: ['黒潮の海', 'サンゴの海', 'イルカショー'],
      imageLeft: OkiAquarium,
      imageRight: OkinawaHero,
      content: '美ら海水族館は世界最大級の水槽「黒潮の海」で泳ぐジンベエザメが圧巻。サンゴ礁の生態展示やイルカショー、研究バックヤードの取り組みも見応えがあります。周辺の海洋博公園やビーチと併せて一日満喫できます。'
    }
  },
  '名古屋': {
    '13': {
      title: '名古屋城',
      description: '名古屋のシンボル。金の鯱で有名な城',
      author: 'タビログ編集部',
      heroImage: NagoyaHero,
      breadcrumb: ['名古屋', '中区', '名古屋城'],
      contentTitle: '名古屋城の基本情報',
      spots: ['本丸御殿', '二之丸庭園', '金鯱'],
      imageLeft: NagoyaCastle,
      imageRight: NagoyaHero,
      content: '名古屋城は金の鯱で有名な天守と、豪華絢爛な本丸御殿の復元が見どころ。近世城郭の粋を集めた意匠や屏風絵は必見で、庭園や石垣も歴史的価値が高いスポットです。季節の催しやライトアップも行われています。'
    },
    '14': {
      title: '熱田神宮',
      description: '名古屋で最も重要な神社',
      author: 'タビログ編集部',
      heroImage: NagoyaHero,
      breadcrumb: ['名古屋', '熱田区', '熱田神宮'],
      contentTitle: '熱田神宮の基本情報',
      spots: ['本宮', '宝物館', '参道'],
      imageLeft: Atsutasinkyu,
      imageRight: NagoyaHero,
      content: '熱田神宮は三種の神器のひとつ草薙神剣を祀る由緒ある神社。鬱蒼とした杜に囲まれた境内は清浄な空気に満ち、宝物館では貴重な文化財を見学可能。参道のきしめんや名古屋名物のグルメも楽しみの一つです。'
    }
  },
  '広島': {
    '15': {
      title: '原爆ドーム',
      description: '広島の平和の象徴。世界遺産',
      author: 'タビログ編集部',
      heroImage: HiroshimaHero,
      breadcrumb: ['広島', '中区', '原爆ドーム'],
      contentTitle: '原爆ドームの基本情報',
      spots: ['平和記念公園', '資料館', '元安川'],
      imageLeft: GenbakuDome,
      imageRight: HiroshimaHero,
      content: '原爆ドームは世界遺産に登録された平和の象徴。隣接する平和記念公園や資料館とともに、戦争の悲惨さと平和の尊さを学ぶ場です。川沿いの散策路は慰霊と鎮魂の空気に包まれ、静かな時間が流れます。'
    },
    '16': {
      title: '宮島',
      description: '厳島神社で有名な美しい島',
      author: 'タビログ編集部',
      heroImage: HiroshimaHero,
      breadcrumb: ['広島', '廿日市市', '宮島'],
      contentTitle: '宮島の基本情報',
      spots: ['厳島神社', '大鳥居', '弥山'],
      imageLeft: Miyajima,
      imageRight: HiroshimaHero,
      content: '宮島は干満により姿を変える海上の大鳥居で知られ、厳島神社の社殿群は海と山に抱かれた幽玄の美をたたえます。弥山の原始林や鹿とのふれあい、紅葉谷公園など見どころも多く、四季を通じて楽しめます。'
    }
  },
  '金沢': {
    '17': {
      title: '兼六園',
      description: '金沢の代表的な庭園。日本三名園の一つ',
      author: 'タビログ編集部',
      heroImage: KanazawaHero,
      breadcrumb: ['金沢', '兼六町', '兼六園'],
      contentTitle: '兼六園の基本情報',
      spots: ['徽軫灯籠', '雪吊り', '霞ヶ池'],
      imageLeft: Kenrokuen,
      imageRight: KanazawaHero,
      content: '兼六園は日本三名園のひとつ。広大な園内には池泉回遊式庭園の趣向が凝らされ、雪吊りや灯籠、曲水など見どころが点在します。冬の雪化粧、春の桜、初夏の新緑、秋の紅葉と、四季の風雅を堪能できます。'
    },
    '18': {
      title: '金沢城公園',
      description: '金沢の歴史を感じられる城跡公園',
      author: 'タビログ編集部',
      heroImage: KanazawaHero,
      breadcrumb: ['金沢', '丸の内', '金沢城公園'],
      contentTitle: '金沢城公園の基本情報',
      spots: ['石川門', '五十間長屋', '玉泉院丸庭園'],
      imageLeft: KanazawaCastle,
      imageRight: KanazawaHero,
      content: '金沢城公園は石川門や五十間長屋など復元された建造物と広い芝生が魅力。加賀百万石の歴史を感じる空間で、兼六園との回遊も楽しめます。夜間ライトアップ時は城郭の白壁が幻想的に浮かび上がります。'
    }
  }
};

const SpotDetailPage = () => {
  const { city, id } = useParams<{ city: string; id: string }>();

  const cityKey = city || '東京';
  const idKey = id || '1';

  const detail: SpotDetail | undefined = SPOT_DETAILS[cityKey]?.[idKey];

  const safeTitle = detail?.title || `${cityKey} のスポット詳細`;
  const safeDesc = detail?.description || 'このスポットの詳細情報です。準備中のコンテンツを表示しています。';
  const hero = detail?.heroImage || (cityKey === '東京' ? TokyoHero : OsakaHero);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${hero})`}}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>

        {/* Breadcrumb */}
        <nav className="absolute top-4 left-6 z-10">
          <div className="flex items-center space-x-2 text-sm">
            {(detail?.breadcrumb || [cityKey, safeTitle]).map((item, index, arr) => (
              <React.Fragment key={index}>
                <span className="px-2 py-1 bg-white/20 rounded text-gray-800 font-semibold hover:bg-white/30 transition-colors cursor-pointer">
                  {item}
                </span>
                {index < arr.length - 1 && <span className="text-gray-500 mx-1">&gt;</span>}
              </React.Fragment>
            ))}
          </div>
        </nav>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              {safeTitle}
            </h1>
            <p className="text-white text-lg mb-4 drop-shadow-md">
              {safeDesc}
            </p>
            <div className="flex items-center space-x-4 text-white text-sm drop-shadow-md">
              <span>PLAN | SHARE | LOG</span>
              <span>8.2K views</span>
              <span>by {detail?.author || 'タビログ編集部'}</span>
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
              <span className="text-orange-500">{detail?.contentTitle || `${safeTitle} の基本情報`}</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-600 mr-3">2.</span>
              <div>
                <span className="text-orange-500 font-medium">おすすめ観光スポット</span>
                <ul className="ml-6 mt-2 space-y-1">
                  {(detail?.spots || []).map((s, i) => (
                    <li key={i} className="text-orange-500">{s}</li>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{detail?.contentTitle || `${safeTitle} の基本情報`}</h2>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${detail?.imageLeft || hero})`}}>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${detail?.imageRight || hero})`}}>
              </div>
            </div>
          </div>

          {/* Extra Images for Tokyo Dome */}
          {cityKey === '東京' && idKey === '19' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${DomeSpa})`}}>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${SpoFes})`}}>
                </div>
              </div>
            </div>
          )}

          {/* Text */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                {detail?.content || 'このスポットに関する詳しい情報は準備中です。見どころやアクセス、楽しみ方などの情報を順次追加していきます。'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpotDetailPage;


