import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import PrivateRoute from './PrivateRoute';
import Home from './pages/home/Home';
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />}>
          {/* 이곳에 추가 라우트를 작성하세요 */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
