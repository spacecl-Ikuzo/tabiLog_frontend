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
  createdAt: string;
  updatedAt: string;
  public: boolean;
};

/** 같은 여행 멤버  */
export type PlanMember = {
  id: number;
  userId: number;
  userNickname: string;
  userEmail: string;
  role: string;
};
