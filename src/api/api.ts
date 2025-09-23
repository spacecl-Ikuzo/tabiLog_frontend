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
            title: '도쿄 2박 3일 여행',
            startDate: '2024-05-13',
            endDate: '2024-05-15',
            totalBudget: 750000,
            dailySpots: {
              '2024-05-13': [
                {
                  id: 1,
                  name: '아파호텔&리조트 〈서신주쿠고쵸메역타워〉',
                  address: '〒151-0071 도쿄도 시부야구 혼초 3-14-1',
                  startTime: '11:00',
                  durationMinutes: 60,
                  cost: 0,
                  category: '숙박',
                },
                {
                  id: 2,
                  name: '도쿄도청 북전망실',
                  address: '〒163-8001 도쿄도 신주쿠구 니시신주쿠 2-8-1 도쿄도청 제1본청사 45F',
                  startTime: '11:15',
                  durationMinutes: 90,
                  cost: 0,
                  category: '관광',
                },
              ],
              '2024-05-14': [
                {
                  id: 3,
                  name: '이세탄 신주쿠점',
                  address: '〒160-0022 도쿄도 신주쿠구 신주쿠 3-14-1',
                  startTime: '13:10',
                  durationMinutes: 120,
                  cost: 12000,
                  category: '쇼핑',
                },
                {
                  id: 4,
                  name: '신주쿠어원',
                  address: '〒160-0014 도쿄도 신주쿠구 나이토초 11',
                  startTime: '15:20',
                  durationMinutes: 120,
                  cost: 0,
                  category: '관광',
                },
                {
                  id: 5,
                  name: '신주쿠 서구 추억횡단',
                  address: '〒160-0023 도쿄도 신주쿠구 니시신주쿠 1-2',
                  startTime: '17:35',
                  durationMinutes: 120,
                  cost: 32000,
                  category: '식사',
                },
              ],
              '2024-05-15': [
                {
                  id: 6,
                  name: '하라주쿠',
                  address: '〒150-0001 도쿄도 시부야구 진구마에',
                  startTime: '10:00',
                  durationMinutes: 180,
                  cost: 15000,
                  category: '쇼핑',
                },
              ],
            },
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

// ===== Expense API Functions =====

// 지출 생성
export const createExpense = async (expenseData: {
  planId: number;
  spotId?: number;
  item: string;
  amount: number;
  category: string;
  expenseDate: string;
}) => {
  try {
    console.log('=== createExpense API 호출 시작 ===');
    console.log('요청 시간:', new Date().toISOString());
    console.log('요청 데이터:', JSON.stringify(expenseData, null, 2));
    console.log('axiosInstance baseURL:', axiosInstance.defaults.baseURL);

    const response = await axiosInstance.post('/api/expenses', expenseData);

    console.log('=== createExpense API 응답 성공 ===');
    console.log('응답 상태:', response.status);
    console.log('응답 헤더:', response.headers);
    console.log('응답 데이터:', JSON.stringify(response.data, null, 2));

    return response.data;
  } catch (error: any) {
    console.error('=== createExpense API 호출 실패 ===');
    console.error('오류 발생 시간:', new Date().toISOString());
    console.error('오류 타입:', typeof error);
    console.error('오류 객체:', error);

    if (error.response) {
      console.error('=== HTTP 응답 오류 상세 ===');
      console.error('상태 코드:', error.response.status);
      console.error('상태 텍스트:', error.response.statusText);
      console.error('응답 헤더:', error.response.headers);
      console.error('응답 데이터:', error.response.data);
      console.error('요청 URL:', error.config?.url);
      console.error('요청 메서드:', error.config?.method);
      console.error('요청 데이터:', error.config?.data);
    } else if (error.request) {
      console.error('=== 네트워크 요청 오류 ===');
      console.error('요청 객체:', error.request);
      console.error('요청 URL:', error.config?.url);
    } else {
      console.error('=== 기타 오류 ===');
      console.error('오류 메시지:', error.message);
      console.error('오류 설정:', error.config);
    }

    // 백엔드 서버가 실행되지 않은 경우 모킹 데이터 반환
    if (error.code === 'ERR_NETWORK' || error.response?.status === 404 || error.response?.status === 401) {
      console.log('=== 모킹 데이터 반환 ===');
      console.log('오류 코드:', error.code);
      console.log('응답 상태:', error.response?.status);

      const mockData = {
        success: true,
        data: {
          id: Date.now(), // 임시 ID
          ...expenseData,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      };

      console.log('모킹 데이터:', JSON.stringify(mockData, null, 2));
      return mockData;
    }

    throw error;
  }
};

// 지출 수정
export const updateExpense = async (
  expenseId: number,
  expenseData: {
    item: string;
    amount: number;
    category: string;
    expenseDate: string;
  },
) => {
  try {
    const response = await axiosInstance.put(`/api/expenses/${expenseId}`, expenseData);
    return response.data;
  } catch (error) {
    console.error('지출 수정에 실패했습니다:', error);
    throw error;
  }
};

// 지출 삭제
export const deleteExpense = async (expenseId: number) => {
  try {
    const response = await axiosInstance.delete(`/api/expenses/${expenseId}`);
    return response.data;
  } catch (error) {
    console.error('지출 삭제에 실패했습니다:', error);
    throw error;
  }
};

// 스팟별 지출 목록 조회
export const getExpensesBySpot = async (spotId: number) => {
  try {
    const response = await axiosInstance.get(`/api/expenses/spot/${spotId}`);
    return response.data;
  } catch (error) {
    console.error('스팟별 지출 목록 조회에 실패했습니다:', error);
    throw error;
  }
};

// 스팟별 지출 요약 조회
export const getExpenseSummaryBySpot = async (spotId: number) => {
  try {
    console.log('실제 API 호출 - spotId:', spotId);
    const response = await axiosInstance.get(`/api/expenses/spot/${spotId}/summary`);
    console.log('API 응답:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('스팟별 지출 요약 조회에 실패했습니다:', error);

    // 백엔드 서버가 실행되지 않은 경우 모킹 데이터 반환
    if (error.code === 'ERR_NETWORK' || error.response?.status === 404 || error.response?.status === 401) {
      console.log('백엔드 서버 연결 실패 또는 인증 오류, 모킹 데이터 사용');
      return {
        success: true,
        data: {
          totalAmount: 0,
          amountByCategory: {
            TICKETS: 0,
            FOOD: 0,
            TRANSPORT: 0,
            SOUVENIRS: 0,
            OTHER: 0,
          },
          expenses: [],
        },
      };
    }

    throw error;
  }
};

// 플랜별 지출 목록 조회
export const getExpensesByPlan = async (planId: number) => {
  try {
    const response = await axiosInstance.get(`/api/expenses/plan/${planId}`);
    return response.data;
  } catch (error) {
    console.error('플랜별 지출 목록 조회에 실패했습니다:', error);
    throw error;
  }
};

// 플랜별 지출 요약 조회
export const getExpenseSummaryByPlan = async (planId: number) => {
  try {
    const response = await axiosInstance.get(`/api/expenses/plan/${planId}/summary`);
    return response.data;
  } catch (error) {
    console.error('플랜별 지출 요약 조회에 실패했습니다:', error);
    throw error;
  }
};

// ===== Auth: Reset Password Flow =====
export const sendResetCode = async (email: string) => {
  const response = await axiosInstance.post('/api/auth/reset-password/send-code', { email });
  return response.data;
};

export const verifyResetCode = async (email: string, code: string) => {
  const response = await axiosInstance.post('/api/auth/reset-password/verify-code', { email, code });
  return response.data as { resetToken: string };
};

export const confirmResetPassword = async (token: string, newPassword: string, confirmPassword: string) => {
  const response = await axiosInstance.post('/api/auth/reset-password/confirm', {
    token,
    newPassword,
    confirmPassword,
  });
  return response.data;
};

// ===== MyPage API Functions =====

// 마이페이지 정보 조회
export const getMyPageInfo = async () => {
  try {
    const response = await axiosInstance.get('/api/mypage');
    return response.data;
  } catch (error: any) {
    console.error('마이페이지 정보 조회에 실패했습니다:', error);

    // 백엔드 서버가 실행되지 않은 경우 모킹 데이터 반환
    if (error.code === 'ERR_NETWORK' || error.response?.status === 404 || error.response?.status === 401) {
      console.log('백엔드 서버 연결 실패 또는 인증 오류, 모킹 데이터 사용');
      return {
        id: 1,
        email: 'user@example.com',
        userId: 'user123',
        firstName: '홍',
        lastName: '길동',
        gender: 'MALE',
        phoneNumber: '010-1234-5678',
        nickname: '홍길동',
        createdAt: '2024-01-01T00:00:00',
        updatedAt: '2024-01-01T00:00:00',
        participatingPlanCount: 3,
        ownedPlanCount: 1,
      };
    }

    throw error;
  }
};

// ===== File Upload API Functions =====

// 이미지 파일 업로드
export const uploadImage = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axiosInstance.post('/api/upload/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error: any) {
    console.error('이미지 업로드 실패:', error);
    throw error;
  }
};

// ===== Region API Functions =====

// 지역별 현 목록 조회
export const getRegions = async () => {
  try {
    const response = await axiosInstance.get('/api/categories/regions');
    return response.data;
  } catch (error: any) {
    console.error('지역 정보 조회에 실패했습니다:', error);

    // 백엔드 서버가 실행되지 않은 경우 모킹 데이터 반환
    if (error.code === 'ERR_NETWORK' || error.response?.status === 404) {
      console.log('백엔드 서버 연결 실패, 모킹 데이터 사용');
      return {
        success: true,
        data: [
          '北海道',
          '青森県',
          '岩手県',
          '宮城県',
          '秋田県',
          '山形県',
          '福島県',
          '東京都',
          '神奈川県',
          '埼玉県',
          '千葉県',
          '茨城県',
          '栃木県',
          '群馬県',
          '山梨県',
          '長野県',
          '新潟県',
          '富山県',
          '石川県',
          '福井県',
          '静岡県',
          '愛知県',
          '大阪府',
          '京都府',
          '兵庫県',
          '奈良県',
          '三重県',
          '滋賀県',
          '和歌山県',
          '広島県',
          '岡山県',
          '鳥取県',
          '島根県',
          '山口県',
          '福岡県',
          '熊本県',
          '長崎県',
          '佐賀県',
          '大分県',
          '宮崎県',
          '鹿児島県',
          '沖縄県',
        ],
      };
    }

    throw error;
  }
};

// 특정 지역의 현 목록 조회
export const getPrefecturesByRegion = async (region: string) => {
  try {
    const response = await axiosInstance.get(`/api/categories/regions?region=${region}`);
    return response.data;
  } catch (error: any) {
    console.error(`${region} 지역의 현 정보 조회에 실패했습니다:`, error);

    // 백엔드 서버가 실행되지 않은 경우 모킹 데이터 반환
    if (error.code === 'ERR_NETWORK' || error.response?.status === 404) {
      console.log('백엔드 서버 연결 실패, 모킹 데이터 사용');
      const mockData: { [key: string]: string[] } = {
        北日本: ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県'],
        東日本: [
          '東京都',
          '神奈川県',
          '埼玉県',
          '千葉県',
          '茨城県',
          '栃木県',
          '群馬県',
          '山梨県',
          '長野県',
          '新潟県',
          '富山県',
          '石川県',
          '福井県',
          '静岡県',
          '愛知県',
        ],
        西日本: [
          '大阪府',
          '京都府',
          '兵庫県',
          '奈良県',
          '三重県',
          '滋賀県',
          '和歌山県',
          '広島県',
          '岡山県',
          '鳥取県',
          '島根県',
          '山口県',
        ],
        南日本: ['福岡県', '熊本県', '長崎県', '佐賀県', '大分県', '宮崎県', '鹿児島県', '沖縄県'],
      };

      return {
        success: true,
        data: mockData[region] || [],
      };
    }

    throw error;
  }
};
