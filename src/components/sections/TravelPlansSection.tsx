import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { axiosInstance } from '../../api/axios';

// 이미지 import
import TokyoImage from '../../assets/Tokyo.jpg';
import OsakaImage from '../../assets/OsakaCastle.jpg';
import KyotoImage from '../../assets/Kinkakuji.jpg';
import FukuokaImage from '../../assets/fukuokahutami.jpg';
import SapporoImage from '../../assets/Sapporo.jpg';
import OkinawaImage from '../../assets/OkinawaResort.jpg';

// APIから取得する旅行プランのデータ構造を定義します
// API 응답에 더 많은 속성이 포함되어 있다면 여기에 추가하세요
interface Plan {
  id: number;
  title: string;
  description: string;
  author: string;
  image: string;
  // 'tags'와 같은 다른 속성도 여기에 추가할 수 있습니다
}

const TravelPlansSection = () => {
  const navigate = useNavigate();

  // 하드코딩된 여행 계획 데이터
  const plans: Plan[] = [
    {
      id: 1,
      title: '食い倒れ東京! 2泊3日グルメ旅',
      description:
        '築地市場の新鮮な海の幸から、新宿の深夜ラーメンまで。東京の「うまい!」をすべて味わい尽くす、食いしん坊のためのプランです。',
      author: 'ソヒョン',
      image: TokyoImage,
    },
    {
      id: 2,
      title: '大阪満喫!ショッピングとエンタメの旅',
      description:
        '道頓堀のきらびやかな夜景、USJのスリル満点のアトラクション。眠らない街・大阪の魅力を丸ごと楽しむプラン。',
      author: 'ドフン',
      image: OsakaImage,
    },
    {
      id: 3,
      title: '心安らぐ京都、癒やしの週末',
      description:
        '嵐山の竹林を散策し、静かな旅館で温泉に浸かる。古都の美しい景色の中で、心と体をリフレッシュする週末旅行。',
      author: 'セヒョン',
      image: KyotoImage,
    },
    {
      id: 4,
      title: '福岡屋台めぐり!博多グルメ紀行',
      description:
        '中洲の屋台で味わう絶品とんこつラーメンから、天神の最新ショッピングスポットまで。コンパクトシティ福岡の魅力を凝縮。',
      author: 'オンヒャク',
      image: FukuokaImage,
    },
    {
      id: 5,
      title: '大自然を満喫!夏の北海道・札幌ドライブ',
      description:
        'ラベンダー畑が広がる富良野への日帰りドライブや、新鮮な海の幸を味わう市場めぐり。広大な北海道の自然を体感するプラン。',
      author: 'ドフン',
      image: SapporoImage,
    },
    {
      id: 6,
      title: '絶景ビーチリゾート!沖縄でのんびり休暇',
      description:
        'エメラルドグリーンの海でシュノーケリングを楽しんだり、美しいサンセットを眺めたり。南国リゾートで過ごす、最高の贅沢。',
      author: 'ソヒョン',
      image: OkinawaImage,
    },
  ];

  // 동적 방식 (주석처리)
  // const [plans, setPlans] = useState<Plan[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchPlans = async () => {
  //     try {
  //       const response = await axiosInstance.get('/api/plans/public');
  //       setPlans(response.data.data); // ApiResponse 구조에 맞게 수정
  //     } catch (e: unknown) {
  //       // 'e'가 'unknown' 타입이므로, 'instanceof Error'를 사용하여 타입을 안전하게絞り込みます
  //       if (e instanceof Error) {
  //         setError(e.message);
  //       } else {
  //         setError('不明なエラーが発生しました');
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPlans();
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="py-16 px-6 bg-gray-50 text-center">
  //       <p className="text-gray-600">プランを読み込み中...</p>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="py-16 px-6 bg-gray-50 text-center">
  //       <p className="text-red-500">データ取得中にエラーが発生しました: {error}</p>
  //     </div>
  //   );
  // }

  const handlePlanClick = (planId: number) => {
    navigate(`/detail/${planId}`);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">みんなの旅行プラン</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            タビログがおすすめするモデルプランで新しいインスピレーションを見つけよう。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.length > 0 ? (
            plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handlePlanClick(plan.id)}
              >
                <div
                  className="h-48 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${plan.image})`,
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{plan.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{plan.description}</p>
                  <p className="text-gray-500 text-xs">一人旅した {plan.author}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500">
              <p>旅行プランが見つかりませんでした。</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TravelPlansSection;
