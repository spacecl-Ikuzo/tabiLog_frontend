import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../api/axios';

// APIから取得する旅行プランのデータ構造を定義します
// API 응답에 더 많은 속성이 포함되어 있다면 여기에 추가하세요
interface Plan {
  id: number;
  title: string;
  description: string;
  // 'tags'와 같은 다른 속성도 여기에 추가할 수 있습니다
}

const TravelPlansSection = () => {
  // `useState`에 `Plan[]` 타입을 명시하여, plans가 Plan 객체의 배열임을 TypeScript에 알려줍니다
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axiosInstance.get('/api/plans/public');
        setPlans(response.data.data); // ApiResponse 구조에 맞게 수정
      } catch (e: unknown) {
        // 'e'가 'unknown' 타입이므로, 'instanceof Error'를 사용하여 타입을 안전하게絞り込みます
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('不明なエラーが発生しました');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) {
    return (
      <div className="py-16 px-6 bg-gray-50 text-center">
        <p className="text-gray-600">プランを読み込み中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 px-6 bg-gray-50 text-center">
        <p className="text-red-500">データ取得中にエラーが発生しました: {error}</p>
      </div>
    );
  }

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            みんなの旅行プラン
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            タビログがおすすめするモデルプランで新しいインスピレーションを見つけよう。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.length > 0 ? (
            plans.map((plan) => (
              <div 
                key={plan.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div 
                  className="h-48 bg-cover bg-center bg-no-repeat" 
                  style={{
                    backgroundImage: `url(https://placehold.co/600x400/FFF/000?text=${plan.title})`
                  }}
                >
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {plan.description}
                  </p>
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
