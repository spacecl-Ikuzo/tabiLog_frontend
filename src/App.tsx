// src/App.tsx
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useUserStore } from '@/store';

import Login from './pages/login/Login';
import PrivateRoute from './PrivateRoute';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import SpotsPage from './pages/spots/SpotsPage';
import DetailPage from './pages/detail/DetailPage';
import SpotDetailPage from './pages/detail/SpotDetailPage';
import Plans from './pages/plans/Plans';
import PlanMobile from './pages/plans/PlanMobile';
import NewPlanCheckDate from './pages/new-plan/NewPlanCheckDate';
import NewPlanDetail from './pages/new-plan/NewPlanDetail';
import TripPlannerPage from './pages/new-plan/TripPlannerPage';
import MyPage from './pages/MyPage';
import DashBoard from './components/layout/DashBoard';
import Profile from './pages/profile/Profile';
import DeleteAccount from './pages/delete-account/DeleteAccount';
import DeleteAccountComplete from './pages/delete-account/DeleteAccountComplete';
import FindAccount from './pages/find-account/FindAccount';
import FindID from './pages/find-account/FindID';
import FindPassword from './pages/find-account/FindPassword';
import ResetPassword from './pages/find-account/ResetPassword';
import Invitation from './pages/Invitation/Invitation';

// ✅ 토큰이 있을 때 /api/profile을 1회 호출해 스토어에 사용자 정보 반영
import ProfileLoader from '@/components/auth/ProfileLoader';

function App() {
  // ✅ zustand 스토어 액션 가져오기
  const setUserId = useUserStore((state) => state.setUserId);
  const setNickname = useUserStore((state) => state.setNickname);
  const setEmail = useUserStore((state) => state.setEmail);
  const setToken = useUserStore((state) => state.setToken);
  const setTokenExp = useUserStore((state) => state.setTokenExp);


  return (
    <>
      {/* 전역 사용자 정보 초기화용 로더 */}
      <ProfileLoader />

      <Routes>
        {/* 비로그인 접근 가능 */}
        <Route path="/invitation/:token" element={<Invitation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find-account" element={<FindAccount />} />
        <Route path="/find-account/find-id" element={<FindID />} />
        <Route path="/find-account/find-password" element={<FindPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/delete-account/complete" element={<DeleteAccountComplete />} />
        <Route path="/" element={<Home />} />

        {/* 관광지 페이지 */}
        <Route path="/spots" element={<SpotsPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/spot/:city/:id" element={<SpotDetailPage />} />
        <Route path="/trip-planner" element={<TripPlannerPage />} />

        {/* 로그인 필요 */}
        <Route element={<PrivateRoute />}>
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/plans/:planId" element={<Plans />} />
          <Route path="/plans/:planId/detail" element={<PlanMobile />} />
          <Route path="/newPlan" element={<NewPlanCheckDate />} />
          <Route path="/newPlan/detail" element={<NewPlanDetail />} />
          <Route path="/dashboard" element={<DashBoard />}>
            <Route index element={<MyPage />} />
            <Route path="mypage" element={<MyPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
