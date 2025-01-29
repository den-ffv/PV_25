import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/header';

function App() {
  const userId = localStorage.getItem('id');

  return (
    <>
      {userId ? (
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
