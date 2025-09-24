/** 프로필 정보  */
export type ProfileData = {
  id: number;
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  nickname: string;
  phoneNumber: string;
  gender: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
};

/** 여행 계획 리스트 */
export type Plan = {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  region: string;
  prefecture: string;
  prefectureImageUrl: string;
  participant_count: number;
  totalBudget: number;
  status: string;
  userId: number;
  dailyPlans: [];
  members: PlanMember[];
  totalExpenseAmount?: number; // 총 지출 금액
  createdAt: string;
  updatedAt: string;
  public: boolean;
};

/** 같은 여행 멤버  */
export type PlanMember = {
  id: number;
  userId: number; //userPK
  userNickname: string;
  userEmail: string;
  role: string;
  userIdString: string; //유저 실제 ID  (test123)
  profileImageUrl?: string; // 프로필 이미지 URL
  color?: string; // 프로필 없을때, 배경 컬러 (프론트에서 임의로 추가)
};

/* 여행 초대 정보 (메일로 초대 받은 후 링크를 통해 접속시) */
export type InvitationInfo = {
  planId: number;
  planTitle: string;
  role: string;
  inviteeEmail: string;
  userExists: boolean;
  redirectType: string;
};
