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
// import USJ from '../../assets/USJ.jpg';
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
import OsakaTempozan from '../../assets/OsakaTempozan.png';
import TogetsukyoBridge5 from '../../assets/TogetsukyoBridge5.jpeg';
import TogetsukyoBridge1 from '../../assets/TogetsukyoBridge1.jpg';
import TogetsukyoBridge2 from '../../assets/TogetsukyoBridge2.jpg';
import GionKyoto3 from '../../assets/GionKyoto3.png';
import GionKyoto1 from '../../assets/GionKyoto1.jpeg';
import GionKyoto4 from '../../assets/GionKyoto4.jpg';
import KyotoPass5 from '../../assets/KyotoPass5.jpg';
import KyotoHero from '../../assets/Kinkakuji.jpg';
import KiyoMizuTera from '../../assets/KiyoMizuTera.jpg';
import SapporoTime from '../../assets/SapporoTime.jpg';
// import SapporoTower from '../../assets/SapporoTower.jpg';
import sapporowintertokei from '../../assets/sapporowintertokei.jpg';
import sapporotokeiexhibition from '../../assets/sapporotokeiexhibition.jpg';
import sapporoflower from '../../assets/sapporoflower.jpg';
import sapporofountain from '../../assets/sapporofountain.jpg';
import sapporofountain2 from '../../assets/sapporofountain2.jpg';
import sapporotelevi from '../../assets/sapporotelevi.jpg';
import maruyamapolarbear from '../../assets/maruyamapolarbear.jpg';
import maruyamakodomo from '../../assets/maruyamakodomo.jpg';
import maruyamamap from '../../assets/maruyamamap.jpg';
import maruyamatiger from '../../assets/maruyamatiger.jpeg';
import GenghisKhan from '../../assets/GenghisKhan.jpg';
import GenghisKhanBeefBeer from '../../assets/GenghisKhanBeefBeer.jpg';
import SapporoBeerMuseum from '../../assets/SapporoBeerMuseum.jpg';
import SapporoBeerTaste from '../../assets/SapporoBeerTaste.jpg';
import FukuokaCastle from '../../assets/FukuokaCastle.jpg';
import FukuokaCastle2 from '../../assets/FukuokaCastle2.jpg';
import HakataCity from '../../assets/HakataCity.jpg';
import hakatadepartbelow from '../../assets/hakatadepartbelow.jpg';
import hakataIlumi from '../../assets/hakataIlumi.jpg';
import OkinawaHero from '../../assets/OkinawaResort.jpg';
import Shurijo from '../../assets/Shurijo.jpg';
import OkiAquarium from '../../assets/OkiAquarium.jpg';
import manzwamo from '../../assets/manzwamo.jpg';
import manzwamo2 from '../../assets/manzwamo2.jpg';
import kouribridge from '../../assets/kouribridge.jpg';
import kourirocks from '../../assets/kourirocks.jpg';
import Kokusaidori from '../../assets/Kokusaidori.jpg';
import Shurijokaji from '../../assets/Shurijokaji.jpg';
import sonokoutaki from '../../assets/sonokoutaki.jpg';
import syureinomon from '../../assets/syureinomon.jpg';
import okinawazinbe from '../../assets/okinawazinbe.jpg';
import okisangou from '../../assets/okisangou.jpg';
import tsuraumiiruka from '../../assets/tsuraumiiruka.jpg';
import tsuraumimap from '../../assets/tsuraumimap.jpg';
import okimahoroba from '../../assets/okimahoroba.jpg';
import okinawaliquor from '../../assets/okinawaliquor.jpg';
import steakhouseoki from '../../assets/steakhouseoki.jpg';
import okisteakhouse from '../../assets/okisteakhouse.jpg';
import NagoyaCastle from '../../assets/NagoyaCastle.jpg';
import Atsutasinkyu from '../../assets/Atsutasinkyu.jpg';
import OsuHistory from '../../assets/OsuHistory.jpg';
import Osunatumaturi from '../../assets/Osunatumaturi.jpg';
import OsuIce from '../../assets/OsuIce.jpg';
import osushotenkai from '../../assets/osushotenkai.jpg';
import akihabara from '../../assets/akihabara.jpg';
import akibaanimate from '../../assets/akibaanimate.jpg';
import akibaatre from '../../assets/akibaatre.jpg';
import akibayodobasi from '../../assets/akibayodobasi.jpg';
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
import mesenyama from '../../assets/mesenyama.jpg';
import miyajimaItsukushima from '../../assets/miyazimaitsukushima.jpg';
import Itsukushimashrine from '../../assets/Itsukushimashrine.jpg';
import MiyajimaItsukushimaTorii from '../../assets/Miyajima_Itsukushima_Torii.jpg';
import HiroshimaMemorialPark from '../../assets/Hiroshimamemorialpark.jpg';
import HiroshimaMemorialMuseum from '../../assets/Hiroshimamemorialmuseum.jpg';
import HiroshimaMuseumFront from '../../assets/hiroshimamuseumfront.jpg';
import MotoyasuRiver from '../../assets/motoyasuriver.jpg';
import KanazawaHero from '../../assets/Kanazawa.jpg';
import Kenrokuen from '../../assets/Kenrokuen.jpg';
import KanazawaCastle from '../../assets/KanazawaCastle.jpg';
// New images
import TokyoDisneyland from '../../assets/tokyodisneyland.jpg';
import DisneyResort from '../../assets/DisneyResort.jpg';
import DisneySea from '../../assets/DIsneySea.jpg';
import NikkoToshogu from '../../assets/nikkotoshogu.jpg';
// import HakoneOnsen from '../../assets/hakoneonsen.jpg';
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
import hokudaimuseum from '../../assets/hokudaimuseum.jpg';
import hokudaimilkcookie from '../../assets/hokudaimilkcookie.jpg';
import hokudai from '../../assets/hokudai.jpg';
import hokudaipopula from '../../assets/hokudaipopula.jpg';
import sapporoagribuilding from '../../assets/sapporoagribuilding.jpg';
import tanukikoji from '../../assets/tanukikoji.jpg';
import tanukiya from '../../assets/tanukiya.jpg';
import Museum21thCentury1 from '../../assets/21thcenturyimage1--8-.png';
import Museum21thCentury2 from '../../assets/21thcenturyimage1--8-.png';
import Museum21thCentury3 from '../../assets/21thcenturyimage1--8-.png';
import Kanazawa_YuwakuOnsen from '../../assets/Kanazawa_YuwakuOnsen.jpg';
import Hirosima15 from '../../assets/Hirosima15.png';
import Hirosima12 from '../../assets/Hirosima12.jpg';
import Hirosima13 from '../../assets/Hirosima13.jpg';
import Hirosima14 from '../../assets/Hirosima14.jpg';
import Hirosima16 from '../../assets/Hirosima16.jpg';
import Tomonoura2 from '../../assets/Tomonoura2.png';
import Tomonura3 from '../../assets/Tomonura3.png';
import Tomonoura_Harbor from '../../assets/Tomonoura_Harbor.jpg';
import tomonoura from '../../assets/tomonoura.jpg';
import tomonourajouyato from '../../assets/tomonourajouyato.jpg';
import fukugengdaizorou from '../../assets/fukugengdaizorou.jpg';
import sensuisima from '../../assets/sensuisima.jpg';
import Ponyo1 from '../../assets/ponyo1.png';
import Ponyo2 from '../../assets/ponyo2.png';
import tanukikojimap from '../../assets/tanukikojimap.jpg';
import tanukisoupcurry from '../../assets/tanukisoupcurry.jpg';
import tanukikitaichiramen from '../../assets/tanukikitaichiramen.jpg';
import Otaru_Canal_Winter from '../../assets/Otaru_Canal_Winter.jpg';
import otaruwintermatsuri from '../../assets/otaruwintermatsuri.jpg';
import otarucruise from '../../assets/otarucruise.jpg';
import otaruletao from '../../assets/otaruletao.jpg';
import otaruletaocake from '../../assets/otaruletaocake.jpg';

type SpotDetail = {
  title: string;
  description: string;
  author: string;
  heroImage: string;
  breadcrumb: string[];
  contentTitle: string;
  spots: string[];
  imageLeft?: string;
  imageRight?: string;
  extraImages?: string[];
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
        '東京タワーは高さ333mの電波塔で、昭和から令和に至るまで東京の景観を象徴するランドマークです。昼は街並みと富士山、夜は宝石のような夜景が一望でき、季節やイベントに合わせたライトアップも見どころ。フットタウンにはショップやフードコート、ポップカルチャーの展示も充実し、家族連れからカップル、海外旅行者まで幅広く楽しめます。アクセスは赤羽橋・御成門・神谷町など複数駅から徒歩圏で便利です。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">東京都港区芝公園4-2-8</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">JR山手線「浜松町駅」徒歩15分<br>地下鉄大江戸線「赤羽橋駅」徒歩5分<br>地下鉄三田線「御成門駅」徒歩6分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">大展望台: 9:00〜23:00<br>特別展望台: 9:00〜22:45<br>年中無休（メンテナンス日除く）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（大展望台）</td><td style="border: 1px solid #ddd; padding: 8px;">大人（高校生以上）: 1,200円<br>子供（小・中学生）: 700円<br>幼児（4歳以上）: 500円</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（特別展望台）</td><td style="border: 1px solid #ddd; padding: 8px;">大人（高校生以上）: 3,000円<br>子供（小・中学生）: 1,800円<br>幼児（4歳以上）: 1,200円</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">チケット購入</td><td style="border: 1px solid #ddd; padding: 8px;">公式サイト・現地窓口・コンビニ<br>オンライン予約でスムーズ入場</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体割引</td><td style="border: 1px solid #ddd; padding: 8px;">25名以上で団体料金適用<br>学校団体・企業団体向け特別プランあり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（台数限定）<br>公共交通機関利用推奨</td></tr></table><br>【2.1 東京タワーカフェ】<br>東京タワー内にあるカフェで、展望台を眺めながら美味しいコーヒーや軽食を楽しめます。特別な記念日やデートにも最適なロマンチックな空間です。フットタウン1階の「タワーカフェ」では、東京タワーをモチーフにしたオリジナルスイーツやドリンクを提供しています。<br><br>【2.2 タワー展望】<br>東京タワーの展望台から見る東京の街並みは圧巻です。昼間は富士山まで見渡せ、夜は宝石のように輝く東京の夜景を楽しめます。天気の良い日には東京スカイツリーや皇居、東京湾まで一望でき、東京の地理を理解するのに最適なスポットです。<br><br>【2.3 大展望台】<br>150mの高さにある大展望台では、東京の街並みを360度見渡すことができます。天気の良い日には富士山も見える絶景スポットです。展望台内には記念撮影スポットやギフトショップ、軽食コーナーもあり、ゆっくりと景色を楽しめます。<br><br>【2.4 特別展望台】<br>250mの高さにある特別展望台は、より高い位置から東京の景色を楽しめます。より迫力のある眺望を体験したい方におすすめです。ガラス張りの床から下を見下ろすスリルも味わえ、東京の街並みをより近くで感じることができます。',
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
        '浅草寺は628年創建と伝わる都内最古の寺院。雷門の大提灯と仲見世通りの賑わいが象徴的で、和菓子や工芸品の老舗が並ぶ参道は散策に最適です。四季折々の年中行事があり、江戸文化と信仰が今も息づいています。スカイツリーや隅田川クルーズと組み合わせた観光コースも人気です。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">東京都台東区浅草2-3-1</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">東京メトロ銀座線「浅草駅」徒歩5分<br>東武スカイツリーライン「浅草駅」徒歩5分<br>つくばエクスプレス「浅草駅」徒歩5分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">参拝時間</td><td style="border: 1px solid #ddd; padding: 8px;">本堂: 6:00〜17:00（10月〜3月は6:30〜17:00）<br>境内: 24時間開放<br>年中無休</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金</td><td style="border: 1px solid #ddd; padding: 8px;">境内・本堂: 無料<br>宝物殿: 大人300円、小中学生100円<br>写経体験: 500円（要予約）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">お守り・御朱印</td><td style="border: 1px solid #ddd; padding: 8px;">お守り: 500円〜1,500円<br>御朱印: 300円<br>各種祈願: 1,000円〜5,000円</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体対応</td><td style="border: 1px solid #ddd; padding: 8px;">団体参拝・写経体験対応<br>ガイドツアー: 要予約・有料<br>学校団体向け特別プログラムあり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">専用駐車場なし<br>周辺コインパーキング利用<br>公共交通機関利用推奨</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">年中行事</td><td style="border: 1px solid #ddd; padding: 8px;">初詣・節分・花まつり・夏祭り<br>観音祭・七五三・大晦日除夜の鐘</td></tr></table><br>【2.1 雷門】<br>浅草寺のシンボルである雷門は、高さ3.9m、幅3.3mの巨大な提灯が特徴的です。門の左右には風神と雷神の像が安置されており、江戸時代から続く伝統的な建築美を今に伝えています。この門をくぐると、浅草寺の境内への入り口となります。夜間はライトアップされ、幻想的な雰囲気を演出します。雷門の提灯は約10年ごとに新調され、常に美しい状態を保っています。<br><br>【2.2 仲見世通り】<br>雷門から本堂まで続く約250mの参道「仲見世通り」は、江戸時代から続く歴史ある商店街です。約90軒の店舗が並び、人形焼き、雷おこし、和菓子などの名物や、扇子、着物、工芸品などの伝統的な商品を販売しています。観光客で賑わうこの通りは、日本の伝統文化を体験できる貴重な空間です。老舗店舗では職人技による手作り商品も多く、お土産選びに最適です。<br><br>【2.3 本堂】<br>浅草寺の本堂は、観音菩薩を本尊とする聖観音宗の総本山です。現在の本堂は1958年に再建されたもので、江戸時代の建築様式を現代に再現しています。本堂内では参拝や写経体験ができ、年間を通じて様々な法要や行事が行われます。また、本堂前の広場では、季節に応じた花々や紅葉を楽しむことができます。本堂の天井には「龍の図」が描かれており、参拝の際は上を見上げてみてください。',
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
        '東京ドームはプロ野球・読売ジャイアンツの本拠地として知られる多目的スタジアムで、コンサート、展示会、スポーツイベントなど年間を通して多彩な催しが開催されます。隣接する「LaQua（ラクーア）」にはスパ施設やショッピングモール、飲食店が集まり、温泉・サウナ・リラクゼーションを楽しめる都市型スパとして地元民にも観光客にも人気です。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">東京都文京区後楽1-3-61</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">JR総武線「水道橋駅」徒歩5分<br>東京メトロ丸ノ内線「後楽園駅」徒歩1分<br>東京メトロ南北線「後楽園駅」徒歩1分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">イベントにより変動<br>野球試合: 通常18:00〜21:30<br>コンサート・展示会: 要確認</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（野球観戦）</td><td style="border: 1px solid #ddd; padding: 8px;">内野指定席: 3,000円〜8,000円<br>外野席: 1,500円〜2,500円<br>ファミリー席: 2,000円〜4,000円</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（コンサート）</td><td style="border: 1px solid #ddd; padding: 8px;">アーティスト・イベントにより変動<br>通常: 5,000円〜15,000円<br>VIP席: 20,000円〜</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">チケット購入</td><td style="border: 1px solid #ddd; padding: 8px;">公式サイト・コンビニ・現地窓口<br>オンライン予約推奨</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体割引</td><td style="border: 1px solid #ddd; padding: 8px;">20名以上で団体料金適用<br>学校団体・企業団体向け特別プランあり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（台数限定）<br>イベント日は混雑・公共交通機関推奨</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設内サービス</td><td style="border: 1px solid #ddd; padding: 8px;">飲食店・グッズショップ・ATM<br>ベビーカー貸出・車椅子対応</td></tr></table><br>【2.1 東京ドーム紹介】<br>東京ドームは1988年に開業した日本初のドーム型スタジアムです。読売ジャイアンツの本拠地として知られ、年間を通じて野球、コンサート、展示会、スポーツイベントなど多彩な催しが開催されます。学校行事の会場としても利用され、日本電子専門学校のスポーツフェスティバルなど、各種団体の大規模イベントが開催されることでも有名です。国際大会ではWBC（ワールド・ベースボール・クラシック）の会場にもなり、世界中のファンが集まる熱狂の舞台となりました。<br><br>【2.2 東京ドーム野球】<br>東京ドームは読売ジャイアンツの本拠地として、プロ野球ファンにとって聖地のような存在です。屋内球場のため天候に左右されず、快適な環境で野球観戦を楽しめます。球場内には様々な飲食店やグッズショップがあり、野球観戦と合わせてショッピングやグルメも楽しめる総合エンターテイメント施設です。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">試合種別</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">シーズン期間</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">開催頻度</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">チケット購入</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">読売ジャイアンツ</td><td style="border: 1px solid #ddd; padding: 8px;">3月下旬〜10月</td><td style="border: 1px solid #ddd; padding: 8px;">平日・週末</td><td style="border: 1px solid #ddd; padding: 8px;">公式サイト・コンビニ</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">WBC国際大会</td><td style="border: 1px solid #ddd; padding: 8px;">3年ごと（不定期）</td><td style="border: 1px solid #ddd; padding: 8px;">大会期間中</td><td style="border: 1px solid #ddd; padding: 8px;">公式サイト・チケット販売</td></tr></table><br>座席は内野・外野・バックネット裏など様々な選択肢があります。野球観戦の際は、球場内の飲食店でビールやホットドッグを楽しみながら応援するのが定番です。<br><br>【2.3 ラクーア】<br>東京ドームに隣接する「LaQua（ラクーア）」は、スパ施設やショッピングモール、飲食店が集まった複合施設です。温泉・サウナ・リラクゼーションを楽しめる都市型スパとして地元民にも観光客にも人気で、野球観戦の前後や休日にリラックスできる空間を提供しています。<br><br>【2.4 ドームアトラクション】<br>東京ドームには「東京ドームシティ」という総合エンターテイメント施設があります。ドーム内の遊園地エリア「東京ドームシティアトラクションズ」では、家族連れが楽しめるアトラクションが充実しています。特に「サンダードルフィン」は日本最大級のローラーコースターで、スリル満点の体験ができます。また、「ビッグオー」は世界初のフリーフォールタワーで、地上80mからの絶景とスリルを同時に楽しめます。その他にも「スカイフラワー」や「ワンダーエッグ」など、様々な年齢層が楽しめるアトラクションが揃っています。野球観戦だけでなく一日中エンターテイメントを満喫できる総合レジャー施設です。',
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
        '日光東照宮は徳川家康を祀る神社で、世界遺産に登録されています。豪華絢爛な建築と精緻な彫刻が特徴で、特に「見ざる、聞かざる、言わざる」の三猿や眠り猫の彫刻は有名です。江戸時代の最高技術を集めた建築美を堪能できる貴重な文化遺産です。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">栃木県日光市山内2301</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">JR日光線「日光駅」からバス10分<br>東武日光線「東武日光駅」からバス10分<br>東京から約2時間</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">参拝時間</td><td style="border: 1px solid #ddd; padding: 8px;">4月〜10月: 8:00〜17:00<br>11月〜3月: 8:00〜16:00<br>年中無休</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金</td><td style="border: 1px solid #ddd; padding: 8px;">大人（高校生以上）: 1,300円<br>小・中学生: 450円<br>幼児: 無料</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">宝物殿・美術館</td><td style="border: 1px solid #ddd; padding: 8px;">宝物殿: 大人800円、小中学生300円<br>美術館: 大人500円、小中学生200円<br>共通券: 大人2,100円、小中学生750円</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">ガイドツアー</td><td style="border: 1px solid #ddd; padding: 8px;">日本語ガイド: 1,000円〜<br>英語ガイド: 2,000円〜<br>団体ガイド: 要予約・割引あり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体割引</td><td style="border: 1px solid #ddd; padding: 8px;">30名以上で団体料金適用<br>学校団体・企業団体向け特別プランあり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（台数限定）<br>バス・電車利用推奨</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">お守り・御朱印</td><td style="border: 1px solid #ddd; padding: 8px;">お守り: 500円〜2,000円<br>御朱印: 500円<br>各種祈願: 1,000円〜10,000円</td></tr></table><br>【2.1 陽明門】<br>日光東照宮の代表的な建築物で、平成の大修理を終えたばかりの艶やかな塗装と煌びやかな装飾が印象的です。豪華絢爛な彫刻の意味と秘密が込められた、まさに日光東照宮のシンボル的存在です。陽明門には508体の彫刻が施されており、その一つ一つに深い意味が込められています。特に「唐子遊び」の彫刻は、子どもたちの無邪気な遊びを表現し、平和への願いを表しています。門の上部には「昇り龍」と「降り龍」の彫刻があり、これらは水の神として火災から建物を守る意味があります。<br><br>【2.2 眠り猫】<br>驚くほど小さな彫刻で、観光客の通りが多いところに設置されています。現地ではよく見れないことがありますが、日光東照宮の有名な彫刻の一つとして知られています。眠り猫は左甚五郎の作と伝えられ、猫が眠っている姿を彫刻したものです。この彫刻には「猫が眠っている間は鼠が来ない」という意味があり、家康の墓所を守る役割を果たしています。猫の下には雀の彫刻もあり、猫が眠っているから雀も安心して遊んでいるという平和な情景を表現しています。<br><br>【2.3 三猿】<br>「見ざる、聞かざる、言わざる」で有名な三猿は、8つの面で構成された物語の一部です。諺の意味と日光東照宮の三猿が意味するところが若干違うのも面白いところで、年老いて取り返しがつかなくなる前に早めの三猿という教えが込められています。三猿は神厩舎（しんきゅうしゃ）の壁面に彫刻されており、人間の一生を8つの場面で表現した物語の一部です。三猿の教えは「若いうちは悪いことを見たり、聞いたり、言ったりしないように」という意味で、子どもの教育に関する教訓が込められています。',
    },
    '23': {
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
        '東京ディズニーランドは世界で最も人気のテーマパークの一つ。ミッキーマウスをはじめとするディズニーキャラクターと一緒に夢の世界を体験できます。7つのテーマランドがあり、家族連れからカップルまで幅広い年齢層が楽しめます。パレードやショーも充実しており、一日中楽しめるエンターテイメント施設です。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">JR京葉線「舞浜駅」徒歩5分<br>東京駅から約15分、新宿駅から約40分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（1日券）</td><td style="border: 1px solid #ddd; padding: 8px;">大人（18歳以上）: 8,400円<br>中人（12-17歳）: 7,000円<br>小人（4-11歳）: 5,000円</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">9:00〜22:00（季節により変動）<br>休園日: 不定期（公式サイトで確認）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">チケット購入</td><td style="border: 1px solid #ddd; padding: 8px;">公式サイト・コンビニ・現地窓口<br>事前購入推奨（当日完売の場合あり）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体割引</td><td style="border: 1px solid #ddd; padding: 8px;">20名以上で団体料金適用<br>学校団体・企業団体向け特別プランあり</td></tr></table><br>【2.1 ディズニーリゾート】<br>東京ディズニーリゾートは、東京ディズニーランドと東京ディズニーシーを中心とした総合リゾートエリアです。ホテル、ショッピングモール、レストランが集まり、宿泊から食事、ショッピングまで全てを楽しめる完結型のリゾートです。リゾート内のホテルに宿泊すると、パークへの優先入場や特別な特典を利用できます。<br><br>【2.2 ディズニーシー】<br>東京ディズニーシーは、海をテーマにした世界唯一のディズニーパークです。7つのポート（港）で構成され、それぞれ異なる時代と地域の雰囲気を体験できます。アトラクションはよりスリリングで大人向けのものが多く、特に「タワー・オブ・テラー」や「インディ・ジョーンズ・アドベンチャー」は人気の絶叫系アトラクションです。<br><br>【2.3 アドベンチャーランド】<br>アドベンチャーランドは、ジャングルや海賊の世界をテーマにしたエリアです。「ジャングルクルーズ」では野生動物の模型や滝を楽しみ、「カリブの海賊」では海賊の冒険を体験できます。「インディ・ジョーンズ・アドベンチャー」は迫力満点のライドで、古代遺跡の探検を疑似体験できます。熱帯の雰囲気を演出する植物や建物が特徴的です。<br><br>【2.4 トゥーンタウン】<br>トゥーンタウンは、ディズニーアニメのキャラクターたちが住む街を再現したエリアです。ミッキーマウスの家「ミッキーの家とミート・ミッキー」では、実際にミッキーと会って写真を撮ることができます。「ロジャーラビットのカートゥーンスピン」は回転しながら進む楽しいライドで、子供から大人まで楽しめます。カラフルで可愛らしい建物が並び、まるでアニメの世界にいるような気分を味わえます。',
    },
    '25': {
      title: '🎡 天保山大観覧車 × 名探偵コナン 聖地巡礼',
      description: '天保山大観覧車 聖地巡礼！コナンと大阪の夜景',
      author: 'アニメ巡礼編集部',
      heroImage: OsakaTempozan,
      breadcrumb: ['大阪', '港区', '天保山大観覧車'],
      contentTitle: '天保山大観覧車とコナンの関係',
      spots: ['観覧車からの夜景', '海遊館とのセット巡り', '大阪港ベイエリア'],
      imageLeft: OsakaTempozan,
      imageRight: OsakaTempozan,
      content:
        '天保山大観覧車は大阪港に位置する日本最大級の観覧車で、直径100mを超えるスケールを誇ります。劇場版『名探偵コナン 純黒の悪夢』では、クライマックスの舞台の一つとして登場し、緊張感あるシーンを彩りました。現在ではコナンファンの聖地として知られ、夜景を楽しみながら作品の雰囲気を味わえる人気スポットとなっています。<br><br>【2.1 観覧車からの夜景】<br>地上112.5mから眺める夜景は圧巻。コナンと同じ視点で大阪の街を見渡せます。<br><br>【2.2 海遊館とのセット巡り】<br>海遊館と一緒に巡るのもおすすめ。観覧車と合わせて大阪ベイエリアを満喫できます。<br><br>【2.3 大阪港ベイエリア】<br>ベイエリア全体が夜景の名所。観覧車と合わせて写真映えスポットとして人気です。<br><br>【2.4 東京ヤクルトスワローズ】<br>東京ヤクルトスワローズは渋谷を本拠地とするプロ野球チームです。渋谷の街の活気と若いエネルギーを象徴するチームとして、地域ファンに愛されています。試合観戦はもちろん、チームグッズの購入や選手との交流イベントなど、野球ファンに特別な体験を提供します。また、スワローズは日本プロ野球の代表的なチームの一つとして、国内外の野球 팬들에게 널리 알려져 있습니다. 팀의 마스코트인 츠바메군과 함께 다양한 이벤트와 팬 서비스를 제공하여 가족 단위 관람객들에게도 인기가 높습니다.',
    },
    '33': {
      title: '秋葉原',
      description: 'アニメ・ゲーム・電子機器の聖地。オタク文化の中心地',
      author: 'タビログ編集部',
      heroImage: akihabara,
      breadcrumb: ['東京', '千代田区', '秋葉原'],
      contentTitle: '秋葉原の基本情報',
      spots: ['アニメイト', 'アキバ絶対領域（メイドカフェ）', 'アトレ秋葉原', 'ヨドバシカメラ'],
      imageLeft: akibaanimate,
      imageRight: jetairyouiki,
      content:
        '秋葉原はアニメ・ゲーム・電子機器の聖地として世界的に知られる街です。オタク文化の中心地として発展し、最新のテクノロジーとサブカルチャーが融合した独特な雰囲気が魅力です。一日中楽しめる観光スポットとして、国内外から多くの観光客が訪れます。<br><br>【2.1 アニメイト】<br>アニメイトは日本最大級のアニメ・漫画グッズ専門チェーン店です。秋葉原店は特に大型店舗として知られ、最新のフィギュア、コスプレ衣装、同人誌、CD、DVDなど、アニメファンにとって必要なものが全て揃っています。限定商品や新作グッズの先行販売も多く、コレクターにとっては必見のスポットです。店内にはアニメの世界観を再現したコーナーもあり、ファンにとって特別な体験を提供します。<br><br>【2.2 アキバ絶対領域（メイドカフェ）】<br>秋葉原発祥のメイドカフェは、現在では世界的に知られる日本独自の文化です。「アキバ絶対領域」は秋葉原のメイドカフェ文化を象徴する言葉で、メイド服を着たスタッフがお客様を「ご主人様」「お嬢様」と呼んでおもてなしします。独特の接客スタイルとコスプレ文化が融合したこのサービスは、秋葉原のサブカルチャーを代表する存在として人気を集めています。店内では写真撮影やゲーム、歌の披露など、様々なエンターテイメントを楽しむことができます。<br><br>【2.3 アトレ秋葉原】<br>アトレ秋葉原は秋葉原駅直結の商業施設で、ファッション、グルメ、エンターテイメントが集まる複合商業施設です。地下1階から地上7階まで、様々なジャンルのショップが入居しており、アニメ・ゲーム関連のグッズから一般のファッションアイテムまで幅広く揃っています。特に若い世代に人気のブランドショップや、秋葉原ならではの専門店が多く、観光客だけでなく地元の人々にも愛されています。フードコートやレストランも充実しており、ショッピングの合間に食事を楽しむこともできます。<br><br>【2.4 ヨドバシカメラ】<br>ヨドバシカメラは日本最大級の家電量販店チェーンで、秋葉原店はそのフラッグシップ店舗として知られています。最新のデジタルカメラ、パソコン、スマートフォン、ゲーム機、オーディオ機器など、あらゆる電子機器が揃っています。特にカメラコーナーは充実しており、初心者からプロまで対応できる豊富な商品ラインナップが魅力です。また、免税対応や多言語対応も充実しており、海外からの観光客にも人気のスポットです。店内には専門スタッフが常駐しており、商品の説明や購入相談も可能です。',
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
        '富士急ハイランドは富士山を背景にした絶叫マシンで有名なテーマパークです。世界記録を持つアトラクションや富士山の絶景を楽しめるアトラクションなど、スリルと絶景を同時に楽しめる日本屈指のテーマパークとして人気を集めています。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">富士急行線「富士急ハイランド駅」直結<br>新宿から約1時間30分、東京駅から約2時間</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（1日券）</td><td style="border: 1px solid #ddd; padding: 8px;">大人（18歳以上）: 6,200円<br>中人（12-17歳）: 5,200円<br>小人（3-11歳）: 3,600円</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">9:00〜17:00（季節により変動）<br>休園日: 水曜日（季節により変動）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">チケット購入</td><td style="border: 1px solid #ddd; padding: 8px;">公式サイト・コンビニ・現地窓口<br>オンライン予約で割引あり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体割引</td><td style="border: 1px solid #ddd; padding: 8px;">15名以上で団体料金適用<br>学校団体・企業団体向け特別プランあり</td></tr></table><br>【2.1 絶叫マシン】<br>富士急ハイランドは世界記録を持つ絶叫マシンで有名です。「ド・ドドンパ」は世界最速のジェットコースターとして知られ、最高時速180kmで走行します。「ええじゃないか」は世界最大の振り子角度を持つアトラクションで、最大角度121度まで振り子が揺れます。これらの絶叫マシンは世界中のスリル好きな観光客を引き寄せています。<br><br>【2.2 富士山ビュー】<br>富士急ハイランドの最大の魅力は富士山を背景にした絶景です。多くのアトラクションから富士山の美しい姿を眺めることができ、特に「富士飛行社」や「大観覧車」からは富士山の全景を楽しめます。天気の良い日には富士山の雄大な姿とアトラクションのスリルを同時に体験できる特別な感動を味わえます。<br><br>【2.3 アトラクション】<br>富士急ハイランドには絶叫マシン以外にも様々なアトラクションがあります。「トーマスランド」は小さな子供向けのエリアで、トーマス・ザ・タンクエンジンの世界観を楽しめます。「ナガシマスカイ」は富士山を背景にした大観覧車で、ゆっくりと富士山の絶景を楽しめます。家族連れから絶叫マシン好きまで、幅広い年齢層が楽しめるテーマパークです。',
    },
    '26': {
      title: '渋谷',
      description: '若者の街として有名。スクランブル交差点とハチ公がシンボル',
      author: 'タビログ編集部',
      heroImage: ShibuyaScramble,
      breadcrumb: ['東京', '渋谷区', '渋谷'],
      contentTitle: '渋谷の基本情報',
      spots: ['スクランブル交差点', 'ハチ公像', '109'],
      imageLeft: ShibuyaBape,
      imageRight: ShibuyaScramble,
      content:
        '渋谷は東京を代表する若者の街として世界的に有名です。スクランブル交差点は世界最大級の歩行者横断歩道として知られ、ハチ公像は忠犬ハチ公の物語で多くの人に愛されています。ファッション、エンターテイメント、グルメなど、あらゆるジャンルで最新トレンドを発信する街です。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">JR山手線「渋谷駅」直結<br>東急東横線・田園都市線「渋谷駅」<br>京王井の頭線「渋谷駅」<br>東京メトロ銀座線・半蔵門線・副都心線「渋谷駅」</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">店舗により異なる<br>一般的に10:00〜21:00</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場多数<br>公共交通機関利用推奨</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">渋谷スクランブルスクエア<br>渋谷ヒカリエ・渋谷マークシティ<br>109・パルコ・東急百貨店</td></tr></table><br>【2.1 スクランブル交差点】<br>渋谷の象徴的な存在であるスクランブル交差点は、世界最大級の歩行者横断歩道として知られています。信号が青になると、一度に約3,000人の人が交差点を渡る光景は圧巻で、多くの観光客がこの光景を写真に収めています。特に夕方のラッシュアワーには、多くの人が行き交う様子が東京の活気を象徴する光景として人気です。交差点の周辺には大型ビジョンが設置されており、最新の広告や情報が流れ続けています。<br><br>【2.2 ハチ公像】<br>渋谷駅前にあるハチ公像は、忠犬ハチ公の物語で世界中に知られています。ハチ公は主人の帰りを待ち続けた忠実な犬として、多くの人に愛されています。ハチ公像は渋谷の待ち合わせスポットとして最も有名で、多くの人がここで友人や恋人と待ち合わせをしています。像の周りには常に多くの人が集まり、写真撮影や記念撮影が行われています。ハチ公の物語は映画化もされており、その感動的なストーリーは今も多くの人の心に響いています。<br><br>【2.3 109】<br>渋谷109は日本のファッション文化を代表する商業施設として知られています。若い女性をターゲットとしたファッションショップが多数入居しており、最新のファッショントレンドを発信しています。109の建物は渋谷のランドマークの一つで、独特の外観が特徴的です。館内にはカフェやレストランもあり、ショッピングの合間に休憩することもできます。109は日本のファッション文化の中心地として、国内外のファッション愛好者に人気のスポットです。',
    },
  },
  名古屋: {
    '28': {
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
        '名古屋城は徳川家康が築いた城で、金色のシャチホコが有名な観光スポットです。桜の季節には特に人気が高く、多くの観光客が訪れます。天守閣からは名古屋の街並みを一望でき、歴史と現代が交わる美しい景色を楽しめます。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">愛知県名古屋市中区本丸1-1</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">地下鉄名城線「市役所駅」徒歩5分<br>地下鉄鶴舞線「浅間町駅」徒歩12分<br>名古屋駅から車で約15分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">9:00～16:30（入場は16:00まで）<br>12月29日～31日は休城</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（大人）</td><td style="border: 1px solid #ddd; padding: 8px;">500円（高校生以上）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（小人）</td><td style="border: 1px solid #ddd; padding: 8px;">無料（中学生以下）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（300台）<br>普通車: 300円/時間<br>大型車: 1,000円/時間</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体観覧</td><td style="border: 1px solid #ddd; padding: 8px;">30名以上で団体料金適用<br>学校団体・企業団体向け特別プランあり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設・設備</td><td style="border: 1px solid #ddd; padding: 8px;">展示室・売店・休憩所<br>ベビーカー貸出・授乳室<br>多言語対応・案内板</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">主要イベント</td><td style="border: 1px solid #ddd; padding: 8px;">桜まつり（4月）<br>名古屋城祭（10月）<br>季節限定イベント</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">名古屋市役所・愛知県庁<br>大須商店街・栄<br>カフェ・レストラン多数</td></tr></table><br>【2.1 本丸】<br>本丸は名古屋城の中心部で、天守閣と本丸御殿が建てられている最も重要な区域です。江戸時代の建築様式を再現した本丸御殿は、内部の障壁画や装飾が当時の技術の高さを物語っており、日本の伝統建築美を堪能できます。復元された部屋では、当時の大名の生活を偲ぶことができます。本丸御殿は入場料に含まれており、詳細な説明とともに観覧できます。<br><br>【2.2 二の丸】<br>二の丸は本丸を囲む第二の防御区域で、庭園や茶室などが配置されています。美しい日本庭園では四季折々の風景を楽しむことができ、特に春の桜と秋の紅葉は見事です。また、二の丸には歴史的な建物や展示施設もあり、名古屋城の歴史についてより深く学ぶことができます。二の丸庭園は入場料に含まれており、自由に散策できます。<br><br>【2.3 金魚】<br>名古屋城の庭園には美しい金魚が泳ぐ池があります。これらの金魚は城の歴史とともに大切に育てられており、訪れる人々に安らぎを与えています。特に夏の時期には、金魚と城のコラボレーションが美しい風景を作り出し、多くの観光客が写真を撮影する人気スポットとなっています。金魚池は入場料に含まれており、いつでも観覧できます。',
    },
    '29': {
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
        '大須商店街は漫画・アニメグッズ、電子機器、食べ物まで何でも揃う商店街です。オタク文化と伝統的な商店が混在する独特な雰囲気が魅力で、一日中楽しめる観光スポットです。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">愛知県名古屋市中区大須2-20-25</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">地下鉄鶴舞線「大須観音駅」徒歩2分<br>地下鉄名城線「上前津駅」徒歩5分<br>名古屋駅から車で約20分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">店舗により異なる<br>一般的に10:00～20:00<br>一部店舗は深夜まで営業</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金</td><td style="border: 1px solid #ddd; padding: 8px;">無料（商店街内散策）<br>各店舗での購入は別途</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（複数箇所）<br>普通車: 200円～300円/時間<br>大型車: 500円/時間</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体利用</td><td style="border: 1px solid #ddd; padding: 8px;">商店街組合による案内<br>要予約・無料<br>グループ向け特別プランあり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設・設備</td><td style="border: 1px solid #ddd; padding: 8px;">休憩所・トイレ・案内所<br>ベビーカー貸出・授乳室<br>多言語対応・案内板</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">主要イベント</td><td style="border: 1px solid #ddd; padding: 8px;">大須夏まつり（7月）<br>にっぽんど真ん中祭り（8月）<br>大須大道町人祭（10月）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">大須観音・万松寺<br>名古屋城・栄<br>カフェ・レストラン多数</td></tr></table><br>【2.1 有名なショップ】<br>大須商店街には数多くの有名なショップが立ち並んでいます。アニメ・漫画グッズ専門店、電子機器店、ファッションショップなど、様々なジャンルの店舗が集まっています。特にサンキューマートや大須おみやげカンパニーなど、地域に根ざした人気店舗が多く、地元の人々にも愛されています。週末には多くの買い物客で賑わい、活気あふれる雰囲気を楽しめます。各店舗の営業時間と価格は店舗により異なるため、訪問前に確認することをお勧めします。<br><br>【2.2 歴史】<br>大須商店街は江戸時代から続く歴史ある商店街です。寺町大須として発展し、戦国武将ゆかりの地としても知られています。万松寺や大須演芸場など、歴史的な建物が今も残っており、名古屋の文化と歴史を感じることができます。古い建物と新しい文化が共存する独特な景観は、名古屋の歴史と現代を同時に感じられる貴重な空間です。歴史的建物は無料で観覧でき、ガイドツアーも可能です。<br><br>【2.3 夏祭り】<br>大須商店街では年間を通じて様々なイベントが開催されます。特に夏には「大須夏まつり」や「にっぽんど真ん中祭り」など、大規模な祭りが開催され、多くの観光客が訪れます。また、大須大道町人祭では江戸時代の衣装を着た行列が街を練り歩き、歴史と文化を体感できる特別なイベントです。これらの祭りは大須の魅力をより深く知ることができる貴重な機会となっています。祭り観覧は無料で、特別イベントは事前予約が必要な場合があります。',
    },
    '30': {
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
        '熱田神宮は日本三大神剣の一つである草薙剣を祀る神宮で、三種の神器に関連する聖地として歴史ファンに必須の観光スポットです。広大な境内には歴史的価値の高い建物や宝物が多数保存されています。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">愛知県名古屋市熱田区神宮1-1-1</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">名古屋鉄道「神宮前駅」徒歩3分<br>地下鉄名城線「神宮西駅」徒歩7分<br>JR東海道本線「熱田駅」徒歩8分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">境内: 24時間開放<br>宝物館: 9:00～16:30（入場は16:00まで）<br>12月25日～31日は休館</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（境内）</td><td style="border: 1px solid #ddd; padding: 8px;">無料</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（宝物館）</td><td style="border: 1px solid #ddd; padding: 8px;">大人: 300円<br>高校生: 200円<br>小・中学生: 150円</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（500台）<br>普通車: 200円/時間<br>大型車: 500円/時間</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体観覧</td><td style="border: 1px solid #ddd; padding: 8px;">20名以上で団体料金適用<br>学校団体・企業団体向け特別プランあり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設・設備</td><td style="border: 1px solid #ddd; padding: 8px;">宝物館・売店・休憩所<br>ベビーカー貸出・授乳室<br>多言語対応・案内板</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">主要祭典</td><td style="border: 1px solid #ddd; padding: 8px;">熱田まつり（5月）<br>例祭（6月5日）<br>秋季大祭（10月）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">名古屋港水族館・名古屋市科学館<br>大須商店街・栄<br>カフェ・レストラン多数</td></tr></table><br>【2.1 本宮】<br>熱田神宮の本宮は、草薙剣を祀る最も重要な建物です。伝統的な神社建築の美しさを今に伝え、厳かな雰囲気の中で参拝することができます。本宮前の広場では、年間を通じて様々な神事や祭典が執り行われます。本宮参拝は無料で、いつでも参拝できます。<br><br>【2.2 草薙剣】<br>草薙剣は日本神話に登場する三種の神器の一つで、熱田神宮の御神体として祀られています。この剣は天照大神から授けられたとされる神聖な剣で、日本の歴史と文化の象徴として崇敬されています。草薙剣は本宮内部に奉安されており、一般参拝者は直接見ることはできませんが、その神聖さを感じることができます。<br><br>【2.3 宝物館】<br>熱田神宮の宝物館には、神宮に伝わる貴重な宝物や歴史資料が展示されています。古代から現代に至るまでの日本の歴史を物語る品々を間近で見ることができ、歴史愛好家にとっては貴重な体験となります。宝物館入場料は大人300円、高校生200円、小学生・中学生150円です。<br><br>【2.4 神宮の森】<br>熱田神宮の境内は広大な森に囲まれており、都心にありながら自然豊かな環境を楽しめます。四季折々の美しい景色と静寂な雰囲気は、心を落ち着かせる聖地として多くの参拝者に愛されています。神宮の森は無料で散策でき、24時間開放されています。',
    },
    '31': {
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
        'SCMAGLEV and Railway ParkはJR東海が運営する鉄道博物館で、新幹線やリニアの展示が充実しています。鉄道ファンの聖地として知られ、実際の車両に乗車できる体験型展示が人気です。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">愛知県名古屋市港区金城ふ頭3-2-2</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">名古屋臨海高速鉄道「金城ふ頭駅」徒歩2分<br>名古屋駅から車で約30分<br>無料シャトルバス運行</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">10:00～17:30（入場は17:00まで）<br>火曜日休館（祝日除く）<br>年末年始休館</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（大人）</td><td style="border: 1px solid #ddd; padding: 8px;">1,000円（高校生以上）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（小人）</td><td style="border: 1px solid #ddd; padding: 8px;">500円（小・中学生）<br>無料（未就学児）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（500台）<br>普通車: 300円/時間<br>大型車: 1,000円/時間</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体観覧</td><td style="border: 1px solid #ddd; padding: 8px;">20名以上で団体料金適用<br>学校団体・企業団体向け特別プランあり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設・設備</td><td style="border: 1px solid #ddd; padding: 8px;">展示室・売店・休憩所<br>ベビーカー貸出・授乳室<br>多言語対応・案内板</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">体験施設</td><td style="border: 1px solid #ddd; padding: 8px;">運転シミュレーター<br>新幹線車両見学<br>リニア体験コーナー</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">名古屋港水族館・ポートビル<br>名古屋市科学館・栄<br>カフェ・レストラン多数</td></tr></table><br>【2.1 新幹線展示】<br>博物館には歴代の新幹線車両が展示されており、0系から最新のN700Sまで、日本の高速鉄道技術の進歩を体感できます。実際の車両内部を見学でき、運転席や客室の構造を詳しく観察することができます。新幹線の技術革新の歴史を学びながら、実際の車両の迫力を間近で体験できます。新幹線車両見学は入場料に含まれており、自由に観覧できます。<br><br>【2.2 リニア展示】<br>超電導リニアの実物大模型や技術展示により、次世代高速鉄道の仕組みを学ぶことができます。リニアの浮上原理や推進システムについて、分かりやすい展示で理解を深められます。未来の交通技術を先取りできる貴重な体験ができます。リニア体験コーナーは入場料に含まれており、体験型展示を通じて学習できます。<br><br>【2.3 運転シミュレーター】<br>実際の新幹線の運転席を再現したシミュレーターでは、運転士の体験ができます。新幹線の運転操作や速度感を体感でき、鉄道ファンにとっては夢の体験となるでしょう。リアルな運転体験を通じて、新幹線の技術の高さを実感できます。運転シミュレーターは別途予約が必要で、追加料金が発生する場合があります。',
    },
    '32': {
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
        '名古屋市科学館は世界最大級のプラネタリウムを有する科学館で、科学愛好家に人気の観光スポットです。体験型の展示が充実しており、子供から大人まで楽しめる施設です。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">愛知県名古屋市中区栄2-17-1</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">地下鉄東山線「伏見駅」徒歩5分<br>地下鉄名城線「栄駅」徒歩8分<br>名古屋駅から車で約15分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">9:30～17:00（入場は16:30まで）<br>月曜日休館（祝日除く）<br>年末年始休館</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（大人）</td><td style="border: 1px solid #ddd; padding: 8px;">800円（高校生以上）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（小人）</td><td style="border: 1px solid #ddd; padding: 8px;">400円（小・中学生）<br>無料（未就学児）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">プラネタリウム料金</td><td style="border: 1px solid #ddd; padding: 8px;">大人: 400円<br>小人: 200円<br>未就学児: 無料</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（200台）<br>普通車: 200円/時間<br>大型車: 500円/時間</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体観覧</td><td style="border: 1px solid #ddd; padding: 8px;">30名以上で団体料金適用<br>学校団体・企業団体向け特別プランあり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設・設備</td><td style="border: 1px solid #ddd; padding: 8px;">展示室・売店・休憩所<br>ベビーカー貸出・授乳室<br>多言語対応・案内板</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">栄・名古屋城・大須商店街<br>名古屋市美術館・白川公園<br>カフェ・レストラン多数</td></tr></table><br>【2.1 プラネタリウム】<br>世界最大級のプラネタリウムでは、美しい星空の投影とともに宇宙の神秘を体験できます。最新のデジタル技術により、リアルな星空と惑星の動きを観察でき、天文学の知識を深めることができます。プラネタリウムは別途料金があり、事前予約が推奨されます。<br><br>【2.2 科学展示】<br>館内には物理、化学、生物、地学など様々な分野の科学展示があります。実際に触れて体験できる展示が多く、科学の原理を楽しく学ぶことができます。特に子供たちの科学への興味を引き出す工夫が随所に見られます。科学展示は入場料に含まれており、自由に観覧できます。<br><br>【2.3 体験コーナー】<br>科学館には様々な体験コーナーがあり、実験や工作を通じて科学の面白さを体感できます。スタッフによる解説も充実しており、疑問に思ったことを気軽に質問できる環境が整っています。体験コーナーは入場料に含まれており、スタッフの説明を聞くことができます。<br><br>【2.4 特別展】<br>定期的に開催される特別展では、最新の科学技術や話題のテーマについて深く学ぶことができます。宇宙、ロボット、環境など、幅広い分野の特別展が開催され、常に新しい発見があります。特別展は別途料金がある場合があり、展示内容により異なります。',
    },
    '33': {
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
        '名古屋港水族館はシャチ、ベルーガ、イルカショーで有名な水族館で、家族連れに人気の観光スポットです。日本海と太平洋の海洋生物を中心に、多様な海の生き物を観察できます。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">愛知県名古屋市港区港町1-3</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">名古屋臨海高速鉄道「名古屋港駅」徒歩5分<br>名古屋駅から車で約25分<br>無料シャトルバス運行</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">9:30～17:30（入場は17:00まで）<br>火曜日休館（祝日除く）<br>年末年始休館</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（大人）</td><td style="border: 1px solid #ddd; padding: 8px;">2,030円（高校生以上）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（小人）</td><td style="border: 1px solid #ddd; padding: 8px;">1,010円（小・中学生）<br>無料（未就学児）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（800台）<br>普通車: 300円/時間<br>大型車: 1,000円/時間</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体観覧</td><td style="border: 1px solid #ddd; padding: 8px;">20名以上で団体料金適用<br>学校団体・企業団体向け特別プランあり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設・設備</td><td style="border: 1px solid #ddd; padding: 8px;">展示室・売店・休憩所<br>ベビーカー貸出・授乳室<br>多言語対応・案内板</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">ショー・イベント</td><td style="border: 1px solid #ddd; padding: 8px;">シャチショー・イルカショー<br>ベルーガ展示・深海生物展示<br>触れ合い体験（別料金）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">SCMAGLEV and Railway Park<br>ポートビル・名古屋港<br>カフェ・レストラン多数</td></tr></table><br>【2.1 シャチショー】<br>名古屋港水族館のシャチショーは日本でも数少ない貴重なショーです。シャチの迫力あるパフォーマンスは圧巻で、その知能の高さと美しさを間近で体験できます。ショーは1日数回開催され、多くの観客で賑わいます。シャチショーは入場料に含まれており、事前予約が推奨されます。<br><br>【2.2 ベルーガ展示】<br>白いクジラとして知られるベルーガの展示は、水族館の目玉の一つです。ベルーガの優雅な泳ぎと愛らしい表情は、見る人の心を和ませます。また、ベルーガの生態について詳しく学ぶことができる展示も充実しています。ベルーガ展示は入場料に含まれており、自由に観覧できます。<br><br>【2.3 イルカショー】<br>イルカショーでは、イルカの高い知能と優れた運動能力を活かしたパフォーマンスを楽しめます。ジャンプやフリップなどの華麗な技は、観客を魅了します。ショー後にはイルカとの触れ合い体験も可能です。イルカショーは入場料に含まれており、体験は別途料金があります。<br><br>【2.4 深海生物展示】<br>水族館には深海に生息する神秘的な生物の展示もあります。光の届かない深海の環境を再現した展示では、普段見ることのできない珍しい生物を観察できます。深海の生態系について学ぶ貴重な機会となります。深海生物展示は入場料に含まれており、自由に観覧できます。',
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
        '太宰府天満宮は学問の神様として知られる菅原道真公を祀る神社。境内には心字池や太鼓橋、楼門、本殿など見どころが点在し、四季折々の美しさが楽しめます。受験合格祈願や厄除けに訪れる参拝客で年間を通じて賑わいます。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">福岡県太宰府市宰府4-7-1</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">西鉄太宰府線「太宰府駅」徒歩5分<br>JR「二日市駅」から西鉄バス15分<br>福岡空港から直行バス45分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">6:00～19:00（季節により変動）<br>授与所: 8:30～17:00</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金</td><td style="border: 1px solid #ddd; padding: 8px;">無料<br>御朱印: 500円<br>梅苑: 500円（2-3月のみ）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（台数限定）<br>公共交通機関利用推奨</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体参拝</td><td style="border: 1px solid #ddd; padding: 8px;">学校団体・企業団体向け案内<br>要予約・無料</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設・設備</td><td style="border: 1px solid #ddd; padding: 8px;">授与所・手水舎・休憩所<br>多言語対応・案内板</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">主要祭事</td><td style="border: 1px solid #ddd; padding: 8px;">初詣・梅祭り（2-3月）<br>天神祭・合格祈願祭<br>各種年中行事</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">九州国立博物館・太宰府政庁跡<br>梅ヶ枝餅店・土産店<br>カフェ・レストラン多数</td></tr></table><br>【2.1 本殿・御神牛】<br>荘厳な本殿は参拝の中心。境内に点在する「御神牛」の像は頭を撫でると知恵が授かるといわれ、受験生をはじめ多くの参拝者に親しまれています。楼門から本殿へ続く参道は写真スポットとしても人気です。本殿参拝は無料で、24時間いつでも可能ですが、授与所の営業時間は8:30～17:00です。<br><br>【2.2 梅苑・飛梅】<br>境内は梅の名所として有名で、早春には約200種・6,000本ともいわれる梅が咲き誇ります。道真公の伝説にまつわる「飛梅」は天満宮の象徴的存在。梅の香りとともに太宰府らしい風景を楽しめます。梅苑は2-3月の梅の開花時期のみ有料（500円）で公開され、その他の時期は無料で見学できます。<br><br>【2.3 参道と御朱印】<br>表参道には梅ヶ枝餅の老舗が並び、食べ歩きも醍醐味。授与所では御朱印をいただくことができ、旅の記念として人気です。土日や受験シーズンは混雑するため、朝の時間帯の参拝がおすすめです。御朱印は500円でいただけ、特別な記念品として人気です。',
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
      spots: ['球場ツアー', '李大浩（イ・デホ）選手の活躍', '周辺施設とグルメ', 'ホークス観戦ガイド'],
      imageLeft: paypaymap,
      imageRight: softbankleedaeho,
      content:
        '福岡PayPayドームは福岡ソフトバンクホークスの本拠地として知られる多目的ドーム。全天候型の快適な観戦環境に加え、最新演出やイベントも魅力で、野球ファンはもちろん家族連れや観光客にも人気のスポットです。隣接の商業施設や海辺の散策と合わせて一日楽しめます。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">福岡県福岡市中央区地行浜2-2-2</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">地下鉄空港線「唐人町駅」徒歩15分<br>西鉄バス「PayPayドーム前」下車すぐ<br>福岡市内から車で約20分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">試合日: 開場2時間前～試合終了後<br>非試合日: 9:00～17:00（球場ツアー）<br>年中無休（メンテナンス日除く）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（野球観戦）</td><td style="border: 1px solid #ddd; padding: 8px;">内野: 2,000円～8,000円<br>外野: 1,500円～3,000円<br>ファミリーシート: 3,000円～6,000円</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（球場ツアー）</td><td style="border: 1px solid #ddd; padding: 8px;">大人: 1,000円<br>小人: 500円（小・中学生）<br>幼児: 無料（3歳以下）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（3,000台）<br>普通車: 1,000円/日<br>大型車: 2,000円/日</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体観戦</td><td style="border: 1px solid #ddd; padding: 8px;">20名以上で団体料金適用<br>学校団体・企業団体向け特別プランあり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設・設備</td><td style="border: 1px solid #ddd; padding: 8px;">レストラン・カフェ・売店<br>ベビーカー貸出・授乳室<br>多言語対応・案内板</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">主要イベント</td><td style="border: 1px solid #ddd; padding: 8px;">プロ野球・コンサート<br>球場ツアー・ファンイベント<br>季節限定イベント</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">福岡市博物館・海の中道海浜公園<br>博多湾遊覧船・マリゾン<br>カフェ・レストラン多数</td></tr></table><br>【2.1 球場ツアー】<br>普段は入れないベンチやブルペン、記者会見室などを巡るガイド付きツアーを実施。球場運営の裏側や歴史展示を見学でき、ホークスファンにはたまらない体験。優勝トロフィーや名場面のパネルも必見です。ツアーは1日数回開催され、所要時間は約60分で、事前予約が推奨されます。<br><br>【2.2 李大浩（イ・デホ）選手の活躍】<br>2014年から2シーズン在籍した李大浩（イ・デホ）選手は、ホークスの日本一に大きく貢献した強打者。クラッチヒッターとしてポストシーズンでも勝負強さを発揮し、福岡のファンに強烈なインパクトを残しました。豪快な本塁打と勝負所での適時打は、今もドームの名場面として語り継がれています。背番号や応援歌にまつわるエピソードも多く、球場内の展示やグッズでその功績を辿ることができます。<br><br>【2.3 周辺施設とグルメ】<br>ドーム隣接の商業施設や海沿いエリアでは、ショッピングやカフェ、展望スポットを満喫できます。試合前後には博多名物のグルメもおすすめ。家族や友人と過ごす休日のお出かけ先としても最適です。ドーム周辺には福岡市博物館や海の中道海浜公園、マリゾンなど様々な観光施設があり、一日中楽しめます。<br><br>【2.4 ホークス観戦ガイド】<br>ソフトバンクホークスの試合観戦をより楽しむためのガイド。試合前の球場見学から試合中の応援まで、ホークスファンならではの体験ができます。球場内のグッズショップでは限定商品も販売されており、記念品として人気です。',
    },
  },
  大阪: {
    '3': {
      title: '🏯 大阪城',
      description: '豊臣秀吉が築いた名城。歴史と美しさを兼ね備えた大阪の象徴。',
      author: 'タビログ編集部',
      heroImage: OsakaHero,
      breadcrumb: ['大阪', '中央区', '大阪城'],
      contentTitle: '大阪城の基本情報',
      spots: ['天守閣', '西の丸庭園', '大阪城公園', '大阪城ホール'],
      imageLeft: OsakaHero,
      imageRight: OsakaCastle2,
      content:
        '大阪城は16世紀末に豊臣秀吉によって築かれ、日本三名城の一つに数えられる歴史的建造物です。五層八階建ての天守閣は圧巻の存在感を誇り、内部は博物館として公開され、戦国時代の資料や武具、甲冑、絵巻などが展示されています。最上階の展望台からは大阪市街を360度一望でき、特に春には桜、秋には紅葉の名所として多くの観光客で賑わいます。<br><br>また、広大な堀や高石垣は当時の築城技術を伝える貴重な遺構であり、夜にはライトアップされ、幻想的な雰囲気を楽しめます。<br><br><strong>🗂 詳細情報（チケット・利用案内）</strong><br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">大阪府大阪市中央区大阪城1-1</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">JR大阪城公園駅 徒歩10分 / 地下鉄谷町四丁目駅 徒歩15分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">天守閣：9:00〜17:00（最終入場16:30）<br>※桜まつり・秋季イベント時は延長あり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料（天守閣）</td><td style="border: 1px solid #ddd; padding: 8px;">大人600円 / 中学生以下無料</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">西の丸庭園 入場料</td><td style="border: 1px solid #ddd; padding: 8px;">大人200円 / 中学生以下無料</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">共通券</td><td style="border: 1px solid #ddd; padding: 8px;">天守閣＋庭園セット券：大人700円</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">チケット購入</td><td style="border: 1px solid #ddd; padding: 8px;">現地チケット窓口 / オンライン事前予約（公式サイト）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体割引</td><td style="border: 1px solid #ddd; padding: 8px;">15名以上で1割引 / 学校団体向け割引あり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（普通車1時間350円〜）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設内サービス</td><td style="border: 1px solid #ddd; padding: 8px;">ミュージアムショップ、カフェ、ベビーカー貸出、多言語音声ガイド</td></tr></table><br><br>【2.1 天守閣】<br><br>大阪城のシンボル。内部は博物館になっており、豊臣秀吉の生涯や戦国時代の歴史を学ぶことができます。最上階からは大阪市街を一望でき、特に夜景は絶景です。<br><br>【2.2 西の丸庭園】<br><br>約6万平方メートルの広さを誇る庭園。春には約300本の桜が咲き誇り、大阪随一の花見スポットとして知られています。<br><br>【2.3 大阪城公園】<br><br>ジョギングやピクニックに最適な広大な公園。四季折々の自然を楽しめ、市民の憩いの場として愛されています。<br><br>【2.4 大阪城ホール】<br><br>大阪城公園内にある多目的アリーナ。コンサートやスポーツイベントが開催され、観光とエンタメを一度に楽しめます。',
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
      description: '世界的人気を誇るハリウッド映画のテーマパーク。映画の世界を体験しよう！',
      author: 'タビログ編集部',
      heroImage: UniversalStudiosJapan3,
      breadcrumb: ['大阪', '此花区', 'USJ'],
      contentTitle: 'USJの基本情報',
      spots: [
        'ウィザーディング・ワールド・オブ・ハリー・ポッター',
        'スーパー・ニンテンドー・ワールド',
        'ミニオン・パーク',
        'スペース・ファンタジー・ザ・ライド',
      ],
      imageLeft: UniversalStudiosJapan,
      imageRight: UniversalStudiosJapan2,
      content:
        'ユニバーサル・スタジオ・ジャパン（USJ）は、2001年に大阪市此花区に開業した日本を代表する大型テーマパークです。ハリウッド映画の世界を再現したアトラクションやショーを楽しめるほか、世界初・日本初のオリジナルエリアも多数導入され、国内外から年間数百万人が訪れます。<br><br>代表的なエリアには「ウィザーディング・ワールド・オブ・ハリー・ポッター」「スーパー・ニンテンドー・ワールド」「ミニオン・パーク」などがあり、子どもから大人まで楽しめるアトラクションが充実しています。季節ごとのイベント（ハロウィン、クリスマス、夏祭り）も大人気です。<br><br><strong>🗂 詳細情報（チケット・利用案内）</strong><br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">大阪府大阪市此花区桜島2-1-33</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">JRゆめ咲線「ユニバーサルシティ駅」徒歩5分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">日によって変動（通常 9:00〜21:00）<br>※繁忙期は延長あり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">1デイ・スタジオ・パス</td><td style="border: 1px solid #ddd; padding: 8px;">大人 8,600〜9,800円 / 子ども 5,600〜6,600円</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">年間パス</td><td style="border: 1px solid #ddd; padding: 8px;">大人 22,800円〜（種類によって変動）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">エクスプレス・パス</td><td style="border: 1px solid #ddd; padding: 8px;">5,000円〜15,000円（アトラクション優先入場）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">チケット購入</td><td style="border: 1px solid #ddd; padding: 8px;">公式サイト・コンビニ・旅行代理店</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体割引</td><td style="border: 1px solid #ddd; padding: 8px;">学校団体・企業向けの割引プランあり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料（普通車 1日3,000円〜）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設内サービス</td><td style="border: 1px solid #ddd; padding: 8px;">ショッピング、レストラン、コインロッカー、ベビーカー貸出、多言語ガイド</td></tr></table><br><br>【2.1 ウィザーディング・ワールド・オブ・ハリー・ポッター】<br><br>映画『ハリー・ポッター』の世界を忠実に再現した人気エリア。ホグワーツ城内の「ハリー・ポッター・アンド・ザ・フォービドゥン・ジャーニー」は大迫力の体験型ライドです。<br><br>【2.2 スーパー・ニンテンドー・ワールド】<br><br>マリオの世界をテーマにした最新エリア。パワーアップバンドを使って実際にゲーム感覚で楽しめ、人気アトラクション「マリオカート〜クッパの挑戦状〜」は必体験！<br><br>【2.3 ミニオン・パーク】<br><br>『怪盗グルー』シリーズでおなじみのミニオンたちの楽しいエリア。家族連れに大人気で、ミニオンの可愛いフードやグッズも楽しめます。<br><br>【2.4 スペース・ファンタジー・ザ・ライド】<br><br>宇宙をテーマにした屋内ローラーコースター。光と音楽に包まれながらスリル満点の冒険を体験できます。',
    },
    '21': {
      title: '🐠 海遊館',
      description: '世界最大級の水族館。ジンベエザメに会える人気スポット。',
      author: 'タビログ編集部',
      heroImage: OsakaAquarium1,
      breadcrumb: ['大阪', '港区', '海遊館'],
      contentTitle: '海遊館の基本情報',
      spots: ['ジンベエザメエリア', '南極ゾーン', '熱帯魚エリア', '夜の海遊館（ナイトアクアリウム）'],
      imageLeft: OsakaAquarium2,
      imageRight: OsakaAquarium3,
      content:
        '海遊館は大阪市港区天保山に位置する、世界最大級の都市型水族館です。1990年に開館し、現在も国内外から年間約250万人以上が訪れる人気スポット。<br>高さ9m・容量5,400トンの巨大水槽を中心に、約620種・3万点の海洋生物を展示しています。シンボルとなる「ジンベエザメ」をはじめ、イルカ、エイ、ペンギン、アザラシなど多彩な生き物を間近で観察できます。<br><br>また、昼と夜で異なる演出があり、夜の「ナイトアクアリウム」では幻想的な照明と音響で特別な体験を楽しめるのも魅力です。<br><br><strong>🗂 詳細情報（チケット・利用案内）</strong><br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">大阪府大阪市港区海岸通1-1-10</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">Osaka Metro中央線「大阪港駅」徒歩5分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">10:00〜20:00（最終入館 19:00）<br>※季節により変動あり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入館料</td><td style="border: 1px solid #ddd; padding: 8px;">大人（高校生以上）2,700円<br>小中学生 1,400円<br>幼児（3歳以上）700円<br>2歳以下 無料</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">年間パスポート</td><td style="border: 1px solid #ddd; padding: 8px;">大人 5,400円<br>小中学生 2,800円</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">チケット購入</td><td style="border: 1px solid #ddd; padding: 8px;">公式サイト・コンビニ・旅行代理店</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体割引</td><td style="border: 1px solid #ddd; padding: 8px;">20名以上で適用、学校団体割引あり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料（天保山マーケットプレース駐車場 約1,000台）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設内サービス</td><td style="border: 1px solid #ddd; padding: 8px;">レストラン、カフェ、ショップ、ベビーカー貸出、ロッカー、多言語パンフレット</td></tr></table><br><br>【2.1 ジンベエザメエリア】<br><br>海遊館の象徴。巨大水槽を悠々と泳ぐジンベエザメは圧巻で、訪れる人々を魅了します。<br><br>【2.2 南極ゾーン】<br><br>ペンギンたちが暮らす人気エリア。氷や雪を再現した空間で、愛らしい姿を間近で観察できます。<br><br>【2.3 熱帯魚エリア】<br><br>カラフルな熱帯魚が群泳する幻想的な水槽。サンゴ礁や熱帯の海を再現し、写真映えスポットとしても人気です。<br><br>【2.4 夜の海遊館（ナイトアクアリウム）】<br><br>夜間限定の特別演出。暗闇とライトアップの中で泳ぐ魚たちは、昼間とは違った幻想的な雰囲気を楽しませてくれます。',
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
      description: '世界遺産。黄金の舎利殿と池泉回遊式庭園が織りなす京都の象徴。',
      author: 'タビログ編集部',
      heroImage: KyotoHero,
      breadcrumb: ['京都', '北区', '金閣寺'],
      contentTitle: '金閣寺の基本情報',
      spots: ['舎利殿「金閣」', '鏡湖池と庭園', '安民沢と龍門滝（庭園奥）', '不動堂と御朱印・茶所'],
      imageLeft: KyotoHero,
      imageRight: KiyoMizuTera,
      content:
        '金閣寺は正式名称を鹿苑寺（ろくおんじ）といい、北山文化を象徴する禅寺です。庭園中央の鏡湖池（きょうこち）に映る黄金の舎利殿が最大の見どころ。舎利殿は三層構造で、上層二層は金箔で覆われ、頂には鳳凰が輝きます。各層は寝殿造・武家造・禅宗様と意匠が異なり、建築美の変化が楽しめます。<br>現在の舎利殿は昭和期に再建されたものですが、池泉回遊式庭園と一体となった景観は四季を通じて格別。春の新緑・桜、夏の深緑、秋の紅葉、冬の雪化粧まで、いつ訪れても写真映えします。<br><br>【2.1 舎利殿「金閣」】<br><br>金箔が朝日や夕日に反射して刻々と色味を変える主役スポット。内部拝観は不可で、外観と庭園越しの鑑賞となります。順路に沿って正面→斜め構図→背面と角度を変えながら表情の違いを楽しみましょう。<br><br>【2.2 鏡湖池と庭園】<br><br>池に浮かぶ葦原島・出島などの中島、石組・松の借景が作るミラーリフレクションが名物。風の少ない午前中が水面が安定しておすすめ。池畔の遊歩路からは低めの目線で撮ると金閣の映り込みが綺麗に入ります。<br><br>【2.3 安民沢と龍門滝（庭園奥）】<br><br>順路後半に現れる静謐な池泉「安民沢（あんみんたく）」と小滝。参拝者が少なく、苔と水音に癒やされる穴場のクールダウン。金閣の華やかさと対比的な"侘び寂び"を感じられます。<br><br>【2.4 不動堂と御朱印・茶所】<br><br>出口付近の不動堂では御朱印がいただけます（書き置き対応のことあり）。敷地内の茶所では抹茶と和菓子で一服。参拝の締めに最適です。<br><br><strong>3. 観覧のコツ（ベスト時間／撮影ポイント／混雑回避）</strong><br><br>ベスト時間：開門直後（朝一）または閉門前の遅い午後。逆光を避けるなら午前、金箔をドラマチックに撮るなら夕方の斜光。<br><br>雪化粧の金閣：降雪翌朝は年に数回の神回。公式や天気予報をチェック。<br><br>撮影マナー：三脚・ドローン不可のことが多い／順路は一方通行／立ち止まり過ぎず譲り合い。<br><br>混雑回避：連休・土日は特に混むので平日朝が鉄則。団体の流れと逆にならないよう端で待ってから撮るとスムーズ。<br><br><strong>4. 周辺モデルコース（徒歩＋バス 3〜4時間）</strong><br><br>金閣寺 → 龍安寺（石庭）→ 仁和寺（御室桜・伽藍）<br>　北嵯峨エリアを横移動する鉄板ルート。石庭のミニマリズム、門跡寺院の壮麗、金閣の絢爛を一筆書きで体験できます。時間があれば嵐電で嵐山へ延伸も◎。<br><br><strong>5. アクセス・所要時間・拝観情報（目安）</strong><br><br>所要時間：境内一周45〜70分（混雑時＋撮影多めで90分）。<br><br>アクセス：<br>　・京都駅から京都市バス（例：「金閣寺道／金閣寺前」方面行）で約35〜45分。<br>　・嵐電 北野白梅町駅からバスで約10分。<br><br>拝観：有料／拝観時間：通常 9:00–17:00（季節・行事で変動あり）<br><br>注意：料金・時間は変更の可能性があるため公式最新情報の確認推奨。',
    },
    '6': {
      title: '🏯 清水寺',
      description: '世界遺産に登録された京都の名刹。清水の舞台から望む絶景は必見。',
      author: 'タビログ編集部',
      heroImage: KyotoHero,
      breadcrumb: ['京都', '東山区', '清水寺'],
      contentTitle: '清水寺の基本情報',
      spots: ['清水の舞台', '音羽の滝', '三重塔', '子安塔・地主神社'],
      imageLeft: KiyoMizuTera,
      imageRight: KyotoHero,
      content:
        '清水寺は西暦778年に創建された歴史ある寺院で、京都を代表する観光名所の一つ。境内は世界文化遺産に登録されており、特に本堂の「清水の舞台」は高さ約13mの木造舞台から京都市街を一望できることで有名です。<br>また「清水の舞台から飛び降りる」という日本語の慣用句はここから生まれたもの。境内には約1000本の桜と紅葉があり、春は桜、秋は紅葉の絶景スポットとしても人気。夜のライトアップは幻想的な雰囲気を演出します。<br><br>【2.1 清水の舞台】<br><br>本堂から突き出した木造舞台。京都市街を一望できるビューポイント。舞台は139本の欅柱で支えられ、構造自体が文化財。<br><br>【2.2 音羽の滝】<br><br>境内奥にある湧水。三筋に分かれた水は「学業成就」「恋愛成就」「延命長寿」のご利益があるとされ、多くの参拝者が行列を作ります。<br><br>【2.3 三重塔】<br><br>鮮やかな朱色の三重塔は、清水寺のシンボルの一つ。青空や紅葉を背景に写真映えするスポット。<br><br>【2.4 子安塔・地主神社】<br><br>子安塔は静かな展望スポットで、清水舞台を見渡せる隠れ撮影ポイント。隣接する地主神社は縁結びの神社として若者に人気。<br><br><strong>3. 観覧のコツ</strong><br><br>ベスト時間：早朝の開門直後（人が少なく光も柔らかい）か、夕方ライトアップ時。<br><br>混雑回避：休日午後は大混雑。平日午前がおすすめ。<br><br>ライトアップ：春・秋には特別夜間拝観が実施され、夜桜や紅葉とともに幻想的な景色が楽しめます。<br><br><strong>4. 周辺モデルコース</strong><br><br>八坂の塔 → 二年坂・三年坂 → 清水寺<br>古都らしい石畳の坂道を散策しながら、最後に清水の舞台で絶景を楽しむ黄金ルート。<br><br><strong>5. アクセス・拝観情報</strong><br><br>所要時間：拝観は1〜1.5時間ほど。混雑時は+30分見積もり。<br><br>アクセス：京都駅から市バス「五条坂」「清水道」下車、徒歩約10分。<br><br>拝観料：有料（大人400円前後）。<br><br>拝観時間：通常6:00–18:00（季節・ライトアップ時に延長あり）。',
    },
    '35': {
      title: '🌸 哲学の道',
      description: '四季折々の風景が美しい散策路。桜並木で有名な京都の名所。',
      author: 'タビログ編集部',
      heroImage: KyotoPass5,
      breadcrumb: ['京都', '左京区', '哲学の道'],
      contentTitle: '哲学の道の基本情報',
      spots: ['桜並木', '法然院', '銀閣寺への道'],
      imageLeft: KyotoPass5,
      imageRight: KyotoHero,
      content:
        '哲学の道は、京都市左京区に位置する約2kmの石畳の散策路。銀閣寺から南禅寺近くまで続き、運河に沿って整備されています。日本の哲学者・西田幾多郎がここを歩きながら思索にふけったことから「哲学の道」と名付けられました。<br>特に春の桜並木が有名で、約400本のソメイヨシノが咲き誇り、花見スポットとして人気。秋の紅葉や初夏の新緑も美しく、年間を通して多くの観光客が訪れます。<br><br>【2.1 桜並木】<br><br>春になると散策路を覆うように桜が咲き誇り、運河に花びらが舞い落ちる光景は絶景。<br><br>【2.2 法然院】<br><br>苔むした山門と白砂壇が美しい静かな寺院。哲学の道の途中に位置し、ひっそりとした佇まいが魅力。<br><br>【2.3 銀閣寺への道】<br><br>道の北端にある銀閣寺は、哲学の道散策のハイライト。世界遺産としても有名。<br><br><strong>3. 観覧のコツ</strong><br><br>ベストシーズン：桜の春（3月下旬〜4月上旬）、紅葉の秋（11月）。<br><br>混雑回避：朝早くや夕方が比較的空いており、静かに散策できる。<br><br><strong>4. 周辺モデルコース</strong><br><br>南禅寺 → 哲学の道 → 銀閣寺<br>古都らしい寺院と自然を組み合わせた散策ルートで、観光客に人気。<br><br><strong>5. アクセス情報</strong><br><br>所要時間：散策は30分〜1時間ほど。<br><br>アクセス：市バス「銀閣寺前」または「南禅寺・永観堂道」下車すぐ。',
    },
  },
  札幌: {
    '7': {
      title: '札幌時計台',
      description: '札幌のシンボル。歴史ある時計台',
      author: 'タビログ編集部',
      heroImage: sapporowintertokei,
      breadcrumb: ['札幌', '中央区', '札幌時計台'],
      contentTitle: '札幌時計台の基本情報',
      spots: ['展示室', '鐘楼', '写真スポット'],
      imageLeft: SapporoTime,
      imageRight: sapporotokeiexhibition,
      content:
        '札幌時計台は北海道開拓使時代の歴史を伝える貴重な建造物。館内展示で札幌の成り立ちを学べ、外観は四季の装いとともに美しく写真映えします。大通公園やテレビ塔と合わせた市内散策の起点にも最適です。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">北海道札幌市中央区北1条西2丁目</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">地下鉄南北線「大通駅」徒歩5分<br>JR「札幌駅」徒歩10分<br>市電「西4丁目駅」徒歩5分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">8:45〜17:10（最終入館16:30）<br>年中無休（メンテナンス日除く）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金</td><td style="border: 1px solid #ddd; padding: 8px;">大人（高校生以上）: 200円<br>小・中学生: 無料<br>幼児: 無料</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">チケット購入</td><td style="border: 1px solid #ddd; padding: 8px;">現地窓口のみ<br>当日購入可能</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体割引</td><td style="border: 1px solid #ddd; padding: 8px;">20名以上で団体料金適用<br>学校団体・企業団体向け特別プランあり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">専用駐車場なし<br>周辺コインパーキング利用<br>公共交通機関利用推奨</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">館内サービス</td><td style="border: 1px solid #ddd; padding: 8px;">ギフトショップ・トイレ<br>車椅子対応・ベビーカー貸出</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">ガイドツアー</td><td style="border: 1px solid #ddd; padding: 8px;">日本語ガイド: 無料<br>英語ガイド: 要予約・有料<br>団体ガイド: 要予約</td></tr></table><br>【2.1 展示室】<br>札幌時計台の展示室では、北海道開拓使時代から現在までの札幌の発展の歴史を詳しく学ぶことができます。明治時代の開拓使の資料や、時計台の建設過程、札幌の街づくりの変遷などが展示されています。特に開拓使の初代長官・黒田清隆の功績や、時計台が建てられた背景について詳しく紹介されており、札幌の歴史を深く理解できる貴重な空間です。展示品には当時の写真や図面、関連資料などが含まれており、歴史愛好家にも人気のスポットです。館内では無料の日本語ガイドも利用でき、より詳しい解説を聞きながら見学できます。<br><br>【2.2 鐘楼】<br>札幌時計台の鐘楼は、1878年に設置された歴史ある鐘が現在も時を告げています。この鐘はアメリカ製で、当時の最新技術を駆使して作られました。鐘楼の内部では、時計の機械の仕組みや鐘の音が鳴るメカニズムを間近で見学できます。毎時0分になると鐘の音が響き渡り、札幌の街に歴史の重みを感じさせてくれます。鐘楼の階段を上ると、札幌市街を一望できる絶景スポットとしても人気で、特に夕暮れ時は美しい景色を楽しめます。鐘楼見学は入場料に含まれており、追加料金は不要です。<br><br>【2.3 写真スポット】<br>札幌時計台は札幌を代表する写真スポットとして、年間を通じて多くの観光客が訪れます。建物の外観は明治時代の洋風建築の美しさを今に伝えており、四季折々の表情を見せてくれます。春は桜とのコントラスト、夏は青空との対比、秋は紅葉との調和、冬は雪化粧との美しいコラボレーションが楽しめます。特に人気なのは建物の正面からの撮影で、時計台の時計部分と建物全体のバランスが美しく写ります。周辺の大通公園やテレビ塔と合わせた撮影もおすすめで、札幌観光の思い出に最適な写真が撮れます。外観の撮影は無料で、24時間いつでも可能です。',
    },
    '8': {
      title: '大通公園',
      description: '札幌の中心にある美しい公園',
      author: 'タビログ編集部',
      heroImage: sapporofountain,
      breadcrumb: ['札幌', '中央区', '大通公園'],
      contentTitle: '大通公園の基本情報',
      spots: ['噴水', '花壇', 'テレビ塔ビュー'],
      imageLeft: sapporoflower,
      imageRight: sapporotelevi,
      content:
        '大通公園は札幌の中心を東西に貫く緑の帯。季節の花壇や噴水、イベントが魅力で、夏のビアガーデンや冬の雪まつりなど市民に親しまれる催しが多数開催されます。周辺にはカフェや百貨店が揃い、観光の合間の休憩にも便利です。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">北海道札幌市中央区大通西1丁目〜大通西12丁目</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">地下鉄南北線「大通駅」直結<br>地下鉄東西線「大通駅」直結<br>地下鉄東豊線「大通駅」直結<br>JR「札幌駅」徒歩10分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">24時間開放<br>イベント時は時間制限あり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金</td><td style="border: 1px solid #ddd; padding: 8px;">無料<br>イベント時は別途料金</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">専用駐車場なし<br>周辺コインパーキング利用<br>公共交通機関利用推奨</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設・設備</td><td style="border: 1px solid #ddd; padding: 8px;">ベンチ・トイレ・噴水<br>花壇・遊具・イベント広場</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">主要イベント</td><td style="border: 1px solid #ddd; padding: 8px;">札幌雪まつり（2月）<br>ビアガーデン（7-8月）<br>ライラックまつり（5月）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">札幌テレビ塔・時計台<br>大丸・三越・パルコ<br>カフェ・レストラン多数</td></tr></table><br>【2.1 噴水】<br>大通公園の噴水は、公園の美しい景観を演出する重要な要素です。特に夏の時期には、涼しげな水しぶきが訪れる人々に安らぎを与えます。噴水の周りにはベンチが設置されており、水の音を聞きながらゆっくりと過ごすことができます。夜間にはライトアップされ、幻想的な雰囲気を演出します。札幌の夏の暑さを和らげるオアシスとして、地元の人々にも観光客にも愛されています。噴水は公園の中央部に位置し、テレビ塔からもよく見える位置にあります。<br><br>【2.2 花壇】<br>大通公園の花壇は、四季折々の美しい花々で彩られています。春にはチューリップやパンジー、夏にはマリーゴールドやサルビア、秋にはコスモスやキクなど、季節に応じた花々が植えられています。特に春と夏の花壇は圧巻で、多くの人が写真撮影に訪れます。花壇のデザインは毎年変わり、新しい発見があるのも魅力の一つです。花の香りと美しい色彩が、公園を訪れる人々の心を和ませてくれます。花壇は公園全体に配置されており、散策しながら楽しめます。<br><br>【2.3 テレビ塔ビュー】<br>大通公園から見る札幌テレビ塔の景色は、札幌を代表する絶景スポットの一つです。公園の緑とテレビ塔の赤い塔身のコントラストが美しく、特に夕暮れ時には格別の美しさを楽しめます。テレビ塔の展望台からは大通公園を一望でき、逆に公園からはテレビ塔の威容を間近で感じることができます。夜になるとテレビ塔がライトアップされ、公園の夜景と合わせてロマンチックな雰囲気を演出します。札幌観光の定番フォトスポットとして、多くの観光客が訪れています。テレビ塔は公園の東端に位置し、大通公園の全長1.5kmにわたって美しい景観を楽しめます。',
    },
    '27': {
      title: '🦁 円山動物園',
      description: '札幌を代表する総合動物園。ホッキョクグマやアムールトラなど人気の動物に会える',
      author: 'タビログ編集部',
      heroImage: maruyamapolarbear,
      breadcrumb: ['札幌', '中央区', '円山動物園'],
      contentTitle: '円山動物園の基本情報',
      spots: ['ホッキョクグマ館', '園内マップ', 'アムールトラ', 'こども動物園'],
      imageLeft: maruyamapolarbear,
      imageRight: maruyamakodomo,
      content:
        '円山公園に隣接する「円山動物園」は、北の大地らしい動物展示と学びのコンテンツが充実した札幌の定番スポット。ホッキョクグマ館では水槽越しにダイナミックな遊泳シーンを間近で観察でき、迫力満点。園内はベビーカーでも回りやすく、キッズ向けの体験や解説も豊富です。<br><br>【2.1 ホッキョクグマ館】<br>大水槽での遊泳やダイブは必見。時間帯によって行動が変わるので、昼と夕方で違う表情を楽しめます。<br><br>【2.2 園内マップ】<br>広い園内はエリアごとにテーマ展示。入口で配布されるマップを活用し、効率よく周遊しましょう。<br><br>【2.3 アムールトラ】<br>精悍な姿が魅力の大型ネコ科。ガラス越しに表情や歩行をじっくり観察できます。<br><br>【2.4 こども動物園】<br>小動物とのふれあいや学びの展示でファミリーに人気。季節イベントも随時開催。',
    },
    '28': {
      title: '北海道大学',
      description: '札幌の学術と自然が調和するキャンパス。四季の並木道が名所',
      author: 'タビログ編集部',
      heroImage: hokudai,
      breadcrumb: ['札幌', '北区', '北海道大学'],
      contentTitle: '北海道大学の基本情報',
      spots: ['ポプラ並木', '旧札幌農学校', '総合博物館', '札幌農学校ミルククッキー'],
      imageLeft: hokudaipopula,
      imageRight: sapporoagribuilding,
      content:
        '北海道大学（札幌キャンパス）は、札幌駅北側に広がる国内有数の広大な都市型キャンパスで、開拓使時代の歴史資産と豊かな樹林が共存します。エルム（ニレ）やポプラの高木がつくる並木、秋の黄葉で有名なイチョウ並木、旧札幌農学校ゆかりの建物や第2農場（モデルバーン）など、学術と景観が一体となった散策路が充実。一般にも開放され、四季の変化を楽しみながら学術文化に触れられます。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">北海道札幌市北区北8条西5丁目</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">JR「札幌駅」北口徒歩7分<br>地下鉄南北線「北12条駅」徒歩5分<br>地下鉄東豊線「北18条駅」徒歩8分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">24時間開放<br>建物内は平日8:00～22:00</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金</td><td style="border: 1px solid #ddd; padding: 8px;">無料<br>総合博物館は無料（要確認）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（台数限定）<br>公共交通機関利用推奨</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">札幌駅・大通公園<br>北海道庁旧本庁舎・時計台<br>商業施設・カフェ多数</td></tr></table><br>【2.1 ポプラ並木】<br>北大の象徴的風景の一つ。風に揺れる高木の並木道は雄大で、夕暮れの逆光シルエットがフォトジェニック。一部は台風被害後に再整備され、現在は保全と景観の両立が図られています。見学時は案内サインに従い、立入禁止区域への進入はご遠慮ください。<br><br>【2.2 旧札幌農学校】<br>開拓使時代に創立した札幌農学校（現・北海道大学）の歴史を物語る建築・施設群。西洋式木造建築の意匠を色濃く残す建物や、牧畜・酪農教育の拠点だった第2農場（モデルバーン）など、北海道の農学発展を象徴する見どころが点在します。保存・修復により当時の姿が伝わり、屋外解説で学びながら見学できます。<br><br>【2.3 北海道大学総合博物館】<br>理学・農学・医学ほか多分野の研究史と標本を横断展示。恐竜・化石、鉱物、動植物標本から最先端研究まで幅広く紹介し、子ども向け体験や企画展も充実。入館は原則無料（最新情報は公式を要確認）で、雨天時の観光にも適しています。館内カフェも併設。<br><br>【2.4 札幌農学校ミルククッキー】<br>学内ゆかりの人気土産。北海道産ミルクのコクをいかした素朴なテイストで、軽やかな食感が特長。学内売店・札幌駅周辺・空港などで幅広く入手でき、配布用小箱からギフト缶までパッケージが多彩。常温で持ち運びしやすく、旅の締めのまとめ買いにも便利です。',
    },
    '29': {
      title: '狸小路商店街',
      description: '全長約900m、1丁目〜7丁目が連なる札幌を代表するアーケード商店街',
      author: 'タビログ編集部',
      heroImage: tanukikoji,
      breadcrumb: ['札幌', '中央区', '狸小路商店街'],
      contentTitle: '狸小路商店街の基本情報',
      spots: ['グルメ（スープカレー・ラーメン）', 'たぬきや（狸グッズ・土産）', 'アクセスと営業時間'],
      imageLeft: tanukiya,
      imageRight: tanukikojimap,
      content:
        '狸小路商店街は、明治時代から続く札幌の中心繁華街の一つ。アーケードで全天候型の快適な歩行空間が確保され、1丁目から7丁目まで多彩な飲食・物販・娯楽が揃います。大通公園とすすきのの間に位置し、観光の合間の食事や買い物に最適な導線。国内外の旅行者が一日中行き交う札幌の定番スポットです。<br><br>【2.1 グルメ（スープカレー・ラーメン）】<br>札幌グルメを気軽に楽しめるのも狸小路の魅力。スープカレーは人気店『GARAKU』の濃厚スパイス系が代表格で、野菜の旨味とコク深いスープが寒い季節にぴったり。ラーメンは『北一（きたいち）』の味噌・醤油など札幌スタイルを堪能できます。<br>・目安待ち時間：ランチ/ディナーのピーク（12:00〜13:30、18:30〜20:00）は20〜40分前後。混雑回避には開店直後またはアイドルタイム（15:00前後）が狙い目。<br>・支払い/予約：一部店舗は現金メイン・券売機制。予約可否やラストオーダーは店舗により異なるため事前確認推奨。<br>・場所感：GARAKUは狸小路・すすきの寄りの路地裏エリア、北一は狸小路周辺から徒歩圏。商店街から徒歩5〜10分内で回遊しやすい。<br><br>【2.2 たぬきや（狸グッズ・土産）】<br>創業大正5年、狸小路4丁目の老舗みやげ店『たぬきや』は、札幌中心部最大級の品揃え（5,000点超）が魅力。北海道銘菓や限定キャラクターグッズ、地酒・焼酎・ワイン、木彫りなど北海道らしい商品がズラリ。店頭の大きな狸が目印で、2階は北海道ならではの木彫りグッズやオリジナル「狸」グッズ（ぬいぐるみ、置物、キーホルダー、招き狸など）も充実。<br><br>営業時間：9:30〜21:30<br>年中無休（臨時休業あり）<br>住所：札幌市中央区南3条西4丁目18（狸小路4丁目）<br>TEL：011-221-0567<br>詳細は公式をご確認ください（参考: <a href="https://www.gutabi.jp/event/detail/3548" target="_blank" rel="noreferrer">ぐうたび北海道</a> / <a href="https://www.tanukiya.co.jp/" target="_blank" rel="noreferrer">たぬきや 公式</a>）。<br><br>【2.3 アクセスと営業時間】<br>地下鉄東西線『大通駅』、南北線『すすきの駅』から各徒歩約3分、JR『札幌駅』から徒歩約15分。大通〜すすきの間のアーケードのため、雪や雨の日も快適に移動できます。駐車は提携駐車場（カモンチケット対象など）の利用や近隣コインパーキングが便利。各店の営業時間は店舗により異なるため、最新情報は公式サイトをご確認ください（参考: <a href="https://tanukikoji.or.jp/access/" target="_blank" rel="noreferrer">狸小路商店街 アクセス</a>）。',
    },
    '23': {
      title: '小樽運河',
      description: '石造倉庫群とガス灯が並ぶロマンチックな運河。冬のイルミネーションも必見',
      author: 'タビログ編集部',
      heroImage: Otaru_Canal_Winter,
      breadcrumb: ['札幌', '小樽市', '小樽運河'],
      contentTitle: '小樽運河の基本情報',
      spots: ['小樽雪あかりの路', 'クルーズ（デイクルーズ/ナイト）', '倉庫群カフェ＆ショップ'],
      imageLeft: otarucruise,
      imageRight: otaruwintermatsuri,
      content:
        '北海道・小樽の象徴「小樽運河」は、石造倉庫群と歴史的街並みが連なる情緒あふれる景観が魅力。夕暮れから夜にかけてはガス灯が点灯し、運河と倉庫のシルエットが水面に映る幻想的な光景に。冬は雪景色とイルミネーションが重なり、よりロマンチックな雰囲気を楽しめます。札幌から電車で約35〜45分とアクセスも良く、日帰り観光の定番です。<br><br>【2.1 小樽雪あかりの路】<br>毎年2月に開催される冬の風物詩。市民と国内外ボランティアの手で、スノーキャンドルやワックスボウルの柔らかな灯りが運河沿いと市内各会場を彩ります。浅草橋〜中央橋一帯の運河会場、手宮線跡地や都通りなど複数会場で展開。ガス灯とキャンドルの明かりが重なり、雪と光のコントラストが作り出す静謐で温かな景観は唯一無二です。<br>・開催時期の目安：2月上旬（例：第27回は2/8〜2/15）。<br>・点灯時間の目安：17:00頃〜21:00頃。悪天候等により一部会場中止あり。<br>・見どころ：運河会場のキャンドル群像、手宮線会場のオブジェ、芸術村会場のプロジェクションマッピングやYOSAKOIなど日替わり企画。<br>・体験：ワックスボウル製作体験、バックヤードツアー、スノー滑り台（年により実施内容変動）。<br>・ボランティア：キャンドル設置や点灯・補修を担う「あかり人」を随時募集。<br>・環境配慮：使用済みキャンドルの再活用に取り組み、資源を無駄にしない運営を継続。<br>・最新情報：公式サイトのNEWSやフォトブログで当日の実施/中止、会場変更を確認推奨。参考：[小樽雪あかりの路 公式](http://yukiakarinomichi.org/)。<br><br>【2.2 クルーズ（デイクルーズ/ナイト）】<br>「小樽運河クルーズ」は約40分で運河〜港を巡る水上ツアー。<br>・運航時間（目安）：10:00〜日没後まで、デイクルーズは概ね30分間隔、ナイトは日没後に運航（季節により変動）。<br>・集合/発券：中央橋の発券所に出航の15分前集合。JR小樽駅から徒歩約10分。<br>・料金（目安）：デイクルーズ 大人¥1,500／小学生¥500、ナイトクルーズ 大人¥2,000／小学生¥500（未就学は大人1名につき1名無料・席なし）。<br>・ガイド：多言語オーディオガイドで運河の歴史、北運河の見どころを解説。<br>・混雑対策：繁忙期は満席になるため事前予約推奨、防寒具・耐水対策を用意すると快適。<br>参考：[小樽運河クルーズ 公式](https://otaru.cc/ko/)。<br><br>【2.3 倉庫群カフェ＆ショップ】<br>石造倉庫を活用したショップやカフェが点在。スイーツは小樽を代表する人気ジャンル。<br>・LeTAO（ルタオ）本店：名物「ドゥーブルフロマージュ」ホール¥2,000前後、カット＋ドリンクのカフェセット¥1,000〜¥1,500前後、季節限定ケーキ各種（時価）。<br>・その他：小樽ガラス工芸、オルゴール堂、土産店が集中し回遊しやすい。<br>・滞在のコツ：運河散策の合間に甘味休憩、冬季は足元が滑りやすいため歩きやすい靴で。<br>参考：[LeTAO紹介（例）](https://triple.guide/restaurants/a4ec07e4-fbfe-49c0-b2d5-604a4389bf83)。',
    },
    '38': {
      title: 'サッポロビール博物館',
      description: '北海道の代表的なビール工場。歴史と製造工程を学べる',
      author: 'タビログ編集部',
      heroImage: GenghisKhan,
      breadcrumb: ['札幌', '東区', 'サッポロビール博物館'],
      contentTitle: 'サッポロビール博物館の基本情報',
      spots: ['ジンギスカン', '見学案内', '試飲コーナー'],
      imageLeft: SapporoBeerMuseum,
      imageRight: SapporoBeerTaste,
      content:
        'サッポロビール博物館は北海道のビール文化を学べる貴重な施設。明治時代から続くビール製造の歴史と技術を展示で紹介し、実際の製造工程も見学できます。試飲コーナーでは新鮮なビールを味わえ、北海道の食文化を深く理解できるスポットです。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">北海道札幌市東区北7条東9丁目1-1</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">地下鉄東豊線「東区役所前駅」徒歩8分<br>JR「札幌駅」徒歩25分<br>バス「サッポロビール園前」下車すぐ</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">11:00～18:30（ラストオーダー18:00）<br>定休日：月曜日（祝日の場合は翌日）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（台数限定）<br>公共交通機関利用推奨</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">サッポロビール園・レストラン<br>札幌市東区役所・図書館<br>商業施設・コンビニ</td></tr></table><br>【2.1 ジンギスカン】<br>サッポロビール博物館では、ビール製造の全工程を詳しく学ぶことができます。特に注目すべきは、札幌の名物「ジンギスカン」とビールの深い関係です。ジンギスカンは北海道の代表的な郷土料理で、羊肉を鉄板で焼いて食べる料理です。このジンギスカンとビールの組み合わせは、札幌の食文化の象徴的な存在となっています。博物館では、ビールの製造過程で使用される麦芽の種類や発酵の仕組み、そしてジンギスカンと相性の良いビールの特徴について詳しく解説されています。ジンギスカンの脂っこさをビールの爽やかな苦味が中和し、完璧な味のハーモニーを生み出す秘密も学べます。<br><br>■ジンギスカン料理と価格（税込）：<br>・ジンギスカン定食：1,200円～1,800円<br>・ジンギスカン単品：800円～1,200円<br>・ラム肉ジンギスカン：1,000円～1,500円<br>・ジンギスカン＋ビールセット：1,500円～2,200円<br>・野菜盛り合わせ：400円～600円<br>・ご飯・ライス：200円～300円<br>・ジンギスカン汁物：300円～500円<br><br>■ジンギスカンの食べ方とコツ：<br>・羊肉を鉄板で焼く際は、中火でじっくりと焼くのがポイント<br>・野菜は羊肉の脂で炒めることで、より美味しく仕上がります<br>・タレは甘辛い醤油ベースで、羊肉の臭みを消す効果があります<br>・ビールとの相性が抜群で、特にサッポロビールとの組み合わせが人気<br>・一人前の目安は羊肉150g～200g程度です<br><br>【2.2 見学案内】<br>サッポロビール博物館では、プレミアムツアー（有料）と自由見学（無料）の2つの見学コースをご用意しています。<br><br>■プレミアムツアー（有料・要予約）<br>・所要時間：約50分（テイスティング含む）<br>・実施日：月曜日を除く営業日（月曜日が祝日の場合は実施し、翌火曜日が休止）<br>・実施時間：初回11:30スタート（以降の実施時間・回数は日によって異なります）<br>・受付時間：各回スタート10分前まで<br>・定員：20名様<br>・参加費：大人1,000円、中学生～20歳未満500円、小学生以下無料<br>・内容：ブランドコミュニケーターによるガイド付きツアー、プレミアムシアターでの歴史物語視聴、館内展示見学、創業当時の味「復刻札幌製麦酒」と現代の生ビール「黒ラベル」の飲み比べ<br><br>■自由見学（無料）<br>・営業時間：11:00～18:30（ラストオーダー18:00）<br>・順路：3階→2階→1階の一方通行ルート<br>・多言語対応：英語・韓国語・中国語（簡体字）の翻訳版を2次元バーコードで提供<br><br>【2.3 試飲コーナー】<br>スターホール（テイスティング）では、サッポロビール北海道工場、札幌開拓使麦酒醸造所直送のできたてビールを味わえます。<br><br>■営業時間：11:00～18:30（ラストオーダー18:00）<br>■利用時間：30分まで<br>■試飲できる銘柄と価格（税込）：<br>・サッポロ生ビール黒ラベル：450円<br>・北海道限定クラシック：450円<br>・開拓使麦酒：550円<br>・3種飲み比べセット：1,200円<br>・ノンアルコールビールテイスト飲料：200円<br>・ソフトドリンク：200円<br><br>■注意事項：<br>・館内順路は一方通行のため、スターホールのみの利用はお控えください<br>・満席時はお待ちいただく場合があります<br>・ラストオーダー以降は試飲待機列にお並びいただけません<br>・12月31日は休業日です',
    },
  },
  福岡: {
    '9': {
      title: '⚔️ 福岡城跡',
      description: '福岡の歴史を感じられる城跡。舞鶴公園の桜でも有名。',
      author: 'タビログ編集部',
      heroImage: FukuokaCastle,
      breadcrumb: ['福岡', '中央区', '福岡城跡'],
      contentTitle: '福岡城跡の基本情報',
      spots: ['天守台と石垣', '舞鶴公園', '歴史資料館', 'アクセス'],
      imageLeft: FukuokaCastle,
      imageRight: FukuokaCastle2,
      content: `福岡藩・黒田家の居城として慶長年間に築かれた近世城郭。現存天守は失われたものの、壮麗な高石垣と曲輪配置、櫓跡や城門跡が往時の威容を今に伝えます。城址一帯は「舞鶴公園」として整備され、四季の花木と歴史遺構が調和する市民の憩いの場です。春は桜、初夏は新緑、秋は紅葉、冬は澄んだ空気の中で石垣の表情を楽しめます。<br><br>
<table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
  <tr style="background-color: #f2f2f2;">
    <th style="border:1px solid #ddd; padding:8px; text-align:left;">項目</th>
    <th style="border:1px solid #ddd; padding:8px; text-align:left;">詳細</th>
  </tr>
  <tr>
    <td style="border:1px solid #ddd; padding:8px;">所在地</td>
    <td style="border:1px solid #ddd; padding:8px;">福岡県福岡市中央区城内（舞鶴公園内）</td>
  </tr>
  <tr>
    <td style="border:1px solid #ddd; padding:8px;">アクセス</td>
    <td style="border:1px solid #ddd; padding:8px;">地下鉄空港線「赤坂駅」徒歩約15分／地下鉄七隈線「六本松駅」徒歩約15分／西鉄バス「福岡城・鴻臚館前」下車すぐ</td>
  </tr>
  <tr>
    <td style="border:1px solid #ddd; padding:8px;">開園時間</td>
    <td style="border:1px solid #ddd; padding:8px;">終日（施設は一部時間制）／年中無休</td>
  </tr>
  <tr>
    <td style="border:1px solid #ddd; padding:8px;">料金</td>
    <td style="border:1px solid #ddd; padding:8px;">公園散策無料（資料館等は別途）</td>
  </tr>
  <tr>
    <td style="border:1px solid #ddd; padding:8px;">見頃</td>
    <td style="border:1px solid #ddd; padding:8px;">桜：3月下旬〜4月上旬／紅葉：11月中旬</td>
  </tr>
</table><br>
【1】天守台と高石垣<br>
城の中枢・本丸跡に聳える天守台は圧巻。大規模な切石の高石垣が連なり、石材の刻印や積み方（打込接・切込接）から当時の築城技術を間近に感じられます。天守台上からは福岡市街・博多湾まで一望の眺望。朝夕の光で石垣の陰影が際立ち、写真撮影にも最適です。<br><br>
【2】舞鶴公園の桜と季節の花木<br>
園内には約1,000本の桜が植栽され、見頃にはライトアップが実施されます。梅・ツツジ・花菖蒲・紅葉など四季折々の彩りも豊かで、散策路・芝生広場・茶屋が点在。花見時期は臨時の露店やイベントも開催され賑わいます。<br><br>
【3】鴻臚館跡・歴史資料と学び<br>
城域周辺には古代の外交・迎賓施設「鴻臚館」跡が残り、発掘成果の展示で国際交流の歴史を学べます。城郭解説板や模型、石垣の補修説明も整備され、子ども連れの学習にも最適。ボランティアガイドによる案内（日程限定）も人気です。<br><br>
【4】散策のコツとモデルルート<br>
赤坂駅方面から上りながら本丸・天守台→西広場→花菖蒲園→梅園→鴻臚館跡の順に巡ると高低差が緩やかで快適。石段や未舗装路もあるため、歩きやすい靴がおすすめ。春・夏は日差し対策、秋冬は防寒を。<br><br>
【5】周辺グルメ・立ち寄りスポット<br>
大濠公園・福岡市美術館・天神エリアが徒歩圏。博多名物うどん・明太子、甘味（鶴乃子など）も近隣で楽しめます。イベント開催時は混雑・駐車場満車となるため公共交通機関を推奨。`,
    },
    '10': {
      title: '🏙 博多駅',
      description: '福岡の玄関口・博多駅。グルメとショッピングの中心地。',
      author: 'タビログ編集部',
      heroImage: HakataCity,
      breadcrumb: ['福岡', '博多区', '博多駅'],
      contentTitle: '博多駅の基本情報',
      spots: ['駅ビルと地下街', 'イルミネーション', 'デパ地下グルメ', 'アクセス'],
      imageLeft: HakataCity,
      imageRight: hakataIlumi,
      content: `九州最大のターミナル。新幹線・在来線・空港アクセスが集約し、駅ビルにはショッピングモールや飲食店が充実。観光の拠点に最適です。駅ナカ・駅ソトそれぞれに名店が揃い、雨の日でも快適に過ごせます。<br><br>
<table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
  <tr style="background-color: #f2f2f2;">
    <th style="border:1px solid #ddd; padding:8px; text-align:left;">項目</th>
    <th style="border:1px solid #ddd; padding:8px; text-align:left;">詳細</th>
  </tr>
  <tr>
    <td style="border:1px solid #ddd; padding:8px;">所在地</td>
    <td style="border:1px solid #ddd; padding:8px;">福岡県福岡市博多区博多駅中央街1-1 ほか</td>
  </tr>
  <tr>
    <td style="border:1px solid #ddd; padding:8px;">アクセス</td>
    <td style="border:1px solid #ddd; padding:8px;">地下鉄空港線「博多駅」直結／福岡空港から地下鉄で約5分／西鉄バス多数</td>
  </tr>
  <tr>
    <td style="border:1px solid #ddd; padding:8px;">主要施設</td>
    <td style="border:1px solid #ddd; padding:8px;">JR博多シティ（アミュプラザ・シティダイニング）／デイトス／地下街（博多駅地下街）</td>
  </tr>
  <tr>
    <td style="border:1px solid #ddd; padding:8px;">営業時間</td>
    <td style="border:1px solid #ddd; padding:8px;">ショップ 10:00〜21:00／レストラン 11:00〜22:00（施設・店舗により異なる）</td>
  </tr>
  <tr>
    <td style="border:1px solid #ddd; padding:8px;">観光案内</td>
    <td style="border:1px solid #ddd; padding:8px;">博多駅総合案内所・観光案内所あり／多言語パンフレット・Wi-Fi</td>
  </tr>
</table><br>
【1】駅ビルと地下街（ショッピング＆カフェ）<br>
アミュプラザ／JR博多シティにはファッション・雑貨・生活グッズの大型ゾーンと、書店・カフェ・コワーキングなど滞在に便利な施設が揃います。地下街は雨天でも移動が快適で、ベーカリーやコーヒースタンドのはしごも楽しい。屋上の「つばめの杜ひろば」では季節イベントやミニ鉄道も。<br><br>
【2】イルミネーション＆駅前広場イベント（冬の名物）<br>
冬季は駅前広場一帯がライトアップされ、マーケットやステージイベントで賑わいます。光の回廊・フォトスポットが多数設置され、家族やカップルでの記念撮影に人気。点灯期間・時間は年により変動するため事前に公式を確認すると安心です。<br><br>
【3】デパ地下・駅ナカグルメ（お土産＆名物）<br>
明太子や豚骨ラーメン関連の土産、鶏皮や中華の惣菜、九州銘菓までラインナップが豊富。定番の辛子明太子は小分けパックが便利で、保冷バッグの用意があると持ち帰りが安心。ラーメンは「デイトス」のラーメン横丁系も人気で、ピーク時は行列に注意。<br><br>
【4】モデルコース＆動線のコツ<br>
空港到着→地下鉄で博多駅→駅ナカで昼食→屋上ひろばや展望→お土産購入→地下街経由でホテルへ、の動線がスムーズ。週末や連休はレストランの待ち時間が伸びるため、開店直後かアイドルタイムの利用がおすすめ。<br><br>
【5】周辺スポット＆連絡性<br>
天神・中洲・祇園・キャナルシティへはバス／地下鉄で短時間。太宰府・糸島・小倉方面へも鉄道でアクセス良好。雨天時は駅周辺だけでも一日楽しめるボリュームです。`,
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
        '中洲屋台は福岡の夜を象徴するグルメスポット。博多ラーメン、焼きラーメン、もつ煮、明太子料理など、地元ならではの味を気軽に楽しめます。観光客と地元客が肩を並べて食事を楽しむ活気ある雰囲気が魅力です。<br>場所：福岡市博多区中洲（那珂川沿い）<br><br>【2.1 龍が如く5の舞台】<br>中洲は人気ゲーム「龍が如く5」の重要な舞台として登場し、多くのゲームファンが聖地巡礼に訪れています。ゲーム内で再現された中洲の街並みと実際の風景を比較しながら楽しむことができ、龍が如くシリーズのファンにとって特別な場所となっています。<br><br>【2.2 中洲の龍】<br>龍が如く5では中洲が「龍の街」として描かれており、ゲーム内の主人公たちが活躍する舞台として重要な役割を果たしています。実際の中洲を訪れることで、ゲームの世界観と現実の福岡の魅力を同時に体験できます。<br><br>【2.3 屋台グルメ】<br>定番の博多ラーメンから、焼きラーメン、天ぷら、焼き鳥、明太子を使った創作料理まで、屋台ごとに個性豊かなメニューが揃います。少量ずつ食べ歩きしながらお気に入りの一品を見つけるのがおすすめ。<br><br>【2.4 川沿いナイトビュー】<br>中洲の川沿いはネオンが水面に映り込むフォトジェニックな夜景スポット。食後に川沿いを散策すれば、屋台の明かりと夜景が織りなす福岡ならではのロマンチックな時間を過ごせます。',
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
        '太宰府天満宮は学問の神様として知られる菅原道真公を祀る神社。境内には心字池や太鼓橋、楼門、本殿など見どころが点在し、四季折々の美しさが楽しめます。受験合格祈願や厄除けに訪れる参拝客で年間を通じて賑わいます。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">福岡県太宰府市宰府4-7-1</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">西鉄太宰府線「太宰府駅」徒歩5分<br>JR「二日市駅」から西鉄バス15分<br>福岡空港から直行バス45分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">6:00～19:00（季節により変動）<br>授与所: 8:30～17:00</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金</td><td style="border: 1px solid #ddd; padding: 8px;">無料<br>御朱印: 500円<br>梅苑: 500円（2-3月のみ）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（台数限定）<br>公共交通機関利用推奨</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体参拝</td><td style="border: 1px solid #ddd; padding: 8px;">学校団体・企業団体向け案内<br>要予約・無料</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設・設備</td><td style="border: 1px solid #ddd; padding: 8px;">授与所・手水舎・休憩所<br>多言語対応・案内板</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">主要祭事</td><td style="border: 1px solid #ddd; padding: 8px;">初詣・梅祭り（2-3月）<br>天神祭・合格祈願祭<br>各種年中行事</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">九州国立博物館・太宰府政庁跡<br>梅ヶ枝餅店・土産店<br>カフェ・レストラン多数</td></tr></table><br>【2.1 本殿・御神牛】<br>荘厳な本殿は参拝の中心。境内に点在する「御神牛」の像は頭を撫でると知恵が授かるといわれ、受験生をはじめ多くの参拝者に親しまれています。楼門から本殿へ続く参道は写真スポットとしても人気です。本殿参拝は無料で、24時間いつでも可能ですが、授与所の営業時間は8:30～17:00です。<br><br>【2.2 梅苑・飛梅】<br>境内は梅の名所として有名で、早春には約200種・6,000本ともいわれる梅が咲き誇ります。道真公の伝説にまつわる「飛梅」は天満宮の象徴的存在。梅の香りとともに太宰府らしい風景を楽しめます。梅苑は2-3月の梅の開花時期のみ有料（500円）で公開され、その他の時期は無料で見学できます。<br><br>【2.3 参道と御朱印】<br>表参道には梅ヶ枝餅の老舗が並び、食べ歩きも醍醐味。授与所では御朱印をいただくことができ、旅の記念として人気です。土日や受験シーズンは混雑するため、朝の時間帯の参拝がおすすめです。御朱印は500円でいただけ、特別な記念品として人気です。',
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
        '櫛田神社は博多の総鎮守として「お櫛田さん」の愛称で親しまれる古社。毎年7月の博多祇園山笠で有名で、境内や楼門には祭りの飾り山が常設展示され、博多文化の象徴的な存在です。商売繁盛・不老長寿の御利益があるとされ、地元の人々や観光客で一年中賑わいます。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">福岡県福岡市博多区上川端町1-41</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">地下鉄空港線「中洲川端駅」徒歩5分<br>地下鉄七隈線「天神南駅」徒歩8分<br>西鉄バス「櫛田神社前」下車すぐ</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">24時間開放<br>授与所: 9:00～17:00</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金</td><td style="border: 1px solid #ddd; padding: 8px;">無料<br>御朱印: 300円～500円</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">専用駐車場なし<br>周辺コインパーキング利用<br>公共交通機関利用推奨</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体参拝</td><td style="border: 1px solid #ddd; padding: 8px;">学校団体・企業団体向け案内<br>要予約・無料</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設・設備</td><td style="border: 1px solid #ddd; padding: 8px;">授与所・手水舎・休憩所<br>多言語対応・案内板</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">主要祭事</td><td style="border: 1px solid #ddd; padding: 8px;">博多祇園山笠（7月）<br>新年祭・節分祭<br>各種年中行事</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">博多町家ふるさと館<br>博多ラーメン横丁・中洲<br>カフェ・土産店多数</td></tr></table><br>【2.1 楼門と飾り山】<br>豪壮な楼門をくぐると迫力ある「飾り山」が出迎えます。山笠の歴史や見送り・表の意匠を間近で鑑賞でき、祭り期間外でも博多の祭文化に触れられるのが魅力。写真スポットとしても人気です。楼門は24時間いつでも見学可能で、特に夜間のライトアップ時は幻想的な雰囲気を楽しめます。<br><br>【2.2 霊泉鶴の井戸】<br>境内の「霊泉鶴の井戸」は不老長寿の霊泉として知られ、口をすすぐと健康長寿の御利益があると伝えられています。清冽な湧水と静謐な空気に心が洗われるスポットです。霊泉は参拝者が自由に利用でき、特に早朝や夕暮れ時は静寂な雰囲気の中で心を落ち着かせることができます。<br><br>【2.3 博多べいと御朱印】<br>櫛田神社周辺には「博多べい（博多塀）」と呼ばれる歴史的な土塀が残り、古き良き街並みの情緒を感じられます。授与所では季節限定デザインの御朱印をいただけることもあり、参拝の記念に人気です。参道の飴屋・菓子店を巡る食べ歩きもおすすめ。御朱印は授与所で300円～500円でいただけ、特別な記念品として人気です。',
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
        'マリンワールド海の中道は「九州の海」をテーマにした水族館。玄界灘や有明海など地域の海を再現した展示が特徴で、家族連れやカップルに人気です。館内の動線は海辺散策のように心地よく、屋外エリアから望む博多湾の景色も見どころ。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">福岡県福岡市東区西戸崎18-28</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">JR「海の中道駅」徒歩5分<br>西鉄バス「マリンワールド海の中道」下車すぐ<br>福岡市内から車で約30分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">9:30～17:30（入館は17:00まで）<br>夏季（7-8月）: 9:00～18:00<br>冬季（12-2月）: 9:30～17:00</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（大人）</td><td style="border: 1px solid #ddd; padding: 8px;">2,350円（高校生以上）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（小人）</td><td style="border: 1px solid #ddd; padding: 8px;">1,100円（小・中学生）<br>600円（4歳以上）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（1,000台）<br>普通車: 1,000円/日<br>大型車: 2,000円/日</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体割引</td><td style="border: 1px solid #ddd; padding: 8px;">20名以上で団体料金適用<br>学校団体・企業団体向け特別プランあり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設・設備</td><td style="border: 1px solid #ddd; padding: 8px;">レストラン・カフェ・売店<br>ベビーカー貸出・授乳室<br>多言語対応・案内板</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">主要イベント</td><td style="border: 1px solid #ddd; padding: 8px;">イルカショー・アシカショー<br>給餌タイム・解説プログラム<br>季節限定イベント</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">海の中道海浜公園<br>志賀島・能古島<br>カフェ・レストラン多数</td></tr></table><br>【2.1 九州の海 大水槽】<br>高さ・幅ともに迫力のある大水槽では、イワシの群泳やサメ、エイが織りなすダイナミックな世界を体感できます。時間帯によっては解説付きの給餌タイムが実施され、海の生態について楽しく学べます。大水槽は館内のメインアトラクションで、1日数回の給餌タイムではスタッフによる詳しい解説も聞けます。<br><br>【2.2 イルカ・アシカショー】<br>屋外スタジアムでは、イルカとアシカのパフォーマンスを上演。ジャンプや連携技が繰り出されるショーは臨場感たっぷりで、海風を感じながら観覧できるのも魅力です。季節限定のナイトショーや演出も要チェック。ショーは1日数回開催され、座席は先着順で自由席です。<br><br>【2.3 展望デッキと海辺散策】<br>館外の展望デッキからは博多湾や志賀島方面の眺望が広がります。帰り道は海の中道の遊歩道を散策し、海辺の風景や芝生広場でのんびり過ごすのもおすすめ。館内外で一日ゆっくり楽しめるスポットです。展望デッキは入館料に含まれており、館内の展示を見た後も自由に利用できます。',
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
        '大濠公園は福岡市中央区にある総面積約40ヘクタールの都市公園。中心にある大濠池を囲むように整備された公園で、市民の憩いの場として親しまれています。春の桜、夏の新緑、秋の紅葉、冬の静寂と四季折々の美しさを楽しめる福岡の代表的な公園です。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">福岡県福岡市中央区大濠公園1-2</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">地下鉄空港線「大濠公園駅」徒歩3分<br>地下鉄七隈線「六本松駅」徒歩8分<br>西鉄バス「大濠公園前」下車すぐ</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">24時間開放<br>ボート乗り場: 9:00～17:00<br>日本庭園: 9:00～17:00</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金</td><td style="border: 1px solid #ddd; padding: 8px;">無料<br>ボート料金: 30分 800円～1,200円<br>日本庭園: 200円（大人）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（200台）<br>普通車: 200円/時間<br>大型車: 400円/時間</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体利用</td><td style="border: 1px solid #ddd; padding: 8px;">学校団体・企業団体向け案内<br>要予約・無料<br>ボート団体割引あり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設・設備</td><td style="border: 1px solid #ddd; padding: 8px;">遊歩道・ベンチ・トイレ<br>ボート乗り場・日本庭園<br>多言語対応・案内板</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">主要イベント</td><td style="border: 1px solid #ddd; padding: 8px;">桜まつり（4月）<br>大濠花火大会（8月）<br>紅葉まつり（11月）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">福岡市美術館・舞鶴公園<br>天神・博多駅<br>カフェ・レストラン多数</td></tr></table><br>【2.1 大濠池】<br>公園の中心を占める大濠池は、周囲約2kmの美しい池。池の周りには遊歩道が整備されており、散策やジョギングを楽しむ人々で賑わいます。池にはボート乗り場もあり、スワンボートや手漕ぎボートで池の上を散策することもできます。夕暮れ時には池面に映る夕日が美しく、カップルや家族連れに人気のロマンチックスポットです。ボート料金は30분당 800엔～1,200엔이며、 9:00～17:00에 운영됩니다.<br><br>【2.2 日本庭園】<br>公園内には伝統的な日本庭園が設けられており、池泉回遊式の庭園として設計されています。石灯籠や橋、滝などが配置され、四季の花々とともに日本の美意識を感じられる空間です。特に春の桜と秋の紅葉の時期は、庭園の美しさが一層際立ちます。日本庭園의 입장료는 성인 200엔이며, 9:00～17:00에 개방됩니다.<br><br>【2.3 ボート乗り場】<br>大濠池ではスワンボートや手漕ぎボートの貸し出しを行っています。家族連れやカップルが池の上でゆっくりと時間を過ごすことができ、陸上とは違った視点から公園の美しさを楽しめます。ボートから見る福岡の街並みや池の周りの自然は、日常とは違った特別な体験を提供してくれます。ボート乗り場は 9:00～17:00에 운영되며, 단체 할인이 가능합니다.',
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
      content: `福岡PayPayドームは福岡ソフトバンクホークスの本拠地。全天候型の快適な観戦環境と大型演出、グルメやショッピングが一体になった九州随一のエンタメ拠点です。試合日以外もツアーやイベントで楽しめ、一日過ごせるボリューム。<br><br>
<table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
  <tr style="background-color: #f2f2f2;">
    <th style="border:1px solid #ddd; padding:8px; text-align:left;">項目</th>
    <th style="border:1px solid #ddd; padding:8px; text-align:left;">詳細</th>
  </tr>
  <tr>
    <td style="border:1px solid #ddd; padding:8px;">所在地</td>
    <td style="border:1px solid #ddd; padding:8px;">福岡県福岡市中央区地行浜2-2-2</td>
  </tr>
  <tr>
    <td style="border:1px solid #ddd; padding:8px;">アクセス</td>
    <td style="border:1px solid #ddd; padding:8px;">地下鉄空港線「唐人町駅」徒歩約15分／天神・博多駅からバス便多数／駐車場（試合日有料・事前予約推奨）</td>
  </tr>
  <tr>
    <td style="border:1px solid #ddd; padding:8px;">営業時間</td>
    <td style="border:1px solid #ddd; padding:8px;">試合・イベントにより変動（公式サイトで要確認）</td>
  </tr>
  <tr>
    <td style="border:1px solid #ddd; padding:8px;">主な施設</td>
    <td style="border:1px solid #ddd; padding:8px;">球場各ゲート／ミュージアム／公式グッズショップ／飲食売店／隣接商業施設</td>
  </tr>
</table><br>
【1】球場ツアー（バックヤード見学）<br>
普段入れないベンチやブルペン、記者会見室、フィールド周辺を巡るガイド付きツアーを開催。優勝トロフィーや名場面パネル、球団の歴史展示も見どころ。開催日・所要時間・料金は季節により変動するため事前予約が安心です。<br><br>
【2】試合観戦の楽しみ方（演出・座席・グルメ）<br>
迫力のビジョン演出と応援の一体感が魅力。内野指定はプレーの細部を、外野応援席は熱量を、上段席は全景の動きを楽しめます。球場グルメは明太子・鶏皮・唐揚げ・球団コラボメニューなど多彩。ピークは試合前と3回裏、7回表後。モバイルオーダーや早め購入で待ち時間を短縮。<br><br>
【3】李大浩（イ・デホ）選手の活躍（レジェンドの記憶）<br>
2014〜2015に在籍し、日本一へ大きく貢献。勝負所での一打や豪快な本塁打は今なお語り草。関連展示やグッズで当時の熱狂を辿れます。背番号・応援歌エピソードもファン必見。<br><br>
【4】周辺施設と海辺散策（一日コース）<br>
隣接の商業施設やミュージアム、海沿いの遊歩道・展望スポットで試合前後も充実。家族連れはキッズ向けエリアや体験型展示もチェック。試合後は混雑緩和のため少し時間を置いてから移動するとスムーズです。<br><br>
【5】アクセス＆チケットのコツ<br>
最寄りの唐人町駅から徒歩が基本。雨天でもドーム内は快適ですが、入退場時間帯は混雑するため早め行動が吉。チケットは公式販売・先行抽選を活用し、人気試合は早期確保を。駐車場は事前予約制の日が多いので要注意。`,
    },
  },
  沖縄: {
    '11': {
      title: '首里城',
      description: '沖縄の歴史と文化を感じられる城',
      author: 'タビログ編集部',
      heroImage: Shurijo,
      breadcrumb: ['沖縄', '那覇市', '首里城'],
      contentTitle: '首里城の基本情報',
      spots: ['正殿', '守礼門', '園比屋武御嶽石門'],
      imageLeft: Shurijo,
      // imageRight intentionally hidden via UI
      content:
        '首里城は琉球王国の王宮で、朱色の正殿や城郭遺構が沖縄独自の歴史文化を物語ります。復元・保存が進む城内では琉球王国の政治や祭祀の一端に触れられます。那覇市街からのアクセスも良く、首里金城町石畳道の散策と合わせるのもおすすめです。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">沖縄県那覇市首里金城町1-2</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">モノレール「首里駅」徒歩15分<br>那覇バス「首里城前」下車すぐ<br>那覇市内から車で約20分</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">8:30～18:00（入場は17:30まで）<br>夏季（7-9月）: 8:30～19:00<br>冬季（12-2月）: 8:30～17:30</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（大人）</td><td style="border: 1px solid #ddd; padding: 8px;">400円（高校生以上）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（小人）</td><td style="border: 1px solid #ddd; padding: 8px;">200円（小・中学生）<br>無料（6歳以下）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">有料駐車場あり（300台）<br>普通車: 320円/時間<br>大型車: 1,000円/時間</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体観覧</td><td style="border: 1px solid #ddd; padding: 8px;">20名以上で団体料金適用<br>学校団体・企業団体向け特別プランあり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設・設備</td><td style="border: 1px solid #ddd; padding: 8px;">展示室・売店・休憩所<br>ベビーカー貸出・授乳室<br>多言語対応・案内板</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">主要イベント</td><td style="border: 1px solid #ddd; padding: 8px;">首里城祭（10月）<br>琉球王朝絵巻行列<br>季節限定イベント</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">首里城公園・琉球大学<br>首里金城町石畳道<br>カフェ・レストラン多数</td></tr></table><br>【2.1 正殿】<br>首里城の中心建築である正殿は、琉球王国の政治と儀礼の舞台でした。中国と日本の建築様式が融合した独自の美を持ち、朱漆塗りの外観と龍柱が威厳を放ちます。内部には玉座や儀式空間が再現され、王国時代の格式高い儀礼や外交の歴史を感じられます。正殿前の広場では朝拝や冊封使の儀礼が行われ、琉球が海上王国として栄えた証を今に伝えます。正殿内部は入場料に含まれており、詳細な説明とともに観覧できます。<br><br>【2.2 守礼門】<br>「守礼之邦」の扁額で知られる守礼門は、琉球が礼節を重んじる国であることを象徴する城門です。赤瓦と木造の柔らかな曲線美が南国の風景と調和し、首里城を代表する撮影スポットとしても人気。門をくぐると首里城内郭へ続く歴史の回廊が広がり、王国の都・首里の面影が色濃く残ります。夕暮れやライトアップの時間帯は一層趣が増し、散策に最適です。守礼門は無料で観覧可能で、24時間いつでも訪問できます。<br><br>【2.3 園比屋武御嶽石門】<br>園比屋武御嶽石門は、王府の祈願や国家の安寧を祈る祭祀が執り行われた聖地・御嶽の入口に設けられた石門です。琉球の自然崇拝と祖霊信仰を体現する場であり、王国の精神文化の中核を感じられる重要文化財。石造の素朴な造形は、豊かな自然と調和し、首里城の華やかさとは対照的に静謐な時間が流れます。王国の歴史を、建物だけでなく信仰の面からも理解できる貴重なスポットです。園比屋武御嶽石門は入場料に含まれており、庭園内で自由に観覧できます。',
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
        '美ら海水族館は世界最大級の水槽「黒潮の海」で泳ぐジンベエザメが圧巻。サンゴ礁の生態展示やイルカショー、研究バックヤードの取り組みも見応えがあり、周辺の海洋博公園やビーチと合わせて一日中楽しめます。<br><br><table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">詳細</th></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">所在地</td><td style="border: 1px solid #ddd; padding: 8px;">沖縄県国頭郡本部町字石川424</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">アクセス</td><td style="border: 1px solid #ddd; padding: 8px;">那覇空港から車で約2時間<br>那覇バス「美ら海水族館前」下車すぐ<br>海洋博公園内駐車場利用</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">営業時間</td><td style="border: 1px solid #ddd; padding: 8px;">8:30～18:30（入館は18:00まで）<br>夏季（7-8月）: 8:30～20:00<br>冬季（12-2月）: 8:30～17:30</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（大人）</td><td style="border: 1px solid #ddd; padding: 8px;">2,180円（高校生以上）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">入場料金（小人）</td><td style="border: 1px solid #ddd; padding: 8px;">1,440円（小・中学生）<br>720円（6歳以下）</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">駐車場</td><td style="border: 1px solid #ddd; padding: 8px;">海洋博公園駐車場利用<br>普通車: 1,000円/日<br>大型車: 2,000円/日</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">団体観覧</td><td style="border: 1px solid #ddd; padding: 8px;">20名以上で団体料金適用<br>学校団体・企業団体向け特別プランあり</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">施設・設備</td><td style="border: 1px solid #ddd; padding: 8px;">レストラン・カフェ・売店<br>ベビーカー貸出・授乳室<br>多言語対応・案内板</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">主要イベント</td><td style="border: 1px solid #ddd; padding: 8px;">イルカショー・アシカショー<br>給餌タイム・解説プログラム<br>季節限定イベント</td></tr><tr><td style="border: 1px solid #ddd; padding: 8px;">周辺施設</td><td style="border: 1px solid #ddd; padding: 8px;">海洋博公園・ビーチ<br>沖縄美ら海水族館<br>カフェ・レストラン多数</td></tr></table><br>【2.1 黒潮の海】<br>館の象徴である巨大水槽「黒潮の海」では、ジンベエザメやナンヨウマンタ、回遊魚の群れがダイナミックに泳ぐ姿を間近で観察できます。高さ8.2m・幅22.5mのアクリルパネル越しに見る大海の臨場感は圧倒的。時間帯によって採餌解説などのプログラムも行われ、黒潮流域の生態系について学びながら鑑賞できます。黒潮の海は入場料に含まれており、一日中観覧できます。<br><br>【2.2 サンゴの海】<br>沖縄の海を象徴する多様なサンゴ群集を実環境に近い形で再現。日光を取り入れる設計により、サンゴの光合成や共生関係がわかりやすく展示されています。色とりどりの熱帯魚がサンゴの間を行き交う様子はフォトスポットとしても人気。サンゴ保全や繁殖の取り組み、白化対策などの解説も充実しており、環境教育の場としても高い評価を受けています。サンゴの海は入場料に含まれており、詳細な説明とともに観覧できます。<br><br>【2.3 イルカショー】<br>屋外のオキちゃん劇場では、バンドウイルカやオキゴンドウによる息の合ったパフォーマンスを無料で楽しめます。ジャンプやテールウォークなどの見せ場に加え、行動学に基づくトレーニングの解説でイルカの知性や生態への理解が深まります。海を望むスタンド席は開放感抜群で、家族連れにもおすすめです。イルカショーは無料で観覧可能で、一日に複数回公演されます。',
    },
    '46': {
      title: '国際通り',
      description: '那覇の中心街。沖縄のグルメとお土産が楽しめる',
      author: 'タビログ編集部',
      heroImage: Kokusaidori,
      breadcrumb: ['沖縄', '那覇市', '国際通り'],
      contentTitle: '国際通りの基本情報',
      spots: ['沖縄グルメ', 'お土産ショッピング', '伝統工芸品'],
      imageLeft: Kokusaidori,
      imageRight: Kokusaidori,
      content:
        '国際通りは那覇市の中心部に位置する沖縄を代表する繁華街です。約1.6キロメートルの通りには、沖縄の伝統料理を味わえるレストラン、お土産店、伝統工芸品店などが軒を連ね、観光客に人気のスポットです。昼間はショッピングを楽しみ、夜は沖縄料理と泡盛で賑やかな雰囲気を味わえます。<br><br>【2.1 沖縄グルメ】<br>国際通りには沖縄を代表するグルメスポットが集まっています。ステーキハウス88は沖縄発祥のステーキレストランで、手頃な価格で本格的なステーキを楽しめることで人気です。沖縄牛を使ったステーキは柔らかく、ジューシーで、観光客にも地元の人々にも愛されています。また、マホロバは沖縄の伝統的な居酒屋で、泡盛と沖縄料理の組み合わせが絶品です。ゴーヤチャンプルー、ラフテー、ソーキそばなど、沖縄の郷土料理を本格的な味で楽しむことができ、沖縄の食文化を深く体験できる場所です。<br><br>【2.2 お土産ショッピング】<br>国際通りにはCalbee PLUS Okinawaという人気のお土産店があります。この店の最大の特徴は、注文と同時にポテトチップスを揚げてくれることです。沖縄限定の紫芋味やシークワーサー味など、沖縄ならではのフレーバーを楽しむことができ、できたてのサクサクとした食感は格別です。店内では揚げる工程を見学することもでき、お土産として持ち帰るだけでなく、その場で味わうこともできます。沖縄の特産品を使ったオリジナル商品も豊富で、沖縄旅行の思い出にぴったりのお土産を見つけることができます。<br><br>【2.3 伝統工芸品】<br>国際通りには琉球ショップという伝統工芸品専門店があります。琉球ガラス、紅型、琉球漆器、三線などの沖縄の伝統的な工芸品を扱っており、職人による手作りの美しい作品を実際に見て、触って、購入することができます。琉球ガラスの美しい色彩と独特の形状は、沖縄の自然と文化を表現しており、お土産としても人気です。また、工芸品の制作過程を見学できる店舗もあり、沖縄の伝統技術を学ぶ貴重な体験ができます。職人との交流を通じて、沖縄の文化と歴史をより深く理解することができます。',
    },
    '47': {
      title: '万座毛',
      description: '沖縄を代表する絶景スポット。象の鼻のような岩が有名',
      author: 'タビログ編集部',
      heroImage: manzwamo,
      breadcrumb: ['沖縄', '恩納村', '万座毛'],
      contentTitle: '万座毛の基本情報',
      spots: ['象の鼻の岩', '韓国ドラマのロケ地'],
      imageLeft: manzwamo,
      imageRight: manzwamo2,
      content:
        '万座毛は断崖絶壁とコバルトブルーの海が織りなす沖縄屈指の景勝地。隆起サンゴ礁の上に広がる草原と、海に突き出した「象の鼻」に似た奇岩が象徴的です。遊歩道が整備され、季節や時間帯で表情を変える海と空のグラデーションを安全に楽しめます。<br><br>所在地: 沖縄県国頭郡恩納村字恩納<br>アクセス: 那覇空港から車で約1時間30分<br>那覇バス「万座毛」下車徒歩5分<br>沖縄自動車道「許田IC」から約30分<br>営業時間: 24時間開放<br>入場料金: 無料<br>駐車場: 有料駐車場あり（200台）<br><br>【2.1 象の鼻の岩】<br>波の浸食によって生まれた自然の造形美。展望台からは象の鼻越しに広がるエメラルドの海が一望でき、フォトスポットとして大人気。夕暮れ時のシルエットは特にドラマチックです。<br><br>【2.2 韓国ドラマのロケ地】<br>周辺ビーチは韓国ドラマ「괜찮아 사랑이야（大丈夫、愛だ）」のロケ地としても話題。南国の透明な海と白砂のコントラストが作品世界を引き立て、聖地巡礼スポットとしても注目を集めています。',
    },
    '48': {
      title: '古宇利島',
      description: '沖縄本島北部の美しい島。透明度の高い海が魅力',
      author: 'タビログ編集部',
      heroImage: kouribridge,
      breadcrumb: ['沖縄', '今帰仁村', '古宇利島'],
      contentTitle: '古宇利島の基本情報',
      spots: ['古宇利大橋', 'ハートロック'],
      imageLeft: kouribridge,
      imageRight: kourirocks,
      content:
        '古宇利島は本島北部・屋我地島とを結ぶ全長約2kmの古宇利大橋で有名な離島。橋上から望むターコイズの海は圧巻で、ドライブコースとしても人気です。島内にはエメラルドの海と白砂のビーチが点在し、素潜りや海遊びも楽しめます。<br><br>【2.1 古宇利大橋】<br>一直線に海上を走る絶景ロード。橋の両側に広がる浅瀬のグラデーションは「沖縄でも屈指」と評され、晴天時は特にフォトジェニック。<br><br>【2.2 ハートロック】<br>ティーヌ浜にある二つの岩が重なってハート形に見える人気スポット。干潮時はよりくっきりとハートに見え、ロマンチックな写真が撮れると評判です。周辺は滑りやすい岩場のため、ビーチサンダルよりマリンシューズ推奨。',
    },
  },
  広島: {
    '15': {
      title: '原爆ドーム',
      description: '広島の平和の象徴。世界遺産',
      author: 'タビログ編集部',
      heroImage: GenbakuDome,
      breadcrumb: ['広島', '中区', '原爆ドーム'],
      contentTitle: '原爆ドームの基本情報',
      spots: ['平和記念公園', '資料館', '元安川'],
      imageLeft: HiroshimaMemorialPark,
      imageRight: MotoyasuRiver,
      extraImages: [HiroshimaMemorialMuseum, HiroshimaMuseumFront],
      content:
        '原爆ドーム（Atomic Bomb Dome）は、1996年にユネスコ世界文化遺産に登録された平和の象徴です。もともとは1915年に建設された広島県物産陳列館であり、1945年8月6日に原子爆弾が投下された際、爆心地の近くにあった建物です。爆風の衝撃にもかかわらず外壁の一部と鉄骨ドームが残り、現在では戦争の悲惨さを伝える象徴として保存されています。<br><br>【所在地】<br>〒730-0051 広島県広島市中区大手町1丁目10<br><br>【交通アクセス】<br>・JR広島駅から路面電車で約15分 → 「原爆ドーム前」下車すぐ<br>・バスや徒歩でもアクセス可能<br><br>【2.1 平和記念公園】<br>〒730-0811 広島県広島市中区中島町1<br>原爆で亡くなられた方々の霊を慰め、世界平和を祈念するために造られた公園です。原爆ドーム、平和の灯、原爆の子の像など、多くの慰霊碑や記念碑が集まっています。世界中から訪れる人々にとって、平和学習の場となっています。写真は平和記念公園の様子です。<br><br>【2.2 広島平和記念資料館】<br>〒730-0811 広島県広島市中区中島町1-2<br>原爆投下当時の状況や被爆者の遺品、写真資料などを展示し、核兵器の悲惨さと平和の大切さを伝える資料館です。本館と東館から構成され、戦争と核兵器廃絶の必要性を深く訴えています。<br><br>【2.3 元安川】<br>広島市中心部を流れる川で、太田川水系の一部<br>広島市の中心を流れ、平和記念公園や原爆ドームのそばを通る川です。原爆投下当時、多くの被爆者が水を求めてこの川に集まりました。現在は川沿いの遊歩道や桜の名所として親しまれており、毎年8月6日には灯ろう流しが行われ、犠牲者を追悼します。写真は元安川の美しい風景です。',
    },
    '16': {
      title: '宮島',
      description: '厳島神社で有名な美しい島',
      author: 'タビログ編集部',
      heroImage: Miyajima,
      breadcrumb: ['広島', '廿日市市', '宮島'],
      contentTitle: '宮島の基本情報',
      spots: ['厳島神社', '大鳥居', '弥山'],
      imageLeft: miyajimaItsukushima,
      imageRight: Itsukushimashrine,
      extraImages: [mesenyama, MiyajimaItsukushimaTorii],
      content:
        '宮島（Miyajima）は日本三景の一つに数えられる景勝地で、正式名称は「厳島（いつくしま）」。自然の美しさと歴史的建造物が調和した観光地であり、国内外から多くの観光客が訪れます。<br><br>【所在地】<br>広島県廿日市市宮島町<br><br>【アクセス】<br>・JR宮島口駅から徒歩5分 → 宮島口桟橋よりフェリーで約10分<br>・広島市内から電車・車で約1時間<br><br>【2.1 厳島神社】<br>〒739-0588 広島県廿日市市宮島町1-1<br>ユネスコ世界文化遺産に登録されている神社で、海上に浮かぶように建てられた朱塗りの社殿が有名です。満潮時には社殿が海に浮かんでいるように見え、幻想的な風景が広がります。写真は厳島神社の美しい社殿群です。<br><br>【2.2 大鳥居】<br>厳島神社前（海上に建つ大鳥居）<br>高さ約16mの巨大な木造鳥居で、日本三大鳥居の一つに数えられます。干潮時には歩いて近くまで行くことができ、満潮時には海に浮かぶ姿が美しく、フォトスポットとして人気です。写真は海上に浮かぶ大鳥居の雄大な姿です。<br><br>【2.3 弥山】<br>宮島中央部（標高535m）<br>宮島の最高峰で、瀬戸内海や広島市街を一望できる絶景スポットです。ロープウェーや登山道を利用して登ることができ、頂上には弥山本堂や霊火堂などの史跡もあります。「消えずの火」と呼ばれる炎は千年以上燃え続けていると伝えられています。写真は弥山からの絶景パノラマです。',
    },
    '42': {
      title: '鞆の浦',
      description: 'ジブリ映画の舞台となった美しい港町',
      author: 'タビログ編集部',
      heroImage: Tomonoura_Harbor,
      breadcrumb: ['広島', '福山市', '鞆の浦'],
      contentTitle: '鞆の浦の基本情報',
      spots: ['常夜燈', '対潮楼', '仙酔島'],
      imageLeft: tomonoura,
      imageRight: tomonourajouyato,
      extraImages: [fukugengdaizorou, sensuisima],
      content:
        '鞆の浦（Tomonoura）は瀬戸内海国立公園に位置する港町で、古くから潮待ち・風待ちの港として栄えました。江戸時代の街並みや港の風景が現在も残されており、「日本の夕陽百選」にも選ばれた美しい景観で知られています。ジブリ映画『崖の上のポニョ』の舞台イメージにもなったことで有名です。<br><br>【所在地】<br>〒720-0201 広島県福山市鞆町<br><br>【アクセス】<br>・JR福山駅からバスで約30分 → 「鞆の浦」下車<br>・広島市から車で約1時間30分<br><br>【2.1 常夜燈】<br>鞆港のシンボル（港の突端）<br>1859年に建てられた石造りの灯籠で、鞆の浦を代表するシンボルです。高さ約10mで、日本最大級の常夜灯として知られています。夕暮れ時の景色が特に美しいスポットです。写真は鞆の浦の美しい港町の風景です。<br><br>【2.2 福禅寺 対潮楼】<br>〒720-0201 広島県福山市鞆町鞆2<br>江戸時代に朝鮮通信使を迎え入れた歴史ある寺院。客殿「対潮楼」からは仙酔島や弁天島を望む絶景が広がり、「日東第一形勝（日本一の景勝地）」と称されました。写真は常夜燈の雄大な姿です。<br><br>【2.3 仙酔島】<br>鞆の浦から船で約5分<br>瀬戸内海に浮かぶ自然豊かな島で、ハイキングコースや海水浴場が整備されています。島内にはユニークな「五色岩」など自然景観が多く、リラックスできるスポットとして人気です。写真は福禅寺対潮楼と仙酔島の絶景です。',
    },
  },
  金沢: {
    '17': {
      title: '兼六園',
      description: '日本三名園の一つに数えられる大名庭園。四季折々の美しさを楽しめる。',
      author: 'タビログ編集部',
      heroImage: KanazawaHero,
      breadcrumb: ['金沢', '兼六町', '兼六園'],
      contentTitle: '兼六園の基本情報',
      spots: ['雪吊り（ゆきづり）', '霞ヶ池（かすみがいけ）', '茶屋・休憩所'],
      imageLeft: Kenrokuen,
      imageRight: KanazawaHero,
      content:
        '兼六園は、加賀藩の前田家によって江戸時代に整備された庭園で、日本三名園（偕楽園・後楽園と並ぶ）の一つに数えられています。「宏大・幽邃・人力・蒼古・水泉・眺望」の六つの景観を兼ね備えることから「兼六園」と名付けられました。春は桜、夏は新緑、秋は紅葉、冬は雪景色と、一年を通して異なる美しさを楽しむことができます。特に冬の雪吊りは金沢の風物詩として有名で、多くの観光客を魅了しています。<br><br>【2.1 雪吊り（ゆきづり）】<br><br>冬の兼六園を象徴する風景。松の枝が雪の重みで折れないように縄で支える伝統技法で、雪景色と相まって幻想的な光景を作り出します。<br><br>【2.2 霞ヶ池（かすみがいけ）】<br><br>園内最大の池で、中心には「蓬莱島」が浮かび、周囲の景観を美しく映し出します。池越しに見る石灯籠や橋は写真スポットとして人気です。<br><br>【2.3 茶屋・休憩所】<br><br>園内には伝統的な茶屋や休憩所が点在し、抹茶や和菓子を味わいながら庭園の美しさをゆっくり堪能できます。',
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
    '36': {
      title: '🏛️ 金沢21世紀美術館 × グラスリップ 聖地巡礼',
      description:
        'アニメ「グラスリップ」の舞台となった金沢21世紀美術館。現代アートと聖地巡礼を同時に楽しめるスポット。',
      author: 'アニメ巡礼編集部',
      heroImage: Museum21thCentury1,
      breadcrumb: ['石川', '金沢', '21世紀美術館', 'グラスリップ聖地巡礼'],
      contentTitle: '金沢21世紀美術館の基本情報',
      spots: ['21世紀美術館の基本情報', 'グラスリップの聖地', '現代アート展示', '周辺スポット'],
      imageLeft: Museum21thCentury2,
      imageRight: Museum21thCentury3,
      content:
        '金沢21世紀美術館は石川県金沢市にある現代美術館で、アニメ「グラスリップ」の重要な舞台として登場します。円形の建物が特徴的で、「みんなの美術館」をコンセプトに親しみやすい現代アートを展示しています。アニメでは主人公たちが青春を過ごす重要なスポットとして描かれ、ファンにとって聖地巡礼の定番コースとなっています。<br><br>【2.1 グラスリップの聖地】<br>アニメ「グラスリップ」で主人公たちが訪れる美術館として登場。美術館の外観や内部の空間がアニメに忠実に再現されており、ファンなら一目でわかる聖地スポットです。<br><br>【2.2 現代アート展示】<br>世界的なアーティストの作品から地域に根ざした現代アートまで、多様な展示を楽しめます。特に「スイミング・プール」は人気の常設展示です。<br><br>【2.3 周辺スポット】<br>兼六園や金沢城公園が徒歩圏内にあり、金沢観光の拠点として最適。伝統工芸と現代アートの融合を感じられるエリアです。',
    },
    '37': {
      title: '♨️ 湯涌温泉 × 花咲くいろは 聖地巡礼',
      description: 'アニメ「花咲くいろは」の舞台となった湯涌温泉。温泉街の風情と聖地巡礼を楽しむ癒やしの旅。',
      author: 'アニメ巡礼編集部',
      heroImage: Kanazawa_YuwakuOnsen,
      breadcrumb: ['石川', '金沢', '湯涌温泉', '花咲くいろは聖地巡礼'],
      contentTitle: '湯涌温泉の基本情報',
      spots: ['湯涌温泉の基本情報', '花咲くいろはの聖地', '温泉旅館', '湯涌稲荷神社'],
      imageLeft: Kanazawa_YuwakuOnsen,
      imageRight: Kanazawa_YuwakuOnsen,
      content:
        '湯涌温泉は金沢市の奥座敷として親しまれる温泉地で、アニメ「花咲くいろは」の舞台「湯乃鷺温泉」のモデルとなった場所です。山間の静かな温泉街には、アニメに登場する風景がそのまま残っており、ファンにとって特別な聖地となっています。温泉の癒やしと聖地巡礼を同時に楽しめる貴重なスポットです。<br><br>【2.1 花咲くいろはの聖地】<br>アニメ「花咲くいろは」で主人公・松前緒花が働く「喜翆荘」のモデルとなった旅館をはじめ、温泉街の各所がアニメに登場。実際の風景とアニメの場面を比較しながら巡ることができます。<br><br>【2.2 温泉旅館】<br>歴史ある温泉旅館では、アニメに登場するようなおもてなしの心を体験できます。山の幸を使った料理と良質な温泉で、心身ともにリフレッシュできます。<br><br>【2.3 湯涌稲荷神社】<br>温泉街を見守る神社で、アニメにも登場する重要なスポット。ファンが聖地巡礼の記念に訪れることが多く、絵馬には作品への愛が込められています。',
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

          {/* Images (hidden for 沖縄/11, 沖縄/12, 沖縄/46, 札幌/27) */}
          {!(
            (cityKey === '沖縄' && (idKey === '11' || idKey === '12' || idKey === '46')) ||
            (cityKey === '札幌' && idKey === '27')
          ) && (
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
          {/* Extra Images for Tomonoura (広島 42) */}
          {cityKey === '広島' && idKey === '42' && detail?.extraImages && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {detail.extraImages.map((image, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div
                    className="h-64 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                </div>
              ))}
            </div>
          )}

          {/* Extra Images for Miyajima (広島 16) */}
          {cityKey === '広島' && idKey === '16' && detail?.extraImages && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {detail.extraImages.map((image, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div
                    className="h-64 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                </div>
              ))}
            </div>
          )}

          {/* Extra Images for Hiroshima Atomic Bomb Dome (広島 15) */}
          {cityKey === '広島' && idKey === '15' && detail?.extraImages && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {detail.extraImages.map((image, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div
                    className="h-64 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                </div>
              ))}
            </div>
          )}

          {/* Extra Images for Akihabara (Tokyo 33) */}
          {cityKey === '東京' && idKey === '33' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${akibaatre})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${akibayodobasi})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Otaru Canal (Sapporo 38) */}
          {cityKey === '札幌' && idKey === '38' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${otaruletao})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${otaruletaocake})` }}
                ></div>
              </div>
            </div>
          )}
          {/* Extra Images for Tanukikoji Shopping Street (Sapporo 29) */}
          {cityKey === '札幌' && idKey === '29' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${tanukisoupcurry})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${tanukikitaichiramen})` }}
                ></div>
              </div>
            </div>
          )}
          {/* Extra Images for Hokkaido University (Sapporo 28) */}
          {cityKey === '札幌' && idKey === '28' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${hokudaimilkcookie})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${hokudaimuseum})` }}
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

          {/* Extra Images for Shuri Castle */}
          {cityKey === '沖縄' && idKey === '11' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Shurijo})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${Shurijokaji})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${sonokoutaki})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${syureinomon})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Okinawa Churaumi Aquarium */}
          {cityKey === '沖縄' && idKey === '12' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${okinawazinbe})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${okisangou})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${tsuraumiiruka})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${tsuraumimap})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Odori Park */}
          {cityKey === '札幌' && idKey === '8' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${sapporofountain})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${sapporofountain2})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Sapporo Beer Museum */}
          {cityKey === '札幌' && idKey === '26' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${GenghisKhanBeefBeer})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${GenghisKhan})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Kokusai Street */}
          {cityKey === '沖縄' && idKey === '46' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${okimahoroba})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${okinawaliquor})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${steakhouseoki})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${okisteakhouse})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Maruyama Zoo (Sapporo 27) - 2x2 grid */}
          {cityKey === '札幌' && idKey === '27' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${maruyamakodomo})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${maruyamamap})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${maruyamapolarbear})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${maruyamatiger})` }}
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
