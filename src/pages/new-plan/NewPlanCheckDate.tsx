import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import SideNavigation from '../../components/layout/side-navigation';
import { Calendar as CalendarIcon, ArrowRight } from 'lucide-react';
import { format, parse, isValid, differenceInDays } from 'date-fns';
import { ja } from 'date-fns/locale';
import { Plan } from '@/lib/type';
import Header from '@/components/layout/header';

export default function NewPlanCheckDate() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errors, setErrors] = useState({ startDate: '', endDate: '' });

  //수정으로 진입 시 기존 날짜 설정
  const location = useLocation();
  const { plan } = (location?.state as { plan?: Plan }) || {};
  useEffect(() => {
    if (plan) {
      setStartDate(plan.startDate);
      setEndDate(plan.endDate);
    }
  }, [plan]);

  const validateDate = (dateString: string) => {
    if (!dateString) return false;
    const date = parse(dateString, 'yyyy-MM-dd', new Date());
    return isValid(date);
  };

  const validateDateRange = () => {
    const newErrors = { startDate: '', endDate: '' };

    if (!startDate) {
      newErrors.startDate = '開始日を選択してください';
    } else if (!validateDate(startDate)) {
      newErrors.startDate = '有効な日付を入力してください';
    }

    if (!endDate) {
      newErrors.endDate = '終了日を選択してください';
    } else if (!validateDate(endDate)) {
      newErrors.endDate = '有効な日付を入力してください';
    }

    if (startDate && endDate && validateDate(startDate) && validateDate(endDate)) {
      const start = parse(startDate, 'yyyy-MM-dd', new Date());
      const end = parse(endDate, 'yyyy-MM-dd', new Date());

      if (start > end) {
        newErrors.endDate = '終了日は開始日以降を選択してください';
      }
    }

    setErrors(newErrors);
    return !newErrors.startDate && !newErrors.endDate;
  };

  // 실시간으로 날짜 범위 체크
  const getDateRangeStatus = () => {
    if (!startDate && !endDate) return 'empty';
    if (startDate && !endDate) return 'startOnly';
    if (!startDate && endDate) return 'endOnly';
    if (startDate && endDate) {
      if (!validateDate(startDate) || !validateDate(endDate)) return 'invalid';

      const start = parse(startDate, 'yyyy-MM-dd', new Date());
      const end = parse(endDate, 'yyyy-MM-dd', new Date());

      if (start > end) return 'invalidRange';
      return 'valid';
    }
    return 'empty';
  };

  const isDateSelected = getDateRangeStatus() === 'valid';

  const handleNextStep = () => {
    if (validateDateRange() && isDateSelected) {
      // 다음 단계로 이동 (상세 설정 페이지)
      const nextState = plan ? { state: { plan } } : undefined;
      navigate(`/newPlan/detail?startDate=${startDate}&endDate=${endDate}`, nextState);
    }
  };

  const formatDateRange = () => {
    if (!startDate || !endDate) return '日程を選択してください';

    if (!validateDate(startDate) || !validateDate(endDate)) return '有効な日付を入力してください';

    const start = parse(startDate, 'yyyy-MM-dd', new Date());
    const end = parse(endDate, 'yyyy-MM-dd', new Date());

    const startFormatted = format(start, 'yyyy年M月d日（EEEE）', { locale: ja });
    const endFormatted = format(end, 'yyyy年M月d日（EEEE）', { locale: ja });

    if (startDate === endDate) {
      return `${startFormatted} (日帰り)`;
    }

    return `${startFormatted} ～ ${endFormatted}`;
  };

  const getTravelDays = () => {
    if (!startDate || !endDate || !validateDate(startDate) || !validateDate(endDate)) return 0;

    const start = parse(startDate, 'yyyy-MM-dd', new Date());
    const end = parse(endDate, 'yyyy-MM-dd', new Date());

    return differenceInDays(end, start) + 1;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        {/* 사이드바 네비게이션 (데스크톱만) */}
        <SideNavigation selectedNav="newPlan" />

        {/* 메인 컨텐츠 */}
        <div className="flex-1 p-6 lg:py-10 lg:px-30">
          <div className="max-w-2xl mx-auto">
            {/* 제목 */}
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">新しい旅行計画</h1>
              <p className="text-lg text-gray-600">旅行の日程を選択してください</p>
            </div>

            {/* 진행 단계 표시 */}
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full text-sm font-medium">
                  1
                </div>
                <span className="text-sm font-medium text-orange-500">日程選択</span>
                <div className="w-8 h-px bg-gray-300"></div>
                <div className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-500 rounded-full text-sm font-medium">
                  2
                </div>
                <span className="text-sm font-medium text-gray-500">詳細設定</span>
              </div>
            </div>

            {/* 날짜 선택 카드 */}
            <Card className="bg-[#FFF7F0] border border-gray-200 shadow-sm mb-8">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-6">
                    <CalendarIcon className="w-8 h-8 text-orange-500" />
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-4">旅行日程を選択</h2>
                  <p className="text-gray-600 mb-8">旅行の開始日と終了日を選択してください</p>

                  {/* 날짜 선택기 */}
                  <div className="space-y-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
                      {/* 시작일 */}
                      <div className="space-y-2">
                        <Label htmlFor="startDate" className="text-sm font-medium text-gray-700">
                          開始日
                        </Label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-orange-500" />
                          <Input
                            id="startDate"
                            type="date"
                            value={startDate}
                            onChange={(e) => {
                              setStartDate(e.target.value);
                              setErrors({ ...errors, startDate: '' });
                            }}
                            className="pl-10 h-12 border-2 border-gray-200 focus:border-orange-400 focus:ring-orange-200"
                            min={format(new Date(), 'yyyy-MM-dd')}
                          />
                        </div>
                        {errors.startDate && <p className="text-sm text-red-500">{errors.startDate}</p>}
                      </div>

                      {/* 종료일 */}
                      <div className="space-y-2">
                        <Label htmlFor="endDate" className="text-sm font-medium text-gray-700">
                          終了日
                        </Label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-orange-500" />
                          <Input
                            id="endDate"
                            type="date"
                            value={endDate}
                            onChange={(e) => {
                              setEndDate(e.target.value);
                              setErrors({ ...errors, endDate: '' });
                            }}
                            className="pl-10 h-12 border-2 border-gray-200 focus:border-orange-400 focus:ring-orange-200"
                            min={startDate || format(new Date(), 'yyyy-MM-dd')}
                          />
                        </div>
                        {errors.endDate && <p className="text-sm text-red-500">{errors.endDate}</p>}
                      </div>
                    </div>
                  </div>

                  {/* 선택된 날짜 표시 */}
                  <div className="bg-white rounded-xl p-6 border border-gray-100">
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-3">選択された日程</p>
                      <div className="space-y-2">
                        <p className="text-lg font-medium text-gray-900">{formatDateRange()}</p>
                        {isDateSelected && (
                          <div className="flex justify-center items-center space-x-4 text-sm">
                            <span className="text-orange-600 font-medium">{getTravelDays()}日間の旅行</span>
                            {getTravelDays() > 1 && (
                              <span className="text-gray-500">
                                • {getTravelDays() - 1}泊{getTravelDays()}日
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 다음 단계 버튼 */}
            <div className="flex flex-col items-center space-y-4">
              <Button
                onClick={handleNextStep}
                disabled={!isDateSelected}
                className={`px-8 py-3 rounded-xl font-medium flex items-center gap-2 transition-all duration-200 ${
                  isDateSelected
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg transform hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
                }`}
              >
                次のステップへ
                <ArrowRight
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDateSelected ? 'group-hover:translate-x-1' : ''
                  }`}
                />
              </Button>

              {/* 상태별 안내 메시지 */}
              <div className="text-center">
                {(() => {
                  const status = getDateRangeStatus();
                  switch (status) {
                    case 'empty':
                      return <p className="text-sm text-gray-500">開始日と終了日を選択してください</p>;
                    case 'startOnly':
                      return <p className="text-sm text-orange-600">終了日を選択してください</p>;
                    case 'endOnly':
                      return <p className="text-sm text-orange-600">開始日を選択してください</p>;
                    case 'invalid':
                      return <p className="text-sm text-red-500">有効な日付を入力してください</p>;
                    case 'invalidRange':
                      return <p className="text-sm text-red-500">終了日は開始日以降を選択してください</p>;
                    case 'valid':
                      return (
                        <p className="text-sm text-green-600 font-medium">
                          日程が選択されました。次のステップに進めます
                        </p>
                      );
                    default:
                      return <p className="text-sm text-gray-500">開始日と終了日を選択してください</p>;
                  }
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
