import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '@/api/axios';
import { useUserStore } from '@/store';

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
  image: string; // 이 image 속성이 백엔드로부터 받은 이미지 URL을 담게 됩니다.
}

const TravelPlansSection = () => {
  const navigate = useNavigate();
  const token = useUserStore.getState().token;
  const isLoggedIn = useMemo(() => Boolean(token), [token]);

  // 하드코딩된 여행 계획 데이터 (게스트용 플레이스홀더)
  const samplePlans: Plan[] = [
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

  // 로그인 사용자를 위한 실제 데이터
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchPlans = async () => {
      setLoading(true);
      try {
        // 로그인한 사용자: 유저들이 작성한 공개 플랜 노출 (백엔드에서 publicAgreement 이미 필터됨)
        const res = await axiosInstance.get('/api/plans/public');
        const data = Array.isArray(res?.data?.data) ? res.data.data : [];
        // 최소 필드 매핑 (PlanResponse에 맞춘 title/author/prefectureImageUrl 등)
        const mapped: Plan[] = data.map((p: any) => {
          const raw: string = p.imageUrl || p.prefectureImageUrl || '';
          // GCS URL은 그대로 사용, /uploads/로 시작하는 경우에만 백엔드 URL과 결합
          const apiBase: string | undefined = (import.meta as any).env?.VITE_API_URL;
          const base = typeof apiBase === 'string' ? apiBase.replace(/\/$/, '') : '';
          const resolved = raw && raw.startsWith('/uploads/') && base ? `${base}${raw}` : raw;
          return {
            id: p.id,
            title: p.title,
            description: p.region || p.prefecture || '',
            author: p.members?.[0]?.userNickname || p.userNickname || 'ユーザー',
            // GCS URL은 그대로 사용, 로컬 업로드 파일만 백엔드 URL과 결합
            image: resolved,
          } as Plan;
        });
        setPlans(mapped);
      } catch (e: any) {
        setError(e?.message || 'エラーが発生しました');
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, [isLoggedIn]);

  const handlePlanClick = (planId: number) => {
    navigate(`/discover/${planId}`);
  };

  const displayedPlans = isLoggedIn ? plans : samplePlans;

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">みんなの旅行プラン</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            タビログがおすすめするモデルプランで新しいインスピレーションを見つけよう。
          </p>
        </div>

        {isLoggedIn && loading && (
          <div className="text-center py-10">
            <p className="text-gray-600">プランを読み込み中...</p>
          </div>
        )}
        {isLoggedIn && error && (
          <div className="text-center py-10">
            <p className="text-red-500">データ取得中にエラーが発生しました: {error}</p>
          </div>
        )}

        <div className="relative">
          <div
            className={`
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
              transition-all duration-300
              ${!isLoggedIn ? 'blur-md' : ''}
            `}
          >
            {displayedPlans.length > 0 ? (
              displayedPlans.map((plan) => (
                <div
                  key={plan.id}
                  className="relative rounded-lg overflow-hidden shadow-lg group h-80 cursor-pointer"
                  onClick={() => isLoggedIn && handlePlanClick(plan.id)}
                >
                  {/* plan.image에 유효한 URL이 있으면 이미지를 배경으로, 없으면 밝은 그라데이션을 배경으로 표시 */}
                  {plan.image ? (
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                        style={{ backgroundImage: `url(${plan.image})` }}
                      ></div>
                      {/* 이미지가 있을 때만 어두운 오버레이 추가 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </>
                  ) : (
                    // 이미지가 없을 때 밝은 오렌지 계열 그라데이션
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-yellow-300"></div>
                  )}
                  <div className="relative p-6 flex flex-col justify-end h-full text-white">
                    <h3 className="text-2xl font-bold mb-2 line-clamp-2 drop-shadow-lg">
                      {plan.title}
                    </h3>
                    <p className="text-sm mb-4 line-clamp-2 drop-shadow">
                      {plan.description}
                    </p>
                    <p className="text-xs font-medium">
                      by <span className="font-semibold">{plan.author}</span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              !loading && (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-gray-500 py-10">
                  <p>旅行プランが見つかりませんでした。</p>
                </div>
              )
            )}
          </div>

          {!isLoggedIn && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-lg">
              <div className="text-center px-4">
                <p className="text-white text-lg font-semibold mb-3 drop-shadow-md">
                  ログインすると全てのプランを閲覧できます
                </p>
                <button
                  onClick={() => navigate('/login')}
                  className="mt-1 inline-flex items-center px-4 py-2 rounded-md bg-white/90 text-gray-900 font-semibold text-sm hover:bg-white transition-colors"
                >
                  ログインページへ
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TravelPlansSection;