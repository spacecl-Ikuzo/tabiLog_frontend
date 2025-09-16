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
import Digimon4 from '../../assets/Digimon4.jpg';
import OdaibaDigimon from '../../assets/OdaibaDigimon.jpg';
import Digimon3 from '../../assets/Digimon3.jpg';
import Digimon2 from '../../assets/Digimon2.jpg';
import HikarigaokaDigimon from '../../assets/HikarigaokaDigimon.jpg';
import jiburiPost from '../../assets/jiburiPost.jpg';
import jiburimap from '../../assets/jiburimap.jpg';
import jiburimori from '../../assets/jiburimori.jpg';
import jiburi4 from '../../assets/jiburi4.jpg';
import hakoneonsen from '../../assets/hakoneonsen.jpg';
import nikkotoshogu from '../../assets/nikkotoshogu.jpg';
import nikkoonsen from '../../assets/nikkoonsen.jpg';
import NagoyaLego from '../../assets/NagoyaLego.jpg';
import LegoAttraction from '../../assets/LegoAttraction.jpg';
import LegoTaiken from '../../assets/LegoTaiken.jpg';
import LegoBoat from '../../assets/LegoBoat.jpg';

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
    12: {
      title: 'デジモンアドベンチャー聖地巡礼！お台場と光が丘',
      description:
        'デジモンアドベンチャーの聖地を巡る旅。お台場のフジテレビ、光が丘公園、新宿駅など、アニメファンなら一度は訪れたい場所をめぐろう。',
      author: 'デジモンファン',
      image: Digimon4,
      heroImage: Digimon4,
      breadcrumb: ['東京', 'お台場', '光が丘', 'デジモンアドベンチャー聖地巡礼'],
      contentTitle: 'デジモンアドベンチャー聖地巡礼の基本情報',
      spots: ['デジモンアドベンチャー紹介', 'お台場フジテレビ', '光が丘公園', '新宿駅'],
      content:
        '1999年に放送開始された「デジモンアドベンチャー」の舞台となった東京の名所を巡る聖地巡礼プランです。アニメに登場した場所を実際に訪れ、選ばれし子どもたちの冒険を追体験してみましょう。<br><br>【2.1 デジモンアドベンチャー紹介】<br>「デジモンアドベンチャー」は1999年に放送開始されたテレビアニメで、デジタルワールドでデジモンと出会った選ばれし子どもたちの冒険を描いた作品です。太一、アグモン、ヤマト、ガブモンなど、個性豊かなキャラクターたちが繰り広げる感動的なストーリーは、多くのアニメファンに愛され続けています。東京を舞台にしたリアルな背景描写も作品の魅力の一つです。<br><br>【2.2 お台場フジテレビ】<br>アニメの重要な舞台として登場するお台場のフジテレビ。選ばれし子どもたちがデジタルワールドから戻ってきた場所として描かれています。実際にフジテレビ前を訪れることで、アニメの世界観と現実の東京の風景が重なり合う特別な体験ができます。お台場の美しい夜景とフジテレビの球体展望台は、デジモンファンにとって特別な意味を持つ場所です。<br><br>【2.3 光が丘公園】<br>アニメの冒頭で重要な役割を果たす光が丘公園。選ばれし子どもたちが最初にデジタルワールドに送られた場所として描かれています。実際の公園を訪れることで、アニメで描かれた神秘的な雰囲気と現実の自然の美しさを同時に感じることができます。光が丘公園の広大な緑地は、デジモンの世界観を体現する特別な場所です。<br><br>【2.4 新宿駅】<br>アニメの重要な舞台として登場する新宿駅。選ばれし子どもたちが東京での生活を送る場所として描かれています。実際の新宿駅を訪れることで、アニメの世界観と現実の東京の活気を同時に感じることができます。新宿駅の複雑な構造と人々の行き交う様子は、デジモンのテーマである現実とデジタルワールドの境界を象徴する特別な場所です。',
    },
    13: {
      title: '東京温泉巡り！箱根と日光でリラックス',
      description:
        '東京近郊の名湯を巡る旅。箱根温泉で富士山を眺めながら、日光温泉で歴史を感じながら、心も体もリフレッシュしよう。',
      author: '温泉好き',
      image: hakoneonsen,
      heroImage: hakoneonsen,
      breadcrumb: ['東京', '箱根', '日光', '温泉巡り'],
      contentTitle: '東京温泉巡りの基本情報',
      spots: ['温泉巡り紹介', '箱根温泉', '日光温泉', '温泉の楽しみ方'],
      content:
        '東京から日帰りで楽しめる人気の温泉地を巡る旅プランです。箱根と日光の名湯で、心も体もリフレッシュしながら日本の温泉文化を体験してみましょう。<br><br>【2.1 温泉巡り紹介】<br>日本は世界有数の温泉大国で、全国各地に数多くの温泉地があります。東京からも電車で1-2時間程度でアクセスできる箱根や日光は、特に人気の高い温泉地です。温泉には様々な効能があり、疲労回復、美肌効果、リラックス効果などが期待できます。日本の温泉文化を体験しながら、日常の疲れを癒やしてみましょう。<br><br>【2.2 箱根温泉】<br>富士山を望む箱根は、東京から最もアクセスしやすい人気の温泉地です。箱根温泉郷には様々な泉質の温泉があり、強羅温泉、芦ノ湖温泉、湯本温泉など、それぞれ異なる特徴があります。富士山の美しい景色を眺めながら入る温泉は格別で、特に秋の紅葉シーズンは絶景です。箱根ロープウェイや芦ノ湖遊覧船など、温泉以外の観光も楽しめます。<br><br>【2.3 日光温泉】<br>世界遺産の日光東照宮で有名な日光は、歴史と自然が調和した温泉地です。日光温泉は山間部の静寂な環境で、都会の喧騒を忘れてゆっくりと過ごすことができます。日光東照宮や華厳の滝などの観光スポットと組み合わせて楽しめるのも魅力です。特に冬の雪景色と温泉の組み合わせは、日本の美しい四季を感じられる特別な体験です。<br><br>【2.4 温泉の楽しみ方】<br>日本の温泉を楽しむためには、基本的なマナーを理解することが重要です。入浴前には必ず体を洗い、タオルを湯船に入れない、長い髪は結ぶなどのルールがあります。また、温泉の効能を最大限に活かすためには、適度な時間をかけてゆっくりと入浴し、入浴後は十分な水分補給を心がけましょう。温泉地の地元料理や温泉卵なども、温泉旅の楽しみの一つです。',
    },
    16: {
      title: 'レゴランド・ジャパン！家族で楽しむテーマパーク',
      description:
        '名古屋のレゴランド・ジャパンで、レゴブロックの世界を体験しよう。子供から大人まで楽しめるアトラクションとレゴの魅力を満喫。',
      author: 'ファミリー',
      image: NagoyaLego,
      heroImage: NagoyaLego,
      breadcrumb: ['名古屋', 'レゴランド', 'テーマパーク', '家族旅行'],
      contentTitle: 'レゴランド・ジャパンの基本情報',
      spots: ['レゴランド紹介', 'アトラクション', 'レゴブロック体験', 'ボートライド'],
      content:
        '名古屋港に位置するレゴランド・ジャパンは、世界で8番目のレゴランドとして2017年にオープンしました。レゴブロックの世界観をテーマにしたテーマパークで、家族連れに大人気のスポットです。<br><br>【2.1 レゴランド紹介】<br>レゴランド・ジャパンは、デンマークのレゴ社が運営するテーマパークです。2歳から12歳の子供をメインターゲットにしていますが、大人も十分楽しめる内容になっています。レゴブロックで作られたミニランドでは、日本の有名な観光地が精巧に再現されており、レゴの技術力の高さを実感できます。パーク内は7つのエリアに分かれており、それぞれが異なるテーマで構成されています。<br><br>【2.2 アトラクション】<br>レゴランドには様々なアトラクションがあります。レゴニンジャゴーは忍者をテーマにした4Dアトラクションで、迫力のある映像とエフェクトが楽しめます。ドラゴンアトラクションは中世の城をテーマにしたコースターで、適度なスリルを味わえます。また、レゴシティでは子供たちが消防士や警察官になって体験できるアトラクションもあり、職業体験の楽しさも味わえます。<br><br>【2.3 レゴブロック体験】<br>パーク内にはレゴブロックで自由に遊べるエリアが多数あります。レゴクリエイティブワークショップでは、スタッフの指導のもとでレゴ作品を作ることができます。また、レゴショップでは限定商品やパークオリジナルのレゴセットを購入できます。レゴブロックの組み立て体験を通じて、創造力と集中力を養うことができます。<br><br>【2.4 ボートライド】<br>レゴランド・ジャパンの人気アトラクションの一つ、ボートライド。レゴブロックで作られた美しい風景の中をボートで巡る体験型アトラクションです。家族みんなでボートに乗り、レゴの世界観を楽しみながら水辺の景色を満喫できます。特に子供たちにとっては、レゴの世界に実際に入り込んだような特別な体験ができる人気のアトラクションです。',
    },
    17: {
      title: 'ジブリパーク！スタジオジブリの世界へ',
      description:
        '愛知県長久手市のジブリパークで、宮崎駿監督のアニメの世界を体験。トトロの森、魔女の宅急便の世界など、ジブリファン必見。',
      author: 'ジブリファン',
      image: jiburiPost,
      heroImage: jiburiPost,
      breadcrumb: ['愛知', '長久手', 'ジブリパーク', 'アニメの世界'],
      contentTitle: 'ジブリパークの基本情報',
      spots: ['ジブリパーク紹介', 'トトロの森', '魔女の宅急便', 'ジブリの世界観'],
      content:
        '2022年11月にオープンしたジブリパークは、愛知県長久手市の愛・地球博記念公園内に位置するテーマパークです。スタジオジブリのアニメーション作品の世界観を再現した、ジブリファンにとって夢のような場所です。<br><br>【2.1 ジブリパーク紹介】<br>ジブリパークは宮崎駿監督の「テーマパークは作らない」という方針に基づいて、従来のテーマパークとは異なるコンセプトで作られています。アトラクションではなく、作品の世界観を体験できる「場」として設計されており、訪れる人々が自然と作品の世界に没入できるようになっています。パーク内は5つのエリアに分かれており、それぞれが異なるジブリ作品の世界を表現しています。<br><br>【2.2 トトロの森】<br>「となりのトトロ」の世界を再現したエリアです。サツキとメイの家が忠実に再現されており、実際に中に入って生活感を感じることができます。家の周りにはトトロが住む森が広がり、自然の美しさと神秘的な雰囲気を体験できます。トトロのバス停も再現されており、作品の世界観に完全に没入できる特別な空間です。<br><br>【2.3 魔女の宅急便】<br>「魔女の宅急便」の世界を再現したエリアでは、キキが住む街の雰囲気を体験できます。ヨーロッパ風の街並みと建物が美しく再現されており、キキの生活を追体験できる空間になっています。パン屋や雑貨店など、作品に登場するお店も再現されており、魔女の宅急便の世界観を存分に楽しめます。<br><br>【2.4 ジブリの世界観】<br>ジブリパーク全体を通じて、スタジオジブリが大切にしてきた「自然との調和」「人間の温かさ」「夢と希望」といったテーマを感じることができます。パーク内の自然環境も作品の世界観に合わせて設計されており、訪れる人々が自然と作品の主人公になったような気持ちを味わえます。ジブリの世界観を体感できる、他では味わえない特別な体験ができる場所です。',
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
                      : planId === 12
                      ? OdaibaDigimon
                      : planId === 13
                      ? nikkoonsen
                      : planId === 17
                      ? jiburimap
                      : planId === 16
                      ? LegoAttraction
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

          {/* Extra Images for Digimon Adventure Plan */}
          {planId === 12 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${HikarigaokaDigimon})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Digimon2})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Ghibli Park Plan */}
          {planId === 17 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${jiburimori})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${jiburi4})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Legoland Japan Plan */}
          {planId === 16 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${LegoTaiken})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${LegoBoat})` }}
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
