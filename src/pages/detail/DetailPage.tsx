import React from 'react';
import { useParams } from 'react-router-dom';
// import Header from '../../components/layout/Header';
import Kinkakuji from '../../assets/Kinkakuji.jpg';
import OsakaCastle from '../../assets/OsakaCastle.jpg';
import Sapporo from '../../assets/Sapporo.jpg';
import OkinawaResort from '../../assets/OkinawaResort.jpg';
import theritzcarlton from '../../assets/theritzcarlton.jpg';
import hotelaribia from '../../assets/hotelaribia.jpg';
import anaintercontinental from '../../assets/anaintercontinental.jpg';
import aribiabikini from '../../assets/aribiabikini.jpg';
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
import fukushimono from '../../assets/fukushimono.jpg';
import gokuracastle from '../../assets/gokuracastle.jpg';
import mojikoretro from '../../assets/mojikoretro.jpg';
import shimonoseki from '../../assets/shimonoseki.jpg';
import nagoyawcs1 from '../../assets/nagoyawcs1.jpg';
import nagoyawcs2 from '../../assets/nagoyawcs2.jpg';
import KiminoNamaewa from '../../assets/KiminoNamaewa.jpg';
import KiminoNamaewaSuga from '../../assets/KiminoNamaewaSuga.jpg';
import Shibakoen from '../../assets/Shibakoen.jpg';
import ShinjukuPolice from '../../assets/ShinjukuPolice.jpg';
import Aogashima from '../../assets/Aogashima.jpg';
import fukugourmet from '../../assets/fukugourmet.jpg';
import fukuanimate from '../../assets/fukuanimate.jpg';
import fukuanimatemap from '../../assets/fukuanimatemap.jpg';
import fukumandafigure from '../../assets/fukumandafigure.jpg';
import fukumandarake from '../../assets/fukumandarake.jpg';
import fukutenshin from '../../assets/fukutenshin.jpg';
import fukubungomori from '../../assets/fukubungomori.jpg';
import suzume from '../../assets/suzume.jpg';
import suzumetobira from '../../assets/suzumetobira.jpg';
import suzumegoods from '../../assets/suzumegoods.jpg';
import fukuichiran from '../../assets/fukuichiran.jpg';
import fukumizutaki from '../../assets/fukumizutaki.jpg';
import fukutourimon from '../../assets/fukutourimon.jpg';
import tenkinoko from '../../assets/tenkinoko.jpg';
import denkiseibumc from '../../assets/denkiseibumc.jpg';
import odaiba from '../../assets/odaiba.jpg';
import Digimon4 from '../../assets/Digimon4.jpg';
import OdaibaDigimon from '../../assets/OdaibaDigimon.jpg';
import Digimon2 from '../../assets/Digimon2.jpg';
import HikarigaokaDigimon from '../../assets/HikarigaokaDigimon.jpg';
import jiburiPost from '../../assets/jiburiPost.jpg';
import jiburimap from '../../assets/jiburimap.jpg';
import jiburimori from '../../assets/jiburimori.jpg';
import jiburi4 from '../../assets/jiburi4.jpg';
import hakoneonsen from '../../assets/hakoneonsen.jpg';
import nikkoonsen from '../../assets/nikkoonsen.jpg';
import NagoyaLego from '../../assets/NagoyaLego.jpg';
import LegoAttraction from '../../assets/LegoAttraction.jpg';
import LegoTaiken from '../../assets/LegoTaiken.jpg';
import LegoBoat from '../../assets/LegoBoat.jpg';
import houkistar from '../../assets/houkistar.jpg';
import hukugiya from '../../assets/hukugiya.jpg';
import boolseal from '../../assets/boolseal.jpg';
import sennichi from '../../assets/sennichi.jpg';
import okinawasangyomatsuri from '../../assets/okinawasangyomatsuri.jpg';
import nahahari from '../../assets/nahahari.jpg';
import nahaotsunahiki from '../../assets/nahaotsunahiki.jpg';
import okinawaeisamatsuri from '../../assets/okinawaeisamatsuri.jpg';
import okinawacruising from '../../assets/okinawacruising.jpg';
import okinawanohumanisland from '../../assets/okinawanohumanisland.jpg';
import okinawasnokling from '../../assets/okinawasnokling.jpg';
import okinawasailing from '../../assets/okinawasailing.jpg';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // 旅行計画の詳細データ
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
      image: fukugourmet,
      heroImage: fukugourmet,
      breadcrumb: ['福岡', '中洲屋台', '天神'],
      contentTitle: '福岡グルメの基本情報',
      spots: ['博多とんこつラーメン', '水炊き', '博多通りもん'],
      content:
        '福岡は日本を代表するグルメの聖地です。博多とんこつラーメン、水炊き、博多通りもんなど、九州の豊かな食文化を堪能できます。中洲の屋台では本場の味を、天神では最新のショッピングを楽しめます。コンパクトな街なので徒歩で回れるのも魅力です。<br><br>【2.1 博多とんこつラーメン】<br>福岡の代名詞ともいえる博多とんこつラーメン。豚骨を長時間煮込んで作る濃厚なスープと細麺が特徴で、日本全国で愛される味です。一風堂（中央区大名）や一蘭（博多区中洲）など、日本最大のラーメンチェーンの本店も福岡にあります。中洲の屋台では本場の味を気軽に楽しめ、飲酒後のシメとしても人気です。麺の硬さやスープの濃さを選べる「替え玉」文化も博多ラーメンの魅力の一つです。おすすめ店舗：一蘭本店（博多区中洲）、一風堂本店（中央区大名）、元祖長浜らーめん（博多区長浜）。<br><br>【2.2 水炊き】<br>福岡の伝統的な鍋料理で、鶏の白いスープで野菜や鶏肉を煮込んだ料理です。あっさりとした味わいで、家族連れにも人気です。最後にご飯を入れて雑炊にしたり、うどんを入れて食べるのが一般的です。博多の老舗料亭や専門店で本格的な水炊きを楽しめます。おすすめ店舗：水炊き専門店「博多水炊き 博多華味鳥」（中央区大名）、「博多水炊き 博多華味鳥 本店」（博多区中洲）、「博多水炊き 博多華味鳥 天神店」（中央区天神）。<br><br>【2.3 博多通りもん】<br>福岡を代表する和菓子で、福岡空港でも販売されている人気のお土産です。ふわふわのスポンジケーキにクリームが入った洋風和菓子で、福岡の味として親しまれています。観光客にも人気で、福岡の思い出として持ち帰る方も多いです。おすすめ店舗：博多通りもん本店（博多区博多駅前）、福岡空港店、天神地下街店、博多駅構内店などで購入可能です。',
    },
    5: {
      title: '札幌・小樽雪あかりの路！ロマンチックな冬祭り',
      description:
        '小樽運河の雪あかりと札幌雪まつりを楽しむ冬の北海道旅。ロマンチックな冬の夜を二人で過ごす特別な時間。',
      author: 'ロマンチスト',
      image: SapporoTower,
      heroImage: SapporoTower,
      breadcrumb: ['札幌', '小樽', '雪あかりの路'],
      contentTitle: '札幌・小樽冬祭りの基本情報',
      spots: ['小樽雪あかりの路', '札幌雪まつり', '小樽運河'],
      content:
        '北海道の冬を代表する美しい祭りを楽しむロマンチックな旅。小樽運河の雪あかりと札幌雪まつりの雪像を巡り、冬の北海道の魅力を満喫します。<br><br>【2.1 小樽雪あかりの路】<br>小樽の冬を彩る美しい祭りで、毎年2月に開催されます。小樽運河沿いに約10,000個の雪あかりが灯され、幻想的な光の世界が広がります。運河沿いの石造り倉庫群がライトアップされ、明治・大正時代の面影を残す街並みがより一層美しく見えます。期間中は小樽駅から運河まで歩行者天国となり、多くの観光客で賑わいます。運河クルーズも運行され、水上から雪あかりを楽しむこともできます。おすすめ時間帯は日没後（17:00頃）で、青い空と雪あかりのコントラストが美しいです。<br><br>【2.2 札幌雪まつり】<br>世界最大級の雪まつりで、毎年2月に札幌市内で開催されます。大通公園を中心に巨大な雪像と氷像が展示され、夜にはライトアップされて幻想的な雰囲気を演出します。メイン会場の大通公園では、高さ15mを超える巨大雪像や、テレビドラマやアニメをモチーフにした雪像が並びます。すすきの会場では氷像が中心で、より繊細で美しい作品を楽しめます。期間中は国内外から200万人以上の観光客が訪れ、札幌の街全体が祭り一色になります。<br><br>【2.3 小樽運河】<br>小樽のシンボル的存在で、明治時代に建設された歴史ある運河です。全長1,140m、幅20-40mの運河沿いには石造りの倉庫群が立ち並び、レトロな雰囲気を醸し出しています。運河沿いの散策路「小樽運河プラザ」では、運河の歴史や小樽の発展について学べます。夜になると運河沿いのガス灯が灯り、昼間とは違ったロマンチックな雰囲気を演出します。運河クルーズでは、水上から小樽の街並みを眺めることができ、特に雪あかりの路期間中は特別なクルーズが運行されます。',
    },
    6: {
      title: '絶景ビーチリゾート!沖縄でのんびり休暇',
      description:
        '沖縄の有名なリゾートホテルで過ごす贅沢な休暇。エメラルドグリーンの海と白い砂浜で、最高のリラクゼーションを体験。',
      author: 'ソヒョン',
      image: OkinawaResort,
      heroImage: OkinawaResort,
      breadcrumb: ['沖縄', 'リゾートホテル', 'プライベートビーチ'],
      contentTitle: '沖縄リゾートの基本情報',
      spots: ['ザ・リッツ・カールトン沖縄', 'ホテル日航アリビラ', 'ANAインターコンチネンタル万座ビーチ'],
      content:
        '沖縄の有名なリゾートホテルで過ごす贅沢な休暇プラン。世界レベルの高級リゾートから、沖縄の自然を満喫できるリゾートまで、様々な選択肢があります。エメラルドグリーンの海と白い砂浜で、心と体を完全にリフレッシュできます。<br><br>【2.1 ザ・リッツ・カールトン沖縄】<br>沖縄本島中部の恩納村にある最高級リゾートホテル。プライベートビーチ「オーシャンビュー」を有し、エメラルドグリーンの美しい海を独占的に楽しめます。客室はすべてオーシャンビューで、朝は美しい日の出を、夜は満天の星空を楽しめます。ホテル内には7つのレストランがあり、沖縄の新鮮な海の幸や琉球料理、フレンチ、イタリアンなど多様な料理を味わえます。スパ「ザ・リッツ・カールトン・スパ」では、沖縄の自然素材を使ったトリートメントを体験できます。また、ゴルフ場も完備されており、美しい海を眺めながらゴルフを楽しめます。<br><br>💰 料金：1泊2食付き 80,000円〜（2名1室）<br>⭐ 評価：4.8/5.0（Booking.com）<br>🌐 公式サイト：https://www.ritzcarlton.com/ja/hotels/japan/okinawa<br><br>【2.2 ホテル日航アリビラ】<br>沖縄本島中部の読谷村にある人気リゾートホテル。プライベートビーチ「アリビラビーチ」は、透明度の高い海と白い砂浜が魅力です。客室からは美しいエメラルドグリーンの海が一望でき、特に夕日の時間帯は幻想的な景色を楽しめます。ホテル内には複数のレストランがあり、沖縄の郷土料理やフレンチ、中華料理など豊富な選択肢があります。スパ「アリビラスパ」では、沖縄の海藻やシークワーサーを使ったボディトリートメントを体験できます。また、プールサイドバーでは沖縄の泡盛やトロピカルカクテルを楽しみながら、リラックスした時間を過ごせます。<br><br>💰 料金：1泊2食付き 45,000円〜（2名1室）<br>⭐ 評価：4.5/5.0（Booking.com）<br>🌐 公式サイト：https://www.nikkoyomitan.com/<br><br>【2.3 ANAインターコンチネンタル万座ビーチ】<br>沖縄本島中部の恩納村にある高級リゾートホテル。万座毛の近くに位置し、美しいエメラルドグリーンの海と白い砂浜を有しています。客室はすべてオーシャンビューで、朝は美しい日の出を、夜は満天の星空を楽しめます。ホテル内には6つのレストランがあり、沖縄の新鮮な海の幸や琉球料理、フレンチ、イタリアンなど多様な料理を味わえます。スパ「ANAインターコンチネンタル・スパ」では、沖縄の自然素材を使ったトリートメントを体験できます。また、プールサイドバーやラウンジでは、沖縄の泡盛やトロピカルカクテルを楽しみながら、リラックスした時間を過ごせます。<br><br>💰 料金：1泊2食付き 65,000円〜（2名1室）<br>⭐ 評価：4.6/5.0（Booking.com）<br>🌐 公式サイト：https://www.anaintercontinental-manza.jp/',
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
    18: {
      title: '天神で楽しむ福岡のオタク文化とショッピング',
      description: '天神の地下街から地上まで、オタク文化とショッピングを満喫する旅。',
      author: 'オタク好き',
      image: fukutenshin,
      heroImage: fukutenshin,
      breadcrumb: ['福岡', '天神', 'オタク文化', 'ショッピング'],
      contentTitle: '天神オタク文化の基本情報',
      spots: ['天神の基本情報', 'オタクショップ巡り', 'アニメイト巡り', 'マンダラケの魅力'],
      content:
        '天神は福岡最大の繁華街で、ハカタと並ぶ福岡の二大中心地です。西鉄の本社がある天神は、西鉄が力を入れて育てた商業地区で、鉄道駅とバスターミナル、ショッピングモール、百貨店などが集まる複合商業施設の規模が非常に大きく、その下の地下街も非常に広大です。夏の福岡は文字通り地獄のような暑さなので、天神を歩くときは地下を利用するのがおすすめです。<br><br>【2.1 天神の基本情報】<br>天神は福岡の中心部に位置し、西鉄天神大牟田線の天神駅を中心とした商業地区です。西鉄の本社があることからも分かるように、西鉄が長年かけて育て上げた商業地区で、西鉄のテリトリーと言っても過言ではありません。天神からは太宰府や柳川などの近郊観光地へのアクセスも良く、観光の拠点としても重要な役割を果たしています。天神の商業施設は地上と地下の両方に広がっており、特に地下街は非常に広大で、夏の暑い時期には地下を利用して移動するのが一般的です。<br><br>【2.2 オタクショップ巡り】<br>天神には福岡のオタク関連ショップがほぼ全て集まっており、マンダラケやアニメイトが代表的な店舗です。特にアニメイトは非常に変わった場所に位置しているため注意が必要です。その他にもラシンバン、メロンブックスなど、すべて天神にあります。北九州のアルアルシティのように一箇所に集まっているわけではなく、すべて散らばっているため、すべて回ろうとすると半日はかかります。また、変わったメイド関連の店舗もあり、明太子パルフェを売る店やマッサージをしてくれる店などがカルト的に有名です。その他にもメイドカフェが存在し、天神にあります。福岡でオタク旅行をする場合は天神で行うことが多いですが、北九州の小倉駅周辺でもできるので、オタク旅行をする際に不足があれば北九州でも楽しめます。<br><br>【2.3 アニメイト巡り】<br>天神のアニメイトは福岡のオタク文化の中心地として、多くのアニメファンが訪れる人気スポットです。アニメイト天神店は非常に変わった場所に位置しており、初めて訪れる際は注意が必要です。店内には最新のアニメグッズ、フィギュア、CD、DVD、漫画、小説などが豊富に揃っており、アニメファンにとってはまさにパラダイスです。限定商品やイベントグッズも多数取り扱っており、アニメイトでしか手に入らない商品も多くあります。店内は常に最新のアニメ情報で溢れており、アニメファン同士の交流の場としても機能しています。<br><br>【2.4 マンダラケの魅力】<br>天神のマンダラケは中古フィギュアとアニメグッズの専門店として、全国のオタクから愛される名店です。マンダラケ天神店では、希少なフィギュアや限定版グッズ、中古品まで幅広く取り扱っており、コレクターにとっては宝の山のような存在です。特に中古フィギュアの品揃えは圧倒的で、長年探していた商品が見つかることも珍しくありません。マンダラケの魅力は、その豊富な品揃えと専門的な知識を持つスタッフにあります。フィギュアの状態や価値について詳しく説明してくれるため、初心者でも安心して購入できます。また、マンダラケは全国チェーン店なので、天神店で見つからなかった商品も他の店舗から取り寄せることが可能です。',
    },
    19: {
      title: 'すずめの戸締まり聖地巡礼！福岡の神秘的な旅',
      description: 'アニメ「すずめの戸締まり」の舞台となった福岡の聖地を巡る旅。',
      author: 'アニメファン',
      image: suzumetobira,
      heroImage: suzumetobira,
      breadcrumb: ['福岡', 'すずめの戸締まり', '聖地巡礼', 'アニメの世界'],
      contentTitle: 'すずめの戸締まり聖地巡礼の基本情報',
      spots: ['すずめの戸締まり紹介', 'アニメの世界観', '豊後森駅'],
      content:
        '2022年に公開された新海誠監督のアニメーション映画「すずめの戸締まり」は、福岡を舞台にした壮大なファンタジー作品です。主人公の岩戸すずめが日本各地の「後門」を閉じる旅を通じて、災害と向き合いながら成長していく物語が描かれています。福岡は物語の重要な舞台として登場し、多くのファンが聖地巡礼に訪れています。<br><br>【2.1 すずめの戸締まり紹介】<br>「すずめの戸締まり」は新海誠監督が手がけた最新作で、東日本大震災をテーマにした感動的な作品です。主人公の岩戸すずめは、九州の小さな町に住む17歳の女子高校生で、ある日不思議な猫の「だいじん」と出会い、日本各地の「後門」を閉じる旅に出ることになります。福岡は物語の重要な舞台として登場し、すずめの成長と旅の出発点として描かれています。アニメの美しい映像と福岡の実在の風景が融合した、特別な魅力を持つ作品です。<br><br>【2.2 アニメの世界観】<br>「すずめの戸締まり」は災害と向き合うことの大切さをテーマにした作品で、新海誠監督らしい美しい映像と感動的なストーリーが特徴です。福岡を舞台とした部分では、日常の美しさと災害の恐ろしさが対比的に描かれており、観る者に深い印象を与えます。アニメの中で描かれた福岡の風景を実際に訪れることで、作品の世界観をより深く体験することができます。特に福岡の自然と街並みの美しさは、アニメの世界観を体現する特別な魅力を持っています。<br><br>【2.3 豊後森駅】<br>豊後森駅は「すずめの戸締まり」の重要な舞台として登場する大分県の駅です。アニメの中で印象的に描かれた豊後森駅は、すずめの旅の重要な通過点として描かれており、多くのファンが聖地巡礼に訪れています。実際の豊後森駅を訪れることで、アニメの中で描かれた美しい風景と現実の駅の雰囲気を比較しながら楽しむことができます。豊後森駅周辺の自然豊かな風景もアニメの世界観を体現しており、聖地巡礼の魅力をより深く感じることができる特別な場所です。',
    },
    20: {
      title: '九州から本州へ！福岡・小倉・門司・下関の歴史旅',
      description: '福岡から小倉、門司港、下関を巡る歴史とグルメの旅。関門海峡を越えて本州と九州を結ぶ特別な体験を。',
      author: '歴史好き',
      type: '二人旅',
      city: '福岡',
      image: HakataCity,
      heroImage: HakataCity,
      breadcrumb: ['福岡', '小倉', '門司港', '下関', '歴史旅'],
      contentTitle: '福岡・小倉・門司・下関の歴史旅の基本情報',
      spots: ['小倉城と歴史', '門司港レトロ', '下関と関門海峡', '福岡から下関への交通手段'],
      content:
        '福岡から小倉、門司港、下関を巡る歴史とグルメの旅は、九州と本州を結ぶ関門海峡の魅力を満喫できる特別なプランです。小倉の歴史、門司港のレトロな雰囲気、そして下関の海鮮料理まで、各地の特色を楽しみながら歴史を感じる旅ができます。<br><br>【2.1 小倉城と歴史】<br>小倉は江戸時代から重要な商業都市として栄えた歴史ある街です。小倉城は細川忠興によって築かれた名城で、現在は復元された天守閣が美しい姿を見せています。城下町の雰囲気を残す街並みを散策しながら、小倉の歴史と文化を感じることができます。小倉祇園太鼓や小倉織など、伝統的な文化も体験でき、歴史好きにはたまらない魅力があります。<br><br>【2.2 門司港レトロ】<br>門司港は明治時代から大正時代にかけて国際貿易港として栄えた歴史ある港町です。レトロな建物が並ぶ門司港レトロ地区では、大正ロマンの雰囲気を感じながら散策を楽しめます。門司港駅の赤レンガ駅舎や旧門司税関など、歴史的な建物が美しく保存されており、タイムスリップしたような感覚を味わえます。門司港名物の焼きカレーも必食です。<br><br>【2.3 下関と関門海峡】<br>下関は本州の最西端に位置し、関門海峡を挟んで九州と向かい合う歴史的な街です。壇ノ浦の戦いで知られる歴史の舞台であり、関門海峡の美しい景色を楽しめます。下関名物のふぐ料理を味わいながら、海峡を渡る船の往来を見ていると、本州と九州を結ぶ重要な交通路としての歴史を感じることができます。関門トンネル人道を歩いて海峡を渡る体験も、この旅の特別な思い出になります。<br><br>【2.4 福岡から下関への交通手段】<br>福岡から下関までは「ふくふく号」高速バスが最も便利な交通手段です。西鉄グループが運営するこのバスは、博多バスターミナル（3階31番）と西鉄天神高速バスターミナル（3階1番）から出発。片道1,700円、予約不要で、1日12往復（計24便）。所要約1時間40分、SUNQパスも利用可能で経済的です。',
    },
    21: {
      title: '沖縄グルメ満喫！国際通りスイーツ＆冷菓めぐり',
      description: '国際通りを中心に沖縄の人気スイーツを食べ歩き。ほうき星、ふくぎや、ブルーシールを楽しむ甘い旅。',
      author: 'グルメ好き',
      image: boolseal,
      heroImage: boolseal,
      breadcrumb: ['沖縄', '那覇', '国際通り', 'スイーツ'],
      contentTitle: '沖縄グルメ（スイーツ）の基本情報',
      spots: [
        'ほうき星（黒糖カヌレ）',
        'ふくぎや（バウムクーヘン）',
        'ブルーシール（アイスクリーム）',
        '千日（氷ぜんざい・かき氷）',
      ],
      content:
        '沖縄には黒糖や南国フルーツを活かした絶品スイーツが数多くあります。那覇・国際通り周辺には、食べ歩きにぴったりの人気店が集まっています。<br><br>【2.1 ほうき星（黒糖カヌレ）】<br>沖縄の黒糖を使ったしっとり濃厚なカヌレが看板商品。外はカリッ、中はむっちりの理想的な食感で、コーヒーとの相性も抜群。見た目も可愛らしく、差し入れにも最適です。<br><br>【2.2 ふくぎや（バウムクーヘン）】<br>沖縄の素材にこだわったしっとり系バウム。層ごとの焼き色が美しく、カットすると広がる香りがたまりません。手土産の定番として地元でも愛されています。<br><br>【2.3 ブルーシール（アイスクリーム）】<br>1948年創業の沖縄アイスブランド。塩ちんすこう、紅いも、シークヮーサーなど沖縄らしいフレーバーが充実。散策のクールダウンにもおすすめ。<br><br>【2.4 千日（氷ぜんざい・かき氷）】<br>那覇・旭橋駅から徒歩圏、久米大通り沿いに佇む老舗の甘味処。名物は金時豆のぜんざいにふわふわの氷を山盛りにした「氷ぜんざい」。きめ細やかに削られた氷は口どけが驚くほど軽く、黒糖の自然な甘みと金時豆の風味が優しく広がります。昔ながらの涼やかな暖簾がかかる店内はどこか懐かしく、夏はもちろん通年で地元客と観光客に愛される一杯です。暑い沖縄散策のクールダウンに最適。<br>出典：<a href="https://tabelog.com/matome/25376/" target="_blank" rel="noreferrer">食べログまとめ 沖縄県の絶品スイーツ</a>',
    },
    24: {
      title: 'オホーツク流氷体験！札幌→網走 1〜2日旅',
      description:
        '札幌から特急で網走へ。流氷砕氷船クルーズや季節列車で北浜駅へ向かい、オホーツク海の絶景を満喫する冬のモデルコース。',
      author: '旅ログ編集部',
      image: Sapporo,
      heroImage: SapporoTower,
      breadcrumb: ['札幌', '網走', 'オホーツク海', '流氷体験'],
      contentTitle: '札幌→網走・流氷体験 1〜2日モデルコース',
      spots: ['Day1 札幌→網走（特急移動）', '流氷砕氷船クルーズ', 'ノロッコ号で北浜駅へ', 'Day2 網走散策＆札幌へ'],
      content:
        '道東・網走の流氷を体感する冬のショートトリップ。鉄道移動と季節列車、オホーツク海のビュースポットを効率よく巡ります。<br><br>【Day1｜札幌→網走（特急）】<br>早朝に札幌駅発の特急で網走へ。例：札幌7:55発→網走13:00前後着のパターン（時刻は季節で変動）。車内では売店/ラウンジを活用しつつ、石北本線の冬景色を楽しみましょう。<br><br>【流氷砕氷船クルーズ】<br>網走港発の砕氷船で約60分のクルーズ。運航枠は日中中心で、当日満席になりやすいので事前予約推奨。防寒具（手袋・ネックウォーマー・滑りにくい靴）必携。風向きにより流氷接岸が弱い日もあるため、最新運航情報を確認してから港へ。<br><br>【ノロッコ号で北浜駅へ】<br>流氷シーズンに運転される季節列車（流氷物語号/ノロッコ相当）で海沿いをのんびり移動。下車観光スポットは「北浜駅」がおすすめ。駅舎内展望スペースや線路脇から、オホーツク海と流氷のコントラストを一望できます。<br><br>【Day2｜網走散策→札幌へ】<br>午前は天都山・流氷展望台など市内をショート散策。午後の特急で札幌へ戻れば1泊2日行程が完結。日帰りの場合は砕氷船の便と復路特急の接続に留意を。<br><br>【チケット/予約・予算の目安】<br>・札幌⇄網走 特急指定往復：時期/割引で変動（学割・早割/フリーパス検討）<br>・砕氷船クルーズ：大人2,500〜3,500円前後（便/シーズンにより変動）<br>・季節列車指定席：数百円〜（乗車券＋指定席券）<br>・宿泊：網走駅/港周辺のビジネス/旅館で7,000〜12,000円目安（冬季）<br><br>【持ち物/安全】<br>防寒着（−10℃想定の中間着/アウター）、滑り止め付き靴、携帯カイロ、予備手袋。天候急変/運休時は代替（市内バス/タクシー）を検討。<br><br>参考：流氷と道東鉄道旅の体験談や移動イメージ（行程着想）<a href="https://m.blog.naver.com/dbwjd6162/220320957875" target="_blank" rel="noreferrer">ブログ記事</a>。',
    },
    25: {
      title: '沖縄ヨットツアー！無人島クルーズとサンセット',
      description: 'ヨットで珊瑚の海をクルーズし、無人島に上陸。最後はサンセットで締める海時間のご褒美旅。',
      author: 'マリン派',
      image: okinawasailing,
      heroImage: okinawasnokling,
      breadcrumb: ['沖縄', '那覇', 'ヨットツアー'],
      contentTitle: 'ヨットツアーの基本情報',
      spots: ['クルージング', '無人島上陸', 'スノーケリング', 'サンセットセーリング'],
      content:
        '碧い珊瑚の海をヨットで滑るように進む非日常の時間。風を感じながら甲板で寛ぎ、透明度の高い海域では錨泊して海遊び。<br><br>【2.1 クルージング】<br>出発は那覇マリーナ／北谷（ちゃたん）マリーナ発が一般的。半日（3〜4時間）／1日（6〜7時間）プランがあり、チャータープランならプライベート空間でコースの融通が利きます。<br>・参考価格：<br>— 乗合（半日）8,000〜15,000円/人（季節・艇種により変動）<br>— チャーター（半日）60,000〜120,000円/艇、（1日）120,000〜200,000円/艇 目安<br>・主なオプション：ドローン撮影、軽食・ドリンク手配、写真サービス ほか<br>・主な運営：那覇／北谷のマリン事業者（出航地・料金・装備は事業者により異なります）<br><br>【2.2 無人島上陸】<br>潮位・風向き・当日のコンディションが良ければ、近海の砂洲や無人島（サンドバー）へ上陸。白砂とコバルトブルーのコントラストは圧巻です。上陸中は貝拾い・ビーチフォト・浜辺チルなど自由に。<br>・装備：ビーチサンダル、帽子、ラッシュガード推奨／リーフは素足厳禁<br>・注意：自然保護のためゴミは必ず持ち帰り、動植物の持ち出し不可<br><br>【2.3 スノーケリング】<br>サンゴ礁のポイントで停泊し、熱帯魚と触れ合う時間。インストラクター同行の安全ブリーフィング後にエントリーします。泳ぎが苦手な方にはフロートやライフジャケットを提供。<br>・参考価格：器材レンタル込の乗合プランが一般的（追加2,000〜4,000円/人の事業者もあり）<br>・装備：マスク／シュノーケル／フィン／ライフジャケット（事業者レンタルあり）<br>・安全：気象急変時はコース変更・中止あり。アルコール摂取直後の遊泳は不可<br><br>【2.4 サンセットセーリング】<br>復路は水平線に沈む夕日を追いかけるようにクルーズ。マジックアワーの空色と海面のグラデーションは格別です。軽食をつまみながらの"ちょい贅沢"な時間。<br>・参考価格：サンセットのみのショートクルーズ4,000〜8,000円/人 目安<br>・アルコール持込：多くの事業者で「適量の持込可（缶・樹脂容器推奨／ガラス瓶NG）」が一般的。船長・クルーは飲酒不可／遊泳前後の過度な飲酒は安全上禁止<br>・音量マナー：他船・マリーナ規約により大音量スピーカーは不可の場合あり（静かな海を楽しむ趣旨が基本）<br><br>【予約・参加のコツ】<br>・繁忙期（GW／夏休み／連休）は満席になりやすいため早めの予約推奨。<br>・集合場所（那覇／北谷）までの移動はタクシー／レンタカーが便利。<br>・酔い止め、日焼け止め、羽織り物（船上は風で体感温度が下がります）を準備すると快適です。',
    },
    33: {
      title: '北海道スキー場TOP3！ニセコ・ルスツ・富良野',
      description:
        '世界が惚れ込む北海道の粉雪。札幌からアクセスしやすい3大スキーリゾートを比較し、初級〜上級まで満足の滑走計画を提案。',
      author: 'スノー派',
      image: Sapporo,
      heroImage: SapporoTime,
      breadcrumb: ['札幌', 'ウィンター', 'スキー'],
      contentTitle: '北海道の人気スキー場トップ3の基本情報',
      spots: ['ニセコユナイテッド', 'ルスツリゾート', '富良野スキー場', '交通とレンタルのコツ'],
      content:
        '【2.1 ニセコユナイテッド】<br>世界屈指のパウダー天国。広大な4エリア連結でロングランが魅力。非圧雪ゾーンやツリーラン豊富。英語対応店が多く初訪でも安心。<br>・標高/コース：標高1,308m、全コース約100以上（4山合算）<br>・特徴：ドライパウダー、外資系ホテル/レストラン充実、温泉多数<br>・対象：中〜上級者/バックカントリー志向に特に◎<br><br>【2.2 ルスツリゾート】<br>整備の行き届いたワイドバーンと多彩なゴンドラ/リフト構成。家族連れに優しい動線とキッズスクール、ナイターも快適。<br>・標高/コース：標高994m、全37コース（3山）<br>・特徴：幅広コース、ホテル直結、アフターは屋内施設充実<br>・対象：初級〜中級/ファミリー/学旅に◎<br><br>【2.3 富良野スキー場】<br>旭岳・十勝岳を望む絶景。適度に締まった雪質でカービングが気持ち良い。ドラマ「北の国から」ゆかりの街散策も楽しい。<br>・標高/コース：標高1,074m、全28コース<br>・特徴：景観良好、基礎練に向くレイアウト、街グルメが豊富<br>・対象：初級〜上級/オールラウンドに◎<br><br>【2.4 交通とレンタルのコツ】<br>・アクセス：札幌/新千歳→ニセコ（車2.5h/バス直通）、→ルスツ（車2h/バス直通）、→富良野（車2.5h/JR＋バス）<br>・レンタル：各スキー場の公式レンタル/街中ショップ事前予約が便利（ブーツはハーフサイズ刻み推奨）<br>・持ち物：ゴーグル予備レンズ（雪/晴切替）、ネックウォーマー、予備グローブ、プロテクター（初心者）<br>・安全：凍結路面の車移動はスタッドレス必須。降雪時は無理せず公共交通へ切替推奨。',
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
          {planId !== 4 &&
            planId !== 6 &&
            planId !== 19 &&
            planId !== 20 &&
            planId !== 21 &&
            planId !== 24 &&
            planId !== 25 && (
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
                          : planId === 5
                          ? SapporoTime
                          : planId === 6
                          ? OkinawaResort
                          : planId === 14
                          ? KiminoNamaewa
                          : planId === 18
                          ? fukuanimate
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
                          : planId === 5
                          ? SapporoTower
                          : planId === 6
                          ? OkinawaResort
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
                          : planId === 18
                          ? fukumandarake
                          : plan.heroImage
                      })`,
                    }}
                  ></div>
                </div>
              </div>
            )}

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

          {/* Extra Images for Fukuoka Gourmet Tour */}
          {planId === 4 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${fukuichiran})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${fukumizutaki})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${fukutourimon})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${fukugourmet})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Tenjin Otaku Culture */}
          {planId === 18 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${fukuanimatemap})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${fukumandafigure})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Suzume no Tojimari */}
          {planId === 19 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${suzume})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${suzumetobira})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${fukubungomori})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${suzumegoods})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Fukuoka-Kokura-Moji-Shimonoseki History Tour */}
          {planId === 20 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${fukushimono})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${gokuracastle})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${mojikoretro})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${shimonoseki})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Okinawa Resort */}
          {planId === 6 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${theritzcarlton})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${hotelaribia})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${anaintercontinental})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${aribiabikini})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Okinawa Gourmet (Sweets) */}
          {planId === 21 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${houkistar})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${hukugiya})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${boolseal})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${sennichi})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Naha Festivals */}
          {planId === 24 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${okinawasangyomatsuri})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${nahahari})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${nahaotsunahiki})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${okinawaeisamatsuri})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Extra Images for Okinawa Yacht Tour */}
          {planId === 25 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${okinawacruising})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${okinawanohumanisland})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${okinawasnokling})` }}
                ></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${okinawasailing})` }}
                ></div>
              </div>
            </div>
          )}

          {/* Plan Rich Content */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="text-gray-800 leading-7" dangerouslySetInnerHTML={{ __html: plan.content }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
