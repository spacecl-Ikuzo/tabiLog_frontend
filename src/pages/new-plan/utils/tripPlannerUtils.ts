import { Spot, Expense } from '@/lib/type';

/**
 * 종료시간 계산 함수
 */
export const getEndTime = (startTime: string, duration: string): string => {
  const [startHour, startMinute] = startTime.split(':').map(Number);

  // 체류시간을 분으로 변환
  let durationMinutes = 0;
  if (duration.includes('時間')) {
    const hours = parseInt(duration.match(/(\d+)時間/)?.[1] || '0');
    durationMinutes += hours * 60;
  }
  if (duration.includes('分')) {
    const minutes = parseInt(duration.match(/(\d+)分/)?.[1] || '0');
    durationMinutes += minutes;
  }

  // 종료시간 계산
  const totalMinutes = startHour * 60 + startMinute + durationMinutes;
  const endHour = Math.floor(totalMinutes / 60) % 24;
  const endMinute = totalMinutes % 60;

  return `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;
};

/**
 * 시간 텍스트를 분으로 변환하는 함수
 */
export const parseDurationToMinutes = (durationText: string): number => {
  console.log('파싱할 시간 텍스트:', durationText);

  // 영어 형태: "56 mins", "1 hour 30 mins", "2 hours" 등
  const hourMatchEn = durationText.match(/(\d+)\s*hour/);
  const minuteMatchEn = durationText.match(/(\d+)\s*min/);

  // 한국어/일본어 형태: "15분", "1시간 30분", "2시간" 등
  const hourMatchKo = durationText.match(/(\d+)시간/);
  const minuteMatchKo = durationText.match(/(\d+)분/);

  let totalMinutes = 0;

  // 영어 형태 처리
  if (hourMatchEn) {
    totalMinutes += parseInt(hourMatchEn[1]) * 60;
  }
  if (minuteMatchEn) {
    totalMinutes += parseInt(minuteMatchEn[1]);
  }

  // 한국어/일본어 형태 처리
  if (hourMatchKo) {
    totalMinutes += parseInt(hourMatchKo[1]) * 60;
  }
  if (minuteMatchKo) {
    totalMinutes += parseInt(minuteMatchKo[1]);
  }

  console.log('파싱된 총 분:', totalMinutes);
  return totalMinutes || 15; // 기본값 15분
};

/**
 * 총 비용 계산 (Expense 데이터만 사용, Spot.cost는 무시)
 */
export const calculateTotalCost = (daySpots: Spot[], spotExpenses: Record<number, Expense[]>) => {
  return daySpots.reduce((total, spot) => {
    const expenses = spotExpenses[spot.id] || [];

    // spotExpenses에 데이터가 있으면 그것을 사용, 없으면 0
    if (expenses.length > 0) {
      const expenseTotal = expenses.reduce((sum, expense) => sum + expense.amount, 0);
      console.log(`Spot ${spot.id} (${spot.location}): Expense 총액 = ${expenseTotal}`);
      return total + expenseTotal;
    } else {
      console.log(`Spot ${spot.id} (${spot.location}): Expense 없음, 0으로 처리`);
      return total + 0; // Spot.cost는 무시하고 0으로 처리
    }
  }, 0);
};

/**
 * 날짜 계산 함수
 */
export const getDayDate = (dayNumber: number, startDate?: string) => {
  if (!startDate) return `${dayNumber}日`;

  const start = new Date(startDate);
  const targetDate = new Date(start);
  targetDate.setDate(start.getDate() + dayNumber - 1);

  return `${targetDate.getDate()}日`;
};

/**
 * 마지막 관광지의 종료 시간 계산 (체류 시간 포함)
 */
export const getLastSpotEndTime = (spots: Spot[], departureTime: { hour: number; minute: number }) => {
  if (spots.length === 0) return departureTime;

  const lastSpot = spots[spots.length - 1];
  const [startHour, startMinute] = lastSpot.time.split(':').map(Number);

  // 체류시간을 분으로 변환
  let durationMinutes = 0;
  if (lastSpot.duration.includes('時間')) {
    const hours = parseInt(lastSpot.duration.match(/(\d+)時間/)?.[1] || '0');
    durationMinutes += hours * 60;
  }
  if (lastSpot.duration.includes('分')) {
    const minutes = parseInt(lastSpot.duration.match(/(\d+)分/)?.[1] || '0');
    durationMinutes += minutes;
  }

  // 종료시간 계산 (시작시간 + 체류시간)
  const totalMinutes = startHour * 60 + startMinute + durationMinutes;
  const endHour = Math.floor(totalMinutes / 60) % 24;
  const endMinute = totalMinutes % 60;

  return { hour: endHour, minute: endMinute };
};

/**
 * TRANSIT 모드를 WALKING 모드로 변경하는 함수
 */
export const convertTransitToWalking = (spots: Record<number, Spot[]>) => {
  const convertedSpots: Record<number, Spot[]> = {};
  Object.keys(spots).forEach((day) => {
    const dayNum = parseInt(day);
    convertedSpots[dayNum] = spots[dayNum].map((spot) => ({
      ...spot,
      transportMode: spot.transportMode === 'transit' ? 'walking' : spot.transportMode,
    }));
  });
  return convertedSpots;
};
