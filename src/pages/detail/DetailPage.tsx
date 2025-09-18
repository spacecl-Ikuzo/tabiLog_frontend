import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import MainBackGround from '../../assets/MainBackGround.jpg';
import Tokyo from '../../assets/Tokyo.jpg';
import OsakaCastle from '../../assets/OsakaCastle.jpg';
import Kinkakuji from '../../assets/Kinkakuji.jpg';
import Sapporo from '../../assets/Sapporo.jpg';
import fukuokahutami from '../../assets/fukuokahutami.jpg';
import OkinawaResort from '../../assets/OkinawaResort.jpg';
import TokyoTower from '../../assets/TokyoTower.jpg';
import AsaKusa from '../../assets/AsaKusa.jpg';
import OsakaGuriko from '../../assets/OsakaGuriko.jpg';
import KiyoMizuTera from '../../assets/KiyoMizuTera.jpg';
import SapporoTime from '../../assets/SapporoTime.jpg';
import HakataCity from '../../assets/HakataCity.jpg';
import Shurijo from '../../assets/Shurijo.jpg';
import OkiAquarium from '../../assets/OkiAquarium.jpg';
import HiroShima from '../../assets/HiroShima.jpg';
import GenbakuDome from '../../assets/GenbakuDome.jpg';
import miyajima from '../../assets/miyajima.jpg';
import Kenrokuen from '../../assets/Kenrokuen.jpg';
import KanazawaCastle from '../../assets/KanazawaCastle.jpg';
import Nagoya from '../../assets/Nagoya.jpg';
import NagoyaCastle from '../../assets/NagoyaCastle.jpg';
import osushotenkai from '../../assets/osushotenkai.jpg';
import Atsutasinkyu from '../../assets/Atsutasinkyu.jpg';
import Nagoyalinear from '../../assets/Nagoyalinear.jpg';
import NagoyaScience from '../../assets/NagoyaScience.jpg';
import akihabara from '../../assets/akihabara.jpg';
import fujiq1 from '../../assets/fujiq1.jpg';
import KiminoNamaewa from '../../assets/KiminoNamaewa.jpg';
import tenkinoko from '../../assets/tenkinoko.jpg';
import Digimon4 from '../../assets/Digimon4.jpg';
import hakoneonsen from '../../assets/hakoneonsen.jpg';
import jiburiPost from '../../assets/jiburiPost.jpg';
import NagoyaLego from '../../assets/NagoyaLego.jpg';
import HakoneOnsen from '../../assets/hakoneonsen.jpg';
import ShibuyaScramble from '../../assets/ShibuyaScramble.jpg';
import TokyoDisneyland from '../../assets/tokyodisneyland.jpg';
import NikkoToshogu from '../../assets/nikkotoshogu.jpg';
import Kamakura from '../../assets/kamakura.jpg';
import Tsukiji from '../../assets/Tsukiji.jpg';
import TokyoDome from '../../assets/TokyoDome.jpg';
import UniversalStudiosJapan3 from '../../assets/universal_studios_japan3.jpg';
import OsakaAquarium1 from '../../assets/Osaka_aquarium1.jpg';
import OsakaArchitecture5 from '../../assets/OsakaArchitecture5.png';
import OsakaArchitecture2 from '../../assets/OsakaArchitecture2.png';
import OsakaArchitecture3 from '../../assets/OsakaArchitecture3.png';
import OsakaArchitecture4 from '../../assets/OsakaArchitecture4.png';
import Kyoto_FushimiInari1 from '../../assets/Kyoto_FushimiInari1.jpg';
import Kyoto_UjiBridge1 from '../../assets/Kyoto_UjiBridge1.jpg';
import Miyajima_Itsukushima_Torii from '../../assets/Miyajima_Itsukushima_Torii.jpg';
import Tomonoura_Harbor from '../../assets/Tomonoura_Harbor.jpg';
import KobeFerris from '../../assets/KobeFerris.jpg';
import KobeSkyline from '../../assets/KobeSkyline.jpg';
import KobeBeKobe from '../../assets/KobeBeKobe.jpg';
import KobeHarborland from '../../assets/KobeHarborland.jpg';
import KobePortTowerNight from '../../assets/KobePortTowerNight.jpg';
import KobePortTower from '../../assets/KobePortTower.jpg';
import Kanazawa_HigashiChaya from '../../assets/Kanazawa_HigashiChaya.jpg';
import Kanazawa_YuwakuOnsen from '../../assets/Kanazawa_YuwakuOnsen.jpg';
import Kyoto_Byodoin from '../../assets/Kyoto_Byodoin.jpg';
import Otaru_Canal_Winter from '../../assets/Otaru_Canal_Winter.jpg';
import Sapporo_SusukinoNight from '../../assets/Sapporo_SusukinoNight.jpg';
import theritzcarlton from '../../assets/theritzcarlton.jpg';
import okinawacruising from '../../assets/okinawacruising.jpg';
import nagoyawcs2 from '../../assets/nagoyawcs2.jpg';
import fukugourmet from '../../assets/fukugourmet.jpg';
import fukuanimate from '../../assets/fukuanimate.jpg';
import suzume from '../../assets/suzume.jpg';
import SapporoTower from '../../assets/SapporoTower.jpg';
import nakasumap from '../../assets/nakasumap.jpg';
import kushidashrine from '../../assets/kushidashrine.jpg';
import marineworld from '../../assets/marineworld.jpg';
import paypaydome from '../../assets/paypaydome.jpg';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const planDetails: Record<number, any> = {
    1: {
      title: '食い倒れ東京! 2泊3日グルメ旅',
      description:
        '築地市場の新鮮な海の幸から、新宿の深夜ラーメンまで。東京の「うまい!」をすべて味わい尽くす、食いしん坊のためのプランです。',
      author: 'ソヒョン',
      type: '一人旅',
      city: '東京',
      image: Tsukiji,
      heroImage: Tsukiji,
      breadcrumb: ['東京', '築地市場', 'グルメ', '食い倒れ'],
      contentTitle: '東京グルメ旅の基本情報',
      spots: ['築地市場', '新宿ラーメン', '浅草グルメ'],
      content:
        '東京は日本最大のグルメ都市。築地市場の新鮮な海の幸から、新宿の深夜ラーメンまで、東京の「うまい!」をすべて味わい尽くす、食いしん坊のためのプランです。',
    },
    3: {
      title: '心安らぐ京都、癒やしの週末',
      description:
        '嵐山の竹林を散策し、静かな旅館で温泉に浸かる。古都の美しい景色の中で、心と体をリフレッシュする週末旅行。',
      author: 'セヒョン',
      type: '一人旅',
      city: '京都',
      image: Kinkakuji,
      heroImage: Kinkakuji,
      breadcrumb: ['京都', '嵐山', '竹林', '癒やし'],
      contentTitle: '京都癒やし旅の基本情報',
      spots: ['嵐山竹林', '金閣寺', '清水寺'],
      content:
        '嵐山の竹林を散策し、静かな旅館で温泉に浸かる。古都の美しい景色の中で、心と体をリフレッシュする週末旅行。',
    },
    4: {
      title: '福岡屋台めぐり！博多グルメ紀行',
      description: 'とんこつラーメンと福岡の名所を巡る旅。',
      author: 'オンピック',
      type: '二人旅',
      city: '福岡',
      image: fukugourmet,
      heroImage: fukugourmet,
      breadcrumb: ['福岡', '屋台', 'グルメ', '博多'],
      contentTitle: '福岡グルメ旅の基本情報',
      spots: ['屋台グルメ', 'とんこつラーメン', '博多名所'],
      content: 'とんこつラーメンと福岡の名所を巡る旅。福岡の屋台文化を体験し、地元の美味しい料理を堪能できます。',
    },
    5: {
      title: '大自然を満喫！夏の北海道・札幌ドライブ',
      description: '富良野のラベンダー畑と海鮮を味わう旅。',
      author: 'ドアン',
      type: '二人旅',
      city: '札幌',
      image: SapporoTower,
      heroImage: SapporoTower,
      breadcrumb: ['札幌', '富良野', 'ラベンダー', 'ドライブ'],
      contentTitle: '北海道ドライブ旅の基本情報',
      spots: ['富良野ラベンダー', '札幌海鮮', '大自然ドライブ'],
      content:
        '富良野のラベンダー畑と海鮮を味わう旅。北海道の大自然をドライブで満喫し、美しい景色と美味しい料理を楽しめます。',
    },
    6: {
      title: '絶景ビーチリゾート！沖縄でのんびり休暇',
      description: 'エメラルドグリーンの海でシュノーケリングと夕日鑑賞。',
      author: 'ソヒョン',
      type: '二人旅',
      city: '沖縄',
      image: OkinawaResort,
      heroImage: OkinawaResort,
      breadcrumb: ['沖縄', 'ビーチ', 'リゾート', 'シュノーケリング'],
      contentTitle: '沖縄リゾート旅の基本情報',
      spots: ['ビーチリゾート', 'シュノーケリング', '夕日鑑賞'],
      content:
        'エメラルドグリーンの海でシュノーケリングと夕日鑑賞。沖縄の美しいビーチでリラックスした時間を過ごせます。',
    },
    8: {
      title: 'ワールドコスプレサミット',
      description: '毎年夏に名古屋で開催される世界規模のコスプレイベント。',
      author: 'コスプレファン',
      type: 'グループ旅',
      city: '名古屋',
      image: nagoyawcs2,
      heroImage: nagoyawcs2,
      breadcrumb: ['名古屋', 'コスプレ', 'イベント', 'ワールドサミット'],
      contentTitle: 'ワールドコスプレサミットの基本情報',
      spots: ['コスプレイベント', '名古屋観光', 'アニメ文化'],
      content:
        '毎年夏に名古屋で開催される世界規模のコスプレイベント。世界中のコスプレイヤーが集まる大きなイベントです。',
    },
    9: {
      title: '広島平和記念と宮島の旅',
      description: '原爆ドームと厳島神社を巡る平和と歴史の旅。',
      author: 'ハナコ',
      type: '一人旅',
      city: '広島',
      image: HiroShima,
      heroImage: HiroShima,
      breadcrumb: ['広島', '平和記念', '宮島', '歴史'],
      contentTitle: '広島平和記念旅の基本情報',
      spots: ['原爆ドーム', '厳島神社', '平和記念公園'],
      content: '原爆ドームと厳島神社を巡る平和と歴史の旅。広島の歴史を学び、平和の大切さを感じることができます。',
    },
    11: {
      title: '天気の子聖地巡礼！東京スカイツリーと台場',
      description:
        '「天気の子」の舞台となった東京の名所を巡る。スカイツリー、台場、新宿など、映画に登場した場所で主人公たちの気持ちを感じてみよう。',
      author: '映画好き',
      type: '二人旅',
      city: '東京',
      image: tenkinoko,
      heroImage: tenkinoko,
      breadcrumb: ['東京', '天気の子', '聖地巡礼', 'スカイツリー'],
      contentTitle: '天気の子聖地巡礼の基本情報',
      spots: ['スカイツリー', '台場', '新宿'],
      content:
        '「天気の子」の舞台となった東京の名所を巡る。スカイツリー、台場、新宿など、映画に登場した場所で主人公たちの気持ちを感じてみよう。',
    },
    12: {
      title: 'デジモンアドベンチャー聖地巡礼！お台場と光が丘',
      description:
        'デジモンアドベンチャーの聖地を巡る旅。お台場のフジテレビ、光が丘公園、新宿駅など、アニメファンなら一度は訪れたい場所をめぐろう。',
      author: 'デジモンファン',
      type: '一人旅',
      city: '東京',
      image: Digimon4,
      heroImage: Digimon4,
      breadcrumb: ['東京', 'デジモン', '聖地巡礼', 'お台場'],
      contentTitle: 'デジモン聖地巡礼の基本情報',
      spots: ['お台場', '光が丘公園', '新宿駅'],
      content:
        'デジモンアドベンチャーの聖地を巡る旅。お台場のフジテレビ、光が丘公園、新宿駅など、アニメファンなら一度は訪れたい場所をめぐろう。',
    },
    13: {
      title: '東京温泉巡り！箱根と日光でリラックス',
      description:
        '東京近郊の名湯を巡る旅。箱根温泉で富士山を眺めながら、日光温泉で歴史を感じながら、心も体もリフレッシュしよう。',
      author: '温泉好き',
      type: '二人旅',
      city: '東京',
      image: hakoneonsen,
      heroImage: hakoneonsen,
      breadcrumb: ['東京', '温泉', '箱根', '日光'],
      contentTitle: '東京温泉巡りの基本情報',
      spots: ['箱根温泉', '日光温泉', '富士山'],
      content:
        '東京近郊の名湯を巡る旅。箱根温泉で富士山を眺めながら、日光温泉で歴史を感じながら、心も体もリフレッシュしよう。',
    },
    14: {
      title: '君の名は。聖地巡礼！渋谷と代々木',
      description:
        '「君の名は。」の舞台となった東京の名所を巡る。渋谷のスクランブル交差点、代々木の神社、新宿御苑など、映画に登場した場所で主人公たちの気持ちを感じてみよう。',
      author: 'アニメファン',
      type: '二人旅',
      city: '東京',
      image: KiminoNamaewa,
      heroImage: KiminoNamaewa,
      breadcrumb: ['東京', '君の名は', '聖地巡礼', '渋谷'],
      contentTitle: '君の名は聖地巡礼の基本情報',
      spots: ['渋谷', '代々木', '新宿御苑'],
      content:
        '「君の名は。」の舞台となった東京の名所を巡る。渋谷のスクランブル交差点、代々木の神社、新宿御苑など、映画に登場した場所で主人公たちの気持ちを感じてみよう。',
    },
    16: {
      title: 'レゴランド・ジャパン！家族で楽しむテーマパーク',
      description:
        '名古屋のレゴランド・ジャパンで、レゴブロックの世界を体験しよう。子供から大人まで楽しめるアトラクションとレゴの魅力を満喫。',
      author: 'ファミリー',
      type: '家族旅',
      city: '名古屋',
      image: NagoyaLego,
      heroImage: NagoyaLego,
      breadcrumb: ['名古屋', 'レゴランド', 'テーマパーク', '家族'],
      contentTitle: 'レゴランド・ジャパンの基本情報',
      spots: ['レゴアトラクション', '家族向け施設', '名古屋観光'],
      content:
        '名古屋のレゴランド・ジャパンで、レゴブロックの世界を体験しよう。子供から大人まで楽しめるアトラクションとレゴの魅力を満喫。',
    },
    17: {
      title: 'ジブリパーク！スタジオジブリの世界へ',
      description:
        '愛知県長久手市のジブリパークで、宮崎駿監督のアニメの世界を体験。トトロの森、魔女の宅急便の世界など、ジブリファン必見。',
      author: 'ジブリファン',
      type: '一人旅',
      city: '名古屋',
      image: jiburiPost,
      heroImage: jiburiPost,
      breadcrumb: ['名古屋', 'ジブリパーク', 'アニメ', '宮崎駿'],
      contentTitle: 'ジブリパークの基本情報',
      spots: ['トトロの森', '魔女の宅急便', 'ジブリの世界'],
      content:
        '愛知県長久手市のジブリパークで、宮崎駿監督のアニメの世界を体験。トトロの森、魔女の宅急便の世界など、ジブリファン必見。',
    },
    18: {
      title: '天神で楽しむ福岡のオタク文化とショッピング',
      description: '天神の地下街から地上まで、オタク文化とショッピングを満喫する旅。',
      author: 'オタク好き',
      type: '一人旅',
      city: '福岡',
      image: fukuanimate,
      heroImage: fukuanimate,
      breadcrumb: ['福岡', '天神', 'オタク文化', 'ショッピング'],
      contentTitle: '福岡オタク文化旅の基本情報',
      spots: ['天神地下街', 'オタク文化', 'ショッピング'],
      content: '天神の地下街から地上まで、オタク文化とショッピングを満喫する旅。福岡のオタク文化を体験できます。',
    },
    19: {
      title: 'すずめの戸締まり聖地巡礼！福岡の神秘的な旅',
      description: 'アニメ「すずめの戸締まり」の舞台となった福岡の聖地を巡る旅。',
      author: 'アニメファン',
      type: '一人旅',
      city: '福岡',
      image: suzume,
      heroImage: suzume,
      breadcrumb: ['福岡', 'すずめの戸締まり', '聖地巡礼', 'アニメの世界'],
      contentTitle: 'すずめの戸締まり聖地巡礼の基本情報',
      spots: ['すずめの戸締まり紹介', 'アニメの世界観', '豊後森駅'],
      content:
        '2022年に公開された新海誠監督のアニメーション映画「すずめの戸締まり」は、福岡を舞台にした壮大なファンタジー作品です。主人公の岩戸すずめが日本各地の「後門」を閉じる旅を通じて、災害と向き合いながら成長していく物語が描かれています。福岡は物語の重要な舞台として登場し、多くのファンが聖地巡礼に訪れています。',
    },
    20: {
      title: 'ホークス観戦と屋台グルメの夜',
      description: 'PayPayドームで野球観戦後、中洲屋台で博多グルメを満喫。',
      author: 'スポーツ好き',
      type: '二人旅',
      city: '福岡',
      image: HakataCity,
      heroImage: HakataCity,
      breadcrumb: ['福岡', 'ホークス', '野球観戦', '屋台グルメ'],
      contentTitle: '福岡スポーツ＆グルメ旅の基本情報',
      spots: ['PayPayドーム', '中洲屋台', '博多グルメ'],
      content: 'PayPayドームで野球観戦後、中洲屋台で博多グルメを満喫。福岡のスポーツとグルメを同時に楽しめる旅です。',
    },
    21: {
      title: '東京ディズニーランド',
      description: '世界で最も人気のテーマパーク。夢の国で楽しい時間を過ごそう',
      author: 'ディズニーファン',
      type: '家族旅',
      city: '東京',
      image: TokyoDisneyland,
      heroImage: TokyoDisneyland,
      breadcrumb: ['東京', 'ディズニーランド', 'テーマパーク', '家族'],
      contentTitle: '東京ディズニーランドの基本情報',
      spots: ['アトラクション', 'パレード', 'ショー'],
      content:
        '世界で最も人気のテーマパーク。夢の国で楽しい時間を過ごそう。東京ディズニーランドで魔法のような体験を楽しめます。',
    },
    22: {
      title: '日光東照宮',
      description: '徳川家康を祀る世界遺産の神社。豪華絢爛な建築が美しい',
      author: '歴史好き',
      type: '一人旅',
      city: '東京',
      image: NikkoToshogu,
      heroImage: NikkoToshogu,
      breadcrumb: ['東京', '日光', '東照宮', '世界遺産'],
      contentTitle: '日光東照宮の基本情報',
      spots: ['東照宮', '陽明門', '眠り猫'],
      content:
        '徳川家康を祀る世界遺産の神社。豪華絢爛な建築が美しい日光東照宮で日本の歴史と文化を感じることができます。',
    },
    23: {
      title: '鎌倉',
      description: '歴史と文化が息づく古都。大仏とアニメの聖地',
      author: '歴史好き',
      type: '一人旅',
      city: '神奈川',
      image: Kamakura,
      heroImage: Kamakura,
      breadcrumb: ['神奈川', '鎌倉', '大仏', '歴史'],
      contentTitle: '鎌倉観光の基本情報',
      spots: ['鎌倉大仏', '鶴岡八幡宮', '小町通り'],
      content: '歴史と文化が息づく古都。大仏とアニメの聖地としても知られる鎌倉で、日本の伝統文化を体験できます。',
    },
    24: {
      title: '箱根温泉',
      description: '富士山を望む名湯。リラックスできる温泉地',
      author: '温泉好き',
      type: '二人旅',
      city: '神奈川',
      image: HakoneOnsen,
      heroImage: HakoneOnsen,
      breadcrumb: ['神奈川', '箱根', '温泉', '富士山'],
      contentTitle: '箱根温泉の基本情報',
      spots: ['強羅温泉', '芦ノ湖', '箱根神社'],
      content:
        '箱根温泉は富士山を望む人気の温泉地。豊富な泉質の温泉と美しい自然景観が魅力で、日帰り温泉から高級旅館まで様々な宿泊施設があります。芦ノ湖でのクルーズや箱根神社の参拝、美術館巡りなど、温泉以外の楽しみも豊富です。',
    },
    25: {
      title: '渋谷',
      description: '若者の街として有名。スクランブル交差点とハチ公がシンボル',
      author: '若者文化好き',
      type: '一人旅',
      city: '東京',
      image: ShibuyaScramble,
      heroImage: ShibuyaScramble,
      breadcrumb: ['東京', '渋谷', 'スクランブル交差点', 'ハチ公'],
      contentTitle: '渋谷観光の基本情報',
      spots: ['スクランブル交差点', 'ハチ公像', '渋谷109'],
      content:
        '若者の街として有名。スクランブル交差点とハチ公がシンボルとして知られる渋谷で、日本の若者文化を体験できます。',
    },
    26: {
      title: '名古屋城',
      description: '徳川家康が築いた城。金色のシャチホコが有名',
      author: '歴史好き',
      type: '一人旅',
      city: '名古屋',
      image: NagoyaCastle,
      heroImage: NagoyaCastle,
      breadcrumb: ['名古屋', '名古屋城', '徳川家康', '歴史'],
      contentTitle: '名古屋城の基本情報',
      spots: ['天守閣', '本丸御殿', 'シャチホコ'],
      content: '徳川家康が築いた城。金色のシャチホコが有名な名古屋城で、江戸時代の歴史と文化を学ぶことができます。',
    },
    27: {
      title: '大須商店街',
      description: '漫画・アニメグッズ、電子機器、食べ物まで揃う商店街',
      author: 'オタク好き',
      type: '一人旅',
      city: '名古屋',
      image: osushotenkai,
      heroImage: osushotenkai,
      breadcrumb: ['名古屋', '大須商店街', 'オタク文化', 'ショッピング'],
      contentTitle: '大須商店街の基本情報',
      spots: ['アニメグッズ', '電子機器', 'グルメ'],
      content:
        '漫画・アニメグッズ、電子機器、食べ物まで揃う商店街。名古屋の大須商店街でオタク文化とショッピングを楽しめます。',
    },
    28: {
      title: '熱田神宮',
      description: '日本三大神剣の一つ、草薙剣を祀る神宮',
      author: '歴史好き',
      type: '一人旅',
      city: '名古屋',
      image: Atsutasinkyu,
      heroImage: Atsutasinkyu,
      breadcrumb: ['名古屋', '熱田神宮', '草薙剣', '神社'],
      contentTitle: '熱田神宮の基本情報',
      spots: ['本宮', '草薙剣', '宝物館'],
      content: '日本三大神剣の一つ、草薙剣を祀る神宮。名古屋の熱田神宮で日本の神話と歴史を感じることができます。',
    },
    29: {
      title: 'SCMAGLEV and Railway Park',
      description: 'JR東海運営。新幹線、リニア展示。鉄道ファンの聖地',
      author: '鉄道ファン',
      type: '一人旅',
      city: '名古屋',
      image: Nagoyalinear,
      heroImage: Nagoyalinear,
      breadcrumb: ['名古屋', '鉄道博物館', '新幹線', 'リニア'],
      contentTitle: 'SCMAGLEV and Railway Parkの基本情報',
      spots: ['新幹線展示', 'リニア展示', '鉄道歴史'],
      content:
        'JR東海運営。新幹線、リニア展示。鉄道ファンの聖地として知られるSCMAGLEV and Railway Parkで、日本の鉄道技術を学ぶことができます。',
    },
    30: {
      title: '名古屋市科学館',
      description: '世界最大級のプラネタリウム。科学愛好家に人気',
      author: '科学好き',
      type: '家族旅',
      city: '名古屋',
      image: NagoyaScience,
      heroImage: NagoyaScience,
      breadcrumb: ['名古屋', '科学館', 'プラネタリウム', '科学'],
      contentTitle: '名古屋市科学館の基本情報',
      spots: ['プラネタリウム', '科学展示', '体験コーナー'],
      content: '世界最大級のプラネタリウム。科学愛好家に人気の名古屋市科学館で、科学の不思議を体験できます。',
    },
    31: {
      title: '名古屋港水族館',
      description: 'シャチ、ベルーガ、イルカショーで有名。家族連れに人気',
      author: 'ファミリー',
      type: '家族旅',
      city: '名古屋',
      image: OkiAquarium,
      heroImage: OkiAquarium,
      breadcrumb: ['名古屋', '水族館', 'シャチ', 'イルカショー'],
      contentTitle: '名古屋港水族館の基本情報',
      spots: ['シャチショー', 'ベルーガ', 'イルカショー'],
      content: 'シャチ、ベルーガ、イルカショーで有名。家族連れに人気の名古屋港水族館で、海の生き物たちと触れ合えます。',
    },
    32: {
      title: '秋葉原',
      description: 'アニメ・ゲーム・電子機器の聖地。オタク文化の中心地',
      author: 'オタク好き',
      type: '一人旅',
      city: '東京',
      image: akihabara,
      heroImage: akihabara,
      breadcrumb: ['東京', '秋葉原', 'オタク文化', 'アニメ'],
      contentTitle: '秋葉原観光の基本情報',
      spots: ['アニメショップ', 'ゲームセンター', '電子機器'],
      content:
        'アニメ・ゲーム・電子機器の聖地。オタク文化の中心地として知られる秋葉原で、日本のポップカルチャーを体験できます。',
    },
    33: {
      title: '富士急ハイランド',
      description: '絶叫マシンで有名なテーマパーク。富士山を背景にした絶景アトラクション',
      author: '絶叫好き',
      type: '一人旅',
      city: '東京',
      image: fujiq1,
      heroImage: fujiq1,
      breadcrumb: ['東京', '富士急ハイランド', '絶叫マシン', '富士山'],
      contentTitle: '富士急ハイランドの基本情報',
      spots: ['絶叫マシン', '富士山ビュー', 'アトラクション'],
      content:
        '絶叫マシンで有名なテーマパーク。富士山を背景にした絶景アトラクションを楽しめる富士急ハイランドで、スリルと絶景を同時に体験できます。',
    },
    34: {
      title: '金沢の伝統文化体験！東茶屋街散策',
      description: '江戸時代の茶屋街・東茶屋街を散策し、金沢の伝統工芸を体験。加賀友禅や金箔細工の美しさを堪能する旅。',
      author: '伝統文化好き',
      type: '一人旅',
      city: '金沢',
      image: Kanazawa_HigashiChaya,
      heroImage: Kanazawa_HigashiChaya,
      breadcrumb: ['金沢', '東茶屋街', '伝統工芸', '加賀友禅'],
      contentTitle: '金沢伝統文化体験の基本情報',
      spots: ['東茶屋街', '加賀友禅', '金箔細工'],
      content: '江戸時代の茶屋街・東茶屋街を散策し、金沢の伝統工芸を体験。加賀友禅や金箔細工の美しさを堪能する旅。',
    },
    35: {
      title: '金沢の奥座敷！湯涌温泉で癒やしの旅',
      description: '金沢の奥座敷・湯涌温泉で自然に囲まれた静かな時間を過ごす。兼六園散策と合わせて金沢の魅力を満喫。',
      author: '温泉好き',
      type: '二人旅',
      city: '金沢',
      image: Kanazawa_YuwakuOnsen,
      heroImage: Kanazawa_YuwakuOnsen,
      breadcrumb: ['金沢', '湯涌温泉', '奥座敷', '癒やし'],
      contentTitle: '金沢湯涌温泉の基本情報',
      spots: ['湯涌温泉', '兼六園', '自然散策'],
      content: '金沢の奥座敷・湯涌温泉で自然に囲まれた静かな時間を過ごす。兼六園散策と合わせて金沢の魅力を満喫。',
    },
  };

  const planId = id ? parseInt(id) : 1;
  const plan = planDetails[planId as keyof typeof planDetails] || planDetails[1];

  return (
    <div className="min-h-screen">
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

        {/* Back Button - positioned absolutely */}
        <button
          onClick={() => {
            if (location.state?.from) {
              navigate(location.state.from);
            } else {
              navigate('/spots');
            }
          }}
          className="absolute top-4 right-6 z-10 px-4 py-2 bg-white/20 rounded-lg text-gray-800 font-semibold hover:bg-white/30 transition-colors"
        >
          ← 戻る
        </button>

        {/* Title and Description - positioned absolutely at bottom */}
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <h1 className="text-4xl font-bold text-white mb-4">{plan.title}</h1>
          <p className="text-lg text-white/90 max-w-3xl">{plan.description}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{plan.contentTitle}</h2>
              <p className="text-gray-700 leading-relaxed">{plan.content}</p>
            </div>

            <div className="border-t pt-8">
              <div className="flex justify-between items-center mb-6">
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
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">作成者:</span> {plan.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">旅行タイプ:</span> {plan.type}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-8 mt-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">このプランを参考に旅を計画しよう！</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  タビログのプランを参考に、あなただけのオリジナル旅行プランを作成してみてください。
                  各地の観光スポットやグルメ情報を参考に、思い出に残る旅を楽しんでくださいね！
                </p>
                <p className="text-gray-700 leading-relaxed">
                  皆さんも素敵な旅の思い出を作って、タビログでシェアしてくださいね！
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
