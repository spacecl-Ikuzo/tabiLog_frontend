import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Card, CardContent, CardTitle } from '../../components/ui/card';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import { Calendar } from '../../components/ui/calendar';
import Header from '../../components/layout/header';
import SideNavigation from '../../components/layout/side-navigation';
import { MoreVertical, Calendar as CalendarIcon, User, MapPin } from 'lucide-react';
import CustomPagination from '../../Pagination';
import CategoryTabs from '../../components/common/CategoryTabs';

export default function Plans() {
  const [page, setPage] = useState(1);
  const [totalPages] = useState(15);

  // 캘린더 상태 관리
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1)); // 2026년 2월

  // 더미 데이터 - 여행 계획 목록
  const [travelPlans] = useState([
    {
      id: 1,
      title: '東京最前線！渋谷・新宿アートとカルチャーの旅',
      subtitle: '東京最前線！渋谷・新宿アートとカルチャーの旅',
      author: 'オンビャク',
      days: '3days',
      image: '/public/images/user.png',
      category: '東京',
    },
    {
      id: 2,
      title: '雪とグルメの祭典！冬の札幌満喫プラン',
      subtitle: '東京最前線！',
      author: 'オンビャク',
      days: '6days',
      image: '/public/images/user.png',
      category: '西日本',
    },
    {
      id: 3,
      title: '古都の趣を巡る、京都・嵐山の週末',
      subtitle: '渋谷・新宿アートとカルチャーの旅',
      author: 'オンビャク',
      days: '3days',
      image: '/public/images/user.png',
      category: '東日本',
    },
    {
      id: 4,
      title: '博多の夜は眠らない！中洲屋台グルメツアー',
      subtitle: '旅',
      author: 'オンビャク',
      days: '5days',
      image: '/public/images/user.png',
      category: '北日本',
    },
  ]);

  // 현재 선택된 카테고리
  const [selectedCategory, setSelectedCategory] = useState('すべて');

  // 선택된 지역과 계획 상태
  const [selectedRegion, setSelectedRegion] = useState('すべて');
  const [selectedStatus, setSelectedStatus] = useState('計画中の旅行');

  // 선택된 여행 계획 ID (오른쪽 사이드바 표시용)
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);

  //선택된 여행 리스트의 계획 상태 조회 용도 (진행중, 완료)
  const viewStatus = ['進行中', '完了'];
  const [selectedViewStatus, setSelectedViewStatus] = useState('進行中');

  // 카테고리 목록
  const categories = ['すべて', '東日本', '南日本', '西日本', '北日本'];

  // 카테고리별 지역 목록
  const regionsByCategory = {
    すべて: ['すべて', '関東', '関西', '九州', '沖縄'],
    北日本: ['すべて', '札幌', '小樽', '函館', '青森', '仙台'],
    南日本: ['すべて', '福岡', '長崎', '熊本', '鹿児島', '沖縄'],
    東日本: ['すべて', '東京', '横浜', '鎌倉', '長野', '日光'],
    西日本: ['すべて', '大阪', '京都', '神戸', '奈良', '広島', '松山'],
  };

  // 현재 선택된 카테고리에 따른 지역 목록
  const availableRegions =
    regionsByCategory[selectedCategory as keyof typeof regionsByCategory] || regionsByCategory['すべて'];

  // 여행 멤버 더미 데이터
  const travelMembers = [
    { id: 1, avatar: '🌟', color: 'bg-green-400' },
    { id: 2, avatar: '👨', color: 'bg-orange-400' },
    { id: 3, avatar: '👧', color: 'bg-purple-400' },
    { id: 4, avatar: '👦', color: 'bg-red-400' },
    { id: 5, avatar: '👶', color: 'bg-yellow-400' },
  ];

  return (
    <div className="min-h-screen">
      {/* 헤더 */}
      <Header />

      <div className="flex">
        {/* 사이드바 네비게이션 (데스크톱만) */}
        <SideNavigation selectedNav="plans" />

        {/* 메인 컨텐츠 */}
        <div className="flex-1 lg:flex">
          {/* 왼쪽 메인 영역 */}
          <div className="flex-1 p-6 lg:py-10 lg:px-30">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">私の旅行計画</h1>

            {/* 카테고리 탭 */}
            <CategoryTabs
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              onCategorySelect={() => setSelectedRegion('すべて')} // 카테고리 변경 시 지역 선택 초기화
            />

            {/* 지역 선택 */}
            <div className="flex gap-4 mb-8">
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-40 px-4 py-3 border border-gray-200 rounded-xl text-gray-700 bg-[#FCFAF6] text-sm">
                  <SelectValue placeholder="지역 선택" />
                </SelectTrigger>
                <SelectContent>
                  {availableRegions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-48 px-4 py-3 border border-gray-200 rounded-xl text-gray-700 bg-[#FCFAF6] text-sm">
                  <SelectValue placeholder="상태 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="計画中の旅行">計画中の旅行</SelectItem>
                  <SelectItem value="完了した旅行">完了した旅行</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 여행 계획 목록 */}
            <div className="space-y-4">
              {travelPlans.map((plan, index) => {
                const cardImages = [
                  'bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600',
                  'bg-gradient-to-br from-purple-500 via-pink-500 to-purple-700',
                  'bg-gradient-to-br from-green-400 via-blue-500 to-purple-600',
                  'bg-gradient-to-br from-orange-400 via-red-500 to-pink-600',
                ];

                return (
                  <Card
                    key={plan.id}
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`bg-[#FFF7F0] hover:shadow-lg transition-al cursor-pointer border-2 ${
                      selectedPlanId === plan.id
                        ? 'ring-2 ring-orange-500 ring-offset-2 border-orange-200 bg-orange-200'
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <CardContent className="p-5">
                      <div className="flex gap-10">
                        <div className={`w-20 h-20 ${cardImages[index]} rounded-xl flex-shrink-0`}></div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <Badge variant="secondary" className="w-fit bg-gray-200 flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {plan.category}
                              </Badge>
                              <CardTitle className="text-lg mb-2 mt-5">{plan.title}</CardTitle>
                              <div className="flex justify-between mt-5">
                                <Badge variant="secondary" className="flex items-center gap-1 bg-gray-200">
                                  <User className="w-3 h-3" />
                                  {plan.author}
                                </Badge>
                                <Badge variant="outline" className="flex items-center gap-1 bg-gray-200">
                                  <CalendarIcon className="w-3 h-3" />
                                  {plan.days}
                                </Badge>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* 페이지네이션 */}
            <div className="flex justify-center mt-6">
              <CustomPagination currentPage={page} totalPages={totalPages} onPageChange={(p: number) => setPage(p)} />
            </div>
          </div>

          {/* 오른쪽 사이드바 (데스크톱만, 선택된 계획이 있을 때만) */}
          {selectedPlanId &&
            (() => {
              const selectedPlan = travelPlans.find((plan) => plan.id === selectedPlanId);
              if (!selectedPlan) return null;

              return (
                <div className="hidden lg:block w-180 p-20 bg-white border-l border-gray-200">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">旅行プラン概要</h2>
                    <button
                      onClick={() => setSelectedPlanId(null)}
                      className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                    >
                      <span className="text-xl">✕</span>
                    </button>
                  </div>

                  {/* 진행상태 탭 */}
                  <div className="flex justify-between">
                    <CategoryTabs
                      categories={viewStatus}
                      selectedCategory={selectedViewStatus}
                      onCategoryChange={setSelectedViewStatus}
                      onCategorySelect={() => setSelectedViewStatus('進行中')} // 카테고리 변경 시 지역 선택 초기화
                    />
                    <Button className="bg-brand-orange text-white px-4 py-2 rounded-lg text-sm font-medium">
                      詳細を見る
                    </Button>
                  </div>

                  {/* 여행 이미지 카드 */}
                  <div className="relative mb-8 rounded-2xl overflow-hidden">
                    <div className="w-full h-60 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center text-white relative">
                      <div className="text-center z-10">
                        <h3 className="text-3xl font-bold mb-2">{selectedPlan.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* 여행 멤버 */}
                  <div className="mb-8">
                    <h3 className="font-bold text-gray-900 mb-4">旅行メンバー</h3>
                    <div className="flex gap-5">
                      {travelMembers.map((member) => (
                        <Avatar key={member.id} className="w-18 h-18">
                          <AvatarFallback className={`${member.color} text-white text-xl`}>
                            {member.avatar}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      <Avatar className="w-18 h-18">
                        <AvatarFallback className="bg-gray-700 text-white text-sm font-bold">5+</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  {/* 여행 기간 */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-4">旅行期間</h3>
                    <Card className="border border-gray-200 rounded-2xl bg-white">
                      <CardContent className="p-4">
                        <Calendar
                          mode="range"
                          month={currentDate}
                          onMonthChange={setCurrentDate}
                          selected={{
                            from: new Date(2026, 1, 4),
                            to: new Date(2026, 1, 6),
                          }}
                          disabled={() => true}
                          className="rounded-md border-0 w-full"
                          formatters={{
                            formatCaption: (date) => {
                              const months = [
                                'January',
                                'February',
                                'March',
                                'April',
                                'May',
                                'June',
                                'July',
                                'August',
                                'September',
                                'October',
                                'November',
                                'December',
                              ];
                              return `${date.getFullYear()} ${months[date.getMonth()]}`;
                            },
                            formatWeekdayName: (date) => {
                              const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
                              return weekdays[date.getDay()];
                            },
                          }}
                          classNames={{
                            months: 'w-full',
                            month: 'w-full space-y-3',
                            caption: 'flex justify-center items-center pt-2 relative mb-6 px-0',
                            caption_label: 'text-lg font-semibold text-gray-900 mx-8',
                            nav: 'space-x-1 flex items-center absolute inset-0 justify-between',
                            nav_button:
                              'inline-flex items-center justify-center rounded-md text-sm font-medium h-8 w-8 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors border-0',
                            nav_button_previous: '',
                            nav_button_next: '',
                            table: 'w-full border-collapse',
                            head_row: 'flex w-full mb-3',
                            head_cell: 'text-gray-500 font-medium text-sm flex-1 text-center py-1',
                            row: 'flex w-full',
                            cell: 'flex-1 text-center text-sm py-1 relative',
                            day: 'h-10 w-full p-0 font-normal cursor-default flex items-center justify-center text-gray-800 text-sm transition-colors relative z-10',
                            day_range_start:
                              'text-white font-medium bg-orange-300 rounded-l-2xl relative after:absolute after:content-[""] after:top-0 after:bottom-0 after:right-0 after:w-4 after:bg-orange-300 after:z-[-1]',
                            day_range_end:
                              'text-white font-medium bg-orange-300 rounded-r-2xl relative before:absolute before:content-[""] before:top-0 before:bottom-0 before:left-0 before:w-4 before:bg-orange-300 before:z-[-1]',
                            day_range_middle:
                              'text-white font-medium bg-orange-300 relative before:absolute before:content-[""] before:top-0 before:bottom-0 before:left-0 before:w-4 before:bg-orange-300 before:z-[-1] after:absolute after:content-[""] after:top-0 after:bottom-0 after:right-0 after:w-4 after:bg-orange-300 after:z-[-1]',
                            day_selected: 'text-white font-medium bg-orange-300',
                            day_today: 'font-semibold text-gray-900',
                            day_outside: 'text-gray-300',
                            day_disabled: 'text-gray-300 cursor-default',
                          }}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })()}
        </div>
      </div>
    </div>
  );
}
