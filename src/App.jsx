import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Register from './pages/auth/register/Register';
import Login from './pages/auth/login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;