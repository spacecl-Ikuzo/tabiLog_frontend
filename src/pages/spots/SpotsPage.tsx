import { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MainBackGround from '../../assets/MainBackGround.jpg';
import Tokyo from '../../assets/Tokyo.jpg';
import OsakaCastle from '../../assets/OsakaCastle.jpg';
import Kinkakuji from '../../assets/Kinkakuji.jpg';
import Sapporo from '../../assets/Sapporo.jpg';
import fukuokahutami from '../../assets/fukuokahutami.jpg';
import fukugourmet from '../../assets/fukugourmet.jpg';
import fukuanimate from '../../assets/fukuanimate.jpg';
import fukushimono from '../../assets/fukushimono.jpg';
import suzume from '../../assets/suzume.jpg';
import SapporoTower from '../../assets/SapporoTower.jpg';
import OkinawaResort from '../../assets/OkinawaResort.jpg';
import Kokusaidori from '../../assets/Kokusaidori.jpg';
import TokyoTower from '../../assets/TokyoTower.jpg';
import AsaKusa from '../../assets/AsaKusa.jpg';
import OsakaGuriko from '../../assets/OsakaGuriko.jpg';
import KiyoMizuTera from '../../assets/KiyoMizuTera.jpg';
import Nagoya from '../../assets/Nagoya.jpg';
import HiroShima from '../../assets/HiroShima.jpg';
import Kanazawa from '../../assets/Kanazawa.jpg';
import SapporoTime from '../../assets/SapporoTime.jpg';
import HakataCity from '../../assets/HakataCity.jpg';
import Atsutasinkyu from '../../assets/Atsutasinkyu.jpg';
import GenbakuDome from '../../assets/GenbakuDome.jpg';
import KanazawaCastle from '../../assets/KanazawaCastle.jpg';
import Kenrokuen from '../../assets/Kenrokuen.jpg';
import miyajima from '../../assets/miyajima.jpg';
import NagoyaCastle from '../../assets/NagoyaCastle.jpg';
import osushotenkai from '../../assets/osushotenkai.jpg';
import akihabara from '../../assets/akihabara.jpg';
import fujiq1 from '../../assets/fujiq1.jpg';
import KiminoNamaewa from '../../assets/KiminoNamaewa.jpg';
import tenkinoko from '../../assets/tenkinoko.jpg';
import Digimon4 from '../../assets/Digimon4.jpg';
import hakoneonsen from '../../assets/hakoneonsen.jpg';
import jiburiPost from '../../assets/jiburiPost.jpg';
import NagoyaLego from '../../assets/NagoyaLego.jpg';
import Nagoyalinear from '../../assets/Nagoyalinear.jpg';
import NagoyaScience from '../../assets/NagoyaScience.jpg';
import nagoyawcs2 from '../../assets/nagoyawcs2.jpg';
import OkiAquarium from '../../assets/OkiAquarium.jpg';
import Shurijo from '../../assets/Shurijo.jpg';
import syureinomon from '../../assets/syureinomon.jpg';
import FukuokaCastle from '../../assets/FukuokaCastle.jpg';
import USJ from '../../assets/USJ.jpg';
import TokyoDome from '../../assets/TokyoDome.jpg';
import TokyoDisneyland from '../../assets/tokyodisneyland.jpg';
import Tsukiji from '../../assets/Tsukiji.jpg';
import NikkoToshogu from '../../assets/nikkotoshogu.jpg';
import Kamakura from '../../assets/kamakura.jpg';
import HakoneOnsen from '../../assets/hakoneonsen.jpg';
import ShibuyaScramble from '../../assets/ShibuyaScramble.jpg';
import nakasumap from '../../assets/nakasumap.jpg';
import kushidashrine from '../../assets/kushidashrine.jpg';
import marineworld from '../../assets/marineworld.jpg';
import paypaydome from '../../assets/paypaydome.jpg';
import Header from '@/components/layout/header';

const SpotsPage = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const destScrollRef = useRef<HTMLDivElement>(null);
  const destItemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const destinationSectionRef = useRef<HTMLDivElement>(null);
  const searchSectionRef = useRef<HTMLDivElement>(null);
  const [spotPage, setSpotPage] = useState(1);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const scrollDestLeft = () => {
    if (destScrollRef.current) {
      destScrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollDestRight = () => {
    if (destScrollRef.current) {
      destScrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // 스크롤 위치에 따라 화살표 표시/숨김 처리
  const checkScrollPosition = () => {
    if (destScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = destScrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  // URL 쿼리 파라미터에서 도시 정보와 검색어 읽기
  useEffect(() => {
    const cityFromUrl = searchParams.get('city');
    const searchFromUrl = searchParams.get('search');

    if (cityFromUrl) {
      setSelectedCity(cityFromUrl);
      // 도시가 선택되었을 때 "旅行先選択" 섹션으로 스크롤
      setTimeout(() => {
        if (destinationSectionRef.current) {
          destinationSectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    } else {
      // URL에 도시 정보가 없으면 선택된 도시 초기화
      setSelectedCity(null);
    }

    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);

      // 검색어가 도시명과 일치하면 해당 도시를 자동 선택
      const matchingCity = destinations.find(
        (dest) => dest.name === searchFromUrl || dest.name.includes(searchFromUrl) || searchFromUrl.includes(dest.name),
      );

      if (matchingCity) {
        setSelectedCity(matchingCity.name);
        // 도시가 자동 선택되었을 때 검색 섹션으로 스크롤
        setTimeout(() => {
          if (searchSectionRef.current) {
            searchSectionRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }, 100);
      }
    }
  }, [searchParams]);

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    const scrollElement = destScrollRef.current;
    if (scrollElement) {
      // 초기 상태 확인
      checkScrollPosition();

      // 스크롤 이벤트 리스너 등록
      scrollElement.addEventListener('scroll', checkScrollPosition);

      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => {
        scrollElement.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);

  // 선택된 도시가 변경되면 해당 카드가 보이도록 자동 스크롤
  useEffect(() => {
    if (!selectedCity) return;
    const el = destItemRefs.current[selectedCity];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [selectedCity]);

  const destinations = [
    {
      id: 'tokyo',
      name: '東京',
      image: Tokyo,
      description: '日本の首都。伝統と現代が融合した魅力的な都市。',
      tags: ['ショッピング', '夜景・展望', 'エンタメ', '東日本'],
    },
    {
      id: 'osaka',
      name: '大阪',
      image: OsakaCastle,
      description: '日本のグルメ都市。活気あふれるエネルギッシュな街。',
      tags: ['グルメ・食べ歩き', '文化・歴史', 'エンタメ', '西日本'],
    },
    {
      id: 'kyoto',
      name: '京都',
      image: Kinkakuji,
      description: '千年の古都。歴史と自然が息づく街。',
      tags: ['ショッピング', '夜景・展望', '文化・歴史', '西日本'],
    },
    {
      id: 'sapporo',
      name: '札幌',
      image: Sapporo,
      description: '北海道の中心都市。冬の雪まつりや美味しいラーメンで知られる場所。',
      tags: ['祭り', 'スキー場', 'グルメ・食べ歩き', '北日本'],
    },
    {
      id: 'fukuoka',
      name: '福岡',
      image: fukuokahutami,
      description: '九州の玄関口。屋台やグルメが楽しめる街。',
      tags: ['グルメ・食べ歩き', '文化・歴史', 'ショッピング', '南日本'],
    },
    {
      id: 'okinawa',
      name: '沖縄',
      image: OkinawaResort,
      description: '青い海と白い砂浜。リゾート気分を満喫できる島。',
      tags: ['ビーチ', 'リゾート', 'エンタメ', '南日本'],
    },
    {
      id: 'nagoya',
      name: '名古屋',
      image: Nagoya,
      description: '中部地方の中心都市。歴史と産業の街。',
      tags: ['文化・歴史', 'ショッピング', '東日本'],
    },
    {
      id: 'hiroshima',
      name: '広島',
      image: HiroShima,
      description: '平和を象徴する街。世界遺産と美景の島々。',
      tags: ['文化・歴史', '世界遺産', '西日本'],
    },
    {
      id: 'kanazawa',
      name: '金沢',
      image: Kanazawa,
      description: '伝統工芸と美しい庭園が魅力の城下町。',
      tags: ['文化・歴史', '庭園', '西日本'],
    },
  ];

  // 검색어에 따라 도시 필터링
  const filteredDestinations = destinations.filter((destination) => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim();
      return (
        destination.name.toLowerCase().includes(query) ||
        destination.description.toLowerCase().includes(query) ||
        destination.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }
    return true;
  });

  const spots = [
    {
      id: 1,
      name: '東京タワー',
      description: '東京のシンボルタワー。夜景が美しい観光スポット',
      tags: ['文化・歴史', '夜景・展望', '東日本', '港区'],
      city: '東京',
      image: TokyoTower,
    },
    {
      id: 2,
      name: '浅草寺',
      description: '東京で最も古い寺院。雷門で有名な観光地',
      tags: ['文化・歴史', '祭り', '東日本', '台東区'],
      city: '東京',
      image: AsaKusa,
    },
    {
      id: 19,
      name: '東京ドーム',
      description: '東京を代表する多目的ドーム。イベントや野球観戦で人気',
      tags: ['文化・歴史', 'エンタメ', '東日本', '文京区'],
      city: '東京',
      image: TokyoDome,
    },
    {
      id: 3,
      name: '大阪城',
      description: '豊臣秀吉が築いた名城。歴史と美しさを兼ね備えた城',
      tags: ['文化・歴史', '祭り', '西日本'],
      city: '大阪',
      image: OsakaCastle,
    },
    {
      id: 4,
      name: '道頓堀',
      description: '大阪の食文化を体験できる繁華街',
      tags: ['グルメ・食べ歩き', '文化・歴史', '西日本'],
      city: '大阪',
      image: OsakaGuriko,
    },
    {
      id: 20,
      name: 'ユニバーサル・スタジオ・ジャパン',
      description: '大阪の大人気テーマパーク。映画の世界を体験',
      tags: ['エンタメ', '家族', '西日本'],
      city: '大阪',
      image: USJ,
    },
    {
      id: 5,
      name: '金閣寺',
      description: '京都の代表的な寺院。金色に輝く美しい建物',
      tags: ['文化・歴史', '祭り', '西日本'],
      city: '京都',
      image: Kinkakuji,
    },
    {
      id: 6,
      name: '清水寺',
      description: '京都で最も有名な寺院。舞台からの景色が絶景',
      tags: ['文化・歴史', '祭り', '西日本'],
      city: '京都',
      image: KiyoMizuTera,
    },
    {
      id: 7,
      name: '札幌時計台',
      description: '札幌のシンボル。歴史ある時計台',
      tags: ['文化・歴史', '祭り', '北日本'],
      city: '札幌',
      image: SapporoTime,
    },
    {
      id: 8,
      name: '大通公園',
      description: '札幌の中心にある美しい公園',
      tags: ['文化・歴史', '祭り', '北日本'],
      city: '札幌',
      image: SapporoTower,
    },
    {
      id: 9,
      name: '福岡城跡',
      description: '福岡の歴史を感じられる城跡',
      tags: ['文化・歴史', '祭り', '南日本'],
      city: '福岡',
      image: FukuokaCastle,
    },
    {
      id: 10,
      name: '博多駅',
      description: '福岡の玄関口。グルメとショッピングの中心地',
      tags: ['グルメ・食べ歩き', 'ショッピング', '南日本'],
      city: '福岡',
      image: HakataCity,
    },
    {
      id: 40,
      name: '中洲屋台',
      description: '福岡の夜を彩る屋台街。博多グルメを堪能できる名所',
      tags: ['グルメ・食べ歩き', '夜景', '南日本'],
      city: '福岡',
      image: nakasumap,
    },
    {
      id: 41,
      name: '太宰府天満宮',
      description: '学問の神様を祀る神社。梅の名所としても有名',
      tags: ['文化・歴史', '神社', '南日本'],
      city: '福岡',
      image: FukuokaCastle,
    },
    {
      id: 42,
      name: '櫛田神社',
      description: '博多祇園山笠で知られる博多総鎮守',
      tags: ['文化・歴史', '神社', '南日本'],
      city: '福岡',
      image: kushidashrine,
    },
    {
      id: 43,
      name: 'マリンワールド海の中道',
      description: '九州の海をテーマにした水族館。家族連れに人気',
      tags: ['エンタメ', '家族', '南日本'],
      city: '福岡',
      image: marineworld,
    },
    {
      id: 44,
      name: '大濠公園',
      description: '市民の憩いの場。湖畔の散策とボートが楽しめる',
      tags: ['自然', '散策', '南日本'],
      city: '福岡',
      image: FukuokaCastle,
    },
    {
      id: 45,
      name: '福岡PayPayドーム（ソフトバンクホークス）',
      description: '福岡ソフトバンクホークスの本拠地。試合観戦が人気',
      tags: ['スポーツ', '野球', '南日本'],
      city: '福岡',
      image: paypaydome,
    },
    {
      id: 11,
      name: '首里城',
      description: '沖縄の歴史と文化を感じられる城',
      tags: ['文化・歴史', '祭り', '南日本'],
      city: '沖縄',
      image: syureinomon,
    },
    {
      id: 12,
      name: '美ら海水族館',
      description: '世界最大級の水族館。ジンベエザメが人気',
      tags: ['エンタメ', '家族', '南日本'],
      city: '沖縄',
      image: OkiAquarium,
    },
    {
      id: 46,
      name: '国際通り',
      description: '那覇の中心街。沖縄のグルメとお土産が楽しめる',
      tags: ['グルメ・食べ歩き', 'ショッピング', '南日本'],
      city: '沖縄',
      image: Kokusaidori,
    },
    {
      id: 47,
      name: '万座毛',
      description: '沖縄を代表する絶景スポット。象の鼻のような岩が有名',
      tags: ['自然', '絶景', '南日本'],
      city: '沖縄',
      image: OkinawaResort,
    },
    {
      id: 48,
      name: '古宇利島',
      description: '沖縄本島北部の美しい島。透明度の高い海が魅力',
      tags: ['ビーチ', '自然', '南日本'],
      city: '沖縄',
      image: OkinawaResort,
    },
    {
      id: 50,
      name: '首里城公園',
      description: '琉球王国の歴史を感じる世界遺産。復元された城が美しい',
      tags: ['文化・歴史', '世界遺産', '南日本'],
      city: '沖縄',
      image: Shurijo,
    },
    {
      id: 15,
      name: '原爆ドーム',
      description: '広島の平和の象徴。世界遺産',
      tags: ['文化・歴史', '祭り', '西日本'],
      city: '広島',
      image: GenbakuDome,
    },
    {
      id: 16,
      name: '宮島',
      description: '厳島神社で有名な美しい島',
      tags: ['文化・歴史', '祭り', '西日本'],
      city: '広島',
      image: miyajima,
    },
    {
      id: 17,
      name: '兼六園',
      description: '金沢の代表的な庭園。日本三名園の一つ',
      tags: ['文化・歴史', '祭り', '西日本'],
      city: '金沢',
      image: Kenrokuen,
    },
    {
      id: 18,
      name: '金沢城公園',
      description: '金沢の歴史を感じられる城跡公園',
      tags: ['文化・歴史', '祭り', '西日本'],
      city: '金沢',
      image: KanazawaCastle,
    },
    {
      id: 21,
      name: '東京ディズニーランド',
      description: '世界で最も人気のテーマパーク。夢の国で楽しい時間を過ごそう',
      tags: ['エンタメ', '家族', '東日本', '観光地', '浦安市'],
      city: '東京',
      image: TokyoDisneyland,
    },
    {
      id: 22,
      name: '日光東照宮',
      description: '徳川家康を祀る世界遺産の神社。豪華絢爛な建築が美しい',
      tags: ['文化・歴史', '世界遺産', '東日本', '観光地', '日光市'],
      city: '東京',
      image: NikkoToshogu,
    },
    {
      id: 23,
      name: '鎌倉',
      description: '歴史と文化が息づく古都。大仏とアニメの聖地',
      tags: ['文化・歴史', '東日本', '観光地', '鎌倉市'],
      city: '神奈川',
      image: Kamakura,
    },
    {
      id: 24,
      name: '箱根温泉',
      description: '富士山を望む名湯。リラックスできる温泉地',
      tags: ['温泉', 'リゾート', '東日本', '観光地', '箱根町'],
      city: '神奈川',
      image: HakoneOnsen,
    },
    {
      id: 25,
      name: '渋谷',
      description: '若者の街として有名。スクランブル交差点とハチ公がシンボル',
      tags: ['ショッピング', 'エンタメ', '東日本', '観光地', '渋谷区'],
      city: '東京',
      image: ShibuyaScramble,
    },
    {
      id: 27,
      name: '名古屋城',
      description: '徳川家康が築いた城。金色のシャチホコが有名',
      tags: ['文化・歴史', '城', '中部日本', '観光地', '名古屋市'],
      city: '名古屋',
      image: NagoyaCastle,
    },
    {
      id: 28,
      name: '大須商店街',
      description: '漫画・アニメグッズ、電子機器、食べ物まで揃う商店街',
      tags: ['ショッピング', 'エンタメ', '中部日本', '観光地', '名古屋市'],
      city: '名古屋',
      image: osushotenkai,
    },
    {
      id: 29,
      name: '熱田神宮',
      description: '日本三大神剣の一つ、草薙剣を祀る神宮',
      tags: ['文化・歴史', '神社', '中部日本', '観光地', '名古屋市'],
      city: '名古屋',
      image: Atsutasinkyu,
    },
    {
      id: 30,
      name: 'SCMAGLEV and Railway Park',
      description: 'JR東海運営。新幹線、リニア展示。鉄道ファンの聖地',
      tags: ['文化・歴史', '科学・技術', '中部日本', '観光地', '名古屋市'],
      city: '名古屋',
      image: Nagoyalinear,
    },
    {
      id: 31,
      name: '名古屋市科学館',
      description: '世界最大級のプラネタリウム。科学愛好家に人気',
      tags: ['科学・技術', '教育', '中部日本', '観光地', '名古屋市'],
      city: '名古屋',
      image: NagoyaScience,
    },
    {
      id: 32,
      name: '名古屋港水族館',
      description: 'シャチ、ベルーガ、イルカショーで有名。家族連れに人気',
      tags: ['エンタメ', '家族', '中部日本', '観光地', '名古屋市'],
      city: '名古屋',
      image: OkiAquarium,
    },
    {
      id: 33,
      name: '秋葉原',
      description: 'アニメ・ゲーム・電子機器の聖地。オタク文化の中心地',
      tags: ['エンタメ', 'ショッピング', '東日本', '観光地', '千代田区'],
      city: '東京',
      image: akihabara,
    },
    {
      id: 34,
      name: '富士急ハイランド',
      description: '絶叫マシンで有名なテーマパーク。富士山を背景にした絶景アトラクション',
      tags: ['エンタメ', 'アトラクション', '東日本', '観光地', '富士吉田市'],
      city: '東京',
      image: fujiq1,
    },
  ];

  const travelPlans = [
    {
      id: 1,
      title: '食い倒れ東京! 2泊3日グルメ旅',
      description:
        '築地市場の新鮮な海の幸から、新宿の深夜ラーメンまで。東京の「うまい!」をすべて味わい尽くす、食いしん坊のためのプランです。',
      image: Tsukiji,
      author: 'ソヒョン',
      type: '一人旅',
      city: '東京',
    },
    {
      id: 2,
      title: '大阪満喫!ショッピングとエンタメの旅',
      description:
        '道頓堀のきらびやかな夜景、USJのスリル満点のアトラクション。眠らない街・大阪の魅力を丸ごと楽しむプラン。',
      image: OsakaCastle,
      author: 'ドフン',
      type: '二人旅',
      city: '大阪',
    },
    {
      id: 3,
      title: '心安らぐ京都、癒やしの週末',
      description:
        '嵐山の竹林を散策し、静かな旅館で温泉に浸かる。古都の美しい景色の中で、心と体をリフレッシュする週末旅行。',
      image: Kinkakuji,
      author: 'セヒョン',
      type: '一人旅',
      city: '京都',
    },
    {
      id: 4,
      title: '福岡屋台めぐり！博多グルメ紀行',
      description: 'とんこつラーメンと福岡の名所を巡る旅。',
      image: fukugourmet,
      author: 'オンピック',
      type: '二人旅',
      city: '福岡',
    },
    {
      id: 5,
      title: '大自然を満喫！夏の北海道・札幌ドライブ',
      description: '富良野のラベンダー畑と海鮮を味わう旅。',
      image: SapporoTower,
      author: 'ドアン',
      type: '二人旅',
      city: '札幌',
    },
    {
      id: 6,
      title: '絶景ビーチリゾート！沖縄でのんびり休暇',
      description: 'エメラルドグリーンの海でシュノーケリングと夕日鑑賞。',
      image: OkinawaResort,
      author: 'ソヒョン',
      type: '二人旅',
      city: '沖縄',
    },
    {
      id: 21,
      title: '沖縄グルメ満喫！国際通りと首里城の歴史旅',
      description: '沖縄の伝統料理と歴史を楽しむ旅。国際通りのグルメと首里城の文化を満喫。',
      image: OkinawaResort,
      author: 'グルメ好き',
      type: '一人旅',
      city: '沖縄',
    },
    {
      id: 22,
      title: '家族で楽しむ沖縄！美ら海水族館とビーチ',
      description: '美ら海水族館でジンベエザメを見て、美しいビーチで家族の思い出を作る旅。',
      image: OkiAquarium,
      author: 'ファミリー',
      type: '家族旅',
      city: '沖縄',
    },
    {
      id: 23,
      title: '沖縄絶景ドライブ！万座毛と古宇利島',
      description: '沖縄本島をドライブしながら、万座毛の絶景と古宇利島の美しい海を楽しむ旅。',
      image: OkinawaResort,
      author: 'ドライブ好き',
      type: '二人旅',
      city: '沖縄',
    },
    {
      id: 8,
      title: 'ワールドコスプレサミット',
      description: '毎年夏に名古屋で開催される世界規模のコスプレイベント。',
      image: nagoyawcs2,
      author: 'コスプレファン',
      type: 'グループ旅',
      city: '名古屋',
    },
    {
      id: 9,
      title: '広島平和記念と宮島の旅',
      description: '原爆ドームと厳島神社を巡る平和と歴史の旅。',
      image: HiroShima,
      author: 'ハナコ',
      type: '一人旅',
      city: '広島',
    },
    {
      id: 11,
      title: '天気の子聖地巡礼！東京スカイツリーと台場',
      description:
        '「天気の子」の舞台となった東京の名所を巡る。スカイツリー、台場、新宿など、映画に登場した場所で主人公たちの気持ちを感じてみよう。',
      image: tenkinoko,
      author: '映画好き',
      type: '二人旅',
      city: '東京',
    },
    {
      id: 12,
      title: 'デジモンアドベンチャー聖地巡礼！お台場と光が丘',
      description:
        'デジモンアドベンチャーの聖地を巡る旅。お台場のフジテレビ、光が丘公園、新宿駅など、アニメファンなら一度は訪れたい場所をめぐろう。',
      image: Digimon4,
      author: 'デジモンファン',
      type: '一人旅',
      city: '東京',
    },
    {
      id: 13,
      title: '東京温泉巡り！箱根と日光でリラックス',
      description:
        '東京近郊の名湯を巡る旅。箱根温泉で富士山を眺めながら、日光温泉で歴史を感じながら、心も体もリフレッシュしよう。',
      image: hakoneonsen,
      author: '温泉好き',
      type: '二人旅',
      city: '東京',
    },
    {
      id: 14,
      title: '君の名は。聖地巡礼！渋谷と代々木',
      description:
        '「君の名は。」の舞台となった東京の名所を巡る。渋谷のスクランブル交差点、代々木の神社、新宿御苑など、映画に登場した場所で主人公たちの気持ちを感じてみよう。',
      image: KiminoNamaewa,
      author: 'アニメファン',
      type: '二人旅',
      city: '東京',
    },
    {
      id: 16,
      title: 'レゴランド・ジャパン！家族で楽しむテーマパーク',
      description:
        '名古屋のレゴランド・ジャパンで、レゴブロックの世界を体験しよう。子供から大人まで楽しめるアトラクションとレゴの魅力を満喫。',
      image: NagoyaLego,
      author: 'ファミリー',
      type: '家族旅',
      city: '名古屋',
    },
    {
      id: 17,
      title: 'ジブリパーク！スタジオジブリの世界へ',
      description:
        '愛知県長久手市のジブリパークで、宮崎駿監督のアニメの世界を体験。トトロの森、魔女の宅急便の世界など、ジブリファン必見。',
      image: jiburiPost,
      author: 'ジブリファン',
      type: '一人旅',
      city: '名古屋',
    },
    {
      id: 18,
      title: '天神で楽しむ福岡のオタク文化とショッピング',
      description: '天神の地下街から地上まで、オタク文化とショッピングを満喫する旅。',
      image: fukuanimate,
      author: 'オタク好き',
      type: '一人旅',
      city: '福岡',
    },
    {
      id: 19,
      title: 'すずめの戸締まり聖地巡礼！福岡の神秘的な旅',
      description: 'アニメ「すずめの戸締まり」の舞台となった福岡の聖地を巡る旅。',
      image: suzume,
      author: 'アニメファン',
      type: '一人旅',
      city: '福岡',
    },
    {
      id: 20,
      title: '九州から本州へ！福岡・小倉・門司・下関の歴史旅',
      description: '福岡から小倉、門司港、下関を巡る歴史とグルメの旅。関門海峡を越えて本州と九州を結ぶ特別な体験を。',
      image: fukushimono,
      author: '歴史好き',
      type: '二人旅',
      city: '福岡',
    },
  ];

  // 검색어와 선택된 도시에 따라 스팟 필터링
  const filteredSpots = spots.filter((spot) => {
    // 도시가 선택된 경우 해당 도시의 아이템만 표시
    if (selectedCity) {
      return spot.city === selectedCity;
    }

    // 도시가 선택되지 않은 경우 검색어로 필터링
    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim();
      return (
        spot.name.toLowerCase().includes(query) ||
        spot.description.toLowerCase().includes(query) ||
        spot.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        spot.city.toLowerCase().includes(query)
      );
    }

    // 도시도 선택되지 않고 검색어도 없는 경우 모든 아이템 표시
    return true;
  });

  // 스팟 페이지네이션 계산 (고정 6개씩 표시)
  const spotsPerPage = 6;
  const totalSpotPages = Math.max(1, Math.ceil(filteredSpots.length / spotsPerPage));
  const safeSpotPage = Math.min(spotPage, totalSpotPages);
  const displayedSpots = filteredSpots.slice((safeSpotPage - 1) * spotsPerPage, safeSpotPage * spotsPerPage);

  // 도시 변경 시 스팟 페이지 초기화
  useEffect(() => {
    setSpotPage(1);
  }, [selectedCity]);

  // 검색어 변경 시 페이지 초기화
  useEffect(() => {
    setSpotPage(1);
    setPlanPage(1);
  }, [searchQuery]);

  // 검색어와 선택된 도시에 따라 여행 계획 필터링
  const filteredTravelPlans = travelPlans.filter((plan) => {
    // 도시가 선택된 경우 해당 도시의 아이템만 표시
    if (selectedCity) {
      return plan.city === selectedCity;
    }

    // 도시가 선택되지 않은 경우 검색어로 필터링
    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim();
      return (
        plan.title.toLowerCase().includes(query) ||
        plan.description.toLowerCase().includes(query) ||
        plan.type.toLowerCase().includes(query) ||
        plan.city.toLowerCase().includes(query)
      );
    }

    // 도시도 선택되지 않고 검색어도 없는 경우 모든 아이템 표시
    return true;
  });

  // 플랜 페이지네이션 계산 (고정 6개씩 표시)
  const plansPerPage = 6;
  const totalPlanPages = Math.max(1, Math.ceil(filteredTravelPlans.length / plansPerPage));
  const [planPage, setPlanPage] = useState(1);
  useEffect(() => {
    setPlanPage(1);
  }, [selectedCity]);
  const safePlanPage = Math.min(planPage, totalPlanPages);
  const displayedPlans = filteredTravelPlans.slice((safePlanPage - 1) * plansPerPage, safePlanPage * plansPerPage);

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${MainBackGround})` }}
      >
        <div className="absolute inset-0 "></div>
        <h1 className="relative z-10 text-white text-4xl font-bold">観光スポット紹介</h1>
      </section>

      {/* Search Section */}
      <section ref={searchSectionRef} className="py-8 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="観光地、タグ、都市名で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  // URL 업데이트하여 검색어 반영
                  const newSearchParams = new URLSearchParams(searchParams);
                  if (searchQuery.trim()) {
                    newSearchParams.set('search', searchQuery.trim());
                  } else {
                    newSearchParams.delete('search');
                  }
                  navigate(`/spots?${newSearchParams.toString()}`);
                }
              }}
              className="w-full px-4 py-3 pl-10 pr-12 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button
              onClick={() => {
                // URL 업데이트하여 검색어 반영
                const newSearchParams = new URLSearchParams(searchParams);
                if (searchQuery.trim()) {
                  newSearchParams.set('search', searchQuery.trim());
                } else {
                  newSearchParams.delete('search');
                }
                navigate(`/spots?${newSearchParams.toString()}`);
              }}
              className="absolute inset-y-0 right-0 px-4 flex items-center text-white bg-orange-500 hover:bg-orange-600 rounded-r-lg transition-colors"
            >
              検索
            </button>
          </div>
        </div>
      </section>

      {/* Travel Destination Selection */}
      <section ref={destinationSectionRef} className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {searchQuery ? `「${searchQuery}」に関連する旅行先` : '旅行先選択'}
          </h2>

          <div className="relative">
            {/* 왼쪽 화살표 */}
            {showLeftArrow && (
              <button
                onClick={scrollDestLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center z-10 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* 오른쪽 화살표 */}
            {showRightArrow && (
              <button
                onClick={scrollDestRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center z-10 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            <div ref={destScrollRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-16 py-4">
              {filteredDestinations.length > 0 ? (
                filteredDestinations.map((destination) => (
                  <div
                    key={destination.id}
                    className={`flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105 ${
                      selectedCity === destination.name ? 'ring-4 ring-orange-500 ring-offset-4' : ''
                    }`}
                    ref={(el) => {
                      destItemRefs.current[destination.name] = el;
                    }}
                    onClick={() => {
                      if (selectedCity === destination.name) {
                        setSelectedCity(null);
                        // URL에서 도시 파라미터 제거
                        const newSearchParams = new URLSearchParams(searchParams);
                        newSearchParams.delete('city');
                        navigate(`/spots?${newSearchParams.toString()}`, { replace: true });
                      } else {
                        setSelectedCity(destination.name);
                        // URL에 도시 파라미터 추가
                        const newSearchParams = new URLSearchParams(searchParams);
                        newSearchParams.set('city', destination.name);
                        navigate(`/spots?${newSearchParams.toString()}`, { replace: true });
                      }
                    }}
                  >
                    <div
                      className="h-48 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${destination.image})` }}
                    ></div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                      <p className="text-gray-600 mb-4">{destination.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {destination.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-800 text-white text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full text-center text-gray-500 py-12">
                  <p>検索条件に一致する旅行先が見つかりませんでした。</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tourist Spots Grid */}
      {(selectedCity || searchQuery) && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">観光スポット</h2>
            <p className="text-gray-600 text-center mb-12">
              {selectedCity
                ? `${selectedCity}で人気の観光スポットをご紹介します`
                : searchQuery
                ? `「${searchQuery}」の検索結果`
                : '人気の観光スポットをご紹介します'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedSpots.length > 0 ? (
                displayedSpots.map((spot) => (
                  <div
                    key={spot.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => {
                      // 현재 URL 정보를 state로 전달하여 뒤로가기 시 도시 정보 유지
                      const currentUrl = `/spots?${searchParams.toString()}`;
                      navigate(`/spot/${spot.city}/${spot.id}`, {
                        state: { from: currentUrl },
                      });
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <div
                      className="h-48 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: spot.image ? `url(${spot.image})` : 'none',
                        backgroundColor: spot.image ? 'transparent' : '#f3f4f6',
                      }}
                    >
                      {!spot.image && (
                        <div className="h-full flex items-center justify-center">
                          <span className="text-gray-500">이미지 영역</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2">{spot.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{spot.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {spot.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-800 text-white text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center text-gray-500 py-12">
                  <p>検索結果が見つかりませんでした。</p>
                </div>
              )}
            </div>

            {/* Spots Pagination (always show, even if single page) */}
            {totalSpotPages >= 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  className={`px-3 py-2 rounded ${
                    safeSpotPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  onClick={() => safeSpotPage > 1 && setSpotPage(safeSpotPage - 1)}
                  disabled={safeSpotPage === 1}
                >
                  &lt;
                </button>
                {Array.from({ length: totalSpotPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    className={`px-3 py-2 rounded ${
                      safeSpotPage === p ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                    onClick={() => setSpotPage(p)}
                  >
                    {p}
                  </button>
                ))}
                <button
                  className={`px-3 py-2 rounded ${
                    safeSpotPage === totalSpotPages
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  onClick={() => safeSpotPage < totalSpotPages && setSpotPage(safeSpotPage + 1)}
                  disabled={safeSpotPage === totalSpotPages}
                >
                  &gt;
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Travel Plans Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">みんなの旅行プラン</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {selectedCity
                ? `${selectedCity}で人気の旅行プランをご紹介します。新しい旅のインスピレーションを見つけよう。`
                : searchQuery
                ? `「${searchQuery}」に関連する旅行プランをご紹介します。新しい旅のインスピレーションを見つけよう。`
                : 'タビログが提案するモデルプランで、新しい旅のインスピレーションを見つけよう。'}
            </p>
          </div>

          {/* Plans pagination numbers placed between sections */}
          {selectedCity && totalPlanPages > 1 && (
            <div className="flex justify-center items-center gap-2 mb-6">
              <button
                className={`px-3 py-2 rounded ${
                  safePlanPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
                onClick={() => safePlanPage > 1 && setPlanPage(safePlanPage - 1)}
                disabled={safePlanPage === 1}
              >
                &lt;
              </button>
              {Array.from({ length: totalPlanPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  className={`px-3 py-2 rounded ${
                    safePlanPage === p ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  onClick={() => setPlanPage(p)}
                >
                  {p}
                </button>
              ))}
              <button
                className={`px-3 py-2 rounded ${
                  safePlanPage === totalPlanPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
                onClick={() => safePlanPage < totalPlanPages && setPlanPage(safePlanPage + 1)}
                disabled={safePlanPage === totalPlanPages}
              >
                &gt;
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {displayedPlans.length > 0 ? (
              displayedPlans.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => {
                    // 현재 URL 정보를 state로 전달하여 뒤로가기 시 도시 정보 유지
                    const currentUrl = `/spots?${searchParams.toString()}`;
                    navigate(`/detail/${plan.id}`, {
                      state: { from: currentUrl },
                    });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div
                    className="h-48 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${plan.image})` }}
                  ></div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{plan.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{plan.type}</span>
                      <span>{plan.author}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-500 py-12">
                <p>
                  {selectedCity
                    ? `${selectedCity}の旅行プランが見つかりませんでした。`
                    : '旅行プランが見つかりませんでした。'}
                </p>
              </div>
            )}
          </div>

          {/* Moved pagination above grid as requested */}

          {/* Pagination - only show when city is selected */}
          {selectedCity && (
            <div className="flex justify-center items-center gap-2">
              <button
                className={`px-3 py-2 rounded ${
                  currentPage === 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
                onClick={() => setCurrentPage(1)}
              >
                1
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SpotsPage;
