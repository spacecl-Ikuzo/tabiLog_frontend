import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

interface TravelCalendarProps {
  startDate: string;
  endDate: string;
}

const TravelCalendar: React.FC<TravelCalendarProps> = ({ startDate, endDate }) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  // 현재 표시할 월 상태 (시작 날짜 기준으로 초기화)
  const [currentMonth, setCurrentMonth] = useState(start);
  const year = currentMonth.year();
  const month = currentMonth.month();

  // startDate가 변경될 때만 currentMonth를 재설정 (다른 여행 계획 선택 시)
  useEffect(() => {
    setCurrentMonth(dayjs(startDate));
  }, [startDate]);

  // 이전 월로 이동
  const goToPreviousMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev.subtract(1, 'month');
      return newMonth;
    });
  };

  // 다음 월로 이동
  const goToNextMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev.add(1, 'month');
      return newMonth;
    });
  };

  // 월의 첫 번째 날과 마지막 날
  const firstDayOfMonth = currentMonth.startOf('month');
  const lastDayOfMonth = currentMonth.endOf('month');

  // 캘린더 그리드를 위한 시작일 (일요일부터 시작)
  const startOfCalendar = firstDayOfMonth.startOf('week');
  const endOfCalendar = lastDayOfMonth.endOf('week');

  // 캘린더에 표시할 날짜들 생성
  const calendarDays = [];
  let day = startOfCalendar;

  while (day.isBefore(endOfCalendar) || day.isSame(endOfCalendar, 'day')) {
    calendarDays.push(day);
    day = day.add(1, 'day');
  }

  // 날짜가 여행 기간에 포함되는지 확인
  const isInTravelPeriod = (date: dayjs.Dayjs) => {
    return (date.isSame(start, 'day') || date.isAfter(start)) && (date.isSame(end, 'day') || date.isBefore(end));
  };

  // 날짜가 시작일 또는 종료일인지 확인
  const isStartOrEndDate = (date: dayjs.Dayjs) => {
    return date.isSame(start, 'day') || date.isSame(end, 'day');
  };

  // 날짜가 현재 월에 속하는지 확인
  const isCurrentMonth = (date: dayjs.Dayjs) => {
    return date.month() === month;
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-4">
      {/* 캘린더 헤더 */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={goToPreviousMonth} className="p-1 hover:bg-gray-200 rounded transition-colors">
          <span className="text-gray-600">&#8249;</span>
        </button>
        <div className="text-center">
          <div className="text-sm font-medium text-gray-900">{year}</div>
          <div className="text-lg font-bold text-gray-900">{currentMonth.format('MMMM')}</div>
        </div>
        <button onClick={goToNextMonth} className="p-1 hover:bg-gray-200 rounded transition-colors">
          <span className="text-gray-600">&#8250;</span>
        </button>
      </div>

      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((dayName, index) => (
          <div key={index} className="text-center text-xs font-medium text-gray-500 py-2">
            {dayName}
          </div>
        ))}
      </div>

      {/* 캘린더 그리드 */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((date, index) => {
          const isTravel = isInTravelPeriod(date);
          const isStartEnd = isStartOrEndDate(date);
          const isCurrent = isCurrentMonth(date);

          return (
            <div
              key={index}
              className={`
                aspect-square flex items-center justify-center text-sm font-medium rounded-lg
                ${!isCurrent ? 'text-gray-300' : 'text-gray-900'}
                ${
                  isTravel && isCurrent
                    ? isStartEnd
                      ? 'bg-orange-500 text-white'
                      : 'bg-orange-100 text-orange-800'
                    : 'hover:bg-gray-100'
                }
                ${isStartEnd && isCurrent ? 'ring-2 ring-orange-500 ring-opacity-50' : ''}
              `}
            >
              {date.date()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TravelCalendar;
