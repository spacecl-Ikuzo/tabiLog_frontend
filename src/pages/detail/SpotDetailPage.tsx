import React from 'react';
import { useParams } from 'react-router-dom';

// Assets
import TokyoHero from '../../assets/Tokyo.jpg';
import AsaKusa from '../../assets/AsaKusa.jpg';
import TokyoDome from '../../assets/TokyoDome.jpg';
import TokyoDome2 from '../../assets/TokyoDome2.jpg';
import DomeSpa from '../../assets/DomeSpa.jpg';
import OsakaHero from '../../assets/OsakaCastle.jpg';
import OsakaCastle2 from '../../assets/OsakaCastle2.jpg';
import OsakaGuriko from '../../assets/OsakaGuriko.jpg';
import OsakaGuriko2 from '../../assets/OsakaGuriko2.jpg';
import Dotonbori from '../../assets/Dotonbori.jpg';
import UniversalStudiosJapan from '../../assets/universal_studios japan.jpg';
import UniversalStudiosJapan2 from '../../assets/universal_studios_japan2.jpg';
import UniversalStudiosJapan3 from '../../assets/universal_studios_japan3.jpg';
import OsakaAquarium1 from '../../assets/Osaka_aquarium1.jpg';
import OsakaAquarium2 from '../../assets/Osaka_aquarium2.j.jpg';
import OsakaAquarium3 from '../../assets/Osaka_aquarium3.jpeg';
import OsakaArchitecture5 from '../../assets/OsakaArchitecture5.png';
import OsakaArchitecture from '../../assets/OsakaArchitecture.png';
import OsakaArchitecture2 from '../../assets/OsakaArchitecture2.png';
import OsakaArchitecture3 from '../../assets/OsakaArchitecture3.png';
import OsakaArchitecture4 from '../../assets/OsakaArchitecture4.png';
import KyotoHero from '../../assets/Kinkakuji.jpg';
import KiyoMizuTera from '../../assets/KiyoMizuTera.jpg';
import KyotoKinkakuji1 from '../../assets/KyotoKinkakuji1.jpg';
import KyotoKinkakuji2 from '../../assets/KyotoKinkakuji2.jpg';
import KyotoKinkakuji3 from '../../assets/KyotoKinkakuji3.jpg';
import KyotoKinkakuji14 from '../../assets/KyotoKinkakuji14.jpg';
import KyotoPass4 from '../../assets/KyotoPass4.jpg';
import KyotoPass5 from '../../assets/KyotoPass5.jpg';
import KyotoPass1 from '../../assets/KyotoPass1.png';
import KyotoPass2 from '../../assets/KyotoPass2.png';
import KyotoPass3 from '../../assets/KyotoPass3.png';
import SapporoHero from '../../assets/Sapporo.jpg';
import SapporoTime from '../../assets/SapporoTime.jpg';
import SapporoTower from '../../assets/SapporoTower.jpg';
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
import kamajawaa1 from '../../assets/kamajawaa1.jpg';
import kenrokuenSpring1 from '../../assets/kenrokuen-spring-1.jpg';
import KenrokuenScreenshot from '../../assets/스크린샷 2025-09-21 오후 5.43.45.png';
import Image123 from '../../assets/123.jpg';
import Image1233 from '../../assets/1233.jpg';
import Image12333 from '../../assets/12333.jpg';
import Image22 from '../../assets/22.jpg';
import Image223 from '../../assets/223.jpg';
import HigashiChayaScreenshot from '../../assets/스크린샷 2025-09-21 오후 6.19.47.png';
import KanazawaYuwakuOnsen from '../../assets/Kanazawa_YuwakuOnsen.jpg';
import Kanazawa2 from '../../assets/Kanazawa2.jpg';
import Kanazawa3 from '../../assets/Kanazawa3.jpg';
import Kanazawa4 from '../../assets/Kanazawa4.jpg';
import Hanabi1 from '../../assets/hanabi1.jpeg';
import Screenshot1 from '../../assets/스크린샷 2025-09-23 오전 2.43.52.png';
import Screenshot2 from '../../assets/스크린샷 2025-09-23 오전 2.43.59.png';
import Screenshot3 from '../../assets/스크린샷 2025-09-23 오전 2.44.17.png';
import Screenshot4 from '../../assets/스크린샷 2025-09-23 오전 2.44.23.png';
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
import nakasukawa from '../../assets/nakasukawa.jpg';
import NakasuNight from '../../assets/NakasuNight.jpeg';
import nakasuramen from '../../assets/nakasuramen.jpg';
import ryuunogotoku from '../../assets/ryuunogotoku.jpg';
import nakasuryuu from '../../assets/nakasuryuu.jpg';
import dazaifutenmangu from '../../assets/dazaifutenmangu.jpg';
import tobiume from '../../assets/tobiume.jpg';
import umegaemochi from '../../assets/umegaemochi.jpg';
import goshingyu from '../../assets/goshingyu.jpg';
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
import ohori from '../../assets/ohori.jpg';
import ohoriboat from '../../assets/ohoriboat.jpg';
import ohorigarden from '../../assets/ohorigarden.jpg';
import ohoriori from '../../assets/ohoriori.jpg';

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
      title: '🏛 中之島公会堂 × 黒執事 聖地巡礼',
      description: '中之島公会堂 聖地巡礼！黒執事の世界を体感',
      author: 'アニメ巡礼編集部',
      heroImage: OsakaArchitecture5,
      breadcrumb: ['大阪', '北区', '中之島公会堂'],
      contentTitle: '中之島公会堂と黒執事の関係',
      spots: ['外観（ヴィクトリア建築）', '大ホール', 'ステンドグラス'],
      imageLeft: OsakaArchitecture2,
      imageRight: OsakaArchitecture3,
      content:
        '中之島公会堂は1918年に建てられた大阪を代表するネオ・ルネッサンス様式の建築物です。アニメ『黒執事』の舞台となるヴィクトリア時代のロンドンを彷彿とさせる重厚な外観から、ファンの間では聖地の一つとして親しまれています。作品の公式ロケ地ではありませんが、その雰囲気が「黒執事」の世界観と重なるため、多くのファンが訪れています。<br><br>【2.1 外観（ヴィクトリア建築）】<br>赤レンガと白い石材を組み合わせた外観は、ヴィクトリア時代のロンドンを思わせます。ファンにとっては写真撮影の定番スポットです。<br><br>【2.2 大ホール】<br>公会堂の中心に位置する大ホールは、豪華な装飾とクラシックな雰囲気が特徴。『黒執事』の舞踏会シーンを連想させます。<br><br>【2.3 ステンドグラス】<br>天井や窓に施されたステンドグラスは必見。色鮮やかな光が差し込み、まるでアニメのワンシーンのような幻想的な空間を作り出します。',
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
      title: '🏯 大阪城',
      description: '日本を代表する名城。歴史と美しさを兼ね備えた観光スポット。',
      author: 'タビログ編集部',
      heroImage: OsakaHero,
      breadcrumb: ['大阪', '中央区', '大阪城'],
      contentTitle: '大阪城の基本情報',
      spots: ['天守閣', '西の丸庭園', '大阪城公園', '大阪城ホール'],
      imageLeft: OsakaHero,
      imageRight: OsakaCastle2,
      content:
        '大阪城は日本を代表する歴史的な城の一つで、戦国時代の名将・豊臣秀吉によって築かれました。現在の天守閣は昭和に再建されたもので、内部は博物館として公開されています。春は桜の名所として知られ、多くの観光客で賑わいます。壮大な石垣や堀、美しい庭園も見どころです。<br><br>【2.1 天守閣】<br>大阪城のシンボルである天守閣は、地上8階建ての建物で、最上階からは大阪市街を360度一望できます。内部は歴史博物館となっており、豊臣秀吉や戦国時代に関する展示が充実しています。特に甲冑や武具の展示は人気があります。<br><br>【2.2 西の丸庭園】<br>西の丸庭園は、大阪城の外郭に位置する広大な庭園で、約600本の桜が植えられています。春には「大阪城と桜」の美しいコントラストが楽しめ、写真スポットとしても有名です。四季折々の自然が楽しめる憩いの場です。<br><br>【2.3 大阪城公園】<br>大阪城を囲む広大な公園で、ランニングや散歩を楽しむ市民の憩いの場です。イベントやコンサートも開催され、歴史と現代文化が融合する空間となっています。秋には紅葉も見事で、季節ごとに違う魅力を味わえます。<br><br>【2.4 大阪城ホール】<br>大阪城公園内にある多目的アリーナで、音楽ライブやスポーツイベントが行われます。国内外の有名アーティストがコンサートを開催することで知られ、大阪の文化発信拠点の一つとなっています。',
    },
    '4': {
      title: '🌃 道頓堀',
      description: '大阪の文化と食を体験できる繁華街。',
      author: 'タビログ編集部',
      heroImage: OsakaGuriko2,
      breadcrumb: ['大阪', '中央区', '道頓堀'],
      contentTitle: '道頓堀の基本情報',
      spots: ['グリコサイン', 'かに道楽本店', 'ドン・キホーテ観覧車', '道頓堀川遊覧船'],
      imageLeft: OsakaGuriko,
      imageRight: Dotonbori,
      content:
        '道頓堀は大阪ミナミを代表する繁華街で、「食い倒れの街」として知られています。たこ焼きやお好み焼きなどの大阪グルメを楽しめるほか、夜にはネオン輝く街並みが観光客を魅了します。エリア中央には有名な「グリコの看板」があり、記念撮影スポットとしても人気です。道頓堀川沿いでは遊覧船に乗って街並みを水上から楽しむこともできます。<br><br>【2.1 グリコサイン】<br>道頓堀のシンボル的存在で、大阪を代表するフォトスポット。夜には鮮やかなネオンが輝き、観光客で賑わいます。<br><br>【2.2 かに道楽本店】<br>巨大な動くカニの看板で有名な老舗料理店。新鮮なカニ料理を味わえる人気店です。<br><br>【2.3 ドン・キホーテ観覧車】<br>道頓堀のランドマークの一つ。建物の外側を囲むように設置された楕円形の観覧車からは、大阪市街を一望できます。<br><br>【2.4 道頓堀川遊覧船】<br>道頓堀川をクルーズしながら、ネオンきらめく街並みを楽しめる人気アクティビティ。夜景は特におすすめです。',
    },
    '20': {
      title: '🎢 ユニバーサル・スタジオ・ジャパン',
      description: '大阪の人気テーマパーク。映画の世界を体験できる場所。',
      author: 'タビログ編集部',
      heroImage: UniversalStudiosJapan3,
      breadcrumb: ['大阪', '此花区', 'USJ'],
      contentTitle: 'ユニバーサル・スタジオ・ジャパンの基本情報',
      spots: [
        'ウィザーディング・ワールド・オブ・ハリー・ポッター',
        'スーパー・ニンテンドー・ワールド',
        'ジュラシック・パーク',
        'ミニオン・パーク',
      ],
      imageLeft: UniversalStudiosJapan,
      imageRight: UniversalStudiosJapan2,
      content:
        'USJは大阪を代表する大型テーマパークで、映画やアニメの世界を忠実に再現したアトラクションが楽しめます。ハリーポッターやスーパーマリオ、ジュラシックパークなど、子供から大人まで夢中になれるエリアが充実。四季折々のイベントやショーも人気で、一日中遊べるエンターテイメント施設です。<br><br>【2.1 ウィザーディング・ワールド・オブ・ハリー・ポッター】<br>映画『ハリー・ポッター』の世界を完全再現したエリア。ホグワーツ城やホグズミード村を歩きながら、魔法の世界を体験できます。人気アトラクション「ハリー・ポッター・アンド・ザ・フォービドゥン・ジャーニー」は必見です。<br><br>【2.2 スーパー・ニンテンドー・ワールド】<br>マリオの世界を舞台にした最新エリア。ゲームの中に入り込んだような体験ができ、「マリオカート」や「ヨッシー・アドベンチャー」などのアトラクションが楽しめます。<br><br>【2.3 ジュラシック・パーク】<br>恐竜の世界を再現したスリル満点のエリア。人気ライド「ジュラシック・パーク・ザ・ライド」では巨大な恐竜や水しぶきを体感できます。<br><br>【2.4 ミニオン・パーク】<br>映画『怪盗グルー』シリーズでおなじみのミニオンたちと遊べるエリア。カラフルでユーモラスな雰囲気が家族連れに人気です。',
    },
    '21': {
      title: '🐠 海遊館',
      description: '世界最大級の水族館。ジンベエザメに会える人気スポット。',
      author: 'タビログ編集部',
      heroImage: OsakaAquarium1,
      breadcrumb: ['大阪', '港区', '海遊館'],
      contentTitle: '海遊館の基本情報',
      spots: ['ジンベエザメの大水槽', '南極ゾーン（ペンギン）', '熱帯雨林ゾーン', '夜の海エリア'],
      imageLeft: OsakaAquarium2,
      imageRight: OsakaAquarium3,
      content:
        '海遊館は大阪港に位置する世界最大級の水族館の一つです。館内は14の展示ゾーンに分かれており、太平洋を中心に世界各地の海や川の生き物を展示しています。特にジンベエザメが泳ぐ巨大水槽は迫力満点で、国内外から多くの観光客が訪れる人気スポットです。昼と夜で照明が変わる演出も魅力の一つで、違った雰囲気を楽しめます。<br><br>【2.1 ジンベエザメの大水槽】<br>海遊館のシンボル的存在。巨大なジンベエザメが悠々と泳ぐ姿は必見です。<br><br>【2.2 南極ゾーン（ペンギン）】<br>かわいいペンギンたちの暮らしを間近で観察できる人気エリアです。<br><br>【2.3 熱帯雨林ゾーン】<br>アマゾン川流域を再現。ピラニアやカピバラなどユニークな生物が見られます。<br><br>【2.4 夜の海エリア】<br>照明演出で昼とは違う幻想的な海の世界を体感できるコーナーです。',
    },
    '25': {
      title: '🏛 中之島公会堂 × 黒執事 聖地巡礼',
      description: '中之島公会堂 聖地巡礼！黒執事の世界を体感',
      author: 'アニメ巡礼編集部',
      heroImage: OsakaArchitecture5,
      breadcrumb: ['大阪', '北区', '中之島公会堂'],
      contentTitle: '中之島公会堂と黒執事の関係',
      spots: ['外観（ヴィクトリア建築）', '大ホール', 'ステンドグラス'],
      imageLeft: OsakaArchitecture2,
      imageRight: OsakaArchitecture3,
      content:
        '中之島公会堂は1918年に建てられた大阪を代表するネオ・ルネッサンス様式の建築物です。アニメ『黒執事』の舞台となるヴィクトリア時代のロンドンを彷彿とさせる重厚な外観から、ファンの間では聖地の一つとして親しまれています。作品の公式ロケ地ではありませんが、その雰囲気が「黒執事」の世界観と重なるため、多くのファンが訪れています。<br><br>【2.1 外観（ヴィクトリア建築）】<br>赤レンガと白い石材を組み合わせた外観は、ヴィクトリア時代のロンドンを思わせます。ファンにとっては写真撮影の定番スポットです。<br><br>【2.2 大ホール】<br>公会堂の中心に位置する大ホールは、豪華な装飾とクラシックな雰囲気が特徴。『黒執事』の舞踏会シーンを連想させます。<br><br>【2.3 ステンドグラス】<br>天井や窓に施されたステンドグラスは必見。色鮮やかな光が差し込み、まるでアニメのワンシーンのような幻想的な空間を作り出します。',
    },
  },
  京都: {
    '5': {
      title: '🏯 金閣寺',
      description: '黄金に輝く京都の象徴。池に映る姿は四季折々の絶景。',
      author: 'タビログ編集部',
      heroImage: KyotoHero,
      breadcrumb: ['京都', '北区', '金閣寺'],
      contentTitle: '金閣寺の基本情報',
      spots: ['舎利殿（金閣）', '鏡湖池の景観', '茶室と庭園'],
      imageLeft: KyotoHero,
      imageRight: KiyoMizuTera,
      content:
        '金閣寺は正式名称を「鹿苑寺」といい、世界文化遺産に登録されている京都を代表する寺院です。舎利殿（通称・金閣）は金箔で覆われ、その姿が鏡湖池に映る光景は京都観光のハイライト。室町時代の将軍・足利義満の別荘として建立され、後に禅寺となりました。四季折々の景観が楽しめ、特に雪化粧の金閣は絶景として知られています。<br><br>【2.1 舎利殿（金閣）】<br>黄金の外観が特徴の舎利殿。建物全体が金箔で覆われ、京都随一の美しさを誇ります。<br><br>【2.2 鏡湖池の景観】<br>舎利殿が水面に映る鏡湖池は、四季を通じて異なる絶景を見せてくれます。<br><br>【2.3 茶室と庭園】<br>境内には趣のある茶室や庭園があり、禅の静寂を体感できます。',
    },
    '6': {
      title: '🏯 清水寺',
      description: '世界遺産に登録された京都の名刹。清水の舞台から望む絶景は必見。',
      author: 'タビログ編集部',
      heroImage: KiyoMizuTera,
      breadcrumb: ['京都', '東山区', '清水寺'],
      contentTitle: '清水寺の基本情報',
      spots: ['清水の舞台', '音羽の滝', '三重塔'],
      imageLeft: KiyoMizuTera,
      imageRight: KyotoKinkakuji3,
      content:
        '清水寺は778年に創建された歴史ある寺院で、京都を代表する観光名所の一つです。境内は世界文化遺産に登録されており、特に本堂の「清水の舞台」は高さ13mの木造舞台から京都市街を一望できるスポットとして有名です。春は桜、秋は紅葉の名所としても人気で、一年を通じて観光客で賑わいます。<br><br>【2.1 清水の舞台】<br>本堂から突き出した木造舞台。京都市街を一望できるビュースポットとして人気です。<br><br>【2.2 音羽の滝】<br>境内にある湧水で、長寿・学業・縁結びの御利益があるとされ、多くの参拝者が訪れます<br><br>【2.3 三重塔】<br>鮮やかな朱色の三重塔は清水寺のシンボルの一つ。写真映えスポットとして人気です。',
    },
    '35': {
      title: '🌸 哲学の道',
      description: '桜と紅葉が美しい散策路。心静かに歩きながら四季の京都を感じよう。',
      author: 'タビログ編集部',
      heroImage: KyotoPass5,
      breadcrumb: ['京都', '左京区', '哲学の道'],
      contentTitle: '哲学の道の基本情報',
      spots: ['銀閣寺からのスタート地点', '四季折々の自然景観', '小さなカフェやギャラリー'],
      imageLeft: KyotoPass1,
      imageRight: KyotoPass2,
      content:
        '哲学の道は京都市左京区に位置し、銀閣寺から南禅寺まで約2km続く散策路です。大正時代の哲学者・西田幾多郎が日課として歩いたことからその名がつきました。春には桜並木が満開となり、秋には紅葉が彩る景観が広がり、京都でも特に人気の散策コースの一つです。<br><br>【2.1 銀閣寺からのスタート地点】<br>哲学の道の北側は銀閣寺に隣接しており、観光と合わせて訪れる人が多いです。<br><br>【2.2 四季折々の自然景観】<br>春の桜、夏の緑、秋の紅葉、冬の静寂と、四季を通して異なる表情を楽しめます。<br><br>【2.3 小さなカフェやギャラリー】<br>道沿いにはカフェや工芸ギャラリーが点在し、休憩やショッピングも楽しめます。',
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
      spots: ['龍が如く5の舞台', '中洲の龍', '屋台グルメ', '川沿いナイトビュー'],
      imageLeft: ryuunogotoku,
      imageRight: nakasuryuu,
      content:
        '中洲屋台は福岡の夜を象徴するグルメスポット。博多ラーメン、焼きラーメン、もつ煮、明太子料理など、地元ならではの味を気軽に楽しめます。観光客と地元客が肩を並べて食事を楽しむ活気ある雰囲気が魅力です。<br><br>【2.1 龍が如く5の舞台】<br>中洲は人気ゲーム「龍が如く5」の重要な舞台として登場し、多くのゲームファンが聖地巡礼に訪れています。ゲーム内で再現された中洲の街並みと実際の風景を比較しながら楽しむことができ、龍が如くシリーズのファンにとって特別な場所となっています。<br><br>【2.2 中洲の龍】<br>龍が如く5では中洲が「龍の街」として描かれており、ゲーム内の主人公たちが活躍する舞台として重要な役割を果たしています。実際の中洲を訪れることで、ゲームの世界観と現実の福岡の魅力を同時に体験できます。<br><br>【2.3 屋台グルメ】<br>定番の博多ラーメンから、焼きラーメン、天ぷら、焼き鳥、明太子を使った創作料理まで、屋台ごとに個性豊かなメニューが揃います。少量ずつ食べ歩きしながらお気に入りの一品を見つけるのがおすすめ。<br><br>【2.4 川沿いナイトビュー】<br>中洲の川沿いはネオンが水面に映り込むフォトジェニックな夜景スポット。食後に川沿いを散策すれば、屋台の明かりと夜景が織りなす福岡ならではのロマンチックな時間を過ごせます。',
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
    '44': {
      title: '大濠公園',
      description: '福岡の中心部にある美しい公園。湖と緑に囲まれた憩いの場',
      author: 'タビログ編集部',
      heroImage: ohori,
      breadcrumb: ['福岡', '中央区', '大濠公園'],
      contentTitle: '大濠公園の基本情報',
      spots: ['大濠池', '日本庭園', 'ボート乗り場'],
      imageLeft: ohoriboat,
      imageRight: ohorigarden,
      content:
        '大濠公園は福岡市中央区にある総面積約40ヘクタールの都市公園。中心にある大濠池を囲むように整備された公園で、市民の憩いの場として親しまれています。春の桜、夏の新緑、秋の紅葉、冬の静寂と四季折々の美しさを楽しめる福岡の代表的な公園です。<br><br>【2.1 大濠池】<br>公園の中心を占める大濠池は、周囲約2kmの美しい池。池の周りには遊歩道が整備されており、散策やジョギングを楽しむ人々で賑わいます。池にはボート乗り場もあり、スワンボートや手漕ぎボートで池の上を散策することもできます。夕暮れ時には池面に映る夕日が美しく、カップルや家族連れに人気のロマンチックスポットです。<br><br>【2.2 日本庭園】<br>公園内には伝統的な日本庭園が設けられており、池泉回遊式の庭園として設計されています。石灯籠や橋、滝などが配置され、四季の花々とともに日本の美意識を感じられる空間です。特に春の桜と秋の紅葉の時期は、庭園の美しさが一層際立ちます。<br><br>【2.3 ボート乗り場】<br>大濠池ではスワンボートや手漕ぎボートの貸し出しを行っています。家族連れやカップルが池の上でゆっくりと時間を過ごすことができ、陸上とは違った視点から公園の美しさを楽しめます。ボートから見る福岡の街並みや池の周りの自然は、日常とは違った特別な体験を提供してくれます。',
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
      title: '⚓ 原爆ドーム',
      description: '広島の平和の象徴。世界遺産',
      author: 'タビログ編集部',
      heroImage: HiroshimaHero,
      breadcrumb: ['広島', '中区', '原爆ドーム'],
      contentTitle: '原爆ドームの基本情報',
      spots: ['原爆ドームの基本情報', '平和記念公園', '資料館', '元安川'],
      imageLeft: GenbakuDome,
      imageRight: HiroshimaHero,
      content:
        '原爆ドームは世界遺産に登録された平和の象徴。隣接する平和記念公園や資料館とともに、戦争の悲惨さと平和の尊さを学ぶ場です。川沿いの散策路は穏やかな空気に包まれ、静かな時間が流れます。<br><br>【2.1 平和記念公園】<br>広島市中心部に位置する大規模な公園で、原爆の犠牲者を追悼する慰霊碑やモニュメントが点在。<br><br>【2.2 資料館】<br>原爆の被害と歴史を伝える施設。写真や遺品の展示を通じて、平和の大切さを学ぶことができます。<br><br>【2.3 元安川】<br>原爆ドーム横を流れる川で、春には桜が咲き誇り、美しい景観が楽しめます。',
    },
    '16': {
      title: '🏝 宮島',
      description: '厳島神社で有名な美しい島',
      author: 'タビログ編集部',
      heroImage: HiroshimaHero,
      breadcrumb: ['広島', '廿日市市', '宮島'],
      contentTitle: '宮島の基本情報',
      spots: ['宮島の基本情報', '厳島神社', '大鳥居', '弥山'],
      imageLeft: Miyajima,
      imageRight: HiroshimaHero,
      content:
        '宮島は干満により姿を変える海上の大鳥居で知られ、厳島神社の社殿群は海と山に抱かれた幽玄の美をたたえます。弥山の原始林や鹿とのふれあい、紅葉谷公園など見どころも多く、四季を通じて楽しめます。<br><br>【2.1 厳島神社】<br>世界遺産に登録された神社で、海に浮かぶように建てられた独特の構造が特徴。朱塗りの回廊と背後の緑が美しいコントラストを生みます。<br><br>【2.2 大鳥居】<br>海上にそびえ立つ巨大な鳥居は宮島のシンボル。満潮時には海に浮かぶ姿、干潮時には歩いて近づけるのが魅力です。<br><br>【2.3 弥山】<br>宮島最高峰の山で、古くから信仰の対象とされてきました。山頂からは瀬戸内海を一望でき、絶景スポットとして人気です。',
    },
    '40': {
      title: '⛩️ 厳島神社',
      description: '海に浮かぶ朱色の大鳥居で有名な世界遺産',
      author: 'タビログ編集部',
      heroImage: HiroshimaHero,
      breadcrumb: ['広島', '廿日市市', '厳島神社'],
      contentTitle: '厳島神社の基本情報',
      spots: ['厳島神社の基本情報', '大鳥居', '回廊', '宝物館'],
      imageLeft: Miyajima,
      imageRight: HiroshimaHero,
      content:
        '厳島神社は広島県宮島に位置する世界遺産の神社で、海に浮かぶように建てられた独特の構造が特徴です。朱色の社殿と背後の緑豊かな山々が織りなす風景はまさに絶景。平安時代に建立され、海上交通や航海の守護神として信仰を集めてきました。潮の満ち引きにより姿を変える神秘的な景観が、多くの観光客を魅了しています。<br><br>【2.1 大鳥居】<br>宮島の象徴ともいえる巨大な鳥居。満潮時には海に浮かぶ姿、干潮時には歩いて近づけるのが魅力です。<br><br>【2.2 回廊】<br>朱塗りの回廊が海上に延びる光景は幻想的。季節や時間帯によって異なる美しさを楽しめます。<br><br>【2.3 宝物館】<br>歴史的な美術品や神宝を展示する施設。厳島神社の文化と歴史を学ぶことができます。',
    },
    '41': {
      title: '🌊 鞆の浦',
      description: '江戸時代の港町の面影を残す美しい港',
      author: 'タビログ編集部',
      heroImage: HiroshimaHero,
      breadcrumb: ['広島', '福山市', '鞆の浦'],
      contentTitle: '鞆の浦の基本情報',
      spots: ['鞆の浦の基本情報', '常夜燈', '鞆城跡', '太田家住宅'],
      imageLeft: Miyajima,
      imageRight: HiroshimaHero,
      content:
        '鞆の浦は広島県福山市に位置する港町で、古くから瀬戸内海航路の要衝として栄えてきました。江戸時代の町並みや石畳の路地が今も残り、情緒あふれる景観を楽しめます。宮崎駿監督が映画『崖の上のポニョ』の構想を練った場所としても知られ、アニメファンにも人気のスポットです。新鮮な海の幸を味わえる食事処や、歴史的建造物も数多く点在しています。<br><br>【2.1 常夜燈】<br>港を見守る灯台として江戸時代に建てられた石造りの常夜燈。鞆の浦のシンボル的存在です。<br><br>【2.2 鞆城跡】<br>戦国時代に築かれた城の跡。現在は石垣や遺構が残り、歴史を感じられるスポットです。<br><br>【2.3 太田家住宅】<br>江戸時代の豪商の邸宅。伝統的な建築様式が保存され、往時の暮らしを垣間見ることができます。',
    },
  },
  金沢: {
    '17': {
      title: '🪷 兼六園',
      description: '金沢の代表的な庭園。日本三名園の一つ',
      author: 'タビログ編集部',
      heroImage: Kenrokuen,
      breadcrumb: ['金沢', '兼六町', '兼六園'],
      contentTitle: '兼六園の基本情報',
      spots: ['兼六園の基本情報', '雪吊り', '池泉回遊式庭園', '四季の花々'],
      content:
        '兼六園は、加賀藩前田家が築いた日本を代表する大名庭園で、日本三名園の一つに数えられます。広さ約11.7ヘクタールに及ぶ園内には池や小川、茶屋、石灯籠などが巧みに配置され、四季折々の風景が楽しめます。春の桜、夏の新緑、秋の紅葉、冬の雪吊りと、一年を通じて多彩な魅力を見せてくれる庭園です。<br><br>【2.1 雪吊り】<br>冬の兼六園といえば「雪吊り」。松の枝が雪の重みで折れないように縄で支える技法で、冬の風物詩として有名です。幻想的な雪景色と調和し、訪れる人々を魅了します。<br><br>【2.2 池泉回遊式庭園】<br>園内は池を中心に歩きながら景色を楽しむ「池泉回遊式庭園」の形式を採用。霞ヶ池や唐崎松など見どころが多く、散策するたびに違う景色を堪能できます。<br><br>【2.3 四季の花々】<br>梅、桜、カキツバタ、紅葉、雪景色と、四季ごとに異なる自然美を楽しめるのも兼六園の魅力。どの季節に訪れても新しい表情を見せてくれます。',
    },
    '18': {
      title: '🏯 金沢城公園',
      description: '金沢の歴史を感じられる城跡公園',
      author: 'タビログ編集部',
      heroImage: KanazawaCastle,
      breadcrumb: ['金沢', '丸の内', '金沢城公園'],
      contentTitle: '金沢城公園の基本情報',
      spots: ['金沢城公園の基本情報', '石川門', '菱櫓', '桜並木'],
      content:
        '金沢城公園は、加賀百万石を誇った前田家の居城・金沢城の跡地を整備した歴史公園です。石川門や菱櫓などの建物が復元され、江戸時代の城郭建築を今に伝えています。広大な園内は四季折々の景観を楽しめ、春には桜の名所としても知られています。<br><br>【2.1 石川門】<br>白壁と石垣が美しい城門で、国の重要文化財に指定されています。金沢城の正門として威厳を誇ります。<br><br>【2.2 菱櫓】<br>独特の菱形の屋根を持つ櫓で、復元された内部を見学することができます。戦国時代の防御構造や建築技術を知る貴重なスポットです。<br><br>【2.3 桜並木】<br>園内には約400本の桜が植えられており、春には花見客で賑わいます。城跡と桜のコントラストは必見です。',
    },
    '19': {
      title: '🏘 東茶屋街',
      description: '江戸時代の茶屋街。金沢の伝統文化を感じられる',
      author: 'タビログ編集部',
      heroImage: Image22,
      breadcrumb: ['金沢', 'ひがし茶屋街', '東茶屋街'],
      contentTitle: '東茶屋街の基本情報',
      spots: ['東茶屋街の基本情報', '町家建築', '和菓子店', '工芸品ショップ'],
      content:
        '東茶屋街は、江戸時代の雰囲気を今に伝える茶屋街で、石畳の通りに町家が並んでいます。伝統的な町家建築は国の重要伝統的建造物群保存地区に指定されており、歴史的景観を楽しむことができます。現在はカフェや和菓子店、工芸品店が並び、観光とショッピングが同時に楽しめる人気スポットです。<br><br>【2.1 町家建築】<br>木造の町家が立ち並び、格子窓や土壁が特徴的。伝統建築の美しさを間近で感じられます。<br><br>【2.2 和菓子店】<br>金沢は和菓子の町としても有名。茶屋街には老舗の和菓子店が点在し、抹茶と一緒に楽しむのがおすすめです。<br><br>【2.3 工芸品ショップ】<br>加賀友禅や金箔工芸など、金沢ならではの伝統工芸品を扱う店が多数。お土産探しにも最適です。',
    },
    '42': {
      title: '🏘 東茶屋街',
      description: '江戸時代の茶屋街。金沢の伝統文化を感じられる',
      author: 'タビログ編集部',
      heroImage: Image22,
      breadcrumb: ['金沢', 'ひがし茶屋街', '東茶屋街'],
      contentTitle: '東茶屋街の基本情報',
      spots: ['東茶屋街の基本情報', '町家建築', '和菓子店', '工芸品ショップ'],
      content:
        '東茶屋街は、江戸時代の雰囲気を今に伝える茶屋街で、石畳の通りに町家が並んでいます。伝統的な町家建築は国の重要伝統的建造物群保存地区に指定されており、歴史的景観を楽しむことができます。現在はカフェや和菓子店、工芸品店が並び、観光とショッピングが同時に楽しめる人気スポットです。<br><br>【2.1 町家建築】<br>木造の町家が立ち並び、格子窓や土壁が特徴的。伝統建築の美しさを間近で感じられます。<br><br>【2.2 和菓子店】<br>金沢は和菓子の町としても有名。茶屋街には老舗の和菓子店が点在し、抹茶と一緒に楽しむのがおすすめです。<br><br>【2.3 工芸品ショップ】<br>加賀友禅や金箔工芸など、金沢ならではの伝統工芸品を扱う店が多数。お土産探しにも最適です。',
      imageLeft: Image22,
      imageRight: Image223,
      imageBottom: HigashiChayaScreenshot,
    },
    '20': {
      title: '♨️ 湯涌温泉',
      description: '金沢の奥座敷。自然に囲まれた静かな温泉地',
      author: 'タビログ編集部',
      heroImage: HakoneOnsen,
      breadcrumb: ['金沢', '湯涌温泉', '湯涌温泉'],
      contentTitle: '湯涌温泉の基本情報',
      spots: ['湯涌温泉の基本情報', '露天風呂', '歴史ある旅館', '足湯'],
      imageLeft: HakoneOnsen,
      imageRight: HakoneOnsen,
      imageBottom: HakoneOnsen,
      content:
        '湯涌温泉は、金沢の奥座敷と呼ばれる温泉地で、自然に囲まれた落ち着いた雰囲気が特徴です。開湯は平安時代に遡るとされ、加賀藩の歴代藩主にも愛されました。現在も情緒ある温泉旅館が並び、訪れる人に癒しと安らぎを与えています。<br><br>【2.1 露天風呂】<br>四季折々の自然を眺めながら湯浴みを楽しめる露天風呂が人気。特に冬の雪見風呂は格別です。<br><br>【2.2 歴史ある旅館】<br>江戸時代から続く老舗旅館もあり、伝統的なおもてなしと落ち着いた和の空間を体験できます。<br><br>【2.3 足湯】<br>気軽に楽しめる足湯スポットも整備されており、散策の途中に立ち寄って温泉気分を味わえます。',
    },
    '43': {
      title: '♨️ 湯涌温泉',
      description: '金沢の奥座敷。自然に囲まれた静かな温泉地',
      author: 'タビログ編集部',
      heroImage: KanazawaYuwakuOnsen,
      breadcrumb: ['金沢', '湯涌温泉', '湯涌温泉'],
      contentTitle: '湯涌温泉の基本情報',
      spots: ['湯涌温泉の基本情報', '露天風呂', '歴史ある旅館', '足湯'],
      imageLeft: Kanazawa2,
      imageRight: Kanazawa3,
      imageBottom: Kanazawa4,
      content:
        '湯涌温泉は、金沢の奥座敷と呼ばれる温泉地で、自然に囲まれた落ち着いた雰囲気が特徴です。開湯は平安時代に遡るとされ、加賀藩の歴代藩主にも愛されました。現在も情緒ある温泉旅館が並び、訪れる人に癒しと安らぎを与えています。<br><br>【2.1 露天風呂】<br>四季折々の自然を眺めながら湯浴みを楽しめる露天風呂が人気。特に冬の雪見風呂は格別です。<br><br>【2.2 歴史ある旅館】<br>江戸時代から続く老舗旅館もあり、伝統的なおもてなしと落ち着いた和の空間を体験できます。<br><br>【2.3 足湯】<br>気軽に楽しめる足湯スポットも整備されており、散策の途中に立ち寄って温泉気分を味わえます。',
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
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url(${hero})`,
          backgroundPosition: cityKey === '京都' && idKey === '35' ? 'center 5%' : 'center'
        }}
      >
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
            <h1
              className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl"
              style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}
            >
              {safeTitle}
            </h1>
            <p
              className="text-white text-lg mb-4 drop-shadow-xl"
              style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)' }}
            >
              {safeDesc}
            </p>
            <div
              className="flex items-center space-x-4 text-white text-sm drop-shadow-lg"
              style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)' }}
            >
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
          {!(cityKey === '京都' && (idKey === '6' || idKey === '35')) && !(cityKey === '金沢' && (idKey === '17' || idKey === '18' || idKey === '19' || idKey === '42')) && (
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
          )}

          {/* Extra Images for 中之島公会堂 */}
          {cityKey === '大阪' && idKey === '25' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${OsakaArchitecture})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${OsakaArchitecture4})` }}
                ></div>
              </div>
            </div>
          )}

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

          {/* Extra Images for Kenrokuen */}
          {cityKey === '金沢' && idKey === '17' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${kamajawaa1})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${kenrokuenSpring1})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${KenrokuenScreenshot})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Kanazawa Castle Park */}
          {cityKey === '金沢' && idKey === '18' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Image123})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Image1233})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Image12333})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Higashi Chaya District */}
          {cityKey === '金沢' && idKey === '19' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Image22})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Image223})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${HigashiChayaScreenshot})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Higashi Chaya District (ID 42) */}
          {cityKey === '金沢' && idKey === '42' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Image22})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Image223})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${HigashiChayaScreenshot})` }}
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

          {/* Extra Images for Nakasu Yatai */}
          {cityKey === '福岡' && idKey === '40' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${NakasuNight})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${nakasuramen})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Ohori Park */}
          {cityKey === '福岡' && idKey === '44' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${ohoriori})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${ohori})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Kiyomizu-dera */}
          {cityKey === '京都' && idKey === '6' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${KyotoKinkakuji1})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${KyotoKinkakuji3})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${KyotoKinkakuji14})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Philosopher's Path */}
          {cityKey === '京都' && idKey === '35' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${KyotoPass1})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${KyotoPass2})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${KyotoPass3})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${KyotoPass4})` }}
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
