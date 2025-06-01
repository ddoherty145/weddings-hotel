import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BrandDetailPage from './pages/BrandDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brand/:id" element={<BrandDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
