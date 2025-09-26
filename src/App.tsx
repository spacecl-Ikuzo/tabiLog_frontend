import { Route, Routes } from 'react-router-dom';
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
import Profile from './pages/profile/Profile';
import DeleteAccount from './pages/delete-account/DeleteAccount';
import DeleteAccountComplete from './pages/delete-account/DeleteAccountComplete';
import FindAccount from './pages/find-account/FindAccount';
import FindID from './pages/find-account/FindID';
import FindPassword from './pages/find-account/FindPassword';
import ResetPassword from './pages/find-account/ResetPassword';
import Invitation from './pages/Invitation/Invitation';
import DiscoverPlans from '@/pages/discover/DiscoverPlans';

function App() {
  return (
    <>
      <Routes>
        {/* Pages without Header */}
        <Route path="/trip-planner" element={<TripPlannerPage />} />

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
        {/* 관광지 페이지들 */}
        <Route path="/spots" element={<SpotsPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/discover/:planId" element={<DiscoverPlans />} />
        <Route path="/spot/:city/:id" element={<SpotDetailPage />} />

        {/* 로그인 필요 */}
        <Route element={<PrivateRoute />}>
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/plans/:planId" element={<Plans />} />
          <Route path="/plans/:planId/detail" element={<PlanMobile />} />
          <Route path="/newPlan" element={<NewPlanCheckDate />} />
          <Route path="/newPlan/detail" element={<NewPlanDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
