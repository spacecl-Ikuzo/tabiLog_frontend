import { axiosInstance } from './axios';

// 여행 계획 상세 정보를 가져오는 API 함수
export const getPlanDetails = async (planId: number) => {
  try {
    // 개발 중에는 모킹 데이터를 사용
    if (import.meta.env.DEV) {
      // 실제 API 호출 대신 모킹 데이터 반환
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: planId,
            title: "도쿄 2박 3일 여행",
            startDate: "2024-05-13",
            endDate: "2024-05-15",
            totalBudget: 750000,
            dailySpots: {
              "2024-05-13": [
                {
                  id: 1,
                  name: "아파호텔&리조트 〈서신주쿠고쵸메역타워〉",
                  address: "〒151-0071 도쿄도 시부야구 혼초 3-14-1",
                  startTime: "11:00",
                  durationMinutes: 60,
                  cost: 0,
                  category: "숙박"
                },
                {
                  id: 2,
                  name: "도쿄도청 북전망실",
                  address: "〒163-8001 도쿄도 신주쿠구 니시신주쿠 2-8-1 도쿄도청 제1본청사 45F",
                  startTime: "11:15",
                  durationMinutes: 90,
                  cost: 0,
                  category: "관광"
                }
              ],
              "2024-05-14": [
                {
                  id: 3,
                  name: "이세탄 신주쿠점",
                  address: "〒160-0022 도쿄도 신주쿠구 신주쿠 3-14-1",
                  startTime: "13:10",
                  durationMinutes: 120,
                  cost: 12000,
                  category: "쇼핑"
                },
                {
                  id: 4,
                  name: "신주쿠어원",
                  address: "〒160-0014 도쿄도 신주쿠구 나이토초 11",
                  startTime: "15:20",
                  durationMinutes: 120,
                  cost: 0,
                  category: "관광"
                },
                {
                  id: 5,
                  name: "신주쿠 서구 추억횡단",
                  address: "〒160-0023 도쿄도 신주쿠구 니시신주쿠 1-2",
                  startTime: "17:35",
                  durationMinutes: 120,
                  cost: 32000,
                  category: "식사"
                }
              ],
              "2024-05-15": [
                {
                  id: 6,
                  name: "하라주쿠",
                  address: "〒150-0001 도쿄도 시부야구 진구마에",
                  startTime: "10:00",
                  durationMinutes: 180,
                  cost: 15000,
                  category: "쇼핑"
                }
              ]
            }
          });
        }, 1000); // 1초 지연으로 로딩 상태 테스트
      });
    }
    
    const response = await axiosInstance.get(`/plans/${planId}`);
    return response.data;
  } catch (error) {
    console.error('여행 계획 상세 정보를 가져오는데 실패했습니다:', error);
    throw error;
  }
};

// 여행 계획 목록을 가져오는 API 함수
export const getPlans = async () => {
  try {
    const response = await axiosInstance.get('/plans');
    return response.data;
  } catch (error) {
    console.error('여행 계획 목록을 가져오는데 실패했습니다:', error);
    throw error;
  }
};

// 여행 계획을 생성하는 API 함수
export const createPlan = async (planData: any) => {
  try {
    const response = await axiosInstance.post('/plans', planData);
    return response.data;
  } catch (error) {
    console.error('여행 계획 생성에 실패했습니다:', error);
    throw error;
  }
};

// 여행 계획을 수정하는 API 함수
export const updatePlan = async (planId: number, planData: any) => {
  try {
    const response = await axiosInstance.put(`/plans/${planId}`, planData);
    return response.data;
  } catch (error) {
    console.error('여행 계획 수정에 실패했습니다:', error);
    throw error;
  }
};

// 여행 계획을 삭제하는 API 함수
export const deletePlan = async (planId: number) => {
  try {
    const response = await axiosInstance.delete(`/plans/${planId}`);
    return response.data;
  } catch (error) {
    console.error('여행 계획 삭제에 실패했습니다:', error);
    throw error;
  }
};
