import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/layout/header';

// Assets
import TokyoHero from '../../assets/Tokyo.jpg';
import AsaKusa from '../../assets/AsaKusa.jpg';
import TokyoDome from '../../assets/TokyoDome.jpg';
import TokyoDome2 from '../../assets/TokyoDome2.jpg';
import DomeSpa from '../../assets/DomeSpa.jpg';
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
import FukuokaCastle2 from '../../assets/FukuokaCastle2.jpg';
import HakataCity from '../../assets/HakataCity.jpg';
import hakatadepartbelow from '../../assets/hakatadepartbelow.jpg';
import hakataIlumi from '../../assets/hakataIlumi.jpg';
import OkinawaHero from '../../assets/OkinawaResort.jpg';
import Shurijo from '../../assets/Shurijo.jpg';
import OkiAquarium from '../../assets/OkiAquarium.jpg';
import NagoyaCastle from '../../assets/NagoyaCastle.jpg';
import Atsutasinkyu from '../../assets/Atsutasinkyu.jpg';
import OsuHistory from '../../assets/OsuHistory.jpg';
import Osunatumaturi from '../../assets/Osunatumaturi.jpg';
import OsuIce from '../../assets/OsuIce.jpg';
import osushotenkai from '../../assets/osushotenkai.jpg';
import akihabara from '../../assets/akihabara.jpg';
import akibaanimate from '../../assets/akibaanimate.jpg';
import jetairyouiki from '../../assets/jetairyouiki.jpg';
import fujiq1 from '../../assets/fujiq1.jpg';
import fujiq2 from '../../assets/fujiq2.jpg';
import fujiq3 from '../../assets/fujiq3.jpg';
import Atsutamori from '../../assets/Atsutamori.jpg';
import Atsutatakara from '../../assets/Atsutatakara.jpg';
import Atsutaken from '../../assets/Atsutaken.jpg';
import Atsutahontou from '../../assets/Atsutahontou.jpg';
import NagoyaShinkansen from '../../assets/NagoyaShinkansen.jpg';
import nagoyasimul from '../../assets/nagoyasimul.jpg';
import NagoyaScience from '../../assets/NagoyaScience.jpg';
import nagoyaplanet from '../../assets/nagoyaplanet.jpg';
import Nagoyataiken from '../../assets/Nagoyataiken.jpg';
import nagoyatokubetsu from '../../assets/nagoyatokubetsu.jpg';
import nagoyasuizokukan from '../../assets/nagoyasuizokukan.jpg';
import NagoyaBelluga from '../../assets/NagoyaBelluga.jpg';
import nagoyairuka from '../../assets/nagoyairuka.jpg';
import NagoyaShachi from '../../assets/NagoyaShachi.jpg';
import HiroshimaHero from '../../assets/HiroShima.jpg';
import GenbakuDome from '../../assets/GenbakuDome.jpg';
import Miyajima from '../../assets/miyajima.jpg';
import KanazawaHero from '../../assets/Kanazawa.jpg';
import Kenrokuen from '../../assets/Kenrokuen.jpg';
import KanazawaCastle from '../../assets/KanazawaCastle.jpg';
// New images
import TokyoDisneyland from '../../assets/tokyodisneyland.jpg';
import DisneyResort from '../../assets/DisneyResort.jpg';
import DisneySea from '../../assets/DIsneySea.jpg';
import NikkoToshogu from '../../assets/nikkotoshogu.jpg';
import KamakuraSlamdunk from '../../assets/kamakuraSlamdunk.jpg';
import Kamakura from '../../assets/kamakura.jpg';
import GamakuraTaiButsu from '../../assets/GamakuraTaiButsu.jpg';
import HakoneOnsen from '../../assets/hakoneonsen.jpg';
import AdventureLand from '../../assets/AdventureLand.jpg';
import ToonTown from '../../assets/ToonTown.jpg';
import TokyoTowerCafe from '../../assets/tokyotowercafe.jpg';
import TowerSeeing from '../../assets/TowerSeeing.jpg';
import Tokubetsu from '../../assets/tokubetsu.jpg';
import NikkoNeko from '../../assets/NikkoNeko.jpg';
import NikkoSaru from '../../assets/NikkoSaru.jpg';
import YangMeimon from '../../assets/YangMeimon.jpg';
import DomeAttraction from '../../assets/DomeAttraction.jpg';
import Sensoujimap from '../../assets/sensoujimap.jpg';
import ShibuyaScramble from '../../assets/ShibuyaScramble.jpg';
import Meijisinku from '../../assets/meijisinku.jpg';
import Swallows from '../../assets/Swallows.jpg';
import ShibuyaBape from '../../assets/ShibuyaBape.jpg';
import NagoyaHonmaru from '../../assets/NagoyaHonmaru.jpg';
import NagoyaKingyo from '../../assets/NagoyaKingyo.jpg';
import NagoyaNijimaru from '../../assets/NagoyaNijimaru.jpg';
import Nagoya from '../../assets/Nagoya.jpg';
import FukuCastleSakura from '../../assets/FukuCastleSakura.jpg';
import nakasumap from '../../assets/nakasumap.jpg';
import nakasukawa from '../../assets/nakasukawa.jpg';
import NakasuNight from '../../assets/NakasuNight.jpeg';
import nakasuramen from '../../assets/nakasuramen.jpg';
import dazaifutenmangu from '../../assets/dazaifutenmangu.jpg';
import dazaihu from '../../assets/dazaihu.jpg';
import tobiume from '../../assets/tobiume.jpg';
import umegaemochi from '../../assets/umegaemochi.jpg';
import goshingyu from '../../assets/goshingyu.jpg';
import jiburimori from '../../assets/jiburimori.jpg';
import jiburi4 from '../../assets/jiburi4.jpg';
import LegoTaiken from '../../assets/LegoTaiken.jpg';
import LegoBoat from '../../assets/LegoBoat.jpg';
import kushidashrine from '../../assets/kushidashrine.jpg';
import gushidatori from '../../assets/gushidatori.jpg';
import gushidamatsuri from '../../assets/gushidamatsuri.jpg';
import gushidazinza from '../../assets/gushidazinza.jpg';
import kushidatorie from '../../assets/kushidatorie.jpg';
import paypaydome from '../../assets/paypaydome.jpg';
import paypaymap from '../../assets/paypaymap.jpg';
import softbankleedaeho from '../../assets/softbankleedaeho.jpg';
import paypaygourmet from '../../assets/paypaygourmet.jpg';
import paypayjapanseries from '../../assets/paypayjapanseries.png';
import marineworld from '../../assets/marineworld.jpg';
import marineaqua from '../../assets/marineaqua.jpg';
import asikashow from '../../assets/asikashow.jpg';
import marinehamabe from '../../assets/marinehamabe.jpg';

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
  東京: {
    '1': {
      title: '東京タワー',
      description: '東京のシンボルタワー。夜景が美しい観光スポット',
      author: 'タビログ編集部',
      heroImage: TokyoHero,
      breadcrumb: ['東京', '港区', '東京タワー'],
      contentTitle: '東京タワーの基本情報',
      spots: ['東京タワーカフェ', 'タワー展望', '大展望台', '特別展望台'],
      imageLeft: TokyoTowerCafe,
      imageRight: TowerSeeing,
      content:
        '東京タワーは高さ333mの電波塔で、昭和から令和に至るまで東京の景観を象徴するランドマークです。昼は街並みと富士山、夜は宝石のような夜景が一望でき、季節やイベントに合わせたライトアップも見どころ。フットタウンにはショップやフードコート、ポップカルチャーの展示も充実し、家族連れからカップル、海外旅行者まで幅広く楽しめます。アクセスは赤羽橋・御成門・神谷町など複数駅から徒歩圏で便利です。<br><br>【2.1 東京タワーカフェ】<br>東京タワー内にあるカフェで、展望台を眺めながら美味しいコーヒーや軽食を楽しめます。特別な記念日やデートにも最適なロマンチックな空間です。<br><br>【2.2 タワー展望】<br>東京タワーの展望台から見る東京の街並みは圧巻です。昼間は富士山まで見渡せ、夜は宝石のように輝く東京の夜景を楽しめます。<br><br>【2.3 大展望台】<br>150mの高さにある大展望台では、東京の街並みを360度見渡すことができます。天気の良い日には富士山も見える絶景スポットです。<br><br>【2.4 特別展望台】<br>250mの高さにある特別展望台は、より高い位置から東京の景色を楽しめます。より迫力のある眺望を体験したい方におすすめです。',
    },
    '2': {
      title: '浅草寺',
      description: '東京で最も古い寺院。雷門で有名な観光地',
      author: 'タビログ編集部',
      heroImage: AsaKusa,
      breadcrumb: ['東京', '台東区', '浅草寺'],
      contentTitle: '浅草寺の基本情報',
      spots: ['雷門', '仲見世通り', '本堂'],
      imageLeft: AsaKusa,
      imageRight: Sensoujimap,
      content:
        '浅草寺は628年創建と伝わる都内最古の寺院。雷門の大提灯と仲見世通りの賑わいが象徴的で、和菓子や工芸品の老舗が並ぶ参道は散策に最適です。四季折々の年中行事があり、江戸文化と信仰が今も息づいています。スカイツリーや隅田川クルーズと組み合わせた観光コースも人気です。<br><br>【2.1 雷門】<br>浅草寺のシンボルである雷門は、高さ3.9m、幅3.3mの巨大な提灯が特徴的です。門の左右には風神と雷神の像が安置されており、江戸時代から続く伝統的な建築美を今に伝えています。この門をくぐると、浅草寺の境内への入り口となります。夜間はライトアップされ、幻想的な雰囲気を演出します。<br><br>【2.2 仲見世通り】<br>雷門から本堂まで続く約250mの参道「仲見世通り」は、江戸時代から続く歴史ある商店街です。約90軒の店舗が並び、人形焼き、雷おこし、和菓子などの名物や、扇子、着物、工芸品などの伝統的な商品を販売しています。観光客で賑わうこの通りは、日本の伝統文化を体験できる貴重な空間です。<br><br>【2.3 本堂】<br>浅草寺の本堂は、観音菩薩を本尊とする聖観音宗の総本山です。現在の本堂は1958年に再建されたもので、江戸時代の建築様式を現代に再現しています。本堂内では参拝や写経体験ができ、年間を通じて様々な法要や行事が行われます。また、本堂前の広場では、季節に応じた花々や紅葉を楽しむことができます。',
    },
    '19': {
      title: '東京ドーム',
      description: 'イベントや野球観戦で人気の多目的ドーム',
      author: 'タビログ編集部',
      heroImage: TokyoDome,
      breadcrumb: ['東京', '文京区', '東京ドーム'],
      contentTitle: '東京ドームの基本情報',
      spots: ['東京ドーム紹介', '東京ドーム野球', 'ラクーア', 'ドームアトラクション'],
      imageLeft: TokyoDome,
      imageRight: TokyoDome2,
      content:
        '東京ドームはプロ野球・読売ジャイアンツの本拠地として知られる多目的スタジアムで、コンサート、展示会、スポーツイベントなど年間を通して多彩な催しが開催されます。隣接する「LaQua（ラクーア）」にはスパ施設やショッピングモール、飲食店が集まり、温泉・サウナ・リラクゼーションを楽しめる都市型スパとして地元民にも観光客にも人気です。<br><br>【2.1 東京ドーム紹介】<br>東京ドームは1988年に開業した日本初のドーム型スタジアムです。読売ジャイアンツの本拠地として知られ、年間を通じて野球、コンサート、展示会、スポーツイベントなど多彩な催しが開催されます。学校行事の会場としても利用され、日本電子専門学校のスポーツフェスティバルなど、各種団体の大規模イベントが開催されることでも有名です。国際大会ではWBC（ワールド・ベースボール・クラシック）の会場にもなり、世界中のファンが集まる熱狂の舞台となりました。<br><br>【2.2 東京ドーム野球】<br>東京ドームは読売ジャイアンツの本拠地として、プロ野球ファンにとって聖地のような存在です。屋内球場のため天候に左右されず、快適な環境で野球観戦を楽しめます。球場内には様々な飲食店やグッズショップがあり、野球観戦と合わせてショッピングやグルメも楽しめる総合エンターテイメント施設です。<br><br>【2.3 ラクーア】<br>東京ドームに隣接する「LaQua（ラクーア）」は、スパ施設やショッピングモール、飲食店が集まった複合施設です。温泉・サウナ・リラクゼーションを楽しめる都市型スパとして地元民にも観光客にも人気で、野球観戦の前後や休日にリラックスできる空間を提供しています。<br><br>【2.4 ドームアトラクション】<br>東京ドームには「東京ドームシティ」という総合エンターテイメント施設があります。ドーム内の遊園地エリア「東京ドームシティアトラクションズ」では、家族連れが楽しめるアトラクションが充実しています。特に「サンダードルフィン」は日本最大級のローラーコースターで、スリル満点の体験ができます。また、「ビッグオー」は世界初のフリーフォールタワーで、地上80mからの絶景とスリルを同時に楽しめます。その他にも「スカイフラワー」や「ワンダーエッグ」など、様々な年齢層が楽しめるアトラクションが揃っています。野球観戦だけでなく一日中エンターテイメントを満喫できる総合レジャー施設です。',
    },
    '21': {
      title: '東京ディズニーランド',
      description: '世界で最も人気のテーマパーク。夢の国で楽しい時間を過ごそう',
      author: 'タビログ編集部',
      heroImage: TokyoDisneyland,
      breadcrumb: ['東京', '浦安市', '東京ディズニーランド'],
      contentTitle: '東京ディズニーランドの基本情報',
      spots: ['ディズニーリゾート', 'ディズニーシー', 'アドベンチャーランド', 'トゥーンタウン'],
      imageLeft: DisneyResort,
      imageRight: DisneySea,
      content:
        '東京ディズニーランドは世界で最も人気のテーマパークの一つ。ミッキーマウスをはじめとするディズニーキャラクターと一緒に夢の世界を体験できます。7つのテーマランドがあり、家族連れからカップルまで幅広い年齢層が楽しめます。パレードやショーも充実しており、一日中楽しめるエンターテイメント施設です。<br><br>【2.1 ディズニーリゾート】<br>東京ディズニーリゾートは、東京ディズニーランドと東京ディズニーシーを中心とした総合リゾートエリアです。ホテル、ショッピングモール、レストランが集まり、宿泊から食事、ショッピングまで全てを楽しめる完結型のリゾートです。リゾート内のホテルに宿泊すると、パークへの優先入場や特別な特典を利用できます。<br><br>【2.2 ディズニーシー】<br>東京ディズニーシーは、海をテーマにした世界唯一のディズニーパークです。7つのポート（港）で構成され、それぞれ異なる時代と地域の雰囲気を体験できます。アトラクションはよりスリリングで大人向けのものが多く、特に「タワー・オブ・テラー」や「インディ・ジョーンズ・アドベンチャー」は人気の絶叫系アトラクションです。<br><br>【2.3 アドベンチャーランド】<br>アドベンチャーランドは、ジャングルや海賊の世界をテーマにしたエリアです。「ジャングルクルーズ」では野生動物の模型や滝を楽しみ、「カリブの海賊」では海賊の冒険を体験できます。「インディ・ジョーンズ・アドベンチャー」は迫力満点のライドで、古代遺跡の探検を疑似体験できます。熱帯の雰囲気を演出する植物や建物が特徴的です。<br><br>【2.4 トゥーンタウン】<br>トゥーンタウンは、ディズニーアニメのキャラクターたちが住む街を再現したエリアです。ミッキーマウスの家「ミッキーの家とミート・ミッキー」では、実際にミッキーと会って写真を撮ることができます。「ロジャーラビットのカートゥーンスピン」は回転しながら進む楽しいライドで、子供から大人まで楽しめます。カラフルで可愛らしい建物が並び、まるでアニメの世界にいるような気分を味わえます。',
    },
    '22': {
      title: '日光東照宮',
      description: '徳川家康を祀る世界遺産の神社。豪華絢爛な建築が美しい',
      author: 'タビログ編集部',
      heroImage: TokyoHero,
      breadcrumb: ['東京', '日光市', '日光東照宮'],
      contentTitle: '日光東照宮の基本情報',
      spots: ['陽明門', '眠り猫', '三猿'],
      imageLeft: NikkoToshogu,
      imageRight: YangMeimon,
      content:
        '日光東照宮は徳川家康を祀る神社で、世界遺産に登録されています。豪華絢爛な建築と精緻な彫刻が特徴で、特に「見ざる、聞かざる、言わざる」の三猿や眠り猫の彫刻は有名です。江戸時代の最高技術を集めた建築美を堪能できる貴重な文化遺産です。<br><br>【2.1 陽明門】<br>日光東照宮の代表的な建築物で、平成の大修理を終えたばかりの艶やかな塗装と煌びやかな装飾が印象的です。豪華絢爛な彫刻の意味と秘密が込められた、まさに日光東照宮のシンボル的存在です。<br><br>【2.2 眠り猫】<br>驚くほど小さな彫刻で、観光客の通りが多いところに設置されています。現地ではよく見れないことがありますが、日光東照宮の有名な彫刻の一つとして知られています。<br><br>【2.3 三猿】<br>「見ざる、聞かざる、言わざる」で有名な三猿は、8つの面で構成された物語の一部です。諺の意味と日光東照宮の三猿が意味するところが若干違うのも面白いところで、年老いて取り返しがつかなくなる前に早めの三猿という教えが込められています。',
    },
    '23': {
      title: '鎌倉',
      description: '歴史と文化が息づく古都。大仏とアニメの聖地',
      author: 'タビログ編集部',
      heroImage: Kamakura,
      breadcrumb: ['神奈川', '鎌倉市', '鎌倉'],
      contentTitle: '鎌倉の基本情報',
      spots: ['スラムダンクの聖地', '鎌倉大仏'],
      imageLeft: GamakuraTaiButsu,
      imageRight: KamakuraSlamdunk,
      content:
        '鎌倉は1192年に源頼朝が開いた鎌倉幕府の古都として知られる歴史ある街です。現在は大仏や鶴岡八幡宮などの歴史的建造物と、スラムダンクなどのアニメの聖地としても人気を集めています。海と山に囲まれた自然豊かな環境で、四季折々の美しい景色を楽しめます。<br><br>【2.1 スラムダンクの聖地】<br>鎌倉高校前駅の踏切は、人気アニメ「スラムダンク」のオープニングで登場する有名な聖地です。青い海と空、そして江ノ島電鉄の電車が走る風景は、アニメファンにとって憧れの場所となっています。特に夕日の時間帯は、アニメの世界そのままの美しい光景を楽しむことができます。多くの観光客が写真撮影に訪れる人気スポットです。<br><br>【2.2 鎌倉大仏】<br>高徳院にある高さ約11.3mの青銅製の大仏像は、鎌倉のシンボルとして親しまれています。鎌倉時代の代表的な仏像彫刻として知られ、国の重要文化財に指定されています。大仏殿は台風で倒壊したため、現在は露座の姿で拝観できます。大仏の内部に入ることもでき、当時の鋳造技術の高さを間近で感じることができます。',
    },
    '24': {
      title: '箱根温泉',
      description: '富士山を望む名湯。リラックスできる温泉地',
      author: 'タビログ編集部',
      heroImage: HakoneOnsen,
      breadcrumb: ['神奈川', '箱根町', '箱根温泉'],
      contentTitle: '箱根温泉の基本情報',
      spots: ['強羅温泉', '芦ノ湖', '箱根神社'],
      imageLeft: HakoneOnsen,
      imageRight: HakoneOnsen,
      content:
        '箱根温泉は富士山を望む人気の温泉地。豊富な泉質の温泉と美しい自然景観が魅力で、日帰り温泉から高級旅館まで様々な宿泊施設があります。芦ノ湖でのクルーズや箱根神社の参拝、美術館巡りなど、温泉以外の楽しみも豊富です。<br><br>【2.1 強羅温泉】<br>箱根の中心部にある強羅温泉は、箱根登山鉄道の終点として知られています。標高500mの高地に位置し、夏でも涼しく過ごせる避暑地として人気です。多くの旅館やホテルが立ち並び、様々な泉質の温泉を楽しむことができます。<br><br>【2.2 芦ノ湖】<br>箱根のシンボルである芦ノ湖は、約3000年前の火山活動によって形成されたカルデラ湖です。湖上を走る箱根海賊船でのクルーズや、富士山を背景にした美しい景色を楽しめます。湖畔には箱根神社の平和の鳥居もあり、パワースポットとしても人気です。<br><br>【2.3 箱根神社】<br>箱根神社は箱根の総鎮守として崇敬される神社です。芦ノ湖に浮かぶ平和の鳥居は、湖上から見る富士山と合わせて絶景として知られています。交通安全や開運のご利益があるとされ、多くの参拝客が訪れます。',
    },
    '25': {
      title: '渋谷',
      description: '若者の街として有名。スクランブル交差点とハチ公がシンボル',
      author: 'タビログ編集部',
      heroImage: ShibuyaScramble,
      breadcrumb: ['東京', '渋谷区', '渋谷'],
      contentTitle: '渋谷の基本情報',
      spots: ['スクランブル交差点', '原宿ファッション街', '明治神宮', '東京ヤクルトスワローズ'],
      imageLeft: ShibuyaScramble,
      imageRight: ShibuyaBape,
      content:
        '渋谷は東京を代表する若者の街として世界的に知られています。スクランブル交差点の大勢の人々が交差する光景は、東京の象徴的な風景の一つです。ファッション、エンターテイメント、グルメなど、様々な文化が集まる活気あふれる街です。<br><br>【2.1 スクランブル交差点】<br>渋谷の象徴であるスクランブル交差点は、世界で最も有名な交差点の一つです。1回の青信号で約3000人が交差し、1日あたり約50万人が利用する世界最大級の交差点として知られています。5つの道路が交差する複雑な構造で、周囲には巨大なビジョンや広告看板が立ち並び、東京の活気を象徴する光景を演出しています。特に夕方のラッシュアワーには、多くの人々が一斉に交差点を渡る様子は圧巻で、観光客にとって必見のスポットとなっています。<br><br>【2.2 原宿ファッション街】<br>渋谷から徒歩圏内の原宿は、日本のファッション文化の発信地として知られています。竹下通りには若者向けのショップが並び、カワイイ文化やストリートファッションの中心地となっています。週末には多くのファッション好きの若者が集まり、独特の文化を形成しています。また、原宿にはヒューマンメイドやベイプなどの高級ストリートブランドが集まっており、ファッション愛好家たちの聖地としても知られています。これらのブランドは日本のストリートファッション文化を世界に発信する重要な役割を担っています。<br><br>【2.3 明治神宮】<br>渋谷から徒歩圏内にある明治神宮は、明治天皇と昭憲皇太后を祀る神社です。都心にありながら70万平方メートルもの広大な森に囲まれた、東京のオアシスとして親しまれています。初詣の参拝者数は日本一を誇り、年間を通じて多くの参拝者が訪れます。高さ12m、幅17mの巨大な木造鳥居や、秋の銀杏並木で有名な神宮外苑も見どころです。<br><br>【2.4 東京ヤクルトスワローズ】<br>東京ヤクルトスワローズは渋谷を本拠地とするプロ野球チームです。渋谷の街の活気과 젊은 에너지를 상징하는 팀으로서 지구 팬들에게 사랑받고 있습니다. 경기 관람은 물론, 팀 굿즈 구매나 선수와의 교류 이벤트 등 야구 팬들에게 특별한 체험을 제공합니다. 또한 스왈로즈는 일본 프로야구의 대표적인 팀 중 하나로, 국내외 야구 팬들에게 널리 알려져 있습니다. 팀의 마스코트인 츠바메군과 함께 다양한 이벤트와 팬 서비스를 제공하여 가족 단위 관람객들에게도 인기가 높습니다.',
    },
    '33': {
      title: '秋葉原',
      description: 'アニメ・ゲーム・電子機器の聖地。オタク文化の中心地',
      author: 'タビログ編集部',
      heroImage: akihabara,
      breadcrumb: ['東京', '千代田区', '秋葉原'],
      contentTitle: '秋葉原の基本情報',
      spots: ['アニメイト', 'アキバ絶対領域（メイドカフェ）'],
      imageLeft: akibaanimate,
      imageRight: jetairyouiki,
      content:
        '秋葉原はアニメ・ゲーム・電子機器の聖地として世界的に知られる街です。オタク文化の中心地として発展し、最新のテクノロジーとサブカルチャーが融合した独特な雰囲気が魅力です。一日中楽しめる観光スポットとして、国内外から多くの観光客が訪れます。<br><br>【2.1 アニメイト】<br>アニメイトは日本最大級のアニメ・漫画グッズ専門チェーン店です。秋葉原店は特に大型店舗として知られ、最新のフィギュア、コスプレ衣装、同人誌、CD、DVDなど、アニメファンにとって必要なものが全て揃っています。限定商品や新作グッズの先行販売も多く、コレクターにとっては必見のスポットです。店内にはアニメの世界観を再現したコーナーもあり、ファンにとって特別な体験を提供します。<br><br>【2.2 アキバ絶対領域（メイドカフェ）】<br>秋葉原発祥のメイドカフェは、現在では世界的に知られる日本独自の文化です。「アキバ絶対領域」は秋葉原のメイドカフェ文化を象徴する言葉で、メイド服を着たスタッフがお客様を「ご主人様」「お嬢様」と呼んでおもてなしします。独特の接客スタイルとコスプレ文化が融合したこのサービスは、秋葉原のサブカルチャーを代表する存在として人気を集めています。店内では写真撮影やゲーム、歌の披露など、様々なエンターテイメントを楽しむことができます。',
    },
    '34': {
      title: '富士急ハイランド',
      description: '絶叫マシンで有名なテーマパーク。富士山を背景にした絶景アトラクション',
      author: 'タビログ編集部',
      heroImage: fujiq1,
      breadcrumb: ['東京', '富士吉田市', '富士急ハイランド'],
      contentTitle: '富士急ハイランドの基本情報',
      spots: ['絶叫マシン', '富士山ビュー', 'アトラクション'],
      imageLeft: fujiq2,
      imageRight: fujiq3,
      content:
        '富士急ハイランドは富士山を背景にした絶叫マシンで有名なテーマパークです。世界記録を持つアトラクションや富士山の絶景を楽しめるアトラクションなど、スリルと絶景を同時に楽しめる日本屈指のテーマパークとして人気を集めています。<br><br>【2.1 絶叫マシン】<br>富士急ハイランドは世界記録を持つ絶叫マシンで有名です。「ド・ドドンパ」は世界最速のジェットコースターとして知られ、最高時速180kmで走行します。「ええじゃないか」は世界最大の振り子角度を持つアトラクションで、最大角度121度まで振り子が揺れます。これらの絶叫マシンは世界中のスリル好きな観光客を引き寄せています。<br><br>【2.2 富士山ビュー】<br>富士急ハイランドの最大の魅力は富士山を背景にした絶景です。多くのアトラクションから富士山の美しい姿を眺めることができ、特に「富士飛行社」や「大観覧車」からは富士山の全景を楽しめます。天気の良い日には富士山の雄大な姿とアトラクションのスリルを同時に体験できる特別な感動を味わえます。<br><br>【2.3 アトラクション】<br>富士急ハイランドには絶叫マシン以外にも様々なアトラクションがあります。「トーマスランド」は小さな子供向けのエリアで、トーマス・ザ・タンクエンジンの世界観を楽しめます。「ナガシマスカイ」は富士山を背景にした大観覧車で、ゆっくりと富士山の絶景を楽しめます。家族連れから絶叫マシン好きまで、幅広い年齢層が楽しめるテーマパークです。',
    },
  },
  名古屋: {
    '27': {
      title: '名古屋城',
      description: '徳川家康が築いた城。金色のシャチホコが有名',
      author: 'タビログ編集部',
      heroImage: NagoyaCastle,
      breadcrumb: ['名古屋', '中区', '名古屋城'],
      contentTitle: '名古屋城の基本情報',
      spots: ['本丸', '二の丸', '金魚'],
      imageLeft: NagoyaHonmaru,
      imageRight: NagoyaKingyo,
      content:
        '名古屋城は徳川家康が築いた城で、金色のシャチホコが有名な観光スポットです。桜の季節には特に人気が高く、多くの観光客が訪れます。天守閣からは名古屋の街並みを一望でき、歴史と現代が交わる美しい景色を楽しめます。<br><br>【2.1 本丸】<br>本丸は名古屋城の中心部で、天守閣と本丸御殿が建てられている最も重要な区域です。江戸時代の建築様式を再現した本丸御殿は、内部の障壁画や装飾が当時の技術の高さを物語っており、日本の伝統建築美を堪能できます。復元された部屋では、当時の大名の生活を偲ぶことができます。<br><br>【2.2 二の丸】<br>二の丸は本丸を囲む第二の防御区域で、庭園や茶室などが配置されています。美しい日本庭園では四季折々の風景を楽しむことができ、特に春の桜と秋の紅葉は見事です。また、二の丸には歴史的な建物や展示施設もあり、名古屋城の歴史についてより深く学ぶことができます。<br><br>【2.3 金魚】<br>名古屋城の庭園には美しい金魚が泳ぐ池があります。これらの金魚は城の歴史とともに大切に育てられており、訪れる人々に安らぎを与えています。特に夏の時期には、金魚と城のコラボレーションが美しい風景を作り出し、多くの観光客が写真を撮影する人気スポットとなっています。',
    },
    '28': {
      title: '大須商店街',
      description: '漫画・アニメグッズ、電子機器、食べ物まで揃う商店街',
      author: 'タビログ編集部',
      heroImage: osushotenkai,
      breadcrumb: ['名古屋', '中区', '大須商店街'],
      contentTitle: '大須商店街の基本情報',
      spots: ['有名なショップ', '歴史', '夏祭り'],
      imageLeft: OsuHistory,
      imageRight: Osunatumaturi,
      content:
        '大須商店街は漫画・アニメグッズ、電子機器、食べ物まで何でも揃う商店街です。オタク文化と伝統的な商店が混在する独特な雰囲気が魅力で、一日中楽しめる観光スポットです。<br><br>【2.1 有名なショップ】<br>大須商店街には数多くの有名なショップが立ち並んでいます。アニメ・漫画グッズ専門店、電子機器店、ファッションショップなど、様々なジャンルの店舗が集まっています。特にサンキューマートや大須おみやげカンパニーなど、地域に根ざした人気店舗が多く、地元の人々にも愛されています。週末には多くの買い物客で賑わい、活気あふれる雰囲気を楽しめます。<br><br>【2.2 歴史】<br>大須商店街は江戸時代から続く歴史ある商店街です。寺町大須として発展し、戦国武将ゆかりの地としても知られています。万松寺や大須演芸場など、歴史的な建物が今も残っており、名古屋の文化と歴史を感じることができます。古い建物と新しい文化が共存する独特な景観は、名古屋の歴史と現代を同時に感じられる貴重な空間です。<br><br>【2.3 夏祭り】<br>大須商店街では年間を通じて様々なイベントが開催されます。特に夏には「大須夏まつり」や「にっぽんど真ん中祭り」など、大規模な祭りが開催され、多くの観光客が訪れます。また、大須大道町人祭では江戸時代の衣装を着た行列が街を練り歩き、歴史と文化を体感できる特別なイベントです。これらの祭りは大須の魅力をより深く知ることができる貴重な機会となっています。',
    },
    '29': {
      title: '熱田神宮',
      description: '日本三大神剣の一つ、草薙剣を祀る神宮',
      author: 'タビログ編集部',
      heroImage: Atsutasinkyu,
      breadcrumb: ['名古屋', '熱田区', '熱田神宮'],
      contentTitle: '熱田神宮の基本情報',
      spots: ['本宮', '草薙剣', '宝物館', '神宮の森'],
      imageLeft: Atsutahontou,
      imageRight: Atsutaken,
      content:
        '熱田神宮は日本三大神剣の一つである草薙剣を祀る神宮で、三種の神器に関連する聖地として歴史ファンに必須の観光スポットです。広大な境内には歴史的価値の高い建物や宝物が多数保存されています。<br><br>【2.1 本宮】<br>熱田神宮の本宮は、草薙剣を祀る最も重要な建物です。伝統的な神社建築の美しさを今に伝え、厳かな雰囲気の中で参拝することができます。本宮前の広場では、年間を通じて様々な神事や祭典が執り行われます。<br><br>【2.2 草薙剣】<br>草薙剣は日本神話に登場する三種の神器の一つで、熱田神宮の御神体として祀られています。この剣は天照大神から授けられたとされる神聖な剣で、日本の歴史と文化の象徴として崇敬されています。<br><br>【2.3 宝物館】<br>熱田神宮の宝物館には、神宮に伝わる貴重な宝物や歴史資料が展示されています。古代から現代に至るまでの日本の歴史を物語る品々を間近で見ることができ、歴史愛好家にとっては貴重な体験となります。<br><br>【2.4 神宮の森】<br>熱田神宮の境内は広大な森に囲まれており、都心にありながら自然豊かな環境を楽しめます。四季折々の美しい景色と静寂な雰囲気は、心を落ち着かせる聖地として多くの参拝者に愛されています。',
    },
    '30': {
      title: 'SCMAGLEV and Railway Park',
      description: 'JR東海運営。新幹線、リニア展示。鉄道ファンの聖地',
      author: 'タビログ編集部',
      heroImage: Nagoya,
      breadcrumb: ['名古屋', '港区', 'SCMAGLEV and Railway Park'],
      contentTitle: 'SCMAGLEV and Railway Parkの基本情報',
      spots: ['新幹線展示', 'リニア展示', '運転シミュレーター'],
      imageLeft: nagoyasimul,
      imageRight: NagoyaShinkansen,
      content:
        'SCMAGLEV and Railway ParkはJR東海が運営する鉄道博物館で、新幹線やリニアの展示が充実しています。鉄道ファンの聖地として知られ、実際の車両に乗車できる体験型展示が人気です。<br><br>【2.1 新幹線展示】<br>博物館には歴代の新幹線車両が展示されており、0系から最新のN700Sまで、日本の高速鉄道技術の進歩を体感できます。実際の車両内部を見学でき、運転席や客室の構造を詳しく観察することができます。新幹線の技術革新の歴史を学びながら、実際の車両の迫力を間近で体験できます。<br><br>【2.2 リニア展示】<br>超電導リニアの実物大模型や技術展示により、次世代高速鉄道の仕組みを学ぶことができます。リニアの浮上原理や推進システムについて、分かりやすい展示で理解を深められます。未来の交通技術を先取りできる貴重な体験ができます。<br><br>【2.3 運転シミュレーター】<br>実際の新幹線の運転席を再現したシミュレーターでは、運転士の体験ができます。新幹線の運転操作や速度感を体感でき、鉄道ファンにとっては夢の体験となるでしょう。リアルな運転体験を通じて、新幹線の技術の高さを実感できます。',
    },
    '31': {
      title: '名古屋市科学館',
      description: '世界最大級のプラネタリウム。科学愛好家に人気',
      author: 'タビログ編集部',
      heroImage: NagoyaScience,
      breadcrumb: ['名古屋', '中区', '名古屋市科学館'],
      contentTitle: '名古屋市科学館の基本情報',
      spots: ['プラネタリウム', '科学展示', '体験コーナー', '特別展'],
      imageLeft: nagoyaplanet,
      imageRight: Nagoyataiken,
      content:
        '名古屋市科学館は世界最大級のプラネタリウムを有する科学館で、科学愛好家に人気の観光スポットです。体験型の展示が充実しており、子供から大人まで楽しめる施設です。<br><br>【2.1 プラネタリウム】<br>世界最大級のプラネタリウムでは、美しい星空の投影とともに宇宙の神秘を体験できます。最新のデジタル技術により、リアルな星空と惑星の動きを観察でき、天文学の知識を深めることができます。<br><br>【2.2 科学展示】<br>館内には物理、化学、生物、地学など様々な分野の科学展示があります。実際に触れて体験できる展示が多く、科学の原理を楽しく学ぶことができます。特に子供たちの科学への興味を引き出す工夫が随所に見られます。<br><br>【2.3 体験コーナー】<br>科学館には様々な体験コーナーがあり、実験や工作を通じて科学の面白さを体感できます。スタッフによる解説も充実しており、疑問に思ったことを気軽に質問できる環境が整っています。<br><br>【2.4 特別展】<br>定期的に開催される特別展では、最新の科学技術や話題のテーマについて深く学ぶことができます。宇宙、ロボット、環境など、幅広い分野の特別展が開催され、常に新しい発見があります。',
    },
    '32': {
      title: '名古屋港水族館',
      description: 'シャチ、ベルーガ、イルカショーで有名。家族連れに人気',
      author: 'タビログ編集部',
      heroImage: OkiAquarium,
      breadcrumb: ['名古屋', '港区', '名古屋港水族館'],
      contentTitle: '名古屋港水族館の基本情報',
      spots: ['シャチショー', 'ベルーガ展示', 'イルカショー', '深海生物展示'],
      imageLeft: NagoyaShachi,
      imageRight: NagoyaBelluga,
      content:
        '名古屋港水族館はシャチ、ベルーガ、イルカショーで有名な水族館で、家族連れに人気の観光スポットです。日本海と太平洋の海洋生物を中心に、多様な海の生き物を観察できます。<br><br>【2.1 シャチショー】<br>名古屋港水族館のシャチショーは日本でも数少ない貴重なショーです。シャチの迫力あるパフォーマンスは圧巻で、その知能の高さと美しさを間近で体験できます。ショーは1日数回開催され、多くの観客で賑わいます。<br><br>【2.2 ベルーガ展示】<br>白いクジラとして知られるベルーガの展示は、水族館の目玉の一つです。ベルーガの優雅な泳ぎと愛らしい表情は、見る人の心を和ませます。また、ベルーガの生態について詳しく学ぶことができる展示も充実しています。<br><br>【2.3 イルカショー】<br>イルカショーでは、イルカの高い知能と優れた運動能力を活かしたパフォーマンスを楽しめます。ジャンプやフリップなどの華麗な技は、観客を魅了します。ショー後にはイルカとの触れ合い体験も可能です。<br><br>【2.4 深海生物展示】<br>水族館には深海に生息する神秘的な生物の展示もあります。光の届かない深海の環境を再現した展示では、普段見ることのできない珍しい生物を観察できます。深海の生態系について学ぶ貴重な機会となります。',
    },
    '40': {
      title: '中洲屋台',
      description: '福岡の夜を彩る屋台街。博多グルメを堪能できる名所',
      author: 'タビログ編集部',
      heroImage: nakasukawa,
      breadcrumb: ['福岡', '中洲', '中洲屋台'],
      contentTitle: '中洲屋台の基本情報',
      spots: ['屋台グルメ', '屋台の雰囲気', '川沿いナイトビュー'],
      imageLeft: NakasuNight,
      imageRight: nakasuramen,
      content:
        '中洲屋台は福岡の夜を象徴するグルメスポット。博多ラーメン、焼きラーメン、もつ煮、明太子料理など、地元ならではの味を気軽に楽しめます。観光客と地元客が肩を並べて食事を楽しむ活気ある雰囲気が魅力です。<br><br>【2.1 屋台グルメ】<br>定番の博多ラーメンから、焼きラーメン、天ぷら、焼き鳥、明太子を使った創作料理まで、屋台ごとに個性豊かなメニューが揃います。少量ずつ食べ歩きしながらお気に入りの一品を見つけるのがおすすめ。<br><br>【2.2 屋台の雰囲気】<br>屋台は店主との距離が近く、会話も楽しめるカウンタースタイル。旅の情報交換や地元のおすすめを教えてもらえるのも醍醐味です。混雑時は相席になることもあり、一期一会の出会いが生まれます。<br><br>【2.3 川沿いナイトビュー】<br>中洲の川沿いはネオンが水面に映り込むフォトジェニックな夜景スポット。食後に川沿いを散策すれば、屋台の明かりと夜景が織りなす福岡ならではのロマンチックな時間を過ごせます。',
    },
    '41': {
      title: '太宰府天満宮',
      description: '学問の神様・菅原道真公を祀る全国天満宮の総本宮のひとつ',
      author: 'タビログ編集部',
      heroImage: dazaifutenmangu,
      breadcrumb: ['福岡', '太宰府', '太宰府天満宮'],
      contentTitle: '太宰府天満宮の基本情報',
      spots: ['本殿・御神牛', '梅苑・飛梅', '参道と御朱印'],
      imageLeft: goshingyu,
      imageRight: dazaifutenmangu,
      content:
        '太宰府天満宮は学問の神様として知られる菅原道真公を祀る神社。境内には心字池や太鼓橋、楼門、本殿など見どころが点在し、四季折々の美しさが楽しめます。受験合格祈願や厄除けに訪れる参拝客で年間を通じて賑わいます。<br><br>【2.1 本殿・御神牛】<br>荘厳な本殿は参拝の中心。境内に点在する「御神牛」の像は頭を撫でると知恵が授かるといわれ、受験生をはじめ多くの参拝者に親しまれています。楼門から本殿へ続く参道は写真スポットとしても人気です。<br><br>【2.2 梅苑・飛梅】<br>境内は梅の名所として有名で、早春には約200種・6,000本ともいわれる梅が咲き誇ります。道真公の伝説にまつわる「飛梅」は天満宮の象徴的存在。梅の香りとともに太宰府らしい風景を楽しめます。<br><br>【2.3 参道と御朱印】<br>表参道には梅ヶ枝餅の老舗が並び、食べ歩きも醍醐味。授与所では御朱印をいただくことができ、旅の記念として人気です。土日や受験シーズンは混雑するため、朝の時間帯の参拝がおすすめです。',
    },
    '42': {
      title: '櫛田神社',
      description: '博多祇園山笠で知られる博多総鎮守。商売繁盛・不老長寿の御利益で有名',
      author: 'タビログ編集部',
      heroImage: gushidazinza,
      breadcrumb: ['福岡', '博多区', '櫛田神社'],
      contentTitle: '櫛田神社の基本情報',
      spots: ['楼門と飾り山', '霊泉鶴の井戸', '博多べいと御朱印'],
      imageLeft: gushidamatsuri,
      imageRight: gushidatori,
      content:
        '櫛田神社は博多の総鎮守として「お櫛田さん」の愛称で親しまれる古社。毎年7月の博多祇園山笠で有名で、境内や楼門には祭りの飾り山が常設展示され、博多文化の象徴的な存在です。商売繁盛・不老長寿の御利益があるとされ、地元の人々や観光客で一年中賑わいます。<br><br>【2.1 楼門と飾り山】<br>豪壮な楼門をくぐると迫力ある「飾り山」が出迎えます。山笠の歴史や見送り・表の意匠を間近で鑑賞でき、祭り期間外でも博多の祭文化に触れられるのが魅力。写真スポットとしても人気です。<br><br>【2.2 霊泉鶴の井戸】<br>境内の「霊泉鶴の井戸」は不老長寿の霊泉として知られ、口をすすぐと健康長寿の御利益があると伝えられています。清冽な湧水と静謐な空気に心が洗われるスポットです。<br><br>【2.3 博多べいと御朱印】<br>櫛田神社周辺には「博多べい（博多塀）」と呼ばれる歴史的な土塀が残り、古き良き街並みの情緒を感じられます。授与所では季節限定デザインの御朱印をいただけることもあり、参拝の記念に人気です。参道の飴屋・菓子店を巡る食べ歩きもおすすめ。',
    },
    '45': {
      title: '福岡PayPayドーム（ソフトバンクホークス）',
      description: 'ホークス本拠地の多目的ドーム。野球観戦とエンタメが集約',
      author: 'タビログ編集部',
      heroImage: paypaydome,
      breadcrumb: ['福岡', '中央区', '福岡PayPayドーム'],
      contentTitle: '福岡PayPayドームの基本情報',
      spots: ['球場ツアー', '李大浩（イ・デホ）選手の活躍', '周辺施設とグルメ'],
      imageLeft: paypaymap,
      imageRight: softbankleedaeho,
      content:
        '福岡PayPayドームは福岡ソフトバンクホークスの本拠地として知られる多目的ドーム。全天候型の快適な観戦環境に加え、最新演出やイベントも魅力で、野球ファンはもちろん家族連れや観光客にも人気のスポットです。隣接の商業施設や海辺の散策と合わせて一日楽しめます。<br><br>【2.1 球場ツアー】<br>普段は入れないベンチやブルペン、記者会見室などを巡るガイド付きツアーを実施。球場運営の裏側や歴史展示を見学でき、ホークスファンにはたまらない体験。優勝トロフィーや名場面のパネルも必見です。<br><br>【2.2 李大浩（イ・デホ）選手の活躍】<br>2014年から2シーズン在籍した李大浩（イ・デホ）選手は、ホークスの日本一に大きく貢献した強打者。クラッチヒッターとしてポストシーズンでも勝負強さを発揮し、福岡のファンに強烈なインパクトを残しました。豪快な本塁打と勝負所での適時打は、今もドームの名場面として語り継がれています。背番号や応援歌にまつわるエピソードも多く、球場内の展示やグッズでその功績を辿ることができます。<br><br>【2.3 周辺施設とグルメ】<br>ドーム隣接の商業施設や海沿いエリアでは、ショッピングやカフェ、展望スポットを満喫できます。試合前後には博多名物のグルメもおすすめ。家族や友人と過ごす休日のお出かけ先としても最適です。',
    },
  },
  大阪: {
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
        '大阪城は豊臣秀吉の栄華を今に伝える名城。壮麗な天守と高石垣、広大な堀が見どころです。天守閣の展示では戦国史と城郭建築を学べ、上層の展望台からは大阪の街並みを一望可能。春は桜、秋は紅葉と四季の彩りも美しく、公園はジョギングやピクニックで賑わいます。夜間ライトアップは写真映え抜群です。',
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
        '道頓堀は大阪ミナミの中心地。グリコサインや戎橋での記念撮影は定番で、たこ焼き・お好み焼き・串カツなど粉もんの名店が揃います。川沿いの遊歩道散策やクルーズも人気。夜はネオンが水面に反射するフォトジェニックな景色が広がり、心斎橋・アメリカ村と合わせた周遊も便利です。',
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
        'ユニバーサル・スタジオ・ジャパンは映画の世界観を五感で体験できるテーマパーク。ダイナミックなライド、キャラクター・グリーティング、ショーに加え、スーパー・ニンテンドー・ワールドなど話題エリアも充実しています。季節ごとのナイトパレードやホラーナイトも人気で、一年を通して新鮮な驚きに出会えます。USJ公式ホテルやユニバーサル・シティウォークとの連携で、食事やショッピングもスムーズです。',
    },
  },
  京都: {
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
      content:
        '金閣寺は金箔に覆われた舎利殿が有名で、鏡湖池に映り込む金色の建物は四季ごとに表情を変えます。雪化粧の冬景色や新緑、紅葉といった自然の移ろいと調和する風景は必見。参道には茶室や庭園の見どころが点在し、拝観後は周辺の和菓子店や茶屋で一服も楽しめます。',
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
      content:
        '清水寺は断崖に張り出した「清水の舞台」で知られ、京都市街を一望できる絶景スポット。音羽の滝での参拝や、三重塔・地主神社など境内の見どころも豊富です。桜・紅葉シーズンの夜間特別拝観は幻想的な光景が広がり、写真好きにも人気です。',
    },
  },
  札幌: {
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
      content:
        '札幌時計台は北海道開拓使時代の歴史を伝える貴重な建造物。館内展示で札幌の成り立ちを学べ、外観は四季の装いとともに美しく写真映えします。大通公園やテレビ塔と合わせた市内散策の起点にも最適です。',
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
      content:
        '大通公園は札幌の中心を東西に貫く緑の帯。季節の花壇や噴水、イベントが魅力で、夏のビアガーデンや冬の雪まつりなど市民に親しまれる催しが多数開催されます。周辺にはカフェや百貨店が揃い、観光の合間の休憩にも便利です。',
    },
  },
  福岡: {
    '9': {
      title: '福岡城跡',
      description: '福岡の歴史を感じられる城跡',
      author: 'タビログ編集部',
      heroImage: FukuokaCastle2,
      breadcrumb: ['福岡', '中央区', '福岡城跡'],
      contentTitle: '福岡城跡の基本情報',
      spots: ['天守台跡', '花見スポット', '舞鶴公園'],
      imageLeft: FukuokaCastle,
      imageRight: FukuCastleSakura,
      content:
        '福岡城跡（舞鶴公園）は石垣や堀の遺構が良好に残る歴史公園。春は桜の名所として知られ、ライトアップ時は幻想的な雰囲気に包まれます。天守台跡からは市街地を一望でき、歴史散策と自然鑑賞を同時に楽しめます。<br><br>【2.1 天守台跡】<br>福岡城の中心部に位置する天守台跡は、城下町・福岡の街並みを高台から一望できる絶景スポット。当時の天守は現存しないものの、堅固な石垣が往時の威容を物語ります。夕刻には街の灯りと桜のライトアップが重なり、歴史と夜景の美しさを同時に楽しめます。<br><br>【2.2 花見スポット】<br>舞鶴公園一帯は福岡屈指の桜名所。ソメイヨシノを中心に多様な品種が植えられ、満開の時期には園内がピンク色に染まります。お堀沿いの桜並木や石垣と桜のコントラストは写真映え抜群。屋台や期間限定のライトアップも行われ、昼夜を問わず多くの花見客で賑わいます。<br><br>【2.3 舞鶴公園】<br>広大な芝生広場、池、遊歩道が整備された市民の憩いの場。四季の花々に彩られ、春は桜、初夏は新緑、秋には紅葉が楽しめます。城跡の史跡巡りと合わせて、のんびり散策やピクニックにも最適。園内の案内板や資料館では城の歴史も学べ、学びと癒やしが両立するスポットです。',
    },
    '10': {
      title: '博多駅',
      description: '福岡の玄関口。グルメとショッピングの中心地',
      author: 'タビログ編集部',
      heroImage: HakataCity,
      breadcrumb: ['福岡', '博多区', '博多駅'],
      contentTitle: '博多駅の基本情報',
      spots: ['駅ビル', 'デパ地下', 'イルミネーション'],
      imageLeft: hakatadepartbelow,
      imageRight: hakataIlumi,
      content:
        '博多駅は九州の玄関口。駅ビルには名物の明太子や豚骨ラーメン、銘菓など福岡グルメが集結し、ショッピングも充実。イルミネーションやイベントも多く、旅行初日・最終日の滞在でも満足度の高い時間を過ごせます。空港や地下鉄とのアクセスも至便です。',
    },
    '40': {
      title: '中洲屋台',
      description: '福岡の夜を彩る屋台街。博多グルメを堪能できる名所',
      author: 'タビログ編集部',
      heroImage: nakasukawa,
      breadcrumb: ['福岡', '中洲', '中洲屋台'],
      contentTitle: '中洲屋台の基本情報',
      spots: ['屋台グルメ', '屋台の雰囲気', '川沿いナイトビュー'],
      imageLeft: NakasuNight,
      imageRight: nakasuramen,
      content:
        '中洲屋台は福岡の夜を象徴するグルメスポット。博多ラーメン、焼きラーメン、もつ煮、明太子料理など、地元ならではの味を気軽に楽しめます。観光客と地元客が肩を並べて食事を楽しむ活気ある雰囲気が魅力です。<br><br>【2.1 屋台グルメ】<br>定番の博多ラーメンから、焼きラーメン、天ぷら、焼き鳥、明太子を使った創作料理まで、屋台ごとに個性豊かなメニューが揃います。少量ずつ食べ歩きしながらお気に入りの一品を見つけるのがおすすめ。<br><br>【2.2 屋台の雰囲気】<br>屋台は店主との距離が近く、会話も楽しめるカウンタースタイル。旅の情報交換や地元のおすすめを教えてもらえるのも醍醐味です。混雑時は相席になることもあり、一期一会の出会いが生まれます。<br><br>【2.3 川沿いナイトビュー】<br>中洲の川沿いはネオンが水面に映り込むフォトジェニックな夜景スポット。食後に川沿いを散策すれば、屋台の明かりと夜景が織りなす福岡ならではのロマンチックな時間を過ごせます。',
    },
    '41': {
      title: '太宰府天満宮',
      description: '学問の神様・菅原道真公を祀る全国天満宮の総本宮のひとつ',
      author: 'タビログ編集部',
      heroImage: dazaifutenmangu,
      breadcrumb: ['福岡', '太宰府', '太宰府天満宮'],
      contentTitle: '太宰府天満宮の基本情報',
      spots: ['本殿・御神牛', '梅苑・飛梅', '参道と御朱印'],
      imageLeft: goshingyu,
      imageRight: dazaifutenmangu,
      content:
        '太宰府天満宮は学問の神様として知られる菅原道真公を祀る神社。境内には心字池や太鼓橋、楼門、本殿など見どころが点在し、四季折々の美しさが楽しめます。受験合格祈願や厄除けに訪れる参拝客で年間を通じて賑わいます。<br><br>【2.1 本殿・御神牛】<br>荘厳な本殿は参拝の中心。境内に点在する「御神牛」の像は頭を撫でると知恵が授かるといわれ、受験生をはじめ多くの参拝者に親しまれています。楼門から本殿へ続く参道は写真スポットとしても人気です。<br><br>【2.2 梅苑・飛梅】<br>境内は梅の名所として有名で、早春には約200種・6,000本ともいわれる梅が咲き誇ります。道真公の伝説にまつわる「飛梅」は天満宮の象徴的存在。梅の香りとともに太宰府らしい風景を楽しめます。<br><br>【2.3 参道と御朱印】<br>表参道には梅ヶ枝餅の老舗が並び、食べ歩きも醍醐味。授与所では御朱印をいただくことができ、旅の記念として人気です。土日や受験シーズンは混雑するため、朝の時間帯の参拝がおすすめです。',
    },
    '42': {
      title: '櫛田神社',
      description: '博多祇園山笠で知られる博多総鎮守。商売繁盛・不老長寿の御利益で有名',
      author: 'タビログ編集部',
      heroImage: gushidazinza,
      breadcrumb: ['福岡', '博多区', '櫛田神社'],
      contentTitle: '櫛田神社の基本情報',
      spots: ['楼門と飾り山', '霊泉鶴の井戸', '博多べいと御朱印'],
      imageLeft: gushidamatsuri,
      imageRight: gushidatori,
      content:
        '櫛田神社は博多の総鎮守として「お櫛田さん」の愛称で親しまれる古社。毎年7月の博多祇園山笠で有名で、境内や楼門には祭りの飾り山が常設展示され、博多文化の象徴的な存在です。商売繁盛・不老長寿の御利益があるとされ、地元の人々や観光客で一年中賑わいます。<br><br>【2.1 楼門と飾り山】<br>豪壮な楼門をくぐると迫力ある「飾り山」が出迎えます。山笠の歴史や見送り・表の意匠を間近で鑑賞でき、祭り期間外でも博多の祭文化に触れられるのが魅力。写真スポットとしても人気です。<br><br>【2.2 霊泉鶴の井戸】<br>境内の「霊泉鶴の井戸」は不老長寿の霊泉として知られ、口をすすぐと健康長寿の御利益があると伝えられています。清冽な湧水と静謐な空気に心が洗われるスポットです。<br><br>【2.3 博多べいと御朱印】<br>櫛田神社周辺には「博多べい（博多塀）」と呼ばれる歴史的な土塀が残り、古き良き街並みの情緒を感じられます。授与所では季節限定デザインの御朱印をいただけることもあり、参拝の記念に人気です。参道の飴屋・菓子店を巡る食べ歩きもおすすめ。',
    },
    '43': {
      title: 'マリンワールド海の中道',
      description: '九州の海をテーマにした水族館。大水槽とイルカショーが人気',
      author: 'タビログ編集部',
      heroImage: marineworld,
      breadcrumb: ['福岡', '東区', 'マリンワールド海の中道'],
      contentTitle: 'マリンワールド海の中道の基本情報',
      spots: ['九州の海 大水槽', 'イルカ・アシカショー', '展望デッキと海辺散策'],
      imageLeft: marineworld,
      imageRight: marineaqua,
      content:
        'マリンワールド海の中道は「九州の海」をテーマにした水族館。玄界灘や有明海など地域の海を再現した展示が特徴で、家族連れやカップルに人気です。館内の動線は海辺散策のように心地よく、屋外エリアから望む博多湾の景色も見どころ。<br><br>【2.1 九州の海 大水槽】<br>高さ・幅ともに迫力のある大水槽では、イワシの群泳やサメ、エイが織りなすダイナミックな世界を体感できます。時間帯によっては解説付きの給餌タイムが実施され、海の生態について楽しく学べます。<br><br>【2.2 イルカ・アシカショー】<br>屋外スタジアムでは、イルカとアシカのパフォーマンスを上演。ジャンプや連携技が繰り出されるショーは臨場感たっぷりで、海風を感じながら観覧できるのも魅力です。季節限定のナイトショーや演出も要チェック。<br><br>【2.3 展望デッキと海辺散策】<br>館外の展望デッキからは博多湾や志賀島方面の眺望が広がります。帰り道は海の中道の遊歩道を散策し、海辺の風景や芝生広場でのんびり過ごすのもおすすめ。館内外で一日ゆっくり楽しめるスポットです。',
    },
    '45': {
      title: '福岡PayPayドーム（ソフトバンクホークス）',
      description: 'ホークス本拠地の多目的ドーム。野球観戦とエンタメが集約',
      author: 'タビログ編集部',
      heroImage: paypaydome,
      breadcrumb: ['福岡', '中央区', '福岡PayPayドーム'],
      contentTitle: '福岡PayPayドームの基本情報',
      spots: ['球場ツアー', '李大浩（イ・デホ）選手の活躍', '周辺施設とグルメ'],
      imageLeft: paypaymap,
      imageRight: softbankleedaeho,
      content:
        '福岡PayPayドームは福岡ソフトバンクホークスの本拠地として知られる多目的ドーム。全天候型の快適な観戦環境に加え、最新演出やイベントも魅力で、野球ファンはもちろん家族連れや観光客にも人気のスポットです。隣接の商業施設や海辺の散策と合わせて一日楽しめます。<br><br>【2.1 球場ツアー】<br>普段は入れないベンチやブルペン、記者会見室などを巡るガイド付きツアーを実施。球場運営の裏側や歴史展示を見学でき、ホークスファンにはたまらない体験。優勝トロフィーや名場面のパネルも必見です。<br><br>【2.2 李大浩（イ・デホ）選手の活躍】<br>2014年から2シーズン在籍した李大浩（イ・デホ）選手は、ホークスの日本一に大きく貢献した強打者。クラッチヒッターとしてポストシーズンでも勝負強さを発揮し、福岡のファンに強烈なインパクトを残しました。豪快な本塁打と勝負所での適時打は、今もドームの名場面として語り継がれています。背番号や応援歌にまつわるエピソードも多く、球場内の展示やグッズでその功績を辿ることができます。<br><br>【2.3 周辺施設とグルメ】<br>ドーム隣接の商業施設や海沿いエリアでは、ショッピングやカフェ、展望スポットを満喫できます。試合前後には博多名物のグルメもおすすめ。家族や友人と過ごす休日のお出かけ先としても最適です。',
    },
  },
  沖縄: {
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
      content:
        '首里城は琉球王国の王宮で、朱色の正殿や城郭遺構が沖縄独自の歴史文化を物語ります。復元・保存が進む城内では琉球王国の政治や祭祀の一端に触れられます。那覇市街からのアクセスも良く、首里金城町石畳道の散策と合わせるのもおすすめです。',
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
      content:
        '美ら海水族館は世界最大級の水槽「黒潮の海」で泳ぐジンベエザメが圧巻。サンゴ礁の生態展示やイルカショー、研究バックヤードの取り組みも見応えがあります。周辺の海洋博公園やビーチと併せて一日満喫できます。',
    },
  },
  広島: {
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
      content:
        '原爆ドームは世界遺産に登録された平和の象徴。隣接する平和記念公園や資料館とともに、戦争の悲惨さと平和の尊さを学ぶ場です。川沿いの散策路は慰霊と鎮魂の空気に包まれ、静かな時間が流れます。',
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
      content:
        '宮島は干満により姿を変える海上の大鳥居で知られ、厳島神社の社殿群は海と山に抱かれた幽玄の美をたたえます。弥山の原始林や鹿とのふれあい、紅葉谷公園など見どころも多く、四季を通じて楽しめます。',
    },
  },
  金沢: {
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
      content:
        '兼六園は日本三名園のひとつ。広大な園内には池泉回遊式庭園の趣向が凝らされ、雪吊りや灯籠、曲水など見どころが点在します。冬の雪化粧、春の桜、初夏の新緑、秋の紅葉と、四季の風雅を堪能できます。',
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
      content:
        '金沢城公園は石川門や五十間長屋など復元された建造物と広い芝生が魅力。加賀百万石の歴史を感じる空間で、兼六園との回遊も楽しめます。夜間ライトアップ時は城郭の白壁が幻想的に浮かび上がります。',
    },
  },
};

const SpotDetailPage = () => {
  const { city, id } = useParams<{ city: string; id: string }>();

  const cityAliasMap: Record<string, string> = {
    // Korean -> Japanese city name normalization
    도쿄: '東京',
    오사카: '大阪',
    교토: '京都',
    삿포로: '札幌',
    후쿠오카: '福岡',
    나고야: '名古屋',
    오키나와: '沖縄',
    히로시마: '広島',
    카나자와: '金沢',
  };

  const rawCity = city ? decodeURIComponent(city).trim() : '東京';
  const normalizedCity = cityAliasMap[rawCity] || rawCity || '東京';
  const cityKey = normalizedCity;
  const idKey = (id || '1').trim();

  const detail: SpotDetail | undefined = SPOT_DETAILS[cityKey]?.[idKey];

  const safeTitle = detail?.title || `${cityKey} のスポット詳細`;
  const safeDesc = detail?.description || 'このスポットの詳細情報です。準備中のコンテンツを表示しています。';
  const hero = detail?.heroImage || (cityKey === '東京' ? TokyoHero : OsakaHero);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${hero})` }}>
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
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{safeTitle}</h1>
            <p className="text-white text-lg mb-4 drop-shadow-md">{safeDesc}</p>
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
                    <li key={i} className="text-orange-500">
                      <span className="text-gray-900">2.{i + 1}</span> {s}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{detail?.contentTitle || `${safeTitle} の基本情報`}</h2>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div
                className="h-64 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${detail?.imageLeft || hero})` }}
              ></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div
                className="h-64 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${detail?.imageRight || hero})` }}
              ></div>
            </div>
          </div>

          {/* Extra Images for Tokyo Dome */}
          {cityKey === '東京' && idKey === '19' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${DomeSpa})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${DomeAttraction})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for PayPay Dome (Fukuoka 45) */}
          {cityKey === '福岡' && idKey === '45' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${paypaygourmet})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${paypayjapanseries})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Marine World (Fukuoka 43) */}
          {cityKey === '福岡' && idKey === '43' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${asikashow})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${marinehamabe})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Tokyo Disneyland */}
          {cityKey === '東京' && idKey === '21' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${AdventureLand})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${ToonTown})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Shibuya */}
          {cityKey === '東京' && idKey === '25' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Meijisinku})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Swallows})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Nagoya Castle */}
          {cityKey === '名古屋' && idKey === '27' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${NagoyaNijimaru})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${NagoyaCastle})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Osu Shopping Street */}
          {cityKey === '名古屋' && idKey === '28' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${OsuIce})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${osushotenkai})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Atsuta Jingu */}
          {cityKey === '名古屋' && idKey === '29' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Atsutamori})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Atsutatakara})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Nagoya City Science Museum */}
          {cityKey === '名古屋' && idKey === '31' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${nagoyatokubetsu})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${NagoyaScience})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Nagoya Port Aquarium */}
          {cityKey === '名古屋' && idKey === '32' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${nagoyairuka})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${nagoyasuizokukan})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Tokyo Tower */}
          {cityKey === '東京' && idKey === '1' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${TokyoHero})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Tokubetsu})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Nikko Toshogu */}
          {cityKey === '東京' && idKey === '22' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${NikkoNeko})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${NikkoSaru})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Dazaifu Tenmangu */}
          {cityKey === '福岡' && idKey === '41' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${umegaemochi})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${tobiume})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Kushida Shrine */}
          {cityKey === '福岡' && idKey === '42' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${kushidashrine})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${kushidatorie})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Text */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="prose prose-lg max-w-none">
              <p
                className="text-gray-700 leading-relaxed mb-4"
                dangerouslySetInnerHTML={{
                  __html:
                    detail?.content ||
                    'このスポットに関する詳しい情報は準備中です。見どころやアクセス、楽しみ方などの情報を順次追加していきます。',
                }}
              ></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpotDetailPage;
