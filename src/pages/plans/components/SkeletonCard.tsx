import { Card, CardContent } from '../../../components/ui/card';

const SkeletonCard = () => {
  return (
    <Card className="bg-[#FFF7F0] border-2 border-gray-100">
      <CardContent className="p-5">
        <div className="flex gap-10">
          {/* 이미지 스켈레톤 */}
          <div className="w-30 h-30 bg-gray-300 rounded-xl flex-shrink-0 animate-pulse"></div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                {/* 지역 배지 스켈레톤 */}
                <div className="w-20 h-6 bg-gray-300 rounded-full mb-5 animate-pulse"></div>

                {/* 제목 스켈레톤 */}
                <div className="w-40 h-6 bg-gray-300 rounded mb-2 animate-pulse"></div>

                <div className="flex justify-between mt-5">
                  {/* 사용자 배지 스켈레톤 */}
                  <div className="w-24 h-6 bg-gray-300 rounded-full animate-pulse"></div>

                  {/* 날짜 배지 스켈레톤 */}
                  <div className="w-20 h-6 bg-gray-300 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* 더보기 버튼 스켈레톤 */}
              <div className="w-8 h-8 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkeletonCard;
