import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import PrivateRoute from './PrivateRoute';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Plans from './pages/plans/Plans';
import PlanDetail from './pages/plans/PlanDetail';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      {/* 비로그인 유저도 접근 가능한 페이지 */}

      <Route element={<PrivateRoute />}>
        {/* 로그인 유저만 접근 가능한 페이지들을 여기에 추가 */}
        {/* 예시: <Route path="/profile" element={<Profile />} /> */}
        <Route path="/plans" element={<Plans />} />
        <Route path="/plans/:id" element={<PlanDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
