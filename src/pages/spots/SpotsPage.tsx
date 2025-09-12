import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../../components/layout/header';
import MainBackGround from '../../assets/MainBackGround.jpg';
import Tokyo from '../../assets/Tokyo.jpg';
import OsakaCastle from '../../assets/OsakaCastle.jpg';
import Kinkakuji from '../../assets/Kinkakuji.jpg';
import Sapporo from '../../assets/Sapporo.jpg';
import fukuokahutami from '../../assets/fukuokahutami.jpg';
import SapporoTower from '../../assets/SapporoTower.jpg';
import OkinawaResort from '../../assets/OkinawaResort.jpg';
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
import OkiAquarium from '../../assets/OkiAquarium.jpg';
import Shurijo from '../../assets/Shurijo.jpg';
import FukuokaCastle from '../../assets/FukuokaCastle.jpg';
import USJ from '../../assets/USJ.jpg';
import TokyoDome from '../../assets/TokyoDome.jpg';

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
      tags: ['ショッピング', '夜景・展望'],
    },
    {
      id: 'osaka',
      name: '大阪',
      image: OsakaCastle,
      description: '日本のグルメ都市。活気あふれるエネルギッシュな街。',
      tags: ['グルメ・食べ歩き', '文化・歴史'],
    },
    {
      id: 'kyoto',
      name: '京都',
      image: Kinkakuji,
      description: '千年の古都。歴史と自然が息づく街。',
      tags: ['ショッピング', '夜景・展望'],
    },
    {
      id: 'sapporo',
      name: '札幌',
      image: Sapporo,
      description: '北海道の中心都市。冬の雪まつりや美味しいラーメンで知られる場所。',
      tags: ['祭り', 'スキー場'],
    },
    {
      id: 'fukuoka',
      name: '福岡',
      image: fukuokahutami,
      description: '九州の玄関口。屋台やグルメが楽しめる街。',
      tags: ['グルメ・食べ歩き', '文化・歴史'],
    },
    {
      id: 'okinawa',
      name: '沖縄',
      image: OkinawaResort,
      description: '青い海と白い砂浜。リゾート気分を満喫できる島。',
      tags: ['ビーチ', 'リゾート'],
    },
    {
      id: 'nagoya',
      name: '名古屋',
      image: Nagoya,
      description: '中部地方の中心都市。歴史と産業の街。',
      tags: ['文化・歴史'],
    },
    {
      id: 'hiroshima',
      name: '広島',
      image: HiroShima,
      description: '平和を象徴する街。世界遺産と美景の島々。',
      tags: ['文化・歴史', '世界遺産'],
    },
    {
      id: 'kanazawa',
      name: '金沢',
      image: Kanazawa,
      description: '伝統工芸と美しい庭園が魅力の城下町。',
      tags: ['文化・歴史', '庭園'],
    },
  ];

  const spots = [
    {
      id: 1,
      name: '東京タワー',
      description: '東京のシンボルタワー。夜景が美しい観光スポット',
      tags: ['文化・歴史', '夜景・展望'],
      city: '東京',
      image: TokyoTower,
    },
    {
      id: 2,
      name: '浅草寺',
      description: '東京で最も古い寺院。雷門で有名な観光地',
      tags: ['文化・歴史', '祭り'],
      city: '東京',
      image: AsaKusa,
    },
    {
      id: 19,
      name: '東京ドーム',
      description: '東京を代表する多目的ドーム。イベントや野球観戦で人気',
      tags: ['文化・歴史', 'エンタメ'],
      city: '東京',
      image: TokyoDome,
    },
    {
      id: 3,
      name: '大阪城',
      description: '豊臣秀吉が築いた名城。歴史と美しさを兼ね備えた城',
      tags: ['文化・歴史', '祭り'],
      city: '大阪',
      image: OsakaCastle,
    },
    {
      id: 4,
      name: '道頓堀',
      description: '大阪の食文化を体験できる繁華街',
      tags: ['グルメ・食べ歩き', '文化・歴史'],
      city: '大阪',
      image: OsakaGuriko,
    },
    {
      id: 20,
      name: 'ユニバーサル・スタジオ・ジャパン',
      description: '大阪の大人気テーマパーク。映画の世界を体験',
      tags: ['エンタメ', '家族'],
      city: '大阪',
      image: USJ,
    },
    {
      id: 5,
      name: '金閣寺',
      description: '京都の代表的な寺院。金色に輝く美しい建物',
      tags: ['文化・歴史', '祭り'],
      city: '京都',
      image: Kinkakuji,
    },
    {
      id: 6,
      name: '清水寺',
      description: '京都で最も有名な寺院。舞台からの景色が絶景',
      tags: ['文化・歴史', '祭り'],
      city: '京都',
      image: KiyoMizuTera,
    },
    {
      id: 7,
      name: '札幌時計台',
      description: '札幌のシンボル。歴史ある時計台',
      tags: ['文化・歴史', '祭り'],
      city: '札幌',
      image: SapporoTime,
    },
    {
      id: 8,
      name: '大通公園',
      description: '札幌の中心にある美しい公園',
      tags: ['文化・歴史', '祭り'],
      city: '札幌',
      image: SapporoTower,
    },
    {
      id: 9,
      name: '福岡城跡',
      description: '福岡の歴史を感じられる城跡',
      tags: ['文化・歴史', '祭り'],
      city: '福岡',
      image: FukuokaCastle,
    },
    {
      id: 10,
      name: '博多駅',
      description: '福岡の玄関口。グルメとショッピングの中心地',
      tags: ['グルメ・食べ歩き', 'ショッピング'],
      city: '福岡',
      image: HakataCity,
    },
    {
      id: 11,
      name: '首里城',
      description: '沖縄の歴史と文化を感じられる城',
      tags: ['文化・歴史', '祭り'],
      city: '沖縄',
      image: Shurijo,
    },
    {
      id: 12,
      name: '美ら海水族館',
      description: '世界最大級の水族館。ジンベエザメが人気',
      tags: ['文化・歴史', '祭り'],
      city: '沖縄',
      image: OkiAquarium,
    },
    {
      id: 13,
      name: '名古屋城',
      description: '名古屋のシンボル。金の鯱で有名な城',
      tags: ['文化・歴史', '祭り'],
      city: '名古屋',
      image: NagoyaCastle,
    },
    {
      id: 14,
      name: '熱田神宮',
      description: '名古屋で最も重要な神社',
      tags: ['文化・歴史', '祭り'],
      city: '名古屋',
      image: Atsutasinkyu,
    },
    {
      id: 15,
      name: '原爆ドーム',
      description: '広島の平和の象徴。世界遺産',
      tags: ['文化・歴史', '祭り'],
      city: '広島',
      image: GenbakuDome,
    },
    {
      id: 16,
      name: '宮島',
      description: '厳島神社で有名な美しい島',
      tags: ['文化・歴史', '祭り'],
      city: '広島',
      image: miyajima,
    },
    {
      id: 17,
      name: '兼六園',
      description: '金沢の代表的な庭園。日本三名園の一つ',
      tags: ['文化・歴史', '祭り'],
      city: '金沢',
      image: Kenrokuen,
    },
    {
      id: 18,
      name: '金沢城公園',
      description: '金沢の歴史を感じられる城跡公園',
      tags: ['文化・歴史', '祭り'],
      city: '金沢',
      image: KanazawaCastle,
    },
  ];

  const travelPlans = [
    {
      id: 1,
      title: '食い倒れ東京! 2泊3日グルメ旅',
      description:
        '築地市場の新鮮な海の幸から、新宿の深夜ラーメンまで。東京の「うまい!」をすべて味わい尽くす、食いしん坊のためのプランです。',
      image: Tokyo,
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
      image: fukuokahutami,
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
      id: 7,
      title: '名古屋城と熱田神宮めぐり',
      description: '名古屋の歴史と文化を感じる旅。',
      image: Nagoya,
      author: 'タロウ',
      type: '一人旅',
      city: '名古屋',
    },
    {
      id: 8,
      title: '広島平和記念と宮島の旅',
      description: '原爆ドームと厳島神社を巡る平和と歴史の旅。',
      image: HiroShima,
      author: 'ハナコ',
      type: '一人旅',
      city: '広島',
    },
    {
      id: 9,
      title: '金沢の伝統工芸と庭園めぐり',
      description: '兼六園と金沢城公園で伝統文化を体験。',
      image: Kanazawa,
      author: 'ケンジ',
      type: '一人旅',
      city: '金沢',
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
      return (
        spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spot.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spot.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        spot.city.toLowerCase().includes(searchQuery.toLowerCase())
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
      return (
        plan.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.city.toLowerCase().includes(searchQuery.toLowerCase())
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
              className="w-full px-4 py-3 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  // URL에서 검색어 제거
                  const newSearchParams = new URLSearchParams(searchParams);
                  newSearchParams.delete('search');
                  navigate(`/spots?${newSearchParams.toString()}`);
                }}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Travel Destination Selection */}
      <section ref={destinationSectionRef} className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">旅行先選択</h2>

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
              {destinations.map((destination) => (
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
                    } else {
                      setSelectedCity(destination.name);
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tourist Spots Grid */}
      {selectedCity && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">観光スポット</h2>
            <p className="text-gray-600 text-center mb-12">
              {selectedCity ? `${selectedCity}で人気の観光スポットをご紹介します` : '人気の観光スポットをご紹介します'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedSpots.length > 0 ? (
                displayedSpots.map((spot) => (
                  <div
                    key={spot.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => navigate(`/spot/${spot.city}/${spot.id}`)}
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
                  onClick={() => navigate(`/detail/${plan.id}`)}
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
