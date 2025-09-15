import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import PrivateRoute from './PrivateRoute';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import TripPlannerPage from './pages/home/plan/TripPlannerPage';
import MyPage from './pages/MyPage';
import DashBoard from './components/layout/DashBoard';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/trip-planner" element={<TripPlannerPage />} />
      {/* 비로그인 유저도 접근 가능한 페이지 */}

      <Route element={<PrivateRoute />}>
        {/* 로그인 유저만 접근 가능한 페이지들을 여기에 추가 */}
        <Route path="/dashboard" element={<DashBoard />}>
          <Route index element={<MyPage />} />
          <Route path="mypage" element={<MyPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;