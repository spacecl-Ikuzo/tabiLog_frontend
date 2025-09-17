// src/App.tsx
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
import MyPage from './pages/MyPage';
import DashBoard from './components/layout/DashBoard';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <>
      <Routes>
        {/* 비로그인 접근 가능 */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/spots" element={<SpotsPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/spot/:city/:id" element={<SpotDetailPage />} />
        <Route path="/trip-planner" element={<TripPlannerPage />} />

        {/* 로그인 필요 */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/plans/:id" element={<PlanMobile />} />
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
