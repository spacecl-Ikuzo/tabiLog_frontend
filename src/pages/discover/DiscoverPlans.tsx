import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GoogleMapView from '@/components/GoogleMapView';
import { axiosInstance } from '@/api/axios';
import { useUserStore } from '@/store';

interface Spot {
  id: number;
  title?: string;
  latitude?: number;
  longitude?: number;
  address?: string;
}

interface TravelSegment {
  id: number;
  startLatitude?: number;
  startLongitude?: number;
  endLatitude?: number;
  endLongitude?: number;
}

interface DailyPlan {
  id: number;
  visitDate: string;
  spots: Spot[];
  travelSegments: TravelSegment[];
}

interface PlanItem {
  id: number;
  title: string;
  members?: Array<{ userNickname: string }>;
  prefectureImageUrl?: string;
  imageUrl?: string;
  dailyPlans: DailyPlan[];
}

const DiscoverPlans = () => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const token = useUserStore.getState().token;
  const isLoggedIn = useMemo(() => Boolean(token), [token]);

  const [plan, setPlan] = useState<PlanItem | null>(null);
  const [activeDay, setActiveDay] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!planId) return;
    const fetchPlan = async () => {
      setLoading(true);
      try {
        // 공개 플랜 목록에서 대상 planId만 추출 (백엔드에 public 상세 엔드포인트가 없을 경우 대응)
        const res = await axiosInstance.get('/api/plans/public');
        const data: PlanItem[] = Array.isArray(res?.data?.data) ? res.data.data : [];
        const found = data.find((p) => String(p.id) === String(planId)) || null;

        if (!found) {
          setError('対象のプランが見つかりませんでした');
          setPlan(null);
        } else {
          // 이미지 절대 경로 처리
          const apiBase: string | undefined = (import.meta as any).env?.VITE_API_URL;
          const base = typeof apiBase === 'string' ? apiBase.replace(/\/$/, '') : '';
          const raw = found.imageUrl || found.prefectureImageUrl || '';
          const resolved = raw && raw.startsWith('/uploads/') && base ? `${base}${raw}` : raw;
          setPlan({ ...found, imageUrl: resolved });
        }
      } catch (e: any) {
        setError(e?.message || 'エラーが発生しました');
      } finally {
        setLoading(false);
      }
    };
    fetchPlan();
  }, [planId]);

  const spotsForActive = useMemo(() => {
    if (!plan?.dailyPlans?.length) return [] as Spot[];
    const idx = Math.max(0, activeDay - 1);
    return plan.dailyPlans[idx]?.spots || [];
  }, [plan, activeDay]);

  const segmentsForActive = useMemo(() => {
    if (!plan?.dailyPlans?.length) return [] as TravelSegment[];
    const idx = Math.max(0, activeDay - 1);
    return plan.dailyPlans[idx]?.travelSegments || [];
  }, [plan, activeDay]);

  if (!isLoggedIn) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-700 mb-4">ログインするとプランの詳細を閲覧できます。</p>
        <button
          onClick={() => navigate('/login')}
          className="inline-flex items-center px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800"
        >
          ログインページへ
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-600">読み込み中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-600">プランが見つかりませんでした。</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
      {/* 헤더 이미지 + 타이틀 */}
      <div className="relative h-56 md:h-72 w-full rounded-xl overflow-hidden mb-6">
        {plan.imageUrl ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${plan.imageUrl})` }}
            ></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-yellow-300"></div>
        )}
        <div className="relative h-full w-full flex items-end p-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow">{plan.title}</h1>
            <p className="text-white/90 text-sm mt-1">
              by {plan.members?.[0]?.userNickname || 'ユーザー'}
            </p>
          </div>
        </div>
      </div>

      {/* Day 선택 탭 */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto">
        {plan.dailyPlans?.map((dp, i) => (
          <button
            key={dp.id}
            onClick={() => setActiveDay(i + 1)}
            className={`px-3 py-1.5 rounded-md text-sm border ${
              activeDay === i + 1 ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            Day {i + 1}
          </button>
        ))}
      </div>

      {/* 콘텐츠: 좌측 리스트 + 우측 지도 (모바일은 상하 배치) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Spots List */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200">
              <h2 className="text-base font-semibold text-gray-900">観光スポット一覧（Day {activeDay}）</h2>
            </div>
            <ul className="divide-y divide-gray-100 max-h-[60vh] overflow-auto">
              {(spotsForActive as Spot[])?.length > 0 ? (
                (spotsForActive as Spot[]).map((s, idx) => (
                  <li key={s.id ?? idx} className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-black text-white text-xs flex items-center justify-center">
                        {(idx + 1).toString()}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{(s as any).name || (s as any).title || 'スポット'}</p>
                        {(s as any).address && (
                          <p className="text-xs text-gray-600 truncate">{(s as any).address}</p>
                        )}
                        <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-gray-500">
                          {typeof (s as any).duration === 'string' && (s as any).duration && (
                            <span className="inline-block px-2 py-0.5 rounded bg-gray-100">滞在 {(s as any).duration}</span>
                          )}
                          {typeof (s as any).cost !== 'undefined' && (s as any).cost !== null && (
                            <span className="inline-block px-2 py-0.5 rounded bg-gray-100">費用 {(s as any).cost}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li className="p-6 text-center text-gray-500 text-sm">スポットがありません。</li>
              )}
            </ul>
          </div>
        </div>

        {/* Right: Map */}
        <div className="lg:col-span-7">
          <div className="w-full h-[60vh] rounded-lg overflow-hidden border border-gray-200">
            <GoogleMapView spots={spotsForActive as any} travelSegments={segmentsForActive as any} activeDay={activeDay} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPlans;


