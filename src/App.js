import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/App.css';
import Profile from './components/Profile';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { LoginContext } from './components/LoginProvider';
import { BrowserRouter, Navigate } from 'react-router-dom';

function App() {
  const value = useContext(LoginContext)
  console.log(value)
  
  function PrivateRoute({ children }) {
    return value.success ? children : <Navigate to="/" />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
